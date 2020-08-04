const aURL = window.location.protocol+'//'+window.location.hostname;
const hjsapps = {
	pagetoload:'../pages/jsappengine.html',
	pageparams:{},
	ready:function(){
		$('#app').load(hjsapps.pagetoload);
	},
}
$(document).ready(function() {hjsapps.ready();});