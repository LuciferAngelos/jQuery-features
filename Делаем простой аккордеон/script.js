$('.skillbar').each(function(){		//для каждого элемента делаем что-то
	$(this).find('.skillbar-bar').animate({
		width:$(this).attr('data-percent')
	}, 2000)		//поиск внутри выбранных элементов и каждый элемент с дата атрибутом добавляем анимацию
})