const requester = require('../src/requester');
const { LOGIN_URL } = require('../src/urls');

class Duolingo {
    constructor(identifier, password) {
        this.identifier = identifier;
        this.password = password;
    }

    login() {
        console.log('id', this.identifier);
        requester.send(LOGIN_URL, {
            identifier: this.identifier,
            password: this.password
        });
    }
}

module.exports = Duolingo;