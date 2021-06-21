const fetch = require('node-fetch');
const USER_AGENT = 'Chrome/83.0.4103.116';

const send = async (url, data, jwt) => {
    return fetch(url, {
        method: data != null ? 'post' : 'get',
        body: JSON.stringify(data),
        headers: { 
            'User-Agent': USER_AGENT,
            'Authorization' : 'Bearer ' + jwt 
        },
    });
}

exports.send = send;