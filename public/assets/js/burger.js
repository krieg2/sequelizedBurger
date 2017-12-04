$(function(){

    // The "devour" button changes the status
    // of a single burger by id.
    $(".eat").on("click", function(event){

        var id = $(this).data("id");

		$.ajax("/api/burger/" + id, {
	      type: "PUT"
	    }).then(function(){
	        location.reload();
	      }
	    );
	});

    // Submit button creates a new burger and sends it
    // to the server.
    $("#submit").on("click", function(event){

        var burgerName = $("#name").val().trim();

        if(burgerName === ""){

            alert("Please enter a description.");
        } else{

            var newBurger = {
                name: burgerName
            };
            $.ajax("/api/newburger/", {
              type: "POST",
              data: newBurger
            }).then(function(){
                location.reload();
              }
            );
        }
    });
});