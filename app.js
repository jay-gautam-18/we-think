function init() {
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });

  locoScroll.on("scroll", ScrollTrigger.update);
  
  
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
  
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  
  ScrollTrigger.refresh();
  
}

init();

function lodingAni(){
  var img = document.querySelector("#loder img")
  var i = 1;
  var s = setInterval(function(){
  
    if(i==11){
      clearInterval(s);
    }else{
      img.setAttribute("src",`./img/loder/l${i}.svg`);
      i++
    }
  },300)
  var tl = gsap.timeline();
  tl.to("#loder",{
    top : "-100vh",
    delay:3,
  })
  tl.from("#text h1",{
      y:"85%",
      delay:0.9,
      stagger:0.1,
  })
  tl.from("#medil-text h4",{
      y:"90%",
      opacity:0,
      stagger:0.2,
  }) 
}
lodingAni();
function navSc(){
  gsap.to("nav",{
    y:"-100%",
    scrollTrigger:{
        trigger:"nav",
        scroller:"#main",
        // markers:true,
        start:"top -10%",
        end:"top -20%",
        scrub:1,
    }
})
}
navSc()
function videoAni(){
  gsap.to("#v",{
    height:"150vh",
    width: "100vw",
    scrollTrigger: {
      trigger: "#v",
      scroller: "#main", 
      start: "top 95%",
      end: "top -10%",
      scrub: 2,
    }
  })
  gsap.from(".down h1",{
    y:"100%",
    opacity:0,
    scrollTrigger:{
      trigger:".down h1",
      scroller:"#main",
      // markers:true,
      start:"top 55%",
      end:"top 40%",
  }
  })
}
videoAni();

var mouse = document.querySelector("#mouse")
var elems= document.querySelectorAll(".pro-vdeio")
var elImg = document.querySelectorAll(".zom");



  


if ('ontouchstart' in window || navigator.maxTouchPoints) {
  const con = document.querySelector("#con");
  gsap.to(con, {
    x: -con.offsetWidth + innerWidth/2.5,
    scrollTrigger: {
        trigger: "#page4",
        scroller: "#main",
        // markers:true,
        pin: true,
        scrub: 0.1,
        start: "top -5%",
        end: "top -300%",
    },
  });

} else {
  elems.forEach(function(elem,inx){ 
    elem.addEventListener("mousemove",function(dets){
      mouse.style.top = `${dets.y}px`;
      mouse.style.left = `${dets.x}px`;
      mouse.style.display = `flex`;
      mouse.style.scale = `1`;
      elem.style.scale = `0.97`;
      elImg[inx].style.scale = "1.3";
      console.log(inx);
    })
    elem.addEventListener("mouseleave",function(dets){
      mouse.style.display = `none`;
      mouse.style.scale = `0`;
      elem.style.scale = `1`;
      elImg[inx].style.scale = "1";
    })
  })
 const con = document.querySelector("#con");
    gsap.to("#con", {
        x: -con.offsetWidth + innerWidth,
        scrollTrigger: {
            trigger: "#page4",
            scroller: "#main",
            // markers:true,
            pin: true,
            scrub: 0.1,
            start: "top -5%",
            end: "top -300%",
        },
    });
  
}

function footerAni(){
  gsap.from(".fh h2",{
    y:"150%",
    scrollTrigger:{
      trigger:".fh h2",
      scroller:"#main",
      // markers:true,
      start:"top 90%",
      end:"top 70%",
      scrub:2,
    }
  })
  gsap.to("#gif #a",{
    opacity: 1,
    scrollTrigger:{
      trigger:"#gif #a",
      scroller:"#main",
      // markers:true,
      start:"top 70%",
      end:"top 60%",
      scrub:3,
    }
  })
}
footerAni()
var item = document.querySelector(".un");
var under = document.querySelector(".under")
item.addEventListener("mouseenter",function(){
  // under.style.width = "0%"
  gsap.from(under,{
    width:"-50%",
    duration:2,
  })
})
item.addEventListener("mouseleave",function(){
  under.style.width = "100%"
})

function page5ImagesAnimation(){
  gsap.from("#page5 img", {
    opacity: 0,
    stagger: 0.5,
    scrollTrigger: {
      trigger: "#page5",
      scroller: "#main",
      start: "top 60%",
      end: "top 40%",
      scrub: 2,
    }
  });
}
page5ImagesAnimation();
