function submitToAPI(e) {
    e.preventDefault();
    var URL = "https://uy3jnnjkr4.execute-api.us-east-1.amazonaws.com/prod/rest/contact";

         var Namere = /[A-Za-z]{1}[A-Za-z]/;
         if (!Namere.test($("#name-input").val())) {
            alert ("Name cannot be less than 2 characters");
            return;
         }

         if ($("#email-input").val()=="") {
            alert ("Please enter your email id");
            return;
         }

         if ($("#subject-input").val()=="") {
            alert ("Please enter a subject line");
            return;
         }

         if ($("#message-input").val()=="") {
            alert ("Please enter a message line");
            return;
         }

         var reemail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
         if (!reemail.test($("#email-input").val())) {
             alert ("Please enter valid email address");
             return;
         }

    var name = $("#name-input").val();
    var email = $("#email-input").val();
    var subject = $("#subject-input").val();
    var message = $("#message-input").val();
    
    var data = {
       name : name,
       email : email,
       subject : subject,
       message : message
     };

    $.ajax({
      type: "POST",
      url: "https://uy3jnnjkr4.execute-api.us-east-1.amazonaws.com/prod/rest/contact",
      //url : "https://uy3jnnjkr4.execute-api.us-east-1.amazonaws.com/prod",
      crossDomain: "true",
      contentType: "application/json; charset=utf-8",

      dataType: "json",
      data: JSON.stringify(data),
      cache: false,
      
      success: function () {
        // clear form and show a success message
        alert("Successful");
        document.getElementById("contact-form").reset();
        location.reload();
      },
      error: function () {
        // show an error message
        alert("UnSuccessful");
      }});
  }
