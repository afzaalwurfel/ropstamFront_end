let baseurlBackend = "http://localhost:7000/api";
function logoutuseingbackEndApi(e){
e.preventDefault();
const formData = new FormData();

$.ajax({
    type: 'GET',
    url: baseurlBackend+"/logout",
    data: {
        token: localStorage.getItem('jwt_token')
    },
    // crossDomain: true,
    // Authorization:{'token':localStorage.getItem('jwt_token')},
    // "beforeSend": function (xhr) {
    //     xhr.setRequestHeader('Authorization',
    //         "Bearer " + localStorage.getItem('jwt_token'));
    // },
    //THIS NEEDS TO BE GET
    success: function success(response) {
      console.log('signup response for debugging', response);
    //   $('.signupFormAlertDiv').css('display','');
    //   $('.signupFormAlertDiv').append(response.message);
    //   if(response.error.password){
    //     $('.signupFormAlertDiv').append(response.error.password);
    // }
    if(response.success){
        localStorage.removeItem('jwt_token');
        window.location = '/login';
    }
      setTimeout(() => {
        $('.signupFormAlertDiv').css('display','none');
        $('.signupFormAlertDiv').empty();
        // $('#login-page').modal("hide");
        $('.login-submit-btn').text('CONTINUE');
      }, 2500);
    },
    error: function error(error) {
      console.log('login error accoured',error);
    }
  });
}