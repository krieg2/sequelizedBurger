$(document).ready(function() {

    // The "devour" button changes the status
    // of a single burger by id.
    $(".eat").on("click", function(event){

        var idObj = {
          id: $(this).data("id")
        };
        $.ajax({
          method: "PUT",
          url: "/api/burger",
          data: idObj
        }).success(function(data) {
          window.location.assign("/");
        });

	});

    // Submit button creates a new burger and sends it
    // to the server.
    $("#submit").on("click", function(event){

        var burgerName = $("#name").val().trim();
        console.log("here is the name: "+burgerName);

        if(burgerName === ""){

            alert("Please enter a description.");
        } else{

            var newBurger = {
                name: burgerName
            };

            $.ajax({
              method: "POST",
              url: "/api/newburger",
              data: newBurger,
              dataType: "html"
            });
        }
    });
});