# NextGrid #

### Installation ###

	$ npm install nextgrid --save
[NPM](//www.npmjs.com/package/nextgrid) site
	
### Usage ###
If you use SASS, you can do it like this:

    @import "vars";

    @import "utilities/spacings";
    @import "utilities/col-offsets";
    @import "utilities/element-visibility";
    @import "utilities/flex-positions";
    @import "utilities/element-block";
    
    @import "grid/grid";
    
If you want to change values of variables, just define your own after the import of NextGrid's variables and before everything else.

You can use/include already built CSS file, but this way you can't use NextGrid's variables etc.
	
### What's builg upon? ###
* [Flexbox Layout](//www.w3schools.com/cssref/css3_pr_flex.asp) (Flexible Box) module (currently a W3C Last Call Working Draft)
* [SCSS](//sass-lang.com/) compiling


