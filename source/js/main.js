$(function() {
	var swiper = new Swiper(".header__slider .swiper-container", {
		pagination: {
			el: ".swiper-pagination"
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		}
	});

	var swiper = new Swiper("#video .swiper-container", {
		slidesPerView: "auto",
		freeMode: true,
		spaceBetween: 30,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		},
		pagination: {
			el: ".swiper-pagination",
			type: "progressbar"
		}
	});

	var swiper = new Swiper("#catalog .swiper-container", {
		slidesPerView: "auto",
		freeMode: true,
		spaceBetween: 30,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		},
		pagination: {
			el: ".swiper-pagination",
			type: "progressbar"
		}
	});

	var galleryTop = new Swiper("#popular .gallery-top", {
		spaceBetween: 20,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		}
	});
	var galleryThumbs = new Swiper("#popular .gallery-thumbs", {
		spaceBetween: 10,
		width: 250,
		slidesOffsetBefore: -55,
		centeredSlides: true,
		slidesPerView: "auto",
		touchRatio: 0.2,
		slideToClickedSlide: true
	});
	galleryTop.controller.control = galleryThumbs;
	galleryThumbs.controller.control = galleryTop;
});

$(function() {
	function getTimeRemaining(endtime) {
		var t = Date.parse(endtime) - Date.parse(new Date());
		var seconds = Math.floor((t / 1000) % 60);
		var minutes = Math.floor((t / 1000 / 60) % 60);
		var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
		var days = Math.floor(t / (1000 * 60 * 60 * 24));
		return {
			total: t,
			days: days,
			hours: hours,
			minutes: minutes,
			seconds: seconds
		};
	}

	function initializeClock(id, endtime) {
		var clock = document.getElementById(id);
		var daysSpan = clock.querySelector(".days");
		var hoursSpan = clock.querySelector(".hours");
		var minutesSpan = clock.querySelector(".minutes");
		var secondsSpan = clock.querySelector(".seconds");

		function updateClock() {
			var t = getTimeRemaining(endtime);

			daysSpan.innerHTML = t.days;
			hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
			minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
			secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

			if (t.total <= 0) {
				clearInterval(timeinterval);
			}
		}

		updateClock();
		var timeinterval = setInterval(updateClock, 1000);
	}

	var deadline = "January 01 2018 00:00:00 GMT+0300"; //for Ukraine
	var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
	initializeClock("clockdiv", deadline);
});

$(function() {
	$(".free-shipping .btn.btn-lg.btn-danger").popover({
		container: "body",
		template:
			'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body free-scrollbar "></div></div>'
	});

