document.addEventListener('DOMContentLoaded', () => {
    function createUser() {
        let email = document.getElementById('username1').value;;
        let password = document.getElementById('password1').value;
        //let admin = '0';

        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(() => {
            document.querySelector('#haha').classList.add('none');
          })

          .catch(error => {
            changeErrMessage(error.message);
          });
      }
    

    
      function signIn() {
        let email = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(() => {
      
            document.querySelector('#ha').classList.add('none');
          })
          .catch(error => {
            changeErrMessage(error.message);
            console.log("unknown")
          });
      }
    const errorMessage = document.getElementById('error-message');
    function changeErrMessage(message) {
        errorMessage.innerHTML = message;
    }
    const btnSignin = document.getElementById('submit');
    btnSignin.addEventListener('click', signIn)

    const inputPassword = document.getElementById('password');
    inputPassword.addEventListener('keyup', e => {
        if(e.code === 'Enter' || e.code === 'NumpadEnter') signIn();
    });

    const btnSignup = document.getElementById('submit1');
    btnSignup.addEventListener('click', createUser)

    const upinputPassword = document.getElementById('password1');
    upinputPassword.addEventListener('keyup', e => {
        if(e.code === 'Enter' || e.code === 'NumpadEnter') createUser();
    });

    firebase.auth().onAuthStateChanged(user => {

        if(user) {
          user_temp =user.uid;
            console.log("user", user)
          document.querySelector('#hao123').classList.remove('none');
          document.querySelector('#ha').classList.add('none');
          var btnTer = document.getElementById('tetris');
          btnTer.addEventListener('click',()=>{
            window.location.href="./tetris.html"
          }
          );
          
          changeErrMessage('');
          const btnLogOut = document.getElementById('logout');
          btnLogOut.addEventListener('click', () => {
            firebase
              .auth()
              .signOut()
              .then(() => {
                window.location.reload();
              }).catch(error => {
                changeErrMessage(error.message)
              });
          })
        }
        else {
            console.log("QQ")
        }
      });



















})
