if($('#token').val() != 'undefined'){
swal('token','save the token wou will need it for login \nyour token is : \n'+ $('#token').val(),'success').then(function () {
  window.location = '/login'
})
}
function encodepass() {

  var pass = $('#signup-password').val()
  var p = window.btoa(pass)
  console.log(pass)
  console.log(p)
  $.ajax({
  url: "/check",
  type: "POST",
  contentType: "application/json",
  dataType: 'jsonp',
    success: function(json) {
      $('#token').val(json)

    }
})
}
