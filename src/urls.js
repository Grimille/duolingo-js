const LOGIN_URL =  'https://www.duolingo.com/2017-06-30/login';
const USER_URL = 'https://www.duolingo.com/2017-06-30/users?';
const SHOP_URL = 'https://www.duolingo.com/2017-06-30/shop-items';
const FRIENDS_URL = 'https://www.duolingo.com/2017-06-30/users/{USERID}/subscriptions';

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

const getFriendsURL = (userId) => {
    return FRIENDS_URL.replace('{USERID}', userId);
}

exports.getLoginURL = getLoginURL;
exports.getUserURL = getUserURL;
exports.getShopURL = getShopURL;
exports.getFriendsURL = getFriendsURL;