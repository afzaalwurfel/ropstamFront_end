let baseurlBackend = "http://localhost:7000/api";
function signup(e){
e.preventDefault();
const formData = new FormData(document.querySelector('#signup_form'));
// alert('testing here');
$.ajax({
    url: baseurlBackend+"/register",
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
      console.log('signup response for debugging', response);
      if(response.error){
      $('.signupFormAlertDiv').css('display','');
      $('.signupFormAlertDiv').append(response.message);
      if(response.error.password){
        $('.signupFormAlertDiv').append(response.error.password);
    }
    if(response.error.email){
        $('.signupFormAlertDiv').append(response.error.email);
    }
    if(response.error.name){
        $('.signupFormAlertDiv').append(response.error.name);
    }
      }
    //   messageToaster('success', response.success, 'Success');
      setTimeout(() => {
        $('.signupFormAlertDiv').css('display','none');
        $('.signupFormAlertDiv').empty();
        // $('#login-page').modal("hide");
        $('.login-submit-btn').text('CONTINUE');
      }, 2500);
      if(response.success==true){
        $('.signupFormAlertDiv').css('display','');
        $('.signupFormAlertDiv').append(response.message);
        setTimeout(() => {
          $('.signupFormAlertDiv').css('display','none');
          $('.signupFormAlertDiv').empty();
          if(response.success == true){
        //   window.location = '/admin';
          }else{
            // window.location = '/admin/search-business';
          }
          $('.login-submit-btn').text('CONTINUE');
        }, 5000);
      }

    },
    error: function error(error) {
      console.log('login error accoured',error);
      $('.login-submit-btn').text('CONTINUE');
    }
  });
}