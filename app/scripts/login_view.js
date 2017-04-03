export default function loginView(store){

let $htmlInput = $(
  `  <main id="chatcontainer" class="mainmenupage">

        <section class="mainmenu hide-page-page">

            <header>
                <h1>That Guy's Chatroom</h1>
            </header>

            <div class="homepage">
                <form id="login-form">
                    <input type="text" id="login-input" placeholder="Create a Username">
                    <button type="submit">Submit</button>
                </form>
            </div>

        </section>


`
  // `<section class="mainmenu vis-page">
  //     <header>
  //         <h1>'TG Chatroom'</h1>
  //     </header>
  //     <div class="homepage">
  //         <form id="login-form">
  //             <input type="text" id="login-input" placeholder="Create a Username">
  //             <button  type="submit" id="login-button">Submit</button>
  //         </form>
  //     </div>
  // </section>`
);

let $loginInput = $($htmlInput).find('#login-input');
let $loginButton = $($htmlInput).find('#login-button');

$($loginButton).on('click', (event)=>(
  store.dispach({
    type: 'LOGIN_USER',
    user: $loginInput.val()
  })
));
console.log($htmlInput);
return $htmlInput;


}
