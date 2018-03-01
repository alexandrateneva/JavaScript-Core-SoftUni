function processCommands(commands) {
    let commandProcessor = (function () {
        let list = [];
        return {
            add: function (item) {
                list.push(item);
            },
            remove: function (item) {
                list = list.filter(x => x !== item);
            },
            print: function () {
                console.log(list.join(','));
            }
        }
    })();

    for (let cmd of commands) {
        let [cmdName, arg] = cmd.split(' ');
        commandProcessor[cmdName](arg);
    }
}

processCommands(['add hello', 'add again', 'remove hello', 'add again', 'print']);