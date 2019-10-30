$(document).ready(function(){
	$('.next').click(function(event){
		event.preventDefault();
		var currentImage = $('.img.curry');
		var currentImageIndex = $('.img.curry').index();
		var nextImageIndex = currentImageIndex + 1;
		var nextImage = $('.img').eq(nextImageIndex);		//выборка элемента по n-ому индексу
		currentImage.fadeOut(500);
		currentImage.removeClass('curry');

		if(nextImageIndex == ($('.img:last').index()+1)){
			$('.img').eq(0).fadeIn(500);
			$('.img').eq(0).addClass('curry');
		}else{
			nextImage.fadeIn(500);
			nextImage.addClass('curry');
		}
	});

	$('.prev').click(function(event){
		event.preventDefault();
		var currentImage = $('.img.curry');
		var currentImageIndex = $('.img.curry').index();
		var prevImageIndex = currentImageIndex - 1;
		var prevImage = $('.img').eq(prevImageIndex)		//выборка элемента по n-ому индексу

		currentImage.fadeOut(500);
		currentImage.removeClass('curry');
		prevImage.fadeIn(500);
		prevImage.addClass('curry');

	});
});

