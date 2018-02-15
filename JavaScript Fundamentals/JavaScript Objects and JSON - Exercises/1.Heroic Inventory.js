function heroicInventory(input) {
    let heroes = [];
    for (let heroInfo of input) {
        let [name, level, items] = heroInfo.split(' / ');
        items = (items !== undefined) ? items.split(', ') : [];

        let hero = {
            name: name,
            level: Number(level),
            items: items
        };
        heroes.push(hero);
    }
    console.log(JSON.stringify(heroes));
}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);