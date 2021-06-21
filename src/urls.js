const LOGIN_URL =  'https://www.duolingo.com/2017-06-30/login';
const USER_URL = 'https://www.duolingo.com/2017-06-30/users?username=%user%';
const SHOP_URL = 'https://www.duolingo.com/2017-06-30/shop-items';

const getLoginURL = () => {
    return LOGIN_URL;
}

const getUserURL = (user) => {
    return USER_URL.replace('%user%', user);
}

const getShopURL = () => {
    return SHOP_URL;
}

exports.getLoginURL = getLoginURL;
exports.getUserURL = getUserURL;
exports.getShopURL = getShopURL;