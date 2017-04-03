import {
    createStore
} from 'redux'
import loginView from './login_view.js'
import chatroomView from './chatroom_view.js'
import messageView from './message_view.js'


export default function app() {
    let $chatcontainer = $('#chatcontainer');
    let $chatroom = $('.chatroom');
    let input = $('#login-input');
    let form = $('#login-form');
    let chatinput = ('#chatinput')
    let span = ('#chatscreen')
    let chatTer = [];
    let activeusers;

    const url = 'http://tiny-za-server.herokuapp.com/collections/chatter';
    const initialState = {
        currentUser: null,
        name: null,
        time: null,
        messageBody: null,
        fullMsg: [],
        view: loginView

    };


    const reducer = function(currentState, action) {
        if (currentState === undefined) {
            return initialState;
        }
        switch (action.type) {
            case "USER_LOGIN":
                console.log('User Login Action Dispatched');
            default:
                console.debug("Unknown Action Occured", action);

                var newState = {
                    currentUser: action.user,
                    view: loginView
                };
                $.getJSON(url).then((data) => {
                    store.dispatch({
                        type: "MSG_LOADED",
                        user: currentState.currentUser,
                        allData: data
                    })
                })
                return Object.assign({}, currentState, newState);
                // case "DEBUG":
                //     console.log(currentState, action);
                return currentState;

            case "MSG_LOADED":
                var newState = {
                    currentUser: action.user,
                    allData: action.allData
                }
                return Object.assign({}, currentState, newState);


            case "MSG_SENT":
                $.ajax({
                    url: url,
                    type: "POST",
                    dataType: "JSON",
                    data: {
                        user: action.user,
                        msgBody: action.messageBody,
                        time: action.timestamp,
                        fullMsg: action.fullMsg
                    }
                }).then(function(data, status, xhr) {
                    store.dispatch({
                        type: "LOAD_MSG"
                    })
                });
                return currentState;

            case "DEBUG":
                return currentState;

        }
    };

    const store = createStore(reducer, initialState);

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



    // $('form button').on('click', function(e) {
    //     e.preventDefault();
    //     // Store the username from the form
    //     activeusers = input.val()
    //
    //     //Show the hidden 'chatroom container'
    //     $('.chatroom').removeClass('hide-page');
    //     $('.chatroom #chatwindow').append(activeusers);
    //
    //     //Hide the "login container"
    //     $('.mainmenu').addClass('hide-page');
    //     $('.mainmenu .homepage').append('')
    //
    // })




}
