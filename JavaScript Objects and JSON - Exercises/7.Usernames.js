function createCatalogueOfUsernames(input) {
    let usernames = new Set();
    input.forEach(e => usernames.add(e));
    [...usernames]
        .sort(function (a, b) {
            if (a.length > b.length) return 1;
            if (a.length < b.length) return -1;
            if (a > b) return 1;
            if (a < b) return -1;
            return 0;
        })
        .forEach(e => console.log(e));
}

createCatalogueOfUsernames(['Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston']);