let elInputUsername = document.querySelector('#id'); 
let elSuccessMessage = document.querySelector('.success-message'); 
let elFailureMessage = document.querySelector('.failure-message'); 
let elFailureMessageTwo = document.querySelector('.failure-message2'); 

function idLength(value) {
    return value.length >= 6 && value.length <= 20
  }

function onlyNumberAndEnglish(str) {
    return /^[A-Za-z0-9][A-Za-z0-9]*$/.test(str);
  }

  elInputUsername.onkeyup = function () {
    if (elInputUsername.value.length !== 0) {
      if(onlyNumberAndEnglish(elInputUsername.value) === false) {
        elSuccessMessage.classList.add('hide');
        elFailureMessage.classList.add('hide');
        elFailureMessageTwo.classList.remove('hide'); 
      }
      else if(idLength(elInputUsername.value) === false) {
        elSuccessMessage.classList.add('hide'); 
        elFailureMessage.classList.remove('hide'); 
        elFailureMessageTwo.classList.add('hide'); 
      }
      else if(idLength(elInputUsername.value) || onlyNumberAndEnglish(elInputUsername.value)) {
        elSuccessMessage.classList.remove('hide'); 
        elFailureMessage.classList.add('hide'); 
        elFailureMessageTwo.classList.add('hide'); 
      }
    }
    else {
      elSuccessMessage.classList.add('hide');
      elFailureMessage.classList.add('hide');
      elFailureMessageTwo.classList.add('hide');
    }
  }


let elInputPassword = document.querySelector('#password'); 
let elInputPasswordRetype = document.querySelector('#password-retype');
let elMismatchMessage = document.querySelector('.mismatch-message'); 
let elStrongPasswordMessage = document.querySelector('.strongPassword-message');

function strongPassword (str) {
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(str);
  }

  function isMatch (password1, password2) {
    return password1 === password2;
  }

  elInputPassword.onkeyup = function () {


    if (elInputPassword.value.length !== 0) {
      if(strongPassword(elInputPassword.value)) {
        elStrongPasswordMessage.classList.add('hide'); 
      }
      else {
        elStrongPasswordMessage.classList.remove('hide'); 
      }
    }

    else {
      elStrongPasswordMessage.classList.add('hide');
    }
  };

  elInputPasswordRetype.onkeyup = function () {

    if (elInputPasswordRetype.value.length !== 0) {
      if(isMatch(elInputPassword.value, elInputPasswordRetype.value)) {
        elMismatchMessage.classList.add('hide'); 
      }
      else {
        elMismatchMessage.classList.remove('hide'); 
      }
    }
    else {
      elMismatchMessage.classList.add('hide'); 
    }
  };