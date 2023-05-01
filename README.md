
# @grimille/duolingo-js [2021 UPDATE]

Use the Duolingo API and power up your Node.js application (non-official)
This is WIP, feel free to contact me for additions or any issues. 🦉

## Installation

Use npm to install this dependency.
⬇️⬇️⬇️
```bash
npm install @grimille/duolingo-js
```

## Usage

Start by creating a client :
```javascript
const { Duolingo } = require('@grimille/duolingo-js');
const client = new Duolingo(<username|email>, <password>);
```

And use async IFEE :
```javascript
// ...
(async() => {
	// your code here
	
	let logged  =  await client.login(); // True / false
	let totalXP = client.getTotalXP(); //Get your total XP
	
	await client.setUser('RandomUser');
	
	totalXP = client.getTotalXP(); //Get "RandomUser"'s total XP
})();
```

**Notice:** If you don't use async, you'll block your main thread during querying.

## Avalaible Methods

#### Retrieving the data asynchronously
-  loadSelfUserData() - Reload your own Duolingo data is the API. Done by default when login.
-  getUserData(username) - Get the full JSON payload of a Duolingo user.
-  setUser(username) - Load a user into the API (cache the data)

#### Using the cache when retrieved
- getXpGoal() - Get the XP Goal (could be undefined)
- getTotalXP() - Get the total XP earned of all courses
- getStreak() - Get the current streak
- getUsername() - Get the username
- getDisplayName() - Get the display name
- isPremium() - Get if the user is premium (Duolingo Plus) or not.
- getId() - Get the id
- getProfileCountry() - Get the country code
- getCourses() - Get the courses
```
# Sample Response
[{ preload: false,
    placementTestAvailable: false,
    authorId: 'duolingo',
    title: 'Spanisch',
    learningLanguage: 'es',
    xp: 18685,
    healthEnabled: true,
    fromLanguage: 'de',
    crowns: 80,
    id: 'DUOLINGO_ES_DE' }]
```
- getFriends() - Get the users friends
```
# Sample Response
{ nextCursor: null,
  totalSubscriptions: 1,
  subscriptions:
   [ { username: 'XXX',
       picture: '//simg-ssl.duolingo.com/avatar/default_2',
       name: 'Vroni',
       monthlyXp: 3527,
       weeklyXp: 811,
       hasRecentActivity15: false,
       totalXp: 7318,
       id: XXX,
       hasPlus: false } ] }
```

## Todos

- Implement new API calls (Buy a freeze… 👀)
- More testing and more support
- Tell me your needs

## Links

- [Duolingo](https://www.duolingo.com/)
- [Github Project](https://github.com/Grimille/duolingo-js)
- [NPMjs page](https://www.npmjs.com/package/@grimille/duolingo-js)

## Contributing

No contributions for the moment as the API is in working progress.

## License

[MIT](https://choosealicense.com/licenses/mit/)