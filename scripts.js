var leftImg = document.getElementById("imgLeft");
var rightImg = document.getElementById("imgRight");
var nextElem = document.getElementById("buttonLeft");
var prevElem = document.getElementById("buttonRight");
var number = 0;

function setSlide() {
	switch(number) {
		case 0:
			leftImg.src = "http://i.imgur.com/3g5jDoP.jpg";
			rightImg.src = "http://i.imgur.com/bxgTfeP.jpg";
		break;
		case 1:
			leftImg.src = "http://i.imgur.com/bxgTfeP.jpg";
			rightImg.src = "images/slider3.jpg";
		break;
		case 2:
			leftImg.src = "images/slider3.jpg";
			rightImg.src = "images/slider4.jpg";
		break;
		case 3:
			leftImg.src = "images/slider4.jpg";
			rightImg.src = "images/slider5.jpg";
		break;
		case 4:
			leftImg.src = "images/slider5.jpg";
			rightImg.src = "http://i.imgur.com/3g5jDoP.jpg";
		break;
	}
}

prevElem.addEventListener('click', function(e) {
	number = (number - 1);

	if (number < 0) {
		number = 4;
	}
	setSlide();
	e.preventDefault();
})

nextElem.addEventListener('click', function(e) {
	number = (number + 1);

	if (number > 4) {
		number = 0;
	}
	setSlide();
	e.preventDefault();
})

function moveSlide() {
	number = (number + 1);

		if (number > 4) {
			number = 0;
		}

	setSlide();
	setTimeout(moveSlide, 5000);
}

setTimeout(moveSlide, 5000);


$('#Photoapp').click(function() {
	$('html, body').animate({
		scrollTop: $('#Photoapp1').offset().top},
		300);
});

$('#Design').click(function() {
	$('html, body').animate({
		scrollTop: $('#Design1').offset().top},
		400);
});

$('#Download').click(function() {
	$('html, body').animate({
		scrollTop: $('#Download1').offset().top},
		400);
});