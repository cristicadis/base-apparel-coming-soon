
var txt = document.getElementById("error-text");
var error = document.getElementById("error-img");

function myFunction() {
  var email = document.getElementById("email").value;
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (email != ''){
      if (reg.test(email) == false )
        {

          txt.style.color = "hsl(0, 93%, 68%)";
          txt.innerHTML ="Invalid Email!";
          error.style.display = "block";

        } else {

          txt.style.color = "green";
          txt.innerHTML ="Valid Email!";
          error.style.display = "none";
        }
      } else {
        txt.style.color = "hsl(0, 93%, 68%)";
        txt.innerHTML ="Please enter your email!";

      }
}

// if the imput is empty then delete the error-img and error-text;

document.getElementById("email").addEventListener("input", function(){
  if(document.getElementById("email").value.length == 0)
  {
    error.style.display = "none";
    txt.innerHTML ="";
  }
});

// Trigger button click on center;

document.getElementById("email").addEventListener("keyup",function(event){
  if (event.keyCode === 13){
    event.preventDefault();
    document.getElementById("button").click();
  }
});
