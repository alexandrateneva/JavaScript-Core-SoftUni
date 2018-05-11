$(() => {
    const app = Sammy('#container', function () {
        this.use('Handlebars', 'hbs');

        this.get('#/home', getWelcomePage);
        this.get('index.html', getWelcomePage);

        function getWelcomePage(ctx) {
            if (!auth.isAuth()) {
                ctx.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs',
                    loginForm: './templates/forms/loginForm.hbs',
                    registerForm: './templates/forms/registerForm.hbs',
                }).then(function () {
                    this.partial('./templates/welcome-anonymous.hbs');
                })
            } else {
                ctx.redirect('#/catalog');
            }
        }

        this.post('#/register', (ctx) => {
            let username = ctx.params.username;
            let password = ctx.params.password;
            let repeatPass = ctx.params.repeatPass;

            if (username === '' || password === '') {
                notify.showError('All fields should be non-empty!');
            } else if (repeatPass !== password) {
                notify.showError('Passwords must match!');
            } else {
                auth.register(username, password)
                    .then((userData) => {
                        auth.saveSession(userData);
                        notify.showInfo('User registration successful!');
                        ctx.redirect('#/catalog');
                    })
                    .catch(notify.handleError);
            }
        });

        this.post('#/login', (ctx) => {
            let username = ctx.params.username;
            let password = ctx.params.password;

            if (username === '' || password === '') {
                notify.showError('All fields should be non-empty!');
            } else {
                auth.login(username, password)
                    .then((userData) => {
                        auth.saveSession(userData);
                        notify.showInfo('Login successful.');
                        ctx.redirect('#/catalog');
                    })
                    .catch(notify.handleError);
            }
        });

        this.get('#/logout', (ctx) => {
            auth.logout()
                .then(() => {
                    sessionStorage.clear();
                    ctx.redirect('#/home');
                })
                .catch(notify.handleError);
        });

        this.get('#/catalog', function (ctx) {
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
                return;
            }
            ctx.isAuth = auth.isAuth();
            ctx.username = sessionStorage.getItem('username');
            posts.getAllPosts().then(function (posts) {
                posts.forEach((p, i) => {
                    p.rank = i + 1;
                    p.time = calcTime(p._kmd.ect);
                    p.isAuthor = p._acl.creator === sessionStorage.getItem('userId');
                });

                ctx.posts = posts;

                ctx.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs',
                    navigation: './templates/common/navigation.hbs',
                    post: './templates/posts/post.hbs',
                }).then(function () {
                    this.partial('./templates/posts/catalog.hbs');
                })
            })
                .catch(notify.handleError);
        });

        this.get('#/create/post', function (ctx) {
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
                return;
            }
            ctx.isAuth = auth.isAuth();
            ctx.username = sessionStorage.getItem('username');
            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                navigation: './templates/common/navigation.hbs'
            }).then(function () {
                this.partial('./templates/posts/createPost.hbs');
            })
        });

        this.post('#/create/post', function (ctx) {
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
                return;
            }
            ctx.isAuth = auth.isAuth();
            ctx.username = sessionStorage.getItem('username');
            let author = sessionStorage.getItem('username');
            let title = ctx.params.title;
            let description = ctx.params.description;
            let url = ctx.params.url;
            let imageUrl = ctx.params.imageUrl;

            posts.createPost(author, title, description, url, imageUrl)
                .then(function () {
                    notify.showInfo('Created post successful.');
                    ctx.redirect('#/catalog');
                })
        });

        this.get('#/myPosts', function (ctx) {
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
                return;
            }
            ctx.isAuth = auth.isAuth();
            ctx.username = sessionStorage.getItem('username');
            posts.getMyPosts(sessionStorage.getItem('username')).then(function (posts) {
                posts.forEach((p, i) => {
                    p.rank = i + 1;
                    p.time = calcTime(p._kmd.ect);
                    p.isAuthor = p._acl.creator === sessionStorage.getItem('userId');
                });

                ctx.posts = posts;

                ctx.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs',
                    navigation: './templates/common/navigation.hbs',
                    post: './templates/posts/post.hbs',
                }).then(function () {
                    this.partial('./templates/posts/myPostsList.hbs');
                })
            })
                .catch(notify.handleError);
        });

        this.get('#/editPost/:postId', (ctx) => {
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
                return;
            }

            let postId = ctx.params.postId;

            posts.getPostById(postId)
                .then((post) => {
                    ctx.isAuth = auth.isAuth();
                    ctx.username = sessionStorage.getItem('username');
                    ctx.post = post;

                    ctx.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                        navigation: './templates/common/navigation.hbs',
                    }).then(function () {
                        this.partial('./templates/posts/editPost.hbs');
                    })
                })
        });
        this.post('#/editPost', (ctx) => {
            let postId = ctx.params.postId;
            let author = sessionStorage.getItem('username');
            let url = ctx.params.url;
            let imageUrl = ctx.params.imageUrl;
            let title = ctx.params.title;
            let description = ctx.params.description;

            posts.editPost(postId, author, title, description, url, imageUrl)
                .then(() => {
                    notify.showInfo(`Post ${title} updated.`);
                    ctx.redirect('#/catalog');
                })
                .catch(notify.showError);
        });

        this.get('#/deletePost/:postId', (ctx) => {
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
                return;
            }
            let postId = ctx.params.postId;

            posts.deletePostById(postId)
                .then(() => {
                    notify.showInfo(`Post deleted.`);
                    ctx.redirect('#/catalog');
                })
        });

        this.get('#/postDetails/:postId', (ctx) => {
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
                return;
            }
            let postId = ctx.params.postId;

            posts.getPostById(postId)
                .then((post) => {
                    post.time = calcTime(post._kmd.ect);
                    post.isAuthor = post._acl.creator === sessionStorage.getItem('userId');
                    ctx.post = post;

                    comments.getCommentsByPostId(postId)
                        .then(function (comments) {
                            comments.forEach(c => c.isAuthor = c.author === sessionStorage.getItem('username'));
                            ctx.comments = comments;

                            ctx.loadPartials({
                                header: './templates/common/header.hbs',
                                footer: './templates/common/footer.hbs',
                                navigation: './templates/common/navigation.hbs',
                                createCommentForm: './templates/comments/createCommentForm.hbs',
                                comment: './templates/comments/comment.hbs'
                            }).then(function () {
                                this.partial('./templates/posts/postDetails.hbs');
                            })
                        });
                })
        });

        this.post('#/create/comment/post/:postId', function (ctx) {
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
                return;
            }
            ctx.isAuth = auth.isAuth();
            ctx.username = sessionStorage.getItem('username');
            let author = sessionStorage.getItem('username');
            let content = ctx.params.content;
            let postId = ctx.params.postId;

            comments.createComment(postId, author, content)
                .then(function () {
                    notify.showInfo('Created comment successful.');
                    window.history.go(-1);
                })
        });

        this.get('#/deleteComment/:commentId', (ctx) => {
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
                return;
            }
            let commentId = ctx.params.commentId;

            comments.deleteCommentById(commentId)
                .then(() => {
                    notify.showInfo(`Comment deleted.`);
                    window.history.go(-1);
                })
        });

        function calcTime(dateIsoFormat) {
            let diff = new Date - (new Date(dateIsoFormat));
            diff = Math.floor(diff / 60000);
            if (diff < 1) return 'less than a minute';
            if (diff < 60) return diff + ' minute' + pluralize(diff);
            diff = Math.floor(diff / 60);
            if (diff < 24) return diff + ' hour' + pluralize(diff);
            diff = Math.floor(diff / 24);
            if (diff < 30) return diff + ' day' + pluralize(diff);
            diff = Math.floor(diff / 30);
            if (diff < 12) return diff + ' month' + pluralize(diff);
            diff = Math.floor(diff / 12);
            return diff + ' year' + pluralize(diff);

            function pluralize(value) {
                if (value !== 1) return 's';
                else return '';
            }
        }
    });

    app.run();
});

