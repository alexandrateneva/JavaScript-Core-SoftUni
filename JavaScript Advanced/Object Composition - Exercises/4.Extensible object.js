function extendObject(template) {
    let myObj = {};

    myObj.extend = function (template) {
        for (let prop in template) {
            if (!myObj.hasOwnProperty(prop)) {
                if (typeof template[prop] === 'function') {
                    Object.getPrototypeOf(myObj)[prop] = template[prop];
                }
                else {
                    myObj[prop] = template[prop];
                }
            }
        }
    };
    return myObj;
}