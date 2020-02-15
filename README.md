# Project Details

1. to set up, installed the following packages:
•	npm install
•	npm start
•	npm install webpack 
•	npm install webpack-cli
• npm i -D @babel/core @babel/preset-env babel-loader
• npm i -D html-webpack-plugin
• npm i -d webpack-dev-server
• npm i -D clean-webpack-plugin
• i -D optimize-css-assets-webpack-plugin terser-webpack-plugin

2. converted the CSS to sass styles

3. updated the indext and style page to change from a name checker to website checker

4. updated for service workers

5. updated the server entry from 8081 to 3000


## API Set up
1. obtained the API key and login information;
2. updated the server for the API Key, created a .env file hiding the key for the changes and  and webpack configurations to 

### SDK Set up
1. updated the index.js file for the Aylien package

### Step 4: Environment Variables
Next we need to declare our API keys, which will look something like this:
```
// set aylien API credentias
var textapi = new aylien({
  application_id: "your-api-id",
  application_key: "your-key"
});
```

...but there's a problem with this. We are about to put our personal API keys into a file, but when we push, this file is going to be available PUBLICLY on Github. Private keys, visible publicly are never a good thing. So, we have to figure out a way to make that not happen. The way we will do that is with environment variables. Environment variables are pretty much like normal variables in that they have a name and hold a value, but these variables only belong to your system and won't be visible when you push to a different environment like Github.

- [ ] Use npm or yarn to install the dotenv package ```npm install dotenv```. This will allow us to use environment variables we set in a new file
- [ ] Create a new ```.env``` file in the root of your project
- [ ] Go to your .gitignore file and add ```.env``` - this will make sure that we don't push our environment variables to Github! If you forget this step, all of the work we did to protect our API keys was pointless.
- [ ] Fill the .env file with your API keys like this:
```
API_ID=**************************
API_KEY=**************************
```
- [ ] Add this code to the very top of your server/index.js file:
```
const dotenv = require('dotenv');
dotenv.config();
```
- [ ] Reference variables you created in the .env file by putting ```process.env``` in front of it, an example might look like this:
```
console.log(`Your API key is ${process.env.API_KEY}`);
```
...Not that you would want to do that. This means that our updated API credential settings will look like this:
```javascript
// set aylien API credentials
// NOTICE that textapi is the name I used, but it is arbitrary. 
// You could call it aylienapi, nlp, or anything else, 
//   just make sure to make that change universally!
var textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});
```
## Following Steps

- Parsed the response body to dynamically fill content on the page.
- Test that the server and form submission work, making sure to also handle error responses if the user input does not match API requirements. 
- In the web pack config and add the setup for service workers. 
- Tested that the site is now available even when you stop your local server
