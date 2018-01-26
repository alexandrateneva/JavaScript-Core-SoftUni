function addAndRemoveElements(commands) {
    let result = [];
    for (let i = 1; i <= commands.length; i++) {
        if (commands[i - 1] === 'add') {
            result.push(i);
        }
        else if (commands[i - 1] === 'remove') {
            result.pop();
        }
    }

    if (result.length === 0) {
        console.log('Empty');
    }
    else {
        result.forEach(e => console.log(e));
    }
}

addAndRemoveElements(['add', 'add', 'add', 'add']);
addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']);
addAndRemoveElements(['remove', 'remove', 'remove']);