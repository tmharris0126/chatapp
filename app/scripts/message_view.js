export default function messageView(store, message) {
    // let $htmlInput = $(`<p class ="chat"><button class= "hide-input">DELETE</button> ${message.fullMsg}</p>`)
    let $deleteBtn = $($htmlInput).find('button');
    let $state = store.getState();

    if (state.currentUser === message.user) {
      $($htmlInput).find('button').removeClass('hide')
    } else {
      $($htmlInput).addClass('margin-indent')
    }
    $deleteBtn.on('click',(event)=>{
console.log('delete button');
store.dispach({type:"DELETE", message: message})

    })
    return $htmlInput
}
