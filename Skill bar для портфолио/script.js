var accordion = function(){
	var data = $('.accordion').attr('data-accordion');

	$('.accordion-header').on('click', function(){
		if (data === 'close'){
			$('.accordion-body').slideUp();		//SlideUp - показываем элемент за счет плавного разворачивания
			if($(this).hasClass('active')){		//hasClass - проверят, имеет ли данный элемент класс. Если имеет, возвращает тру, если нет - фолс.
				$(this).toggleClass('active');
			}else{
				$('.accordion-header').removeClass('active');
				$(this).toggleClass('active');
			}
		}
		else{
			$(this).toggleClass('active');
		}
		$(this).next('.accordion-body').not(':animated').slideToggle()		//осуществляет поиск элементов, лежащих после этого элемента, а затем методом .slideToggle()  показываем элементы меню
	});
}

accordion();