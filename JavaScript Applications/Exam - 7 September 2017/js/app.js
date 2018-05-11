$(() => {
    const app = Sammy('#main', function () {
        this.use('Handlebars', 'hbs');

        this.get('#/home', getWelcomePage);
        this.get('index.html', getWelcomePage);

        //HOME PAGE
        function getWelcomePage(ctx) {
            ctx.isAuth = auth.isAuth();
            ctx.username = sessionStorage.getItem('username');
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
                ctx.redirect('#/viewFeed');
            }
        }

        //REGISTER
        this.get('#/register', (ctx) => {
            ctx.isAuth = auth.isAuth();
            ctx.username = sessionStorage.getItem('username');

            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/forms/registerForm.hbs');
            })
        });
        this.post('#/register', (ctx) => {
            let username = ctx.params.username;
            let password = ctx.params.password;
            let repeatPass = ctx.params.repeatPass;
            if (password !== repeatPass) {
                return notify.showError('Password and repeated password must are different!');
            }

            auth.register(username, password)
                .then((userData) => {
                    auth.saveSession(userData);
                    notify.showInfo('User registration successful.');
                    ctx.redirect('#/viewFeed');
                })
                .catch(notify.handleError);
        });

        //LOGIN
        this.get('#/login', (ctx) => {
            ctx.isAuth = auth.isAuth();
            ctx.username = sessionStorage.getItem('username');

            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/forms/loginForm.hbs');
            })
        });
        this.post('#/login', (ctx) => {
            let username = ctx.params.username;
            let password = ctx.params.password;


            auth.login(username, password)
                .then((userData) => {
                    auth.saveSession(userData);
                    notify.showInfo('Login successful.');
                    ctx.redirect('#/home');
                })
                .catch(notify.handleError);
        });

        //LOGOUT
        this.get('#/logout', (ctx) => {
            auth.logout()
                .then(() => {
                    sessionStorage.clear();
                    notify.showInfo('Logout successful.');
                    ctx.redirect('#/home');
                })
                .catch(notify.handleError);
        });

        //VIEW FEED
        this.get('#/viewFeed', (ctx) => {
            ctx.isAuth = auth.isAuth();
            ctx.username = sessionStorage.getItem('username');

            chirper.getUserById(sessionStorage.getItem('userId')).then(function (user) {
                let subs = [];
                if (user.subscriptions !== undefined) {
                    subs = user.subscriptions;
                    subs = subs.map(n => `"${n}"`);
                }

                chirper.getAllChirpsByFollowers(subs).then(function (chirps) {

                    let username = sessionStorage.getItem('username');

                    const chirpsCountPromise = chirper.getChirpsCount(username);
                    const followingCountPromise = chirper.getFollowingCount(username);
                    const followerCountPromise = chirper.getFollowerCount(username);

                    Promise.all([chirpsCountPromise, followingCountPromise, followerCountPromise])
                        .then(([chirpsCount, followingCount, followerCount]) => {
                            ctx.followingCount = followingCount[0].subscriptions.length;
                            ctx.chirpsCount = chirpsCount.length;
                            ctx.followerCount = followerCount.length;

                            chirps.forEach(c => c.time = calcTime(c._kmd.ect));
                            ctx.chirps = chirps.sort((a, b) => new Date(b._kmd.ect) - new Date(a._kmd.ect));

                            ctx.loadPartials({
                                header: './templates/common/header.hbs',
                                footer: './templates/common/footer.hbs',
                                userStats: './templates/userStats.hbs',
                                chirp: './templates/chirp.hbs'
                            }).then(function () {
                                this.partial('./templates/viewFeed.hbs');
                            })
                        })
                        .catch(notify.handleError);
                })
            })
        });

        //CREATE CHIRP
        this.post('#/createChirp', (ctx) => {
            let username = sessionStorage.getItem('username');
            let text = ctx.params.text;

            chirper.createChirp(username, text)
                .then(() => {
                    notify.showInfo('Chirp published.');
                    ctx.redirect('#/viewMe');
                })
                .catch(notify.handleError);
        });

        //VIEW ME
        this.get('#/viewMe', (ctx) => {
            ctx.isAuth = auth.isAuth();
            ctx.username = sessionStorage.getItem('username');

            chirper.getUserChirps(sessionStorage.getItem('username')).then(function (chirps) {
                chirps.forEach(c => c.time = calcTime(c._kmd.ect));
                ctx.chirps = chirps.sort((a, b) => new Date(b._kmd.ect) - new Date(a._kmd.ect));

                let username = sessionStorage.getItem('username');

                const chirpsCountPromise = chirper.getChirpsCount(username);
                const followingCountPromise = chirper.getFollowingCount(username);
                const followerCountPromise = chirper.getFollowerCount(username);

                Promise.all([chirpsCountPromise, followingCountPromise, followerCountPromise])
                    .then(([chirpsCount, followingCount, followerCount]) => {

                        ctx.chirpsCount = chirpsCount.length;
                        ctx.followingCount = followingCount[0].subscriptions.length;
                        ctx.followerCount = followerCount.length;

                        ctx.loadPartials({
                            header: './templates/common/header.hbs',
                            footer: './templates/common/footer.hbs',
                            userStats: './templates/userStats.hbs',
                            chirp: './templates/chirp.hbs'
                        }).then(function () {
                            this.partial('./templates/viewMe.hbs');
                        })
                    })
                    .catch(notify.handleError);
            });
        });

        //VIEW DISCOVER
        this.get('#/viewDiscover', (ctx) => {
            ctx.isAuth = auth.isAuth();
            ctx.username = sessionStorage.getItem('username');

            chirper.getAllUsers().then(function (users) {

                let promises = [];
                for (let user of users) {
                    promises.push(chirper.getFollowerCount(user.username));
                }

                Promise.all(promises)
                    .then((followersCountOfEachUser) => {

                        for (let i = 0; i < followersCountOfEachUser.length; i++) {
                            let count = followersCountOfEachUser[i].length;
                            let user = users[i];
                            user.followerCount = count
                        }

                        ctx.users = users;

                        ctx.loadPartials({
                            header: './templates/common/header.hbs',
                            footer: './templates/common/footer.hbs',
                            user: './templates/user.hbs'
                        }).then(function () {
                            this.partial('./templates/viewDiscover.hbs');
                        })
                    })
                    .catch(notify.handleError);
            });
        });

        //VIEW PROFILE
        this.get('#/viewProfile/:username', (ctx) => {
            chirper.getUserById(sessionStorage.getItem('userId')).then(function (user) {
                ctx.isAuth = auth.isAuth();
                let username = ctx.params.username;
                ctx.username = username;
                ctx.isFollowed = !!user.subscriptions.includes(username);

                chirper.getUserChirps(username).then(function (chirps) {
                    chirps.forEach(c => c.time = calcTime(c._kmd.ect));
                    ctx.chirps = chirps.sort((a, b) => new Date(b._kmd.ect) - new Date(a._kmd.ect));

                    const chirpsCountPromise = chirper.getChirpsCount(username);
                    const followingCountPromise = chirper.getFollowingCount(username);
                    const followerCountPromise = chirper.getFollowerCount(username);

                    Promise.all([chirpsCountPromise, followingCountPromise, followerCountPromise])
                        .then(([chirpsCount, followingCount, followerCount]) => {

                            ctx.chirpsCount = chirpsCount.length;
                            ctx.followingCount = followingCount[0].subscriptions.length;
                            ctx.followerCount = followerCount.length;

                            ctx.loadPartials({
                                header: './templates/common/header.hbs',
                                footer: './templates/common/footer.hbs',
                                userStats: './templates/userStats.hbs',
                                chirp: './templates/chirp.hbs'
                            }).then(function () {
                                this.partial('./templates/viewProfile.hbs');
                            })
                        })
                })
                    .catch(notify.handleError);
            })
        });

        //FOLLOW
        this.get('#/follow/:username', (ctx) => {
            ctx.isAuth = auth.isAuth();
            let username = ctx.params.username;

            chirper.getUserById(sessionStorage.getItem('userId')).then(function (user) {
                let subs = user.subscriptions;
                subs.push(username);

                chirper.followAndUnfollow(sessionStorage.getItem('userId'), subs).then(function () {
                    notify.showInfo(`Subscribed to ${username}`);
                    ctx.redirect('#/viewFeed');
                });
            })
                .catch(notify.handleError);
        });

        //UNFOLLOW
        this.get('#/unfollow/:username', (ctx) => {
            ctx.isAuth = auth.isAuth();
            let username = ctx.params.username;

            chirper.getUserById(sessionStorage.getItem('userId')).then(function (user) {
                let subs = user.subscriptions.filter(e => e !== username);

                chirper.followAndUnfollow(sessionStorage.getItem('userId'), subs).then(function () {
                    notify.showInfo(`Unsubscribed to ${username}`);
                    ctx.redirect('#/viewFeed');
                });
            })
                .catch(notify.handleError);
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