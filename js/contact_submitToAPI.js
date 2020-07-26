function submitToAPI(e) {
    e.preventDefault();
    var URL = "https://uy3jnnjkr4.execute-api.us-east-1.amazonaws.com/prod/rest/contact";

    var name = document.getElementById("name-input").value;
    var email = document.getElementById("#email-input").value;
    var subject = document.getElementById("#subject-input").value;
    var message = document.getElementById("#message-input").value;

         var nameRE = /[A-Za-z]{1}[A-Za-z]/;
         if (!nameRE.test(name.val())) {
            alert ("Name cannot be less than 2 characters");
            return;
         }

         var emailRE = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
         if (!emailRE.test(email.val())) {
             alert ("Please enter a valid email address");
             return;
         }

         if (name=="" || email=="" || subject=="" || message=="")
         {
             alert("Please fill all required fields");
             return false;
         }
    
    var data = {
       name : name,
       email : email,
       subject : subject,
       message : message
     };

     var xmlhttp = new XMLHttpRequest();
     xmlhttp.open("POST", URL);
     xmlhttp.setRequestHeader("Content-Type", "application/json");
     xmlhttp.send(JSON.stringify(data));
     xmlhttp.onreadystatechange = function() {
     if (xmlhttp.readyState === 4) {
      //   var response = JSON.parse(xmlhttp.responseText);
        if (xmlhttp.status === 200 ) {
           console.log('successful');
           document.getElementById("contact-form").innerHTML = "<h1>Thank you for your message/feedback<br>our team will get back to you soon!</h1>";
         } else {
            console.log('failed');
        }
     }
  }
  
  document.getElementById('contact-form').reset();
    
  }

//     $.ajax({
//       type: "POST",
//       url: "https://uy3jnnjkr4.execute-api.us-east-1.amazonaws.com/prod/rest/contact",
//       dataType: "json",
//       crossDomain: "true",
//       contentType: "application/json; charset=utf-8",
//       data: JSON.stringify(data),
//       cache: false,
      
//       success: function () {
//         // clear form and show a success message
//         alert("Successful");
//         document.getElementById("contact-form").reset();
//         location.reload();
//       },
//       error: function () {
//         // show an error message
//         alert("UnSuccessful");
//       }});
//   }
