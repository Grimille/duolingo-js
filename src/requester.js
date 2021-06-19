const fetch = require('node-fetch');
const USER_AGENT = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36';

const send = async (url, data, callback) => {
    return fetch(url, {
        method: data != null ? 'post' : 'get',
        body: JSON.stringify(data),
        headers: { 'User-Agent': USER_AGENT },
    });
}

exports.send = send;