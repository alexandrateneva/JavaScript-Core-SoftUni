$(() => {
    const app = Sammy('#app', function () {
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
                    this.partial('./templates/home.hbs');
                })
            } else {
                ctx.redirect('#/userHome');
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
            let name = ctx.params.fullName;

            auth.register(username, password, name)
                .then((userData) => {
                    auth.saveSession(userData);
                    notify.showInfo('User registration successful.');
                    ctx.redirect('#/home');
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

        //SHOW USER HOME
        this.get('#/userHome', (ctx) => {
            ctx.isAuth = auth.isAuth();
            ctx.username = sessionStorage.getItem('username');

            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/userHome.hbs');
            })
        });

        //CATALOG
        this.get('#/catalog', (ctx) => {
            ctx.isAuth = auth.isAuth();
            ctx.username = sessionStorage.getItem('username');

            shop.getAllProducts()
                .then((products) => {
                    products.forEach(p => {
                        p.price = p.price.toFixed(2);
                    });
                    ctx.products = products;

                    ctx.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                        product: './templates/shop/product.hbs'
                    }).then(function () {
                        this.partial('./templates/shop/catalog.hbs');
                    })
                })
                .catch(notify.handleError);
        });

        //MY CART
        this.get('#/cart', (ctx) => {
            ctx.isAuth = auth.isAuth();
            ctx.username = sessionStorage.getItem('username');

            shop.getUserById(sessionStorage.getItem('userId'))
                .then((user) => {

                    if (user.cart !== 'undefined') {
                        let products = [];
                        for (let productId in user.cart) {
                            let currentProduct = user.cart[productId];
                            let newProduct = {};
                            newProduct._id = productId;
                            newProduct.name = currentProduct.product.name;
                            newProduct.description = currentProduct.product.description;
                            newProduct.totalPrice = (Number(currentProduct.product.price) * Number(currentProduct.quantity)).toFixed(2);
                            newProduct.quantity = currentProduct.quantity;
                            products.push(newProduct);
                        }
                        ctx.products = products;
                    }

                    ctx.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                        myProduct: './templates/shop/myProduct.hbs'
                    }).then(function () {
                        this.partial('./templates/shop/cart.hbs');
                    })
                })
                .catch(notify.handleError);
        });

        //DISCARD PRODUCT
        this.get('#/discardProduct/:productId', (ctx) => {
            let productId = ctx.params.productId;

            shop.getUserById(sessionStorage.getItem('userId'))
                .then((user) => {
                    let cart = user.cart;
                    if (cart !== 'undefined') {
                        delete cart[`${productId}`];

                        shop.updateUser(user._id, user)
                            .then(() => {
                                notify.showInfo('Product discarded.');
                                ctx.redirect('#/cart');
                            })
                    }
                })
                .catch(notify.handleError);
        });

        //PURCHASE PRODUCT
        this.get('#/purchaseProduct/:productId', (ctx) => {
            ctx.username = sessionStorage.getItem('username');
            let productId = ctx.params.productId;

            shop.getProductById(productId).then(function (product) {
                let newProduct = {
                    description: product.description,
                    name: product.name,
                    price: product.price
                };

                shop.getUserById(sessionStorage.getItem('userId'))
                    .then((user) => {
                        let cart = user.cart;

                        if (cart !== 'undefined') {
                            if (cart.hasOwnProperty(productId)) {
                                let currentProduct = cart[productId];
                                currentProduct.quantity = Number(currentProduct.quantity) + 1;
                            }
                            else {
                                cart[`${productId}`] = {
                                    quantity: 1,
                                    product: newProduct
                                };
                            }
                        }
                        else {
                            let cart = {};
                            cart[`${productId}`] = {
                                quantity: 1,
                                product: newProduct
                            };
                        }

                        shop.updateUser(user._id, user).then(function () {
                                notify.showInfo('Product purchased.');
                                ctx.redirect('#/cart');
                            }
                        )
                    })
            }).catch(notify.handleError);
        });

    });

    app.run();
});