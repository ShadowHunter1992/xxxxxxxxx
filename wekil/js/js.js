
document.querySelector('.slider').style.backgroundImage="url(images/slide1_bg.jpg)"
 wekiller=[
 "images/slide1_bg.jpg",
 "images/slide2_bg.jpg",
 "images/slide3_bg.jpg"]
 

function salam(obj){
	obj.addEventListener("mousedown",function(){
		obj.style.border="4px solid white"
	})
	obj.addEventListener("mouseout",function(){
		obj.style.border=""
	})
	
	a=obj.getAttribute('src');
	b=document.querySelector('.slider');
	b.style.backgroundImage="url("+a+")";
	b.style.backgroundRepeat="no-repeat"
	b.style.backgroundSize="cover"
z

}
a=document.querySelector(".inputsearch")
a.addEventListener("click",function(){
	a.style.width="200px";
	a.removeAttribute("placeholder");
})
a.addEventListener("focusout",function(){a.style.width="50px"})


titles =[ "Clean Code", "Setting","Responsive","Documentation","Quality","Support"];

wrapH=document.querySelector("#cleanHeader");
divs=document.querySelectorAll(".cleancode .row>div");
topTitle=-150;
lastactivetab=1;

for(i=0;i<divs.length;i++){
	divs[i].addEventListener("click",changeTab);
	divs[i].getElementsByTagName("div")[0].addEventListener("mouseover",translate)

	
}
function changeTab(a){
 divTarget=a.target
 value=divTarget.getAttribute("data-value")


if(value!=lastactivetab){
	title=document.querySelector("#cleanHeader h1");
	title.innerHTML=titles[value];
	title.style.fontSize="60px";
	title.style.color="white";

	interval=setInterval(slide,2)



  divTarget.className+=" active"

  p=divTarget.getElementsByTagName("p")[0];
  p.innerHTML=titles[value]
  
lastactivetabx=document.querySelectorAll("div[data-value='"+lastactivetab+"']")[0];
lastactivetabx.getElementsByTagName("p")[0].innerHTML="";
lastactivetabx.classList.remove("active");
lastactivetab=value;
}



}
function slide(){
	wrapH.style.top=topTitle+"px";

	topTitle+=1
	if(topTitle==100){
		clearInterval(interval);
		topTitle=-150;
	}


}
function translate(a){
i=a.target;
console.log(i)

}