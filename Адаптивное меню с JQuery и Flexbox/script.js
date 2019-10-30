$('.mobile-tab').hide();		//свернули по умолчанию
$('#burg').on('click', function(){		//при клике на бург
	$('.mobile-tab').slideToggle()		//переключаем видимость блока
})