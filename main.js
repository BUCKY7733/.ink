/***************************************************
==================== JS INDEX ======================
****************************************************
// PreLoader Js
// Mobile Menu Js
// Mouse Custom Cursor
// Sidebar Js
// Body overlay Js
// Sticky Header Js
// Data CSS Js
// Nice Select Js
// Date Picker
// Smooth Scroll Js
// bd-hero-active Slider Js
// bd-offer-active slider Js
// bd-award-active slider Js
// bd-testimonial-active Slider Js
// bd-blog-active Slider Js
// bd-blog-2-active Slider Js
// bd-roomview-active Slider Js
// bd-facility-active Slider Js
// Masonary Js
// magnificPopup Js
// text__scroll slider Js
// bd-service-active Js
// bd-gallery-active Js
// bd-testimonial-2-active Js
// bd-room-active Js
// bd-foodmenu-active Js
// bd-room-active-2 Js
// bd-offer-details-active Js
// Show Login Toggle Js
// Show Coupon Toggle Js
// Create An Account Toggle Js
// Shipping Box Toggle Js
// InHover Active Js
// gsap plugin resister 
// Scroll Smoother 
// 25. Title Animation
// Text Animation
// Gsap Slider on scroll, Scroll Slider GSAP 
// Fade In Up Animation |  bdFadeUp
// Fade in Left Animation
// fade in right animation
// Home 2 hero animation
// Accordion-fix JS



****************************************************/

(function ($) {
	"use strict";
	// Get Device width
	let res_device = window.innerWidth;

	var windowOn = $(window);
	// PreLoader Js
	windowOn.on("load", function () {
		$("#loading").fadeOut(300);
	});

	// Mobile Menu Js
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "1199",
		meanExpand: ['<i class="fal fa-plus"></i>'],
	});
	$('#mobile-menu-all').meanmenu({
		meanMenuContainer: '.mobile-menu-all',
		meanScreenWidth: "5000",
		meanExpand: ['<i class="fal fa-plus"></i>'],
	});


	// Mouse Custom Cursor
	function itCursor() {
		var myCursor = jQuery(".mouseCursor");
		if (myCursor.length) {
			if ($("body")) {
				const e = document.querySelector(".cursor-inner"),
					t = document.querySelector(".cursor-outer");
				let n,
					i = 0,
					o = !1;
				(window.onmousemove = function (s) {
					o ||
						(t.style.transform =
							"translate(" + s.clientX + "px, " + s.clientY + "px)"),
						(e.style.transform =
							"translate(" + s.clientX + "px, " + s.clientY + "px)"),
						(n = s.clientY),
						(i = s.clientX);
				}),
					(e.style.visibility = "visible"),
					(t.style.visibility = "visible");
			}
		}
	}
	itCursor();

	$(".slider-drag").on("mouseenter", function () {
		$(".mouseCursor").addClass("cursor-big");
	});
	$(".slider-drag").on("mouseleave", function () {
		$(".mouseCursor").removeClass("cursor-big");
	});

	// Sidebar Js
	$(".offcanvas-open-btn").on("click", function () {
		$(".offcanvas__area").addClass("offcanvas-opened");
		$(".body-overlay").addClass("opened");
	});
	$(".offcanvas__close-btn").on("click", function () {
		$(".offcanvas__area").removeClass("offcanvas-opened");
		$(".body-overlay").removeClass("opened");
	});

	// Body overlay Js
	$(".body-overlay").on("click", function () {
		$(".offcanvas__area").removeClass("offcanvas-opened");
		$(".body-overlay").removeClass("opened");
	});

	// Sticky Header Js
	windowOn.on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 100) {
			$("#header-sticky").removeClass("header-sticky");
		} else {
			$("#header-sticky").addClass("header-sticky");
		}
	});

	// sticky header 2
	if (res_device < 992) {
		windowOn.on('scroll', function () {
			var scroll = $(window).scrollTop();
			if (scroll < 100) {
				$("#header-top_sticky").removeClass("header-sticky");
			} else {
				$("#header-top_sticky").addClass("header-sticky");
			}
		});
	}

	// last child menu
	$('.wp-menu nav > ul > li').slice(-4).addClass('menu-last');


	// Data CSS Js
	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});

	$("[data-mask").each(function () {
		$(this).css("-webkit-mask-image", "url( " + $(this).attr("data-mask") + "  )");
		$(this).css("mask-image", "url( " + $(this).attr("data-mask") + "  )");
	});

	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	});

	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});

	// Nice Select Js
	$('.bd-nice-select').niceSelect();

	// Date Picker
	$(document).ready(function () {

		$(function () {
			$(".bd-date-picker").datepicker();
		});
	})

	// Smooth Scroll Js
	function smoothSctollTop() {
		$('.smooth a').on('click', function (event) {
			var target = $(this.getAttribute('href'));
			if (target.length) {
				event.preventDefault();
				$('html, body').stop().animate({
					scrollTop: target.offset().top - 120
				}, 1500);
			}
		});
	}
	smoothSctollTop();

	// mainSlider
	function mainSlider() {
		var BasicSlider = $('.slider-active');
		BasicSlider.on('init', function (e, slick) {
			var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
			doAnimations($firstAnimatingElements);
		});
		BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
			var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			doAnimations($animatingElements);
		});
		BasicSlider.slick({
			autoplay: true,
			autoplaySpeed: 4000,
			dots: false,
			rtl: rtl_setting,
			fade: true,
			arrows: true,
			prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
			nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
			responsive: [{
				breakpoint: 767,
				settings: {
					dots: false,
					arrows: false
				}
			}]
		});

		function doAnimations(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function () {
				var $this = $(this);
				var $animationDelay = $this.data('delay');
				var $animationType = 'animated ' + $this.data('animation');
				$this.css({
					'animation-delay': $animationDelay,
					'-webkit-animation-delay': $animationDelay
				});
				$this.addClass($animationType).one(animationEndEvents, function () {
					$this.removeClass($animationType);
				});
			});
		}
	}
	mainSlider();


	// bd-hero-active Slider Js
	if (jQuery(".bd-hero-active").length > 0) {
		let sliderActive1 = ".bd-hero-active";
		let sliderInit1 = new Swiper(sliderActive1, {
			slidesPerView: 1,
			slidesPerColumn: 1,
			paginationClickable: true,
			loop: true,
			rtl: rtl_setting,
			observeParents: true,
			observer: true,
			effect: 'fade',

			autoplay: {
				delay: 8000,
			},

			// If we need pagination
			pagination: {
				el: ".bd-hero-pagination",
				dynamicBullets: false,
				clickable: true,
			},

			// Navigation arrows
			navigation: {
				nextEl: ".bd-hero-next",
				prevEl: ".bd-hero-prev",
			},

			a11y: false,
		});

		function animated_swiper(selector, init) {
			let animated = function animated() {
				$(selector + " [data-animation]").each(function () {
					let anim = $(this).data("animation");
					let delay = $(this).data("delay");
					let duration = $(this).data("duration");

					$(this)
						.removeClass("anim" + anim)
						.addClass(anim + " animated")
						.css({
							webkitAnimationDelay: delay,
							animationDelay: delay,
							webkitAnimationDuration: duration,
							animationDuration: duration,
						})
						.one(
							"webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
							function () {
								$(this).removeClass(anim + " animated");
							}
						);
				});
			};
			animated();
			// Make animated when slide change
			init.on("slideChange", function () {
				$(sliderActive1 + " [data-animation]").removeClass("animated");
			});
			init.on("slideChange", animated);
		}

		animated_swiper(sliderActive1, sliderInit1);
	}

	// bd-offer-active slider Js
	var offerSlider = new Swiper('.bd-offer-active', {
		slidesPerView: 1,
		spaceBetween: 30,
		rtl: rtl_setting,
		observeParents: true,
		observer: true,
		loop: false,
		slidesPerGroup: 2,
		navigation: {
			nextEl: ".bd-offer-slider-next",
			prevEl: ".bd-offer-slider-prev",
		},
		//slider dots
		pagination: {
			el: '.bd-offer-pagination',
			clickable: true,
		},
		breakpoints: {
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
				slidesPerGroup: 1,
			},
		},
	});
	// bd-award-active slider Js
	var awardSlider = new Swiper('.bd-award-active', {
		slidesPerView: 1,
		spaceBetween: 30,
		rtl: rtl_setting,
		observeParents: true,
		observer: true,
		loop: true,
		//slider dots
		pagination: {
			el: '.bd-award-pagination',
			clickable: true,
		},
		breakpoints: {
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
		},
	});
	// bd-testimonial-active Slider Js *
	var testimonialSlider = new Swiper('.bd-testimonial-active', {
		slidesPerView: 1,
		spaceBetween: 0,
		rtl: rtl_setting,
		observeParents: true,
		observer: true,
		loop: true,
		autoplay: {
			delay: 5000,
		},
		pagination: {
			el: '.bd-testimonial-pagination',
			clickable: true,
		},
		breakpoints: {
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
		},
	});

	var testimonial4Slider = new Swiper('.bd-testimonial-4-active', {
		slidesPerView: 1,
		spaceBetween: 30,
		rtl: rtl_setting,
		observeParents: true,
		observer: true,
		loop: false,
		autoplay: {
			delay: 5000,
		},
		pagination: {
			el: '.bd-testimonial-4-pagination',
			clickable: true,
		},
		breakpoints: {
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
		},
	});

	// bd-blog-active Slider Js
	var blogSlider = new Swiper('.bd-blog-active', {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		rtl: rtl_setting,
		observeParents: true,
		observer: true,

		breakpoints: {
			'1200': {
				slidesPerView: 2,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
		},
	});

	// bd-blog-2-active Slider Js
	var blogSlider = new Swiper('.bd-blog-2-active', {
		slidesPerView: 1,
		spaceBetween: 30,
		rtl: rtl_setting,
		observeParents: true,
		observer: true,
		loop: true,
		navigation: {
			nextEl: ".bd-blog-2-next",
			prevEl: ".bd-blog-2-prev",
		},
		breakpoints: {
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
		},
	});

	// bd-roomview-active Slider Js
	var roomviewTab = ['Queen Deluxe', 'Junior Suites', 'Master Suite', 'Suites', 'Deluxe', 'Superior']
	var testimonialSlider = new Swiper('.bd-roomview-active', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		rtl: rtl_setting,
		centeredSlides: true,
		observeParents: true,
		observer: true,
		pagination: {
			el: '.bd-roomview__pagination',
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (roomviewTab[index]) + '</span>';
			},
		},
		navigation: {
			nextEl: ".bd-roomview-next",
			prevEl: ".bd-roomview-prev",
		},
		breakpoints: {
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
		},
	});

	// bd-facility-active Slider Js
	var facilitySlider = new Swiper('.bd-facility-active', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: false,
		rtl: rtl_setting,
		observeParents: true,
		observer: true,
		pagination: {
			el: ".bd-facility-slider__paginaton",
			type: "fraction",
		},

		breakpoints: {
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
		},
	});

	// Masonary Js
	$('.grid').imagesLoaded(function () {
		// init Isotope
		var $grid = $('.grid').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: '.grid-item',
			}
		});

		// filter items on button click
		$('.bd-filter-btn').on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
		});

		//for menu active class
		$('.bd-filter-btn button').on('click', function (event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});

	});

	// magnificPopup Js
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true,
		}
	});

	/* magnificPopup video view */
	$(".popup-video").magnificPopup({
		type: "iframe",
	});

	// text__scroll slider Js
	let text__scroll = new Swiper(".text__scroll", {
		loop: true,
		freemode: true,
		slidesPerView: "auto",
		allowTouchMove: false,
		centeredSlides: true,
		spaceBetween: 30,
		speed: 15000,
		autoplay: {
			delay: 1,
			disableOnInteraction: true,
		},
	});

	// bd-service-active Js
	let bdService = new Swiper('.bd-service-active', {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: false,
		rtl: rtl_setting,
		observeParents: true,
		observer: true,
		centeredSlides: false,
		slidesPerGroup: 2,
		pagination: {
			el: '.bd-service-pagination',
			clickable: true,
		},

		breakpoints: {
			'1400': {
				slidesPerView: 4,
			},
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1.5,
			},
		},
	});

	// bd-gallery-active Js
	let bdGallery = new Swiper('.bd-gallery-active', {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		rtl: rtl_setting,
		observeParents: true,
		observer: true,
		centeredSlides: true,
		pagination: {
			el: '.bd-gallery-pagination',
			clickable: true,
		},
		breakpoints: {
			'1600': {
				slidesPerView: 5.6,
			},
			'1400': {
				slidesPerView: 4.6,
			},
			'1200': {
				slidesPerView: 3.6,
			},
			'992': {
				slidesPerView: 2.5,
			},
			'768': {
				slidesPerView: 2.1,
			},
			'576': {
				slidesPerView: 1.5,
			},
		},
	});

	// bd-testimonial-2-active Js
	$('.bd-testimonial-2-active').slick({
		dots: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		vertical: true,
		arrows: false,
		verticalSwiping: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					dots: false,
				}
			}
		]
	});

	// bd-room-active Js
	let bdRoom = new Swiper('.bd-room-active', {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		rtl: rtl_setting,
		observeParents: true,
		observer: true,
		centeredSlides: true,
		autoHeight: true,
		pagination: {
			el: '.bd-room-pagination',
			clickable: true,
		},

		breakpoints: {
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1.5,
			},
		},
	});

	// bd-foodmenu-active Js
	let bdFoodmenu = new Swiper('.bd-foodmenu-active', {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: false,
		rtl: rtl_setting,
		observeParents: true,
		observer: true,
		centeredSlides: false,
		navigation: {
			nextEl: ".bd-foodmenu-next",
			prevEl: ".bd-foodmenu-prev",
		},

		breakpoints: {
			'1700': {
				slidesPerView: 5.3,
			},
			'1400': {
				slidesPerView: 4.3,
			},
			'992': {
				slidesPerView: 3.1,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1.5,
			},
		},
	});

	// bd-amenities-slider Js
	let bdAmenitiesSlider = new Swiper('.bd-amenities-slider', {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: false,
		rtl: rtl_setting,
		observeParents: true,
		observer: true,
		centeredSlides: false,
		navigation: {
			nextEl: ".bd-amenities-slider-next",
			prevEl: ".bd-amenities-slider-prev",
		},

		breakpoints: {
			'1700': {
				slidesPerView: 3,
			},
			'1400': {
				slidesPerView: 2.5,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 1.5,
			},
		},
	});
	
	let bdAmenitiesSliderTwo = new Swiper('.bd-amenities-slider-two', {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: false,
		rtl: rtl_setting,
		observeParents: true,
		observer: true,
		centeredSlides: false,
		navigation: {
			nextEl: ".bd-amenities-slider-two-next",
			prevEl: ".bd-amenities-slider-two-prev",
		},

		breakpoints: {
			'1700': {
				slidesPerView: 3,
			},
			'1400': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 1.5,
			},
			'576': {
				slidesPerView: 1.2,
			},
		},
	});

	// bd-room-slider-three active js 
	let bdRoomThree = new Swiper('.bd-room-slider-three', {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: false,
		rtl: rtl_setting,
		observeParents: true,
		observer: true,
		centeredSlides: false,
		navigation: {
			nextEl: ".bd-room-slider-three-next",
			prevEl: ".bd-room-slider-three-prev",
		},

		breakpoints: {
			'1700': {
				slidesPerView: 3,
			},
			'1400': {
				slidesPerView: 2.4,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 1.5,
			},
		},
	});

	// bd-room-active-2 Js
	let bdRoom2 = new Swiper('.bd-room-active-2', {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		rtl: rtl_setting,
		observeParents: true,
		observer: true,
		centeredSlides: true,
		autoHeight: true,
		pagination: {
			el: '.bd-room-pagination-2',
			clickable: true,
		},

		breakpoints: {
			'1600': {
				slidesPerView: 3.5,
			},
			'1400': {
				slidesPerView: 3.5,
			},
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 1.5,
			},
			'576': {
				slidesPerView: 1.2,
			},
		},
	});

	//bd-offer-details-active Js
	let bdOfferDetails = new Swiper('.bd-offer-details-active', {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		rtl: rtl_setting,
		observeParents: true,
		observer: true,
		centeredSlides: true,
		navigation: {
			nextEl: ".bd-offerdetails-next",
			prevEl: ".bd-offerdetails-prev",
		},

		breakpoints: {
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
		},
	});


	// 
	function mediaSize() {
		// / Set the matchMedia /
		if (window.matchMedia('(min-width: 992px)').matches) {
			const panels = document.querySelectorAll('.col-custom')
			panels.forEach(panel => {
				panel.addEventListener('click', () => {
					removeActiveClasses()
					panel.classList.add('active')
				})
			})

			function removeActiveClasses() {
				panels.forEach(panel => {
					panel.classList.remove('active')
				})
			}

		} else {
			// / Reset for CSS changes – Still need a better way to do this! /
			$(".col-custom").addClass("active");
		}
	};
	// / Call the function /
	mediaSize();
	// / Attach the function to the resize event listener /
	window.addEventListener('resize', mediaSize, false);

	// Show Login Toggle Js
	$('#showlogin').on('click', function () {
		$('#checkout-login').slideToggle(900);
	});

	//Show Coupon Toggle Js
	$('#showcoupon').on('click', function () {
		$('#checkout_coupon').slideToggle(900);
	});

	// Create An Account Toggle Js
	$('#cbox').on('click', function () {
		$('#cbox_info').slideToggle(900);
	});

	// Shipping Box Toggle Js
	$('#ship-box').on('click', function () {
		$('#ship-box-info').slideToggle(1000);
	});


	// InHover Active Js
	$('.hover__active').on('mouseenter', function () {
		$(this).addClass('active').parent().siblings().find('.hover__active').removeClass('active');
	});

  
	// wow activation 
	new WOW().init();

})(jQuery);