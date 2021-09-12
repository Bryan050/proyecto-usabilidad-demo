$('#logo').click(function () {
	window.location.href = 'index.html'
});

$('.caja').click(function () {
	window.location.href = 'resultado.html'
});

$(document).ready(function () {
	$.ajaxSetup({ cache: false });
	$('#txtBuscar').keyup(function (e) {
		var searchField = $('#txtBuscar').val();
		if (e.key === "Escape" || searchField === "") {
			$("#result").html('');
		} else {
			$('#result').html('');
			$('#state').val('');
			var expression = new RegExp(searchField, "i");
			$.getJSON('data.json', function (data) {
				$.each(data, function (key, value) {
					if (value.name.search(expression) != -1 || value.location.search(expression) != -1) {
						$('#result').append('<li class="list-group-item link-class">' + '<span class="val-result">'+value.location+'</span>' + '</li>');
					}
				});
			});
		}
	});

	$('#result').on('click', 'li', function () {
		var click_text = $(this).text().split('|');
		$('#txtBuscar').val($.trim(click_text[0]));
		$("#result").html('');
	});
	$(document).click(function () {
		$("#result").html('');
	});
});
