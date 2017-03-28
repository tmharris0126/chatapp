export default function app() {
    let $chatcontainer = $('#chatcontainer');
    let $chatroom = $('.chatroom');
    let input = $('#login-input');
    let form = $('#login-form');
    let storeuser = [];
    let activeusers;


    $('form button').on('click', function(e) {
        e.preventDefault();
				// Store the username from the form
        activeusers = input.val()

        //Show the hidden 'chatroom container'
				$('.chatroom').removeClass('hide-page');
				$('.chatroom #chatwindow').append(activeusers);

				//Hide the "login container"
				$('.mainmenu').addClass('hide-page');
				$('.mainmenu .homepage').append('')

				//Load the messages for the chat using ajax
    });

		//Add event handler on message send
		//Add setInterval to refresh messages in chat container
}
//   $.ajax({
//       type: 'POST',
//       url: 'http://tiny-za-server.herokuapp.com/collections/thatguyschat/',
//       data: $(this).serialize(),
//       dataType: 'json',
// 			success: function( resp ) {
// console.log( resp );
