# blog

This is a blog project were a user can sign in via with their twitter account. Once logged in the user can now make a new Title to post a topic or reply to a current topic that is on the blog site. The project purpose was to practice the use of authentication OAuth in this case it uses twitter. Typically once user writes a post their twitter image is displayed. Also a user who has logged in can link to a particular blog posts twitter account. Unfortonutly due to the documentation from firebase whihch has changed, the mage and link are currently not working. But the authentication is. 

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation
* you can link to the project as it is depolyed. The link is at the top of my GitHub page.
* `git clone <repository-url>` this repository
* `cd blog`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying Instrcutions.

$ npm install -g firebase-tools
$ ember build --prod
$ firebase login
$ firebase init
Questions and answers:

What Firebase CLI features do you want to setup for this folder? ==> Hosting

What Firebase project do you want to associate as default? ==> Select your project.

What file should be used for Database Rules? ==> Just accept the database.rules.json with hitting Return/Enter.

What do you want to use as your public directory? ==> Type: dist, because we would like to publish the content from our dist folder.

Configure as a single-page app (rewrite all urls to /index.html)? ==> Answer: YES (Please note, the default answer would be N, so you have to type YES.)

File dist/index.html already exists. Overwrite? ==> NO!!! Accept the default NO.

There is a new firebase.json file in your project folder, check it out:

{
  "database": {
    "rules": "database.rules.json"
  },
  "hosting": {
    "public": "dist",
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
And deploy:

$ firebase deploy
Check your app.

$ firebase open

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
