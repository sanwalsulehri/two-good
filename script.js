function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

locomotiveAnimation()


function navAnimation(){
gsap.to("#nav-part1 svg",{
    transform: "translateY(-120%)",
    scrollTrigger:{
        trigger: "#page1",
        scroller:"#main",
        start: "top 0",
        end:"top -8%",
        scrub: true,
    }
})

gsap.to("#nav-part2 #links",{
    transform: "translateY(-120%)",
    opacity: 0,
    scrollTrigger:{
        trigger: "#page1",
        scroller:"#main",
        start: "top 0",
        end:"top -8%",
        scrub: 1,
    }
})
}

navAnimation()

function videoConAnimat(){
    var videoCon = document.querySelector("#video-container")
var playbtn = document.querySelector("#play")

videoCon.addEventListener("mouseenter", function(){
    gsap.to(playbtn,{
        scale: 1,
        opacity: 1,
    })
})

videoCon.addEventListener("mouseleave", function(){
    gsap.to(playbtn,{
        scale: 0,
        opacity: 0,
    })
})

videoCon.addEventListener("mousemove", function(dets){
   gsap.to(playbtn,{
    left: dets.x - 70,
    top: dets.y - 70,
   })
})
}

videoConAnimat()


function loadingAnimation(){
    gsap.from("#page1 h1",{
        y: 100,
        opacity: 0,
        dalay: 0.5,
        duration: 0.9,
        // stragger: 0.3,
    })
    gsap.from("#page1 #video-container",{
        y: 100,
        opacity: 0.9,
        dalay: 1.3,
        duration: 0.9,
    })
}

loadingAnimation()

document.addEventListener("mousemove", function(dets){
    gsap.to("#cursor", {
    left: dets.x,
    top: dets.y,
})
})

var a = document.querySelectorAll(".child")
a.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        gsap.to("#cursor",{
            transform: " translate(-50%,-50%) scale(1)"
        })
    })

    elem.addEventListener("mouseleave", function(){
        gsap.to("#cursor",{
            transform: " translate(-50%,-50%) scale(0)"
        })
    })
})

function menuHamburger(){
    let ham = document.querySelector("#menuHam")
let crossbtn = document.querySelector("#cross")
let menu = document.querySelector("#menu")

ham.addEventListener("click", function(){
    menu.classList.toggle("hidden-menu")
})


crossbtn.addEventListener("click", function(){
    menu.classList.toggle("hidden-menu")
})
}

menuHamburger()