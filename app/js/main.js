// const swiper = new Swiper(".swiper", {
//   // Optional parameters
//   direction: "vertical",
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: ".swiper-pagination",
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },
// });

// gsap.to(".section-title", { rotation: 360, x: 100, duration: 1 });

// Паралакс

const parallaxElement = document.getElementById("parallax");
const parallaxCont = document.querySelector(".paralax-wraper");
// parallax-container
// paralax-wraper
if (parallaxCont) {
	parallaxCont.addEventListener("mousemove", function (e) {
		const x = (window.innerWidth - e.pageX * 2) / 600;
		const y = (window.innerHeight - e.pageY * 2) / 600;

		parallaxElement.style.transform = `translate(${x}%, ${y}%) scale(1.1)`;
		// parallaxElement.style.transform = `translateX(${x}%) translateY(${y}%) scale(1.1)`;
	});

	parallaxCont.addEventListener("mouseleave", () => {
		parallaxElement.style.transform = "translate(${translateX}%, ${translateY}%) scale(1.1)";
	});
}

let header = document.querySelector(".header-container"),
	headerH = document.querySelector(".header").clientHeight;

document.onscroll = function () {
	let scroll = window.scrollY;
	if (scroll > 10) {
		header.classList.add("fixed");
	} else {
		header.classList.remove("fixed");
	}
};

//  3d

let el1 = document.getElementById("card-service1");
if (el1) {
	const height1 = el1.clientHeight;
	const width1 = el1.clientWidth;
	el1.addEventListener("mousemove", handleMove);

	/* Define function a */
	function handleMove(e) {
		/*
		 * Get position of mouse cursor
		 * With respect to the element
		 * On mouseover
		 */
		/* Store the x position */
		const xVal = e.layerX;
		/* Store the y position */
		const yVal = e.layerY;

		/*
		 * Calculate rotation valuee along the Y-axis
		 * Here the multiplier 20 is to
		 * Control the rotation
		 * You can change the value and see the results
		 */
		const yRotation = 15 * ((xVal - width1 / 2) / width1);

		/* Calculate the rotation along the X-axis */
		const xRotation = -15 * ((yVal - height1 / 2) / height1);

		/* Generate string for CSS transform property */
		const string = "perspective(500px) scale(0.96) rotateX(" + xRotation + "deg) rotateY(" + yRotation + "deg)";

		/* Apply the calculated transformation */
		el1.style.transform = string;
	}

	el1.addEventListener("mouseout", function () {
		el1.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)";
	});

	el1.addEventListener("mousedown", function () {
		el1.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)";
	});

	/* Add listener for mouseup, simulate release of mouse click */
	el1.addEventListener("mouseup", function () {
		el1.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)";
	});
}

let el2 = document.getElementById("card-service2");
if (el2) {
	/* Get the height and width of the element */
	const height2 = el2.clientHeight;
	const width2 = el2.clientWidth;

	/*
	 * Add a listener for mousemove event
	 * Which will trigger function 'handleMove'
	 * On mousemove
	 */
	el2.addEventListener("mousemove", handleMove2);

	/* Define function a */
	function handleMove2(e) {
		/*
		 * Get position of mouse cursor
		 * With respect to the element
		 * On mouseover
		 */
		/* Store the x position */
		const xVal = e.layerX;
		/* Store the y position */
		const yVal = e.layerY;

		/*
		 * Calculate rotation valuee along the Y-axis
		 * Here the multiplier 20 is to
		 * Control the rotation
		 * You can change the value and see the results
		 */
		const yRotation = 25 * ((xVal - width2 / 2) / width2);

		/* Calculate the rotation along the X-axis */
		const xRotation = -25 * ((yVal - height2 / 2) / height2);

		/* Generate string for CSS transform property */
		const string = "perspective(500px) scale(.96) rotateX(" + xRotation + "deg) rotateY(" + yRotation + "deg)";

		/* Apply the calculated transformation */
		el2.style.transform = string;
	}

	el2.addEventListener("mouseout", function () {
		el2.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)";
	});

	el2.addEventListener("mousedown", function () {
		el2.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)";
	});

	/* Add listener for mouseup, simulate release of mouse click */
	el2.addEventListener("mouseup", function () {
		el2.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)";
	});
}
let rangeSize = document.getElementById("RangeSize");
let rangeMonth = document.getElementById("RangeMonth");
const сontainer = document.getElementById("imageContainer");

const boxSize = document.getElementById("text");
const price = document.getElementById("price-big");
const priceMonth = document.getElementById("price-small");

