// Jquery onload function
$(document).ready(function() {

    // Hide all sections 
    $(".about").hide();
    $(".gallery").hide();
    $(".services").hide();
    $(".complain").hide();
    $(".complainform").hide();
    
    // Show the about section when the page loads
    $(".aboutbtn").click(function() {
        $(".about").eq(0).show();
        $(".gallery").hide();
        $(".services").hide();
        $(".complain").hide();
        $(".complainform").hide();
    });
    
    // Show the gallery section when the button is clicked
    $(".gallerybtn").click(function() {
        $(".gallery").eq(0).show();
        $(".about").hide();
        $(".services").hide();
        $(".complain").hide();
        $(".complainform").hide();
    });

    // Show the services section when the button is clicked 
    $(".servicesbtn").click(function() {
        $(".services").eq(0).show();
        $(".about").hide();
        $(".gallery").hide();
        $(".complain").hide();
        $(".complainform").hide();
    });

    // Create an array of image URLs
    const imgs = [
        "./imgs/1.jpg",
        "./imgs/2.jpg",
        "./imgs/3.jpg",
        "./imgs/4.jpg",
        "./imgs/5.jpg",
        "./imgs/6.jpg",
        "./imgs/7.jpg",
        "./imgs/8.jpg",
    ];

    // Initialize the current index
    let currentIndex = 0; 
    // Change Image on click right
    $(".right").click(function() {
        $(".img").fadeOut(300, function() { 
            currentIndex = (currentIndex + 1) % imgs.length; 
            $(".img").attr("src", imgs[currentIndex]); 
            $(".img").fadeIn(300);
        });
    });

    // Change Image on click left
    $(".left").click(function() {
        $(".img").fadeOut(300, function() { 
        currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
        $(".img").attr("src", imgs[currentIndex]); 
        $(".img").fadeIn(300);
        });
    });

    // Show the complain section when the button is clicked
    $(".complainbtn").click(function() {
        $(".complain").eq(0).show(); 
        $(".about").hide();
        $(".gallery").hide();
        $(".services").hide();
        $(".complainform").hide();
    }); 
    
    
    $(".savebtn").click(function() {
        // Get the values from the form fields
        const name = $("#name").val();
        const email = $("#email").val();
        const phone = $("#phone").val();
        const complaint = $("#complain").val(); // Corrected the ID to match the HTML
    
        // Check if any input is empty
        if (!name || !email || !phone || !complaint) {
            alert("Please fill in all fields before submitting.");
        } else {
            // Update the complainform div with the values
            $(".complainform .name").text(`Your name is: ${name}`);
            $(".complainform .email").text(`Your email is: ${email}`);
            $(".complainform .phone").text(`Your Phone is: ${phone}`);
            $(".complainform .complaintext").text(`Your complain is: ${complaint}`);
            // Hide the complain section and show the complain form
            $(".complain").hide(); 
            $(".about").hide();
            $(".gallery").hide();
            $(".services").hide();
            $(".complainform").eq(0).show(); 
        }
    });

    // Show the complain section when the Back to edit button is clicked
    $(".backbtn").click(function() {
        $(".complain").eq(0).show(); 
        $(".about").hide();
        $(".gallery").hide();
        $(".services").hide();
        $(".complainform").hide();
    });
});

