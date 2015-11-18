# osr-sc
##### OSR Framework to take the tedium out of building OSRs
##Features
* Save a file to automagically refresh the browser.
* Autoprefixes all of your CSS so no more -webkit-, -moz-, -o-
* Compiles Sass to CSS
* Automagically compresses your images

##Getting started
First you will need node.js on your machine. Once you do go to the repo in the commandline and enter the following to install all of the dependencies.
```
npm install
```
When completed you can run the following command and you can start building your OSR!
```
gulp
```
##Building your OSR
You only edit these files
```
index.handlebars
congif.js
src/sass/
src/imgs/
```
And those files are all compiled and served into the folder
```
dist
```
##Why index.handlebars?
Handlebars is a templating engine which compiles into HTML after converting the values in your config.js file.
##What is config.js?
The config.js file is used by handlebars to take the tedium out of repetitive tasks such add links and image paths.
