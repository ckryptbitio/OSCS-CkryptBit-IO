;(function() {
	'use strict';

	/**
	 * FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */

	// Utils
	const addEventListener = (() => {
		if (typeof window.addEventListener === 'function') {
			return (element, eventName, handler, capture) => {
				element.addEventListener(eventName, handler, capture);
			};
		}
		return (element, eventName, handler, capture) => {
		
