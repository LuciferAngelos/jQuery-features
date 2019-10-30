$(function(){
	var $tasksList = $('#tasksList');
	var $taskInput = $('#taskInput');
	var $notification = $('#notification ');
	var displayNotification = function(){
		if(!$tasksList.children().length){		//подсчитывает дочерние элементыв
			$notification.fadeIn('fast');
		}else{
			$notification.css('display', 'none')		//css возвращает или изменяет css свойства у выбранных элементов
		}
	}

$('#taskAdd').on('click', function(){
	if(!$taskInput.val()){		//если значение инпута пустое
		return false 		//возвращаем фолс
	}

	$tasksList.append('<li>' + $taskInput.val() + '<button class="delete"> &#10006</button> </li>')		//метод вставляет содержимое в конец каждого элемента

	$taskInput.val('')		//очищаем значение

	displayNotification()		//отображение или скрытие всех заданий

	$('.delete').on('click', function(){
		var $parent = $(this).parent();		//объявляем с зис, потому что с сеттаймаутом может не сработать без него

		$parent.css('animation', 'fadeOut .3s linear')

		setTimeout(function(){
			$parent.remove();
			displayNotification();
		}, 295)
	})
})

});