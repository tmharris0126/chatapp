export default function app() {
    let $chatcontainer = $('#chatcontainer');
    let $chatroom = $('.chatroom');
    let input = $('#login-input');
    let form = $('#login-form');
    let chatinput = ('#chatinput')
    let span = ('#chatscreen')
    let chatter = [];
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

        // Load the messages for the chat using ajax
    function JSON(){   $.ajax({
            type: 'POST',
            url: 'http://tiny-za-server.herokuapp.com/collections/thatguyschat/'
            // data: $(this).serialize(),
            dataType: 'json';
        })
        $.getJSON('ajax/test.json', function(data) {
            var item = [];
            $.each(data, function(key, val) {
                items.push('<div>' + key + '</div>');
            })
        })
}
    });

    //Add event handler on message send
    //Add setInterval to refresh messages in chat container
		$('button').on('click', function() {
        var message = $('chatinput').val();
        var oldMessage = $('chatinput').html();
        $('chatinput').html(oldMessage + '<p>' + '</p>' + message)
    });
}
