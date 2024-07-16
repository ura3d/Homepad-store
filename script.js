const animItems = document.querySelectorAll(".anim");

if (animItems.length > 0){
  window.addEventListener('scroll', animOnScroll);
   function animOnScroll(){
     for (let index = 0; index < animItems.length; index++){
       const animItem = animItems[index];
       const animItemHeight = animItem.offsetHeight;
       const animItemOffset =  offset(animItem).top;
       const animStart = 4;

       let animItemPoint = window.innerHeight - animItemHeight / animStart;
       if(animItemHeight > window.innerHeight){
         animItemPoint = window.innerHeight - window.innerHeight / animStart;
       }

       if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
         animItem.classList.add('_active');
         if(animItem.classList[0] == "xbox-byte"){
              document.getElementById("logo").classList.remove("_ps");
              document.getElementById("logo").classList.add("_xbox");
              console.log("xboxpage");
         }
         if(animItem.classList[0] == "ps-byte"){
              document.getElementById("logo").classList.remove("_xbox");
              document.getElementById("logo").classList.add("_ps");
              console.log("pspage");
         }
       }
       else{
         animItem.classList.remove('_active');
       }

     }
   }
   function offset(el){
     const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
   }
}

function hoverOnPs5(){
  //document.getElementById("pspage").classList.add("_ps5");
  document.getElementById("pspagecover").classList.add("_hide");

  var check = document.getElementsByClassName("psvideo")[0].getAttribute("src");
  if (check != "resources/img/trailers/ps5-trailer.mp4"){
    document.getElementsByClassName("psvideo")[0].setAttribute("src", "resources/img/trailers/ps5-trailer.mp4");
  }

  document.getElementById("ps4-block").classList.add("_opa");
  document.getElementById("ps3-block").classList.add("_opa");

  document.getElementById("xbox-h").classList.add("_opa");
  document.getElementById("nintendo-h").classList.add("_opa");
}
function hoverOffPs5(){
  //document.getElementById("pspage").classList.remove("_ps5");
  document.getElementById("pspagecover").classList.remove("_hide");

  document.getElementById("ps4-block").classList.remove("_opa");
  document.getElementById("ps3-block").classList.remove("_opa");

  document.getElementById("xbox-h").classList.remove("_opa");
  document.getElementById("nintendo-h").classList.remove("_opa");
}


function hoverOnPs4(){
  //document.getElementById("pspage").classList.add("_ps4");
  document.getElementById("pspagecover").classList.add("_hide");

  var check = document.getElementsByClassName("psvideo")[0].getAttribute("src");
  if (check != "resources/img/trailers/ps4-trailer.mp4"){
    document.getElementsByClassName("psvideo")[0].setAttribute("src", "resources/img/trailers/ps4-trailer.mp4");
  }

  document.getElementById("ps5-block").classList.add("_opa");
  document.getElementById("ps3-block").classList.add("_opa");

  document.getElementById("xbox-h").classList.add("_opa");
  document.getElementById("nintendo-h").classList.add("_opa");
}
function hoverOffPs4(){
  //document.getElementById("pspage").classList.remove("_ps4");
  document.getElementById("pspagecover").classList.remove("_hide");

  document.getElementById("ps5-block").classList.remove("_opa");
  document.getElementById("ps3-block").classList.remove("_opa");

  document.getElementById("xbox-h").classList.remove("_opa");
  document.getElementById("nintendo-h").classList.remove("_opa");
}

var ps3_wp = [
  "background-image: url(resources/img/ps3games/ps3_wallpaper_lustofus.jpg)",
  "background-image: url(resources/img/ps3games/ps3_wallpaper_uncharted.jpg)",
  "background-image: url(resources/img/ps3games/ps3_wallpaper_lustguardian.jpg)",
  "background-image: url(resources/img/ps3games/ps3_wallpaper_gt6.jpg)",
  "background-image: url(resources/img/ps3games/ps3_wallpaper_bts.jpg)"
];
var i_ps3 = 0;

function hoverOnPs3() {
  document.getElementById("pspage").classList.add("_show");
  document.getElementById("pspagecover").classList.add("_hide");
  document.getElementsByClassName("_show")[0].style = ps3_wp[i_ps3 - 1];
  document.getElementsByClassName("psvideo")[0].setAttribute("hidden", true);


  document.getElementById("ps5-block").classList.add("_opa");
  document.getElementById("ps4-block").classList.add("_opa");

  document.getElementById("xbox-h").classList.add("_opa");
  document.getElementById("nintendo-h").classList.add("_opa");
}

