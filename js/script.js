jQuery(function($) {
	
	$('#btn').click(function(e) {
		
		e.preventDefault();
		
		$('#ajax').html('<span>Отправка!</span>').fadeIn(1000,function() {
			
			
			//var result = 'name='+ $('input[name=name]').val() +'email=' +$('input[name=email]').val() +'subject='+ $('input[name=subject]').val() +'text='+$('textarea[name=text]').val();
			
			var result = $('#contact-form').serializeArray();
			
			
			$.ajax({
				
				url : 'server.php',
				type : 'POST',
				data : result,
				dataType : 'json',
				context : document.getElementById('ajax'),
				success : function (data, status, jqXHR) {
					
					
					
					$(this).find('span').fadeOut(300,function() {
						
						$(this).text('Добавлено!').fadeIn(300);
						
					});
					
					$(this).delay(1000).fadeOut(1000,function() {
						
						$('.grid_5').append('<h3>' + data.name + '</h3>' + '<p>' + data.text + '</p>');
						
					});
				},
				
				error : function() {
					
				}
				
			});
			
			
			
			
		});
		
	});
	
});

