$(window).ready(function(){
	var wHeight = $(window).height();		//возвращает высоту элемента без учета отступов и рамки

	$('.slide')
	.height(wHeight)
	.scrollie({
		scrollOffset: -50,
		scrollingInView: function(elem){
			var bgColor = elem.data('background');
			$('body').css('background-color', bgColor)
		}
	})
})