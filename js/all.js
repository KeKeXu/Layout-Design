//nav事件点击那个链接 哪个链接就会变背景	
var dang=0;
var timer2=null;
//dang和timer2必须是全局的
var iKey=true;

window.onload=function(){
	//隐藏列表显示隐藏//获取元素点击的按钮
	var oBanner=document.getElementById("banner");
	var aImg=oBanner.getElementsByTagName("img");
	var oBtn=document.getElementById("control");
	var aLi=oBtn.getElementsByTagName("li");
	var oWai=document.getElementById("wai");
	var oUl=document.getElementById("content").getElementsByTagName("ul")[0]
	var aCon=getByClass("con")
	marquee(oWai)
	
		
		
	for(var i=0;i<aLi.length;i++){
		aLi[i].index=i;
		aLi[i].onclick=function(){
			if(iKey){
				iKey=false;
			var index=this.index;
			fadeOutIn(index,aImg)
			}
		}
	}
	autoFadeOutIn(aImg)
	oBanner.onmouseover=function(){
		clearInterval(timer2)
			oBanner.onmouseout=function(){
			autoFadeOutIn(aImg)
		}
	}
	
}
//传参时出现问题当是全局的为了是他们互相影响所以当不能作为参数被传参
function fadeOutIn (ind,obj){
	var timer=null;
	var num=1;
	var num1=0;
			timer=setInterval(function(){
				//淡出
				num-=0.1;
				if(num<=0){
					num=0;
					clearInterval(timer)
					iKey=true;
				}
				obj[dang].style.opacity=num;
				//淡入
				num1+=0.1;
				if(num1>=1){
					num1=1;
					clearInterval(timer)
					dang=ind;
				}
				obj[ind].style.opacity=num1;
			},100)
			
}
function autoFadeOutIn(obj){
timer2=setInterval(function(){	
		setTimeout(function(){
			var num=1;
			var num1=0;
			var val=dang+1;
			timer=setInterval(function(){
				//淡出
				num-=0.1;
				if(num<=0){
					num=0;
					clearInterval(timer)
				}
				obj[dang].style.opacity=num;
				//淡入
				num1+=0.1;
				if(num1>=1){
						num1=1;
						clearInterval(timer)
						dang+=1;
						if(dang>obj.length-1){
						dang=0;
						}
					}
				if(val>obj.length-1){
					val=0;
				}
				obj[val].style.opacity=num1;	
				},100)
			},2000)
		},4000)
	
}		
function marquee(obj){
				var oBox=obj.getElementsByTagName("div")[0]	
				var aLi=oBox.getElementsByTagName("ul")[0].getElementsByTagName("li");
				var style = null;
				if (window.getComputedStyle) {
     				style = window.getComputedStyle(aLi[0], null);    // 非IE
 					} else { 
   					 style = aLi[0].currentStyle;  // IE
 				}
 					
 				var iW=(parseInt(style.width)+20)*(aLi.length/2);
				
				var iLeft=oBox.offsetLeft;
				//var steep+=2;
				//获取舞台宽度，nei移动
				
			setInterval(function(){
					iLeft--;
					if(iLeft<=(0-iW)){
						iLeft=0;
					}
					oBox.style.left=iLeft+"px";
				},1000/60)
			}

