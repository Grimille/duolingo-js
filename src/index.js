const fetch = require('node-fetch');
const dotenv = require('dotenv');

dotenv.config();

const LOGIN_URL =  'https://www.duolingo.com/2017-06-30/login';
const USER_AGENT = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36';

fetch(LOGIN_URL, {
    method: 'post',
    body: JSON.stringify({
        identifier: process.env.DUOLINGO_USERNAME,
        password: process.env.DUOLINGO_PASSWORD
    }),
    headers: { 'User-Agent': USER_AGENT },
}).then(res => {
    console.log(res.headers.get('jwt'));
    res.json();
}).then();