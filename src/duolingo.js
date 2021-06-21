const requester = require('../src/requester');
const { getLoginURL, getUserURL} = require('../src/urls');

class Duolingo {
    constructor(identifier, password) {
        this.identifier = identifier;
        this.password = password;
        this.jwt = null;
    }

    async login() {
        if(this.jwt === null) {
            await requester.send(getLoginURL(), {
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

    async getUserData(user) {
        return await requester.send(getUserURL(user))
            .then(response => response.json());
    }
}

module.exports = Duolingo;