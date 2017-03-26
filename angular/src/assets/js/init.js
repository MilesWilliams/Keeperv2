$(document).ready(function() {
	$('form').on('submit', function() {
		var item = $('form input');
		var notes = $('form textarea');
		var todo = {item: item.val(), notes: notes.val()};

		$.ajax({
			type: 'POST',
			url: '/add',
			data: todo,
			success: function(data) {
				location.replace('http://localhost:3000/');
			}
		});
		return false;
	});

	var listItem = $('li');
	var checkbox =  listItem.find('input[type="checkbox"]');
	$(checkbox).on('click', function() {
		var confirmDelete = window.confirm("Are you sure you want to delete this todo ?");

		if(confirmDelete === true) {
			
			var item = $(this).attr('data-id');
			
			$.ajax({
				type: 'DELETE',
				url: '/' + item,
				success: function(data) {
					location.reload();
				}
			});
		}
	});

	listItem.on('click', function() {
		$(this).toggleClass('open');
		$(this).siblings('li').removeClass('open');
	});
});