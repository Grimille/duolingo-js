const LOGIN_URL =  'https://www.duolingo.com/2017-06-30/login';
const USER_URL = 'https://www.duolingo.com/2017-06-30/users?';
const SHOP_URL = 'https://www.duolingo.com/2017-06-30/shop-items';

const getLoginURL = () => {
    return LOGIN_URL;
}

const getUserURL = (identifier) => {
    if(validateEmail(identifier)) {
        return USER_URL + 'email=' + identifier;
    }
    return USER_URL + 'username=' + identifier;
}

const getShopURL = () => {
    return SHOP_URL;
}

const validateEmail = (mail) => {
    return (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail));
}

exports.getLoginURL = getLoginURL;
exports.getUserURL = getUserURL;
exports.getShopURL = getShopURL;