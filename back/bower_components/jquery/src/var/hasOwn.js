define([
	"./class2type"
], function(class2type) {
	"use strict";

	// Return the hasOwnProperty method of the class2type object
	return Object.prototype.hasOwnProperty.bind(class2type);
});

