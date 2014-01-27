var RoudebushFarms = (function() {

	function translateEmail() {
		$('.mail').each(function(i) {
			var mail = ($(this).text());
			mail = mail.replace(/ \[dot\] /gi, '.');
			mail = mail.replace(/ \[dash\] /gi, '-');
			mail = mail.replace(' [at] ', '@');

			var result = '<a href="mailto:'+mail+'">'+mail+'</a>';

			$(this).html(result);
		});
	}

	function translatePhone() {
		$('.phone').each(function(i) {
			var phone = ($(this).text());
			phone = phone.replace(/ \[dash\] /gi, '-');

			$(this).html(phone);
		});
	}

	function translateUrl() {
		$('.url').each(function(i) {
			var url = ($(this).text());
			url = url.replace(/ \[dot\] /gi, '.');
			url = url.replace(/ \[dash\] /gi, '-');
			url = url.replace(' [at] ', '@');

			var displayUrl = url.substring(url.indexOf('://') + 3);

			var result = '<a target="_blank" href="'+url+'">'+displayUrl+'</a>';

			$(this).html(result);
		});		
	}

	return {
		translateEmail: translateEmail,
		translatePhone: translatePhone,
		translateUrl: translateUrl
	};

})();