import { createStore } from 'redux'
import loginView from './login_view.js'


export default function app() {
    let $chatcontainer = $('#chatcontainer');
    let $chatroom = $('.chatroom');
    let input = $('#login-input');
    let form = $('#login-form');
    let chatinput = ('#chatinput')
    let span = ('#chatscreen')
    let chatter = [];
    let activeusers;


    const initialState = {
        currentUser: null,
        input: [{
            name: ''
        }],
        view: loginView

    }

    const reducer = function(state, action) {
        if (state === undefined) {
            return initialState;
        }
        switch (action.type) {
            case "USER_LOGIN":
                console.log('User Login Action Dispatched');
            default:
                console.debug("Unknown Action Occured", action);

                var newState = {
                    currentUser: action.user,
                    view: todoListView
                };
                return Object.assign({}, currentState, newState);
            case "DEBUG":
                console.log(currentState, action);
                return currentState;
        }
    }

    const store = createStore(reducer);

    const render = function() {
        let state = store.getState();
        $('#login-form').html(state.view(store));

        console.log('Rendered with state:')
        console.debug(state);
    }

    store.subscribe(render);
    store.dispatch({
        type: 'DEBUG'
    });



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

    })




}
