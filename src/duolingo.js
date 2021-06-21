const requester = require('../src/requester');
const { getLoginURL, getUserURL, getShopURL } = require('../src/urls');
const { readTokenFromFile, writeTokenToFile, tokenFileExist } = require('../src/token');

const TOKEN_FILE = 'duolingo-js/token.json';

/**
 * Use this class to query your Duolingo datas.
 */

class Duolingo {
    constructor(identifier, password) {
        this.identifier = identifier;
        this.password = password;
        this.jwt = this.recoverJWT();
    }

    /**
     * Attempt to recover the JWT token from a session file.
     * @returns The token from the session file or null
     */
    recoverJWT() {
        if(tokenFileExist(TOKEN_FILE)) {
            return readTokenFromFile(TOKEN_FILE);
        }

        return null;
    }

    /**
     * Validate a JWT Token
     * @returns  True if the response is authorized.
     */
    async validateToken() {
        return await requester.send(getShopURL(), null, this.jwt)
                .then(response => {
                    return response.status != 401;
                });
    }

    /**
     * Log the user using credentials or existing JWT Token from session file.
     * @returns True if logged.
     */
    async login() {
        if(this.jwt === null) {
            await requester.send(getLoginURL(), {
                identifier: this.identifier,
                password: this.password
            }).then(response => {
                this.jwt = response.headers.get('jwt');

                writeTokenToFile(TOKEN_FILE, this.jwt);
            }).catch(error => {
                console.error(error);
            });
        } else {
            const valid = await this.validateToken();

            if(!valid) {
                this.jwt = null;
                return await this.login();
            }
        }

        return this.jwt !== null;
    }

    /**
     * Get the data of a user
     * @param user - The username
     * @returns - An object containing all the datas
     */
    async getUserData(user) {
        return await requester.send(getUserURL(user), null, this.jwt)
            .then(response => response.json());
    }
}

module.exports = Duolingo;