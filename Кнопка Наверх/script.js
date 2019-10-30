var $btnTop = $('.btn-top');
$(window).on('scroll', function(){
	if ($(window).scrollTop() >= 20){		//если проскроллено на 20 пикселей вниз от начала экрана, кнопка появляется
		$btnTop.fadeIn()
	}else{
		$btnTop.fadeOut()		//если вверх - исчезает
	}
})

$btnTop.on('click', function(){
	$('html, body').animate({scrollTop:0}, 900);
})