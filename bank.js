document.getElementById('login-submit').addEventListener('click', function(){
  const emailField=document.getElementById('user-email');
  const userEmail = emailField.value;
  

  const passwordField = document.getElementById('user-password');
  const userPassword = passwordField.value ;

  if( userEmail== 'sontan@bap.com' && userPassword == 'abcdef'){
      window.location.href ='banking.html';
  }

  
})