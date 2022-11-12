let baseurlBackend = "http://localhost:7000/api";
function loginForm(e){
e.preventDefault();
const formData = new FormData(document.querySelector('#login'));
// alert('testing here');
$.ajax({
    url: baseurlBackend+"/login",
    // headers: {  'Access-Control-Allow-Origin': '*' },
    // crossDomain: true,
    type: 'POST',
    data: formData,
    dataType: "json",
    contentType: false,
    cache: false,
    processData: false,
    //THIS NEEDS TO BE GET
    success: function success(response) {
        localStorage.setItem('jwt_token',response.token);  
      console.log('login response for debugging', response.message);
      if(response.success == false){
      $('.loginFormAlertDiv').css('display','');
      $('.loginFormAlertDiv').append(response.message);
      }
    //   messageToaster('success', response.success, 'Success');
      setTimeout(() => {
        $('.loginFormAlertDiv').css('display','none');
        $('.loginFormAlertDiv').empty();
        // $('#login-page').modal("hide");
        $('.login-submit-btn').text('CONTINUE');
      }, 2500);
      if(response.success==true){
        $('.loginFormSuccessAlertDiv').css('display','');
        $('.loginFormSuccessAlertDiv').append(response.message);
        setTimeout(() => {
          $('.loginFormSuccessAlertDiv').css('display','none');
          $('.loginFormSuccessAlertDiv').empty();
          if(response.success == true){
        //   window.location = '/admin';
          }else{
            // window.location = '/admin/search-business';
          }
          $('.login-submit-btn').text('CONTINUE');
        }, 1500);
      }

    },
    error: function error(error) {
      console.log('login error accoured',error);
      $('.login-submit-btn').text('CONTINUE');
    }
  });
}