const requester = require('../src/requester');
const { LOGIN_URL } = require('../src/urls');

class Duolingo {
    constructor(identifier, password) {
        this.identifier = identifier;
        this.password = password;
        this.jwt = null;
    }

    async login() {
        console.log('Login into Duolingo using credentials...');

        if(this.jwt === null) {
            await requester.send(LOGIN_URL, {
                identifier: this.identifier,
                password: this.password
            }).then(response => {
                this.jwt = response.headers.get('jwt');
            }).catch(error => {
                console.error(error);
            });
        } else {
            console.log('User is already logged in. Using JWT...')
        }

        return this.jwt !== null;
    }
}

module.exports = Duolingo;