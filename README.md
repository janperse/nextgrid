#FLEX GRID
*From | March 2016*

### What is this repository for? ###
This is source repo for building Elpy's Flexbox grid system.

### What's builg upon? ###
* [Flexbox Layout](http://www.w3schools.com/cssref/css3_pr_flex.asp) (Flexible Box) module (currently a W3C Last Call Working Draft)
* [SCSS](http://sass-lang.com/) compiling


### How do I set up environment? ###
######Task manager
* [Gulp](http://gulpjs.com/) JavaScript Task Runner

### How do I build up the project? ###

	$ cd to-your-local-repo
	$ npm install
	$ gulp

You will be provided with additional info from Terminal response.

### What do I need to know? ###
The numbers in the table specify the first browser version that fully supports the property. <br/> Numbers followed by -webkit-, -ms- or -moz- specify the first version that worked with a prefix.

| Chrome         | Internet Exporer | Firefox    | Safari       | Opera |
|----------------|------------------|------------|--------------|-------|
| 29.0           | 11.0             | 28.0       | 9.0          | 17.0  |
| 21.0 - webkit- | 10.0 -ms-        | 18.0 -moz- | 6.1 -webkit- |       |

- [Tips & Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### Known bugs, issues ###
- Missing Flex properties (check if even neccessary, because they can differ a lot from project to project)
	- order (By default, flex items are laid out in the source order. The order property controls the order in which they appear in the flex container)
	- flex-grow (If all items have flex-grow set to 1, the remaining space in the container will be distributed equally to all children. If one of the children a value of 2, the remaining space would take up twice as much space as the others (or it will try to, at least))
	- flex-shrink (This defines the ability for a flex item to shrink if necessary)
	- flex-basis (This defines the default size of an element before the remaining space is distributed)
	- flex (This is the shorthand for flex-grow, flex-shrink and flex-basis combined)
