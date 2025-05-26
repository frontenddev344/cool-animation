

$(document).ready(function(){
  $(".menu-toggle").click(function(){
    $("body").addClass("toggle");
  });
  $(".closed-menu").click(function(){
    $("body").removeClass("toggle");
  });
});
// toogle menu 

gsap.registerPlugin(ScrollTrigger);

const gallery1 = document.querySelector('#gallery-1');
const gallery2 = document.querySelector('#gallery-2');

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.gallery',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 4,
        pin: true
    }
});

tl.to(gallery1, {
    y: '100vh',
    duration: 5
}, "a")
.to(gallery2, {
    y: '-100vh',
    duration: 5
}, "a");

// new section animtaion 

ScrollTrigger.create({
    trigger: "#section2",
    start: "top top",
    end: "200vh - 100vh",
    pin: true,
    pinSpacing: true,
    // markers:true
  });
  
  gsap.set("#image-left", { x: "-100%" });
  gsap.set("#image-right", { x: "100%" });
  
  gsap.to("#image-left", {
    x: "0%",
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#section2",
      start: "top top",
      end: "+=100vh",
      duration: 2,
      scrub: 1
    }
  });
  
  gsap.to("#image-right", {
    x: "0%",
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#section2",
      start: "top top",
      end: "+=100vh",
      duration: 2,
      scrub: 1
    }
  });

  
// staking cards 

document.querySelectorAll(".card").forEach(function(cards){
    gsap.to(cards,{
        scale: 0.8,
        // filter: "blur(10px)",
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger: cards,
            start:"top top",
            end: "bottom top",
            scrub: true,
            // markers:true
        }
        
    });
 }); 


// wheel slider 



console.clear();
gsap.registerPlugin(ScrollTrigger);

let wheel = document.querySelector(".wheel");
let images = gsap.utils.toArray(".wheel__card");

// Animate arrow gently up and down
gsap.to(".arrow", { y: 5, ease: "power1.inOut", repeat: -1, yoyo: true });

// Setup wheel card positions
function setup() {
	let radius = wheel.offsetWidth / 2;
	let center = wheel.offsetWidth / 2;
	let total = images.length;
	let slice = (2 * Math.PI) / total;

	images.forEach((item, i) => {
		let angle = i * slice;

		let x = center + radius * Math.sin(angle);
		let y = center - radius * Math.cos(angle);

		gsap.set(item, {
			rotation: angle + "_rad",
			xPercent: -50,
			yPercent: -50,
			x: x,
			y: y
		});
	});
}

setup();
window.addEventListener("resize", setup);

// Pin #section4 and animate wheel rotation while scrolling through it
gsap.to(".wheel", {
	rotate: () => -360,
	ease: "none",
	duration: images.length,
	scrollTrigger: {
		trigger: "#section4",
		start: "top top",
		end: () => `+=${window.innerHeight * 2}`, // Adjust scroll length here
		pin: true,
		scrub: 1,
		snap: 1 / images.length,
		invalidateOnRefresh: true
	}
});


// wheel slider end 

// Create a timeline for section6 animations
let section6Timeline = gsap.timeline({
    scrollTrigger: {
        trigger: "#section6",
        start: "top top",
        end: "bottom 40%",
        scrub: 2,
        pin: true,
        anticipatePin: 1,
        // markers: true
    }
});

// Add animations to the timeline
section6Timeline
    .to("#section6 .video-container video", {
        scale: 1,
        rotate: 0.5,
        duration: 3
    }, "para")
    .from("#paragraph-1", {
        x: "-140%",
        opacity: 0.5,
        duration: 2
    }, "para")

    .from("#paragraph-2", {
        x: "140%",
        opacity: 0,
        duration: 2
    }, "para");

