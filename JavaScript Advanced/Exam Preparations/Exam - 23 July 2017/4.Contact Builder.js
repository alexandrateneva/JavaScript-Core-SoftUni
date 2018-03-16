class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;

        this._element = this.createElement();
        this.online = false;
    }

    createElement() {
        let contact = $("<article>");
        let title = $("<div class='title'>").text(this.firstName + ' ' + this.lastName);
        let info = $("<div class='info'>");
        info.append($(`<span>&phone; ${this.phone}</span>`));
        info.append($(`<span>&#9993; ${this.email}</span>`));
        let btn = $("<button>&#8505;</button>");
        info.css('display', 'none');

        // btn.on('click', function () {
        //     if (this.online === true) {
        //         info.css('display', 'none');
        //         this.online = false;
        //     }
        //     else {
        //         info.css('display', 'block');
        //         this.online = true;
        //     }
        // });
        btn.on('click', () => info.toggle());

        title.append(btn);
        contact.append(title);
        contact.append(info);

        return contact;
    }

    get online() {
        return this._online;
    }

    set online(value) {
        this._online = value;
        if (this.online) {
            this._element.find('.title').addClass('online');
        } else {
            this._element.find('.title').removeClass('online');
        }
    }

    render(id) {
        $(`#${id}`).append(this._element);
    }
}


