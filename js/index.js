(function(){
	function sk(){
		var em=document.querySelector('.sktime em')
		var sktime=document.getElementsByClassName("sktime")[0]
		var spanlist=sktime.getElementsByTagName('span')
		
		function skfn(){
			var hourlist=[12,14,16,18,20,22];
			var curDate=new Date();
			var year=curDate.getFullYear();
			var month=curDate .getMonth();
			var day=curDate.getDate();
			var hour=curDate.getHours();
			var min=curDate.getMinutes();
			var sec=curDate.getSeconds();
			var txt=0;
			for (var i=0;i<hourlist.length;i++) {
				if (hour<hourlist[i]&&hour<=22) {
					txt=hourlist[i]
					break
				} else if (hour>22) {
					txt=22
				}
			}
			var furDate=new Date(year,month,day,txt);
			dis=furDate-curDate;
			ohour=Math.floor(dis/60/60/1000);
			omin=Math.floor(dis/1000/60%60);
			osec=Math.floor(dis/1000%60);
			ohour=ohour<10?'0'+ohour:ohour;
			osec=osec<10?'0'+osec:osec;
			em.innerHTML=txt+'点场';
			spanlist[0].innerHTML=ohour;
			spanlist[1].innerHTML=omin
			spanlist[2].innerHTML=osec
		}
		setInterval(skfn,1000)
	}
	sk()
}())
