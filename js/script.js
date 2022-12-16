const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '100px',
	duration: 3500,
	reset: true
})

sr.reveal('.home-text',{delay:500, origin:'left'});
sr.reveal('.home-img',{delay:3500, origin:'right'});

sr.reveal('.about-text',{delay:1500, origin:'right'});
sr.reveal('.about-img',{delay:500, origin:'left'});

sr.reveal('.carousel-inner',{delay:700, origin:'bottom'});
sr.reveal('.Gallery',{delay:700, origin:'top'});

sr.reveal('#audioPlayer',{delay:1900, origin:'bottom'});
sr.reveal('.Music',{delay:1900, origin:'top'});
sr.reveal('.music-about',{delay:900, origin:'top'});

sr.reveal('.c-mainbx',{delay:500, origin:'top'});

sr.reveal('.work-text',{delay:500, origin:'left'});

sr.reveal('.main-text',{delay:500, origin:'left'});

sr.reveal('.contact-content',{delay:600, origin:'bottom'});


sr.reveal('.sub-service,.about,.portfolio,.service,.cta,.contact',{delay:200, origin:'bottom'})