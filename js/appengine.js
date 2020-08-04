const appengine = {
	aprop:'RRR',
	ready:function(){
		alert('loaded');
	},
	anewmethod:function(){
		alert(appengine.aprop)
	},
}
$(document).ready(function() {appengine.ready();});