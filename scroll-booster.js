//Support: IE11, FF23+, Chrome 29+, Safari 5.1+, Opera 17+
//         iOS Safari 3.2+, Android browser 2.1+, BB7/10
// Add the following CSS rules:
//.no-hover,
//.no-hover * {
//  pointer-events: none !important;
//}
;(function (cls, elm) {

var timer;

window.addEventListener('scroll', function () {
	clearTimeout(timer);

	if (!elm.classList.contains(cls)) {
		elm.classList.add(cls)
	}
  
	timer = setTimeout(function(){
		elm.classList.remove(cls)
	}, 300);
}, false);

}('no-hover', document.body));