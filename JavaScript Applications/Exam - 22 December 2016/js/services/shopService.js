let shop = (() => {
    function getAllProducts() {
        const endpoint = 'products';

        return remote.get('appdata', endpoint, 'kinvey');
    }

    function getUserById(userId) {
        return remote.get('user', userId, 'kinvey');
    }

    function getProductById(productId) {
        const endpoint = `products/${productId}`;

        return remote.get('appdata', endpoint, 'kinvey');
    }

    function updateUser(userId, data) {
        return remote.update('user', userId, 'kinvey', data);
    }

    return {
        getAllProducts,
        getUserById,
        updateUser,
        getProductById
    }
})();