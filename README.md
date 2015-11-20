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
src/index.handlebars
src/congif.json
src/sass/
src/imgs/
```
And those files are all compiled and served into the folder
```
dist
```
##Why index.handlebars?
Handlebars is a templating engine which compiles into HTML after converting the values in your config.json file. Go [here](http://handlebarsjs.com/) to learn more about handlebars.
##What is config.json?
The config.json file is used by handlebars to take the tedium out of repetitive tasks such as adding links and images. It doesn't have to be apart of your workflow but here is an example use case to sell the idea to you!

In your config.json file you have a javascript object. As a starter the repo has the below object
```
{
    title: 'Test OSR Example',
    src: 'imgs',
    url: '#'
};
```
As you can see we have three properties (title, src, url) but these are enitrely arbitrary so you can add or remove anything within that object. You will also see those proeprties have string value that as paths are only relevant to local assets so for an example I will change the values to:
```
{
	title: 'OSR Client',
	src: 'http://images.osrclient.cool',
	url: 'http://www.osrclient.site'
};
```
Now that we have entered these property values into the config.js file we can use them in your handlebars template like this;
```
<html>
    <head>
        <title>{{title}}</title>
        <body>
    </head>
    <body>
        <a href="{{url}}/home">
            <img src="{{src}}/button.png">
        </a>
    </body>
</html>
```
Run gulp
```
gulp
```
And in the dist file you find index.html with the following compiled html
```
<html>
    <head>
        <title>OSR Client</title>
        <body>
    </head>
    <body>
        <a href="http://www.osrclient.site/home">
            <img src="http://images.osrclient.cool/button.png">
        </a>
    </body>
</html>
```
Amazed? If not, think of how it will speed your development workflow as you have more images and links in your OSR, but if you're still not convinced you don't have to use this feature but you will have to work in the index.handlebars file.

The above also works for images being used in CSS as background images. So the property for the 'src' is automagically sent to the _config.scss file and set as $src variable.
```
.wrapper-sc {
    background: url($src + '/bg.jpg');
}
```
Will compile to:
```
.wrapper-sc {
    background: url('http://images.osrclient.cool/bg.jpg');
}
```
