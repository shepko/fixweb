//Based on http://www.paulirish.com/2011/requestanimationframe-for-smart-animating
;(function (win) {
	"use strict";

	var blacklisted   = /iP(ad|hone|od).*OS 6/.test(win.navigator.userAgent),
		lastTime      = 0;

	win.requestAnimationFrame = !blacklisted && (win.requestAnimationFrame || win.webkitRequestAnimationFrame || 
		win.mozRequestAnimationFrame) || function () {
			var currTime   = new Date().getTime(),
				timeToCall = Math.max(0, 16 - (currTime - lastTime)),
				timerId    = window.setTimeout(function() { callback(currTime + timeToCall); }, timeToCall);

			return lastTime = currTime + timeToCall;
		};

	win.cancelAnimationFrame = !blacklisted && (win.cancelAnimationFrame  || win.webkitCancelAnimationFrame  ||
			win.webkitCancelRequestAnimationFrame || win.mozCancelAnimationFrame     || 
			win.mozCancelRequestAnimationFrame)   || function (id) { clearTimeout(id); };
}(window));