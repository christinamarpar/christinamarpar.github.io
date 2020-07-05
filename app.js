// POST form data to zapier on submit
$("#myForm").submit(function(e) {
    e.preventDefault();
    $.ajax({
      url: "https://hooks.zapier.com/hooks/catch/7953193/ozomdd3",
      type: "post",
      data: $("#myForm").serialize(),
      success: function() {
        // Redirect to another success page
        window.location = "https://xtinapark.com/contact.html";
        }
    });
});
