function setFont(){
	var width=document.documentElement.clientWidth||document.body.clientWidth
	document.querySelector('html').style.fontSize=width/3.75+'px'
}
setFont()
document.body.onresize=function(){
	setFont()
}