function hoverOffPs3() {
  document.getElementById("pspage").classList.remove("_show");
  document.getElementsByClassName("pspage")[0].style = "background-image: ";
  document.getElementById("pspagecover").classList.remove("_hide");
  document.getElementsByClassName("psvideo")[0].removeAttribute("hidden");

  document.getElementById("ps5-block").classList.remove("_opa");
  document.getElementById("ps4-block").classList.remove("_opa");

  document.getElementById("xbox-h").classList.remove("_opa");
  document.getElementById("nintendo-h").classList.remove("_opa");
}

function change_wp_ps3() {
    if (document.getElementById("pspage").classList.contains("_show")) {
      document.getElementsByClassName("_show")[0].style = ps3_wp[i_ps3];
    }
    setTimeout(change_wp_ps3, 4500);
    i_ps3++;

    if (i_ps3 >= ps3_wp.length) {
      i_ps3 = 0;
    }
}



//XBOX XBOX XBOX XBOX XBOX XBOX XBOX XBOX
//XBOX XBOX XBOX XBOX XBOX XBOX XBOX XBOX
//XBOX XBOX XBOX XBOX XBOX XBOX XBOX XBOX
//XBOX XBOX XBOX XBOX XBOX XBOX XBOX XBOX


function hoverOnXboxSX(){
  document.getElementById("xboxpage").classList.add("_s");

  document.getElementById("xbox-ss").classList.add("_opa");
  document.getElementById("xbox-one").classList.add("_opa");
  document.getElementById("xbox-360").classList.add("_opa");

  document.getElementById("ps-h").classList.add("_opa");
  document.getElementById("nintendo-h").classList.add("_opa");
}
function hoverOffXboxSX(){
  document.getElementById("xboxpage").classList.remove("_s");

  document.getElementById("xbox-ss").classList.remove("_opa");
  document.getElementById("xbox-one").classList.remove("_opa");
  document.getElementById("xbox-360").classList.remove("_opa");

  document.getElementById("ps-h").classList.remove("_opa");
  document.getElementById("nintendo-h").classList.remove("_opa");
}


function hoverOnXboxSS(){
  document.getElementById("xboxpage").classList.add("_s");

  document.getElementById("xbox-sx").classList.add("_opa");
  document.getElementById("xbox-one").classList.add("_opa");
  document.getElementById("xbox-360").classList.add("_opa");

  document.getElementById("ps-h").classList.add("_opa");
  document.getElementById("nintendo-h").classList.add("_opa");
}
function hoverOffXboxSS(){
  document.getElementById("xboxpage").classList.remove("_s");

  document.getElementById("xbox-sx").classList.remove("_opa");
  document.getElementById("xbox-one").classList.remove("_opa");
  document.getElementById("xbox-360").classList.remove("_opa");

  document.getElementById("ps-h").classList.remove("_opa");
  document.getElementById("nintendo-h").classList.remove("_opa");
}


function hoverOnXboxOne(){
  document.getElementById("xboxpage").classList.add("_one");

  document.getElementById("xbox-sx").classList.add("_opa");
  document.getElementById("xbox-ss").classList.add("_opa");
  document.getElementById("xbox-360").classList.add("_opa");

  document.getElementById("ps-h").classList.add("_opa");
  document.getElementById("nintendo-h").classList.add("_opa");
}
function hoverOffXboxOne(){
  document.getElementById("xboxpage").classList.remove("_one");

  document.getElementById("xbox-sx").classList.remove("_opa");
  document.getElementById("xbox-ss").classList.remove("_opa");
  document.getElementById("xbox-360").classList.remove("_opa");

  document.getElementById("ps-h").classList.remove("_opa");
  document.getElementById("nintendo-h").classList.remove("_opa");
}


function hoverOnXbox360(){
  document.getElementById("xboxpage").classList.add("_360");

  document.getElementById("xbox-sx").classList.add("_opa");
  document.getElementById("xbox-ss").classList.add("_opa");
  document.getElementById("xbox-one").classList.add("_opa");

  document.getElementById("ps-h").classList.add("_opa");
  document.getElementById("nintendo-h").classList.add("_opa");
}
function hoverOffXbox360(){
  document.getElementById("xboxpage").classList.remove("_360");

  document.getElementById("xbox-sx").classList.remove("_opa");
  document.getElementById("xbox-ss").classList.remove("_opa");
  document.getElementById("xbox-one").classList.remove("_opa");

  document.getElementById("ps-h").classList.remove("_opa");
  document.getElementById("nintendo-h").classList.remove("_opa");
}


change_wp_ps3();

setTimeout(() => {
  animOnScroll();
}, 300);