if (rangeSize) {
	function updateResult() {
		let value1 = rangeSize.value;
		let value2 = rangeMonth.value;

		if (value1 == 1 && value2 == 1) {
			boxSize.textContent = "BOX S";
			сontainer.className = "";
			сontainer.classList.add("slide1");
			price.textContent = "50";
			priceMonth.textContent = "50";
		} else if (value1 == 1 && value2 == 2) {
			сontainer.className = "";
			сontainer.classList.add("slide1");
			text.textContent = "BOX S";
			price.textContent = "80";
			priceMonth.textContent = "40";
		} else if (value1 == 1 && value2 == 3) {
			сontainer.className = "";
			сontainer.classList.add("slide1");
			text.textContent = "BOX S";
			price.textContent = "120";
			priceMonth.textContent = "40";
		} else if (value1 == 1 && value2 == 4) {
			сontainer.className = "";
			сontainer.classList.add("slide1");
			text.textContent = "BOX S";
			price.textContent = "160";
			priceMonth.textContent = "40";
		} else if (value1 == 1 && value2 == 5) {
			сontainer.className = "";
			сontainer.classList.add("slide1");
			text.textContent = "BOX S";
			price.textContent = "200";
			priceMonth.textContent = "40";
		} else if (value1 == 1 && value2 == 6) {
			сontainer.className = "";
			сontainer.classList.add("slide1");
			text.textContent = "BOX S";
			price.textContent = "240";
			priceMonth.textContent = "40";
		} else if (value1 == 1 && value2 == 7) {
			сontainer.className = "";
			сontainer.classList.add("slide1");
			text.textContent = "BOX S";
			price.textContent = "280";
			priceMonth.textContent = "40";
		} else if (value1 == 1 && value2 == 8) {
			сontainer.className = "";
			сontainer.classList.add("slide1");
			text.textContent = "BOX S";
			price.textContent = "320";
			priceMonth.textContent = "40";
		} else if (value1 == 1 && value2 == 9) {
			сontainer.className = "";
			сontainer.classList.add("slide1");
			text.textContent = "BOX S";
			price.textContent = "360";
			priceMonth.textContent = "40";
		} else if (value1 == 1 && value2 == 10) {
			сontainer.className = "";
			сontainer.classList.add("slide1");
			text.textContent = "BOX S";
			price.textContent = "400";
			priceMonth.textContent = "40";
		} else if (value1 == 1 && value2 == 11) {
			сontainer.className = "";
			сontainer.classList.add("slide1");
			text.textContent = "BOX S";
			price.textContent = "440";
			priceMonth.textContent = "40";
		} else if (value1 == 1 && value2 == 12) {
			сontainer.className = "";
			сontainer.classList.add("slide1");
			text.textContent = "BOX S";
			price.textContent = "300";
			priceMonth.textContent = "25";
		}
		// M
		else if (value1 == 2 && value2 == 1) {
			сontainer.className = "";
			сontainer.classList.add("slide2");
			text.textContent = "BOX M";
			price.textContent = "60";
			priceMonth.textContent = "60";
		} else if (value1 == 2 && value2 == 2) {
			сontainer.className = "";
			сontainer.classList.add("slide2");
			text.textContent = "BOX M";
			price.textContent = "100";
			priceMonth.textContent = "50";
		} else if (value1 == 2 && value2 == 3) {
			сontainer.className = "";
			сontainer.classList.add("slide2");
			text.textContent = "BOX M";
			price.textContent = "150";
			priceMonth.textContent = "50";
		} else if (value1 == 2 && value2 == 4) {
			сontainer.className = "";
			сontainer.classList.add("slide2");
			text.textContent = "BOX M";
			price.textContent = "200";
			priceMonth.textContent = "50";
		} else if (value1 == 2 && value2 == 5) {
			сontainer.className = "";
			сontainer.classList.add("slide2");
			text.textContent = "BOX M";
			price.textContent = "250";
			priceMonth.textContent = "50";
		} else if (value1 == 2 && value2 == 6) {
			сontainer.className = "";
			сontainer.classList.add("slide2");
			text.textContent = "BOX M";
			price.textContent = "300";
			priceMonth.textContent = "50";
		} else if (value1 == 2 && value2 == 7) {
			сontainer.className = "";
			сontainer.classList.add("slide2");
			text.textContent = "BOX M";
			price.textContent = "350";
			priceMonth.textContent = "50";
		} else if (value1 == 2 && value2 == 8) {
			сontainer.className = "";
			сontainer.classList.add("slide2");
			text.textContent = "BOX M";
			price.textContent = "400";
			priceMonth.textContent = "50";
		} else if (value1 == 2 && value2 == 9) {
			сontainer.className = "";
			сontainer.classList.add("slide2");
			text.textContent = "BOX M";
			price.textContent = "450";
			priceMonth.textContent = "50";
		} else if (value1 == 2 && value2 == 10) {
			сontainer.className = "";
			сontainer.classList.add("slide2");
			text.textContent = "BOX M";
			price.textContent = "500";
			priceMonth.textContent = "50";
		} else if (value1 == 2 && value2 == 11) {
			сontainer.className = "";
			сontainer.classList.add("slide2");
			text.textContent = "BOX M";
			price.textContent = "550";
			priceMonth.textContent = "50";
		} else if (value1 == 2 && value2 == 12) {
			сontainer.className = "";
			сontainer.classList.add("slide2");
			text.textContent = "BOX M";
			price.textContent = "400";
			priceMonth.textContent = "33.33";
		}
		// L
		else if (value1 == 3 && value2 == 1) {
			сontainer.className = "";
			сontainer.classList.add("slide3");
			text.textContent = "BOX L";
			price.textContent = "90";
			priceMonth.textContent = "90";
		} else if (value1 == 3 && value2 == 2) {
			сontainer.className = "";
			сontainer.classList.add("slide3");
			text.textContent = "BOX L";
			price.textContent = "140";
			priceMonth.textContent = "70";
		} else if (value1 == 3 && value2 == 3) {
			сontainer.className = "";
			сontainer.classList.add("slide3");
			text.textContent = "BOX L";
			price.textContent = "210";
			priceMonth.textContent = "70";
		} else if (value1 == 3 && value2 == 4) {
			сontainer.className = "";
			сontainer.classList.add("slide3");
			text.textContent = "BOX L";
			price.textContent = "280";
			priceMonth.textContent = "70";
		} else if (value1 == 3 && value2 == 5) {
			сontainer.className = "";
			сontainer.classList.add("slide3");
			text.textContent = "BOX L";
			price.textContent = "350";
			priceMonth.textContent = "70";
		} else if (value1 == 3 && value2 == 6) {
			сontainer.className = "";
			сontainer.classList.add("slide3");
			text.textContent = "BOX L";
			price.textContent = "420";
			priceMonth.textContent = "70";
		} else if (value1 == 3 && value2 == 7) {
			сontainer.className = "";
			сontainer.classList.add("slide3");
			text.textContent = "BOX L";
			price.textContent = "490";
			priceMonth.textContent = "70";
		} else if (value1 == 3 && value2 == 8) {
			сontainer.className = "";
			сontainer.classList.add("slide3");
			text.textContent = "BOX L";
			price.textContent = "560";
			priceMonth.textContent = "70";
		} else if (value1 == 3 && value2 == 9) {
			сontainer.className = "";
			сontainer.classList.add("slide3");
			text.textContent = "BOX L";
			price.textContent = "630";
			priceMonth.textContent = "70";
		} else if (value1 == 3 && value2 == 10) {
			сontainer.className = "";
			сontainer.classList.add("slide3");
			text.textContent = "BOX L";
			price.textContent = "700";
			priceMonth.textContent = "70";
		} else if (value1 == 3 && value2 == 11) {
			сontainer.className = "";
			сontainer.classList.add("slide3");
			text.textContent = "BOX L";
			price.textContent = "770";
			priceMonth.textContent = "70";
		} else if (value1 == 3 && value2 == 12) {
			сontainer.className = "";
			сontainer.classList.add("slide3");
			text.textContent = "BOX L";
			price.textContent = "600";
			priceMonth.textContent = "50";
		}
		// XL
		else if (value1 == 4 && value2 == 1) {
			сontainer.className = "";
			сontainer.classList.add("slide4");
			text.textContent = "BOX XL";
			price.textContent = "150";
			priceMonth.textContent = "150";
		} else if (value1 == 4 && value2 == 2) {
			сontainer.className = "";
			сontainer.classList.add("slide4");
			text.textContent = "BOX XL";
			price.textContent = "240";
			priceMonth.textContent = "120";
		} else if (value1 == 4 && value2 == 3) {
			сontainer.className = "";
			сontainer.classList.add("slide4");
			text.textContent = "BOX XL";
			price.textContent = "360";
			priceMonth.textContent = "120";
		} else if (value1 == 4 && value2 == 4) {
			сontainer.className = "";
			сontainer.classList.add("slide4");
			text.textContent = "BOX XL";
			price.textContent = "480";
			priceMonth.textContent = "120";
		} else if (value1 == 4 && value2 == 5) {
			сontainer.className = "";
			сontainer.classList.add("slide4");
			text.textContent = "BOX XL";
			price.textContent = "600";
			priceMonth.textContent = "120";
		} else if (value1 == 4 && value2 == 6) {
			сontainer.className = "";
			сontainer.classList.add("slide4");
			text.textContent = "BOX XL";
			price.textContent = "720";
			priceMonth.textContent = "120";
		} else if (value1 == 4 && value2 == 7) {
			сontainer.className = "";
			сontainer.classList.add("slide4");
			text.textContent = "BOX XL";
			price.textContent = "840";
			priceMonth.textContent = "120";
		} else if (value1 == 4 && value2 == 8) {
			сontainer.className = "";
			сontainer.classList.add("slide4");
			text.textContent = "BOX XL";
			price.textContent = "960";
			priceMonth.textContent = "120";
		} else if (value1 == 4 && value2 == 9) {
			сontainer.className = "";
			сontainer.classList.add("slide4");
			text.textContent = "BOX XL";
			price.textContent = "1080";
			priceMonth.textContent = "120";
		} else if (value1 == 4 && value2 == 10) {
			сontainer.className = "";
			сontainer.classList.add("slide4");
			text.textContent = "BOX XL";
			price.textContent = "1200";
			priceMonth.textContent = "120";
		} else if (value1 == 4 && value2 == 11) {
			сontainer.className = "";
			сontainer.classList.add("slide4");
			text.textContent = "BOX XL";
			price.textContent = "1320";
			priceMonth.textContent = "120";
		} else if (value1 == 4 && value2 == 12) {
			сontainer.className = "";
			сontainer.classList.add("slide4");
			text.textContent = "BOX XL";
			price.textContent = "1000";
			priceMonth.textContent = "83,33";
		}
		// XXL
		else if (value1 == 5 && value2 == 1) {
			сontainer.className = "";
			сontainer.classList.add("slide5");
			text.textContent = "BOX XXL";
			price.textContent = "200";
			priceMonth.textContent = "200";
		} else if (value1 == 5 && value2 == 2) {
			сontainer.className = "";
			сontainer.classList.add("slide5");
			text.textContent = "BOX XXL";
			price.textContent = "320";
			priceMonth.textContent = "160";
		} else if (value1 == 5 && value2 == 3) {
			сontainer.className = "";
			сontainer.classList.add("slide5");
			text.textContent = "BOX XXL";
			price.textContent = "480";
			priceMonth.textContent = "160";
		} else if (value1 == 5 && value2 == 4) {
			сontainer.className = "";
			сontainer.classList.add("slide5");
			text.textContent = "BOX XXL";
			price.textContent = "640";
			priceMonth.textContent = "160";
		} else if (value1 == 5 && value2 == 5) {
			сontainer.className = "";
			сontainer.classList.add("slide5");
			text.textContent = "BOX XXL";
			price.textContent = "800";
			priceMonth.textContent = "160";
		} else if (value1 == 5 && value2 == 6) {
			сontainer.className = "";
			сontainer.classList.add("slide5");
			text.textContent = "BOX XXL";
			price.textContent = "960";
			priceMonth.textContent = "160";
		} else if (value1 == 5 && value2 == 7) {
			сontainer.className = "";
			сontainer.classList.add("slide5");
			text.textContent = "BOX XXL";
			price.textContent = "1120";
			priceMonth.textContent = "160";
		} else if (value1 == 5 && value2 == 8) {
			сontainer.className = "";
			сontainer.classList.add("slide5");
			text.textContent = "BOX XXL";
			price.textContent = "1280";
			priceMonth.textContent = "160";
		} else if (value1 == 5 && value2 == 9) {
			сontainer.className = "";
			сontainer.classList.add("slide5");
			text.textContent = "BOX XXL";
			price.textContent = "1440";
			priceMonth.textContent = "160";
		} else if (value1 == 5 && value2 == 10) {
			сontainer.className = "";
			сontainer.classList.add("slide5");
			text.textContent = "BOX XXL";
			price.textContent = "1600";
			priceMonth.textContent = "160";
		} else if (value1 == 5 && value2 == 11) {
			сontainer.className = "";
			сontainer.classList.add("slide5");
			text.textContent = "BOX XXL";
			price.textContent = "1760";
			priceMonth.textContent = "160";
		} else if (value1 == 5 && value2 == 12) {
			сontainer.className = "";
			сontainer.classList.add("slide5");
			text.textContent = "BOX XXL";
			price.textContent = "1200";
			priceMonth.textContent = "100";
		}
	}

	rangeSize.addEventListener("input", updateResult);
	rangeMonth.addEventListener("input", updateResult);
	updateResult();
}

const accordionSections = document.querySelectorAll('.accordion-section');

if(accordionSections){
	accordionSections.forEach(section => {
		const header = section.querySelector('.accordion-header');
		const content = section.querySelector('.accordion-content');

		header.addEventListener('click', () => {
			section.classList.toggle('active');
			if (section.classList.contains('active')) {
				content.style.maxHeight = content.scrollHeight + 'px';
			} else {
				content.style.maxHeight = '0';
			}

			// Закрываем другие активные разделы
			accordionSections.forEach(otherSection => {
			if (otherSection !== section) {
				otherSection.classList.remove('active');
				otherSection.querySelector('.accordion-content').style.maxHeight = '0';
			}
			});
		});
	});
}

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





