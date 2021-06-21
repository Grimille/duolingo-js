const fetch = require('node-fetch');
const USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36';

const send = async (url, data, jwt) => {
    const params = {
        method: data !== null ? 'post' : 'get',
        headers: { 
            'User-Agent': USER_AGENT,
            'Authorization' : 'Bearer ' + jwt 
        },
    };

    if(params.method === 'post') {
        params.body = JSON.stringify(data);
    }

    return fetch(url, params);
}

exports.send = send;