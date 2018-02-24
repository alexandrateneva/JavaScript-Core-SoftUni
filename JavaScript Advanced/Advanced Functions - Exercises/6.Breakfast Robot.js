function solution() {
    let protein = 0;
    let carbohydrates = 0;
    let fat = 0;
    let flavours = 0;

    return function (line) {
        let args = line.split(' ');
        let command = args.shift();
        if (command === 'restock') {
            return restock(args);
        }
        else if (command === 'prepare') {
            let [canBeCooked, neededProtein, neededCarbohydrates, neededFat, neededFlavours] = checkAndPrepareIngredients(args);
            if (canBeCooked) {
               return cook(neededProtein, neededCarbohydrates, neededFat, neededFlavours);
            }
            else {
                return 'Error: not enough carbohydrate in stock';
            }
        }
        else if(command === 'report'){
            return `protein=${protein} carbohydrate=${carbohydrates} fat=${fat} flavour=${flavours}`;
        }

        function cook(neededProtein, neededCarbohydrates, neededFat, neededFlavours) {
            protein -= neededProtein;
            carbohydrates -= neededCarbohydrates;
            fat -= neededFat;
            flavours -= neededFlavours;

            return 'Success';
        }

        function checkAndPrepareIngredients(args) {
            let recipe = args[0];
            let quantity = Number(args[1]);

            let neededProtein = 0;
            let neededCarbohydrates = 0;
            let neededFat = 0;
            let neededFlavours = 0;

            if (recipe === 'apple') {
                neededCarbohydrates = 1 * quantity;
                neededFlavours = 2 * quantity;
            }
            else if (recipe === 'coke') {
                neededCarbohydrates = 10 * quantity;
                neededFlavours = 20 * quantity;
            }
            else if (recipe === 'burger') {
                neededCarbohydrates = 5 * quantity;
                neededFlavours = 3 * quantity;
                neededFat = 7 * quantity;
            }
            else if (recipe === 'omelet') {
                neededProtein = 5 * quantity;
                neededFlavours = 1 * quantity;
                neededFat = 1 * quantity;
            }
            else if (recipe === 'cheverme') {
                neededProtein = 10 * quantity;
                neededCarbohydrates = 10 * quantity;
                neededFlavours = 10 * quantity;
                neededFat = 10 * quantity;
            }

            let canBeCooked = false;
            if (neededProtein <= protein && neededCarbohydrates <= carbohydrates && neededFat <= fat && neededFlavours <= flavours) {
                canBeCooked = true;
            }
            return [canBeCooked, neededProtein, neededCarbohydrates, neededFat, neededFlavours];
        }

        function restock(args) {
            let ingredient = args[0];
            let quantity = Number(args[1]);
            switch (ingredient) {
                case 'protein' :
                    protein += quantity;
                    break;
                case 'carbohydrate':
                    carbohydrates += quantity;
                    break;
                case 'fat':
                    fat += quantity;
                    break;
                case 'flavour':
                    flavours += quantity;
                    break;
            }
            return 'Success';
        }
    }
}

let manager = solution();
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));


