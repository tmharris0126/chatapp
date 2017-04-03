import messageView from './message_view.js'

export default function chatroomView(store) {
    let state = store.getState();
    // console.log(state);
    let $user = state.currentUser;
    let $htmlInput = $(
      `<section class="chatroom hide-page">
          <h3>The Conversation</h3>
          <div id="chatwindow">

              <div class="chatroom-title">

              </div>

          </div>
          <aside id="activeusers">
          </aside>


          <span id="chatscreen">
<input class="chatinput" action="index.html" placeholder method="post">
</span>

          <div class="app">
              <!-- Text input to appear in output window -->

          </div>



      </section>

  </main>
`

//       `<section class="chatroom hide-page">
//             <h3>The Conversation</h3>
//             <div id="chatwindow">
//
//                 <div class="chatroom-title">
//
//                 </div>
//
//             </div>
//             <aside id="activeusers">
//             </aside>
//
//
//             <span id="chatscreen"> -->
//   <!-- <input id="chatinput" action="index.html" placeholder method="post"> -->
// <button id = "btninput" type = "button" name = "button">CHAT</button>
// <!-- </span>
//
//             <div class="app"> -->
//                 <!-- Text input to appear in output window -->
//
//             <!-- </div>
//
//
//
//         </section>`);
    var moment = require('moment');
    let $msgBtn = $($htmlInput).find('#btninput');
    let $msgInput = $($htmlInput).find('#chatinput');
    let timeStamp = moment().format('MM/DD/YYYY, h:mm:ssa');
    let chatroomTitle = $($htmlInput).find('chatroom-title');
    if (state.allData !== undefined) {
        chatroomTitle.html("")
        state.allData.forEach(function(message, i, arr) {
            if (message.fullMsg !== undefined) {
                chatroomTitle.prepend(messageView(store, message))
            }
        })
    };
    $msgBtn.on('click', function(event) {
        let $newMsg = $msgInput.val();
        let $fullMessage = `${$user} (${timeStamp}) : ${$newMsg}`
        store.dispatch({
            type: 'MSG_SENT',
            user: $user,
            timestamp: timeStamp,
            body: $newMsg,
            fullMsg: $fullMessage
        })
    })
    return $htmlInput
}
