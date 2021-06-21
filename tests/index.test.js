const { Duolingo } = require('../src/index');
const { readTokenFromFile, tokenFileExist } = require('../src/token');

test('duolingo.login', async () => {
    const client = new Duolingo('RandomUser978392023ab2', 'RandomPassword93827475827ab3');
    const loggedIn = await client.login();

    expect(loggedIn).toBe(false);
});

test('duolingo.existToken', () => {
    expect(tokenFileExist('tests/duolingo/test.json')).toBe(false);
    expect(tokenFileExist('tests/duolingo/token.json')).toBe(true);
});