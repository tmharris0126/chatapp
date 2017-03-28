export default function app() {
	let $chatcontainer = $('#chatcontainer');
	let $chatroom = $('.chatroom');
	let input = $('#login-input');
	let form = $('#login-form');


	$(form).on('submit', function(e) {
		e.preventDefault();
		input.val()

		$.ajax({
			type: 'POST',

		}).then(

		)
	});
};
