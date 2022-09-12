window.onload = function () {

	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});

	let isMobile = {
		Android: function () { return navigator.userAgent.match(/Android/i); },
		BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
		iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
		Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
		Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
		any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
	};
	let bodyq = document.querySelector('body');

	if (isMobile.any()) {
		bodyq.classList.add('touch');
		let arrow = document.querySelectorAll('.menu__arrow');
		for (i = 0; i < arrow.length; i++) {
			let subMenu = arrow[i].nextElementSibling;
			let thisArrow = arrow[i];
			let liColor = thisArrow.parentNode;

			arrow[i].addEventListener('click', function () {
				subMenu.classList.toggle('open');
				thisArrow.classList.toggle('active');
				liColor.classList.toggle('col');
			});
		};

	} else {
		bodyq.classList.add('mouse');
	}

	

	let burger = document.querySelector(".menu__burger");
	let menu = document.querySelector(".menu");
	let body = document.querySelector("body");
	let header = document.querySelector(".header");

	burger.addEventListener("click", function(){
		burger.classList.toggle("active");
		menu.classList.toggle("active");
		body.classList.toggle("lock");
		header.classList.toggle("header__act");
	});


	// $('.menu__burger').click(function (event) {
	// 	$('.menu__burger,.menu').toggleClass('active');
	// 	$('body').toggleClass('lock');
	// });

	$('.page__slider').slick({
		arrows: false,
		dots: true
	});


	$('.reviews__slider').slick({
		arrows: true,
		dots: false,
		slidesToShow: 4,
		prevArrow: '<div class="slick-prev icon-arrow"></div>',
		nextArrow: '<div class="slick-next icon-arrow"></div>',
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	});

	$('.project__slider').slick({
		arrows: true,
		dots: false,
		slidesToShow: 5,
		prevArrow: '<div class="slick-prev icon-arrow"></div>',
		nextArrow: '<div class="slick-next icon-arrow"></div>',
		responsive: [
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				}
			},
		]
	});

	$('.simulators__slider').slick({
		arrows: true,
		dots: false,
		slidesToShow: 5,
		prevArrow: '<div class="slick-prev icon-arrow"></div>',
		nextArrow: '<div class="slick-next icon-arrow"></div>',
		responsive: [
			{
				breakpoint: 1500,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	});


	let filter = $("[data-filter]");

	filter.on("click", function (event) {
		event.preventDefault();

		let cat = $(this).data('filter');

		$("[data-filter]").removeClass('simulators__link_act')
		$(this).addClass('simulators__link_act');

		if (cat == 'new') {
			$("[data-cat]").removeClass("hide");
		} else {
			$("[data-cat]").each(function () {
				let workCat = $(this).data('cat');

				if (workCat != cat) {
					$(this).addClass('hide');
				} else {
					$(this).removeClass('hide');
				}
			});
		}
	});

};
