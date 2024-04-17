//아이디입력요소
document.addEventListener("DOMContentLoaded", function() {
  let elInputUsername = document.querySelector('#id'); 
  let elSuccessMessage = document.querySelector('.success-message'); 
  let elFailureMessage = document.querySelector('.failure-message'); 
  let elFailureMessageTwo = document.querySelector('.failure-message2'); 

  //아이디 길이확인
  function idLength(value) {
      return value.length >= 6 && value.length <= 20
    }

    //비밀번호영어만 있는 지 확인
  function onlyNumberAndEnglish(str) {
      return /^[A-Za-z0-9][A-Za-z0-9]*$/.test(str);
    }

    //아이디 입력값에 따라 실행되는 메시지 
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

    //비밀번호 입력요소
  let elInputPassword = document.querySelector('#password'); 
  let elInputPasswordRetype = document.querySelector('#password-retype');
  let elMismatchMessage = document.querySelector('.mismatch-message'); 
  let elStrongPasswordMessage = document.querySelector('.strongPassword-message');

    //강력비밀번호확인
  function strongPassword (str) {
      return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(str);
    }

    //비밀번호 일치 여부확인
  function isMatch (password1, password2) {
      return password1 === password2;
    }

    //비밀번호 입력값에 따라 실행되는 메시지
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

    //비밀번호 확인 입력값이 변경될때마다 실행되는 메시지
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

  //회원가입이 완료되면 나오는 aler창
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    alert("회원가입이 완료되었습니다");

    //로그인창으로 이동
    window.location.href = "/login/index/index.html"; 
  });
});
