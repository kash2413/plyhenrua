!function(a){var b={init:function(){this.navigation(),"object"==typeof window._krowarzywa&&"contact"===window._krowarzywa.page&&this.locationMap()},navigation:function(){var b=a("#navTrigger"),c=a(".pageNav ul");b.on("click",function(a){a.preventDefault(),b.hasClass("expanded")?(b.removeClass("expanded"),c.stop().slideUp(200)):(b.addClass("expanded"),c.stop().slideDown(300))})},locationMap:function(){var b=this;b.mapel=a("#map"),b.markersArray=[];var c=[{featureType:"all",elementType:"all",stylers:[{saturation:"-79"},{lightness:"-4"},{hue:"#00ff6e"}]},{featureType:"all",elementType:"geometry.fill",stylers:[{saturation:"0"}]}];b.map=new google.maps.Map(b.mapel.get(0),{center:new google.maps.LatLng(52.229676,21.012229),zoom:7,mapTypeId:google.maps.MapTypeId.ROADMAP,scrollwheel:!1,styles:c,panControl:!1,zoomControl:!0,mapTypeControl:!1,zoomControlOptions:{style:google.maps.ZoomControlStyle.SMALL,position:google.maps.ControlPosition.LEFT_CENTER}}),window._krowarzywa.contactMapConfig.markers.length&&(a.each(window._krowarzywa.contactMapConfig.markers,function(a,c){b._addMarker(c)}),b._setMapBounds())},_addMarker:function(a){var b,c=this;b=new google.maps.Marker({position:new google.maps.LatLng(a.lat,a.lng),map:c.map,clickable:!1}),c.markersArray.push(b)},_getBoundsRadius:function(){var a=this,b=a.map.getBounds(),c=b.getCenter(),d=b.getNorthEast(),e=3963,f=c.lat()/57.2958,g=c.lng()/57.2958,h=d.lat()/57.2958,i=d.lng()/57.2958,j=e*Math.acos(Math.sin(f)*Math.sin(h)+Math.cos(f)*Math.cos(h)*Math.cos(i-g));return j},_setMapBounds:function(){for(var a=this,b=new google.maps.LatLngBounds,c=0;c<a.markersArray.length;c++)b.extend(a.markersArray[c].getPosition());if(b.getNorthEast().equals(b.getSouthWest())){var d=new google.maps.LatLng(b.getNorthEast().lat()+.002,b.getNorthEast().lng()+.002),e=new google.maps.LatLng(b.getNorthEast().lat()-.002,b.getNorthEast().lng()-.002);b.extend(d),b.extend(e)}a.map.fitBounds(b);var f=google.maps.event.addListener(a.map,"idle",function(){a.map.getZoom()>14&&a.map.setZoom(14),google.maps.event.removeListener(f)})}};a(document).ready(function(){b.init()})}(jQuery);