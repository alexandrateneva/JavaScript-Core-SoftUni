function getUsernamesFromEmails(emails) {
    let usernames = [];
    for (let i = 0; i < emails.length; i++) {
        let email = emails[i];
        let endIndex = email.indexOf('@');
        let username = email.substring(0, endIndex);
        let domein = email.substring(++endIndex).split('.').map(e => e.substr(0, 1)).join('');
        usernames.push(username + '.' + domein);
    }
    console.log(usernames.join(', '));
}

getUsernamesFromEmails(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);
