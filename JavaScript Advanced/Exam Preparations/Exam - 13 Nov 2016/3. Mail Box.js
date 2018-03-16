class MailBox {
    constructor() {
        this.mails = [];
    }

    addMessage(subject, text) {
        let msg = {
            subject,
            text
        };
        this.mails.push(msg);
        return this;
    }

    get messageCount() {
        return this.mails.length;
    }

    deleteAllMessages() {
        this.mails = [];
    }

    findBySubject(substr) {
        let result = [];
        result = this.mails.filter(m => m.subject.indexOf(substr) >= 0);
        return result;
    }

    toString() {
        if (this.mails.length === 0) {
            return '* (empty mailbox)';
        }
        else {
            let result = '';
            this.mails.forEach(m => result += ` * [${m.subject}] ${m.text}\n`);
            return result.trimRight();
        }
    }
}

let mb = new MailBox();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
mb.addMessage("meeting", "Let's meet at 17/11");
mb.addMessage("beer", "Wanna drink beer tomorrow?");
mb.addMessage("question", "How to solve this problem?");
mb.addMessage("Sofia next week", "I am in Sofia next week.");
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
console.log("Messages holding 'rakiya': " +
    JSON.stringify(mb.findBySubject('rakiya')));
console.log("Messages holding 'ee': " +
    JSON.stringify(mb.findBySubject('ee')));
mb.deleteAllMessages();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
console.log("New mailbox:\n" +
    new MailBox()
        .addMessage("Subj 1", "Msg 1")
        .addMessage("Subj 2", "Msg 2")
        .addMessage("Subj 3", "Msg 3")
        .toString());
