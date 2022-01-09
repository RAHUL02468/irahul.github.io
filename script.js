
var count =0;
var elemHeight = $( document ).height(); 
$('.loader-wrapper').css("height",elemHeight);

$( window ).on("load",function(){
	$(".loader-wrapper").fadeOut("slow",AOS.refresh);
});

//for initial
//for initial
var ham = document.querySelector(".nav-mobile");
ham.addEventListener("click",function(){
	var ini =document.querySelector(".initials");
	if(count%2==0)
	ini.style.transform = "translateY(-40%)";
	else
		ini.style.transform = "translateY(40%)";
	count++;
});
//for initial
//for initial


$(document).ready(function(){
var navs = document.querySelectorAll(".navigation .nav-class");
for(var i =0;i<navs.length;i++){
  navs[i].addEventListener("click",function(){
  	var act = document.querySelector(".navigation .nav-active-now");

  	act.className = act.className.replace(" nav-active-now", "");
  this.className += " nav-active-now";
  });
}
});


//for home page text
var slideIndex = 0;
showText();
function showText() {
  var i;
  var texts = document.getElementsByClassName("text-auto");
  for (i = 0; i < texts.length; i++) {
    texts[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > texts.length) {slideIndex = 1} 
  texts[slideIndex-1].style.display = "inline-block";
  setTimeout(showText, 2000); // Change image every 2 seconds
}




// for nav bar animation and text animation
$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
  	if (scroll <= ($(".banner").height()) && scroll>=0) {
	    $("#page1").addClass("nav-active-now");
	    $("#page2").removeClass("nav-active-now");
	    $("#page3").removeClass("nav-active-now");
	    $("#page4").removeClass("nav-active-now");
	    $("#page5").removeClass("nav-active-now");
	    $("#page6").removeClass("nav-active-now");
	}
	else if (scroll > ($(".banner").height()) && scroll <= ($(".banner").height()+$(".service").height())) {
	    $("#page1").removeClass("nav-active-now");
	    $("#page2").addClass("nav-active-now");
	    $("#page3").removeClass("nav-active-now");
	    $("#page4").removeClass("nav-active-now");
	    $("#page5").removeClass("nav-active-now");
	    $("#page6").removeClass("nav-active-now");
	}
	else if (scroll > ($(".banner").height()+$(".service").height()) && scroll <= ($(".banner").height()+$(".service").height()+$(".about").height())) {
	    $("#page1").removeClass("nav-active-now");
	    $("#page2").removeClass("nav-active-now");
	    $("#page3").addClass("nav-active-now");
	    $("#page4").removeClass("nav-active-now");
	    $("#page5").removeClass("nav-active-now");
	    $("#page6").removeClass("nav-active-now");
	}
	else if (scroll > ($(".banner").height()+$(".service").height()+$(".about").height()) && scroll <= ($(".banner").height()+$(".service").height()+$(".about").height()+$(".skill").height())) {
	    $("#page1").removeClass("nav-active-now");
	    $("#page2").removeClass("nav-active-now");
	    $("#page3").removeClass("nav-active-now");
	    $("#page4").addClass("nav-active-now");
	    $("#page5").removeClass("nav-active-now");
	    $("#page6").removeClass("nav-active-now");
	}
	else if (scroll > ($(".banner").height()+$(".service").height()+$(".about").height()+$(".skill").height()) && scroll <= ($(".banner").height()+$(".service").height()+$(".about").height()+$(".skill").height()+$(".projects").height())) {
	    $("#page1").removeClass("nav-active-now");
	    $("#page2").removeClass("nav-active-now");
	    $("#page3").removeClass("nav-active-now");
	    $("#page4").removeClass("nav-active-now");
	    $("#page5").addClass("nav-active-now");
	    $("#page6").removeClass("nav-active-now");
	}
	else if (scroll > ($(".banner").height()+$(".service").height()+$(".about").height()+$(".skill").height()+$(".projects").height()+50)) {
	    $("#page1").removeClass("nav-active-now");
	    $("#page2").removeClass("nav-active-now");
	    $("#page3").removeClass("nav-active-now");
	    $("#page4").removeClass("nav-active-now");
	    $("#page5").removeClass("nav-active-now");
	    $("#page6").addClass("nav-active-now");
	}
});
  //for progress bar
  //for progress bar
  //for progress bar
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
  	if (scroll > ($(".banner").height()+$(".service").height()+$(".about").height()) && scroll <= ($(".banner").height()+$(".service").height()+$(".about").height()+$(".skill").height())) {
		var progs = document.querySelectorAll("#bar");
		  for (i = 0; i < progs.length; i++) {
		  	var wi = progs[i].innerText;
		  	progs[i].style.setProperty('--w',wi);
		    progs[i].classList.add('add-all-ani');
  		}
	}
	else{
  		var progs2 = document.querySelectorAll("#bar");
		for (i = 0; i < progs2.length; i++) {
  			progs2[i].classList.remove('add-all-ani');
  		}
  	}
  	});
    //for text animation on about
  //for text animation on about
  //for text animation on about
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
  	if (scroll > ($(".banner").height()+$(".service").height()) && scroll <= ($(".banner").height()+$(".service").height()+$(".about").height())) {
		var progs = document.querySelectorAll(".about .abt-li-head i");
		  for (i = 0; i < 4; i++) {
		  	if(i%2==0)
		    progs[i].classList.add('odd-child-ani');
			else{
				progs[i].classList.add('even-child-ani');
			}
  		}
	}
	else{
  		var progs = document.querySelectorAll(".about .abt-li-head i");
		  for (i = 0; i < 4; i++) {
		  	if(i%2==0)
		    progs[i].classList.remove('odd-child-ani');
			else{
				progs[i].classList.remove('even-child-ani');
			}
  		}
  	}
  	});
      //for text animation on contact
  //for text animation on contact
  //for text animation on contact
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
  	if (scroll > ($(".banner").height()+$(".service").height()+$(".about").height()+$(".skill").height()+$(".projects").height()+(0.5*$(".contact").height())) && scroll < ($(".banner").height()+$(".service").height()+$(".about").height()+$(".skill").height()+$(".projects").height()+$(".contact").height())) {
		var progs = document.querySelectorAll(".contact i");
		  for (i = 0; i < 4; i++) {
		  	if(i%2==0)
		    progs[i].classList.add('odd-child-ani');
			else{
				progs[i].classList.add('even-child-ani');
			}
  		}
	}
	else{
  		var progs = document.querySelectorAll(".contact i");
		  for (i = 0; i < 4; i++) {
		  	if(i%2==0)
		    progs[i].classList.remove('odd-child-ani');
			else{
				progs[i].classList.remove('even-child-ani');
			}
  		}
  	}
  	});
});