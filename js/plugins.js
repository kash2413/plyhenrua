/**
 * jQuery plugins
 *
 */

// Avoid console errors in browsers that lack a console.
(function() {
	var method;
	var noop = function () {};
	var methods = [
		'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
		'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
		'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
		'timeStamp', 'trace', 'warn'
	];
	var length = methods.length;
	var console = (window.console = window.console || {});

	while (length--) {
		method = methods[length];

		// Only stub undefined methods.
		if (!console[method]) {
			console[method] = noop;
		}
	}
}());


/*
* jQuery Tiny Pub/Sub
* https://github.com/cowboy/jquery-tiny-pubsub
*
* Copyright (c) 2013 "Cowboy" Ben Alman
* Licensed under the MIT license.
*/

(function($) {

  var o = $({});

  $.subscribe = function() {
    o.on.apply(o, arguments);
  };

  $.unsubscribe = function() {
    o.off.apply(o, arguments);
  };

  $.publish = function() {
    o.trigger.apply(o, arguments);
  };

}(jQuery));




/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});




/*
 * PageUI - jQuery Utilities Library
 * MODULE: Simple Google Map widget
 *
 * Version: 0.2
 * Requires: jQuery v1.9+
 * Requires: infobox.js (if infoboxes are being used)
 *
 * Copyright (c) 2013 - 2014 Piotrek Wojciechowski
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

window.PUI = window.PUI || {};

PUI.Gmap = function (el, conf) {
	'use strict';
	// Configuration object
	this.conf = {
		lat: 50.061663,
		lng: 19.937466,
		markers: [
			{
				lat: 50.061663,
				lng: 19.937466
			}
		],
		mapStyles: [],
		zoom: 16,
		disableDefaultUI: true,
		navigationControl: true,
		mapTypeControl: false,
		icon: undefined,
		markersClickable: true,
		infoBox: {
			use: false,
			scriptURL: 'js/lib/infobox_packed.js',
			className: 'gmapInfoBox',
			alignBottom: true
		}
	};
	$.extend(this.conf, conf);

	this.el = $(el);
	this.init();
};

PUI.Gmap.prototype = {
	gmap: undefined,
	infowindow: null,

	addMarkers: function (obj) {
		var self = obj || this;

		var addMarker = function (lat, lng, content) {
			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(lat, lng),
				map: self.gmap,
				clickable: self.conf.markersClickable,
				html: content,
				icon: self.conf.icon
			});

			google.maps.event.addListener(marker, 'click', function() {
				self.infowindow.setContent(marker.html);
				self.infowindow.setContent(self.infowindow.getContent());
				self.infowindow.open(self.gmap, marker);
			});
		};

		for (var i = 0; i < self.conf.markers.length; i++) {
			var marker = self.conf.markers[i],
				contentObj = marker.content,
				contentTmpl = self.conf.infoWindowTemplate;

			for (var key in contentObj) {
				var toReplace = '{{' + key + '}}';
				contentTmpl = contentTmpl.replace(toReplace, contentObj[key], 'gi');
			}
			addMarker(marker.lat, marker.lng,contentTmpl);
		}
	},

	initMap: function (obj) {
		var self = obj || this;

		var mapOptions = {
			center: new google.maps.LatLng(self.conf.lat, self.conf.lng),
			zoom: self.conf.zoom,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			disableDefaultUI: self.conf.disableDefaultUI,
			navigationControl: self.conf.navigationControl,
			mapTypeControl: self.conf.mapTypeControl
		};

		if (! self.conf.infoBox.use) {
			self.infowindow = new google.maps.InfoWindow({
				content: 'loading...',
				maxWidth: 200
			});
		} else {
			self.infowindow = new InfoBox({
				content: 'loading...',
				boxClass: self.conf.infoBox.className,
				alignBottom: self.conf.infoBox.alignBottom
			});
		}

		self.gmap = new google.maps.Map(self.el.get(0), mapOptions);

		if (self.conf.mapStyles.length > 0) {
			self.gmap.setOptions({styles: self.conf.mapStyles});
		}

		self.addMarkers(obj);
	},

	loadMapApi: function (obj) {
		var self = obj || this;
		google.load('maps', '3', {
			other_params: 'sensor=false',
			callback: function() {
				PUI.mapApiLoaded = true;

				if (self.conf.infoBox.use) {
					$.getScript(self.conf.infoBox.scriptURL, function () {
						self.initMap(self);
					});
				} else {
					self.initMap(self);
				}
			}
		});
	},

	init: function () {
		var self = this;

		if (PUI.mapApiLoading === true) {
			function checkIfApiLoaded () {
				if ( PUI.mapApiLoaded === true ) {
					self.initMap(self);
				} else {
					setTimeout(checkIfApiLoaded, 200);
				}
			};
			checkIfApiLoaded();
		} else {
			PUI.mapApiLoading = true;

			$.ajax({
				url: 'https://www.google.com/jsapi',
				dataType: 'script',
				success: function () {
					self.loadMapApi(self);
				}
			});
		}
	}
};