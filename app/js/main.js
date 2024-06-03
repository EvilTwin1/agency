gsap.registerPlugin(ScrollTrigger) 


items = document.querySelectorAll('.services-inner-item');

items.forEach(function(item, index) {
	item.addEventListener("mouseover", function(){
		const img = this.getAttribute('data-img');
		const text = this.getAttribute('data-text');

		const mainImg = document.getElementById('img');
		const mainText = document.getElementById('text');

		mainImg.setAttribute('src', img);
		mainText.innerHTML = text;
	})
	
});


// Получаем ссылки меню и секции
const menuLinks = document.querySelectorAll('.menu-link');
const sections = document.querySelectorAll('.section');

function updateActiveLink() {
    const scrollPosition = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            const sectionId = '#' + section.getAttribute('id');
            menuLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === sectionId);
            });
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

const tl = gsap.timeline()

tl.to('.s1',{
	scrollTrigger: {
		trigger: '.who',
		start: 'top center', 
        end: '', 
        scrub: 1,
	},
	yPercent:-90,
	
}).to('.s2',{
	scrollTrigger: {
		trigger: '.steps',
		start: '-=300px center', 
        end: '', 
        scrub: 1,
	},
	yPercent:-70,
	
}).to('.s3',{
	scrollTrigger: {
		trigger: '.steps',
		start: 'center center', 
        end: '+=500', 
        scrub: 1,
	},
	yPercent:-90,
	
})



document.querySelectorAll('.card').forEach(card => {
	const video = card.querySelector('video');

	card.addEventListener('mouseenter', () => {
	  video.play();
	});

	card.addEventListener('mouseleave', () => {
	  video.pause();
	  video.currentTime = 0;
	});
  });

// Паралакс


	// const parallaxElement = document.getElementById("parallax");
	// const parallaxCont = document.querySelector(".paralax-wraper");


	// parallax-container
	// paralax-wraper



	// if (parallaxCont) {
	// 	parallaxCont.addEventListener("mousemove", function (e) {
	// 		const x = (window.innerWidth - e.pageX * 2) / 600;
	// 		const y = (window.innerHeight - e.pageY * 2) / 600;

	// 		parallaxElement.style.transform = `translate(${x}%, ${y}%) scale(1.1)`;

	// 	});

	// 	parallaxCont.addEventListener("mouseleave", () => {
	// 		parallaxElement.style.transform = "translate(${translateX}%, ${translateY}%) scale(1.1)";
	// 	});
	// }



let header = document.querySelector(".hero-second")
	// headerH = document.querySelector(".header").clientHeight;

document.onscroll = function () {
	let scroll = window.scrollY;
	if (scroll == 0) {
		header.classList.remove("hero__top-fixed");
	}if (scroll > 600) {
		header.classList.add("hero__top-fixed");
	} else {
		header.classList.remove("hero__top-fixed");
	}
};




// const accordionSections = document.querySelectorAll('.accordion-section');

// if(accordionSections){
// 	accordionSections.forEach(section => {
// 		const header = section.querySelector('.accordion-header');
// 		const content = section.querySelector('.accordion-content');

// 		header.addEventListener('click', () => {
// 			section.classList.toggle('active');
// 			if (section.classList.contains('active')) {
// 				content.style.maxHeight = content.scrollHeight + 'px';
// 			} else {
// 				content.style.maxHeight = '0';
// 			}

// 			// Закрываем другие активные разделы
// 			accordionSections.forEach(otherSection => {
// 			if (otherSection !== section) {
// 				otherSection.classList.remove('active');
// 				otherSection.querySelector('.accordion-content').style.maxHeight = '0';
// 			}
// 			});
// 		});
// 	});
// }

const burger = document.querySelector('.burger');
const menu = document.querySelector('.mob-menu');
const close = document.querySelector('.mob-close');
const link = document.querySelectorAll('.mob-list-item');

burger.addEventListener('click', function(){
	menu.classList.add('open');
	const htmlElement = document.documentElement;
	htmlElement.style.overflow = 'hidden';
});

close.addEventListener('click', function(){
	menu.classList.remove('open');
	const htmlElement = document.documentElement;
	htmlElement.style.overflow = 'scroll';
});

link.forEach(function(item) {
	item.addEventListener('click', function(){
		menu.classList.remove('open');
		const htmlElement = document.documentElement;
		htmlElement.style.overflow = 'scroll';
	});
});

const fab = document.querySelector('.fab');

fab.addEventListener('click', function(){
	fab.classList.toggle('fab-active');
});

// fab.addEventListener('click', function(){
// 	fab.classList.remove('fab-active');
// });





