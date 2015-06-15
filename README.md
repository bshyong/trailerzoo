## Libraries Used

* [react](https://facebook.github.io/react/)
* [react-router](https://github.com/rackt/react-router)
* [react-hot-loader](https://github.com/gaearon/react-hot-loader)
* [react-a11y](https://github.com/rackt/react-a11y)
* [react-intl](https://github.com/yahoo/react-intl)
* [alt](https://github.com/goatslacker/alt)
* [iso](https://github.com/goatslacker/iso)
* [koa](http://koajs.com/)
* [webpack](http://webpack.github.io/)
* [babeljs](https://babeljs.io/)
* [flowtype](http://flowtype.org/)
* [flowcheck](https://gcanti.github.io/flowcheck/)

### Run the project in development:

* `$ npm run dev`

### Run tests

* `$ npm test` will run the tests once
* `$ ./node_modules/.bin/karma start` will watch for changes and run the tests on change

### Build project:

Just run `$ npm run build`, it will produce these tasks:

* Run tests from `test/spec/**/*.jsx`
* Concat & minify styles to `/dist/app-[hash].css`
* Concat & minify scripts to `/dist/js/app-[hash].js`

### Run in production

Build the project first:

* `$ npm run build`

Then start the koa server:

* `$ NODE_ENV=production node server/index.js` (iojs)
* `$ NODE_ENV=production node --harmony server/index.js` (nodejs 0.12.x)

You can also use `processes.json` to run the application with [PM2 Monitor](https://github.com/Unitech/pm2) on your production server (customize it for your use):

* `$ pm2 start processes.json`
