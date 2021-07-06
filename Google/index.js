// Getting elements from html to change them
var inputFeild = document.getElementById("input");
var removeIcon = document.getElementById("clear");
var luckyBtn = document.getElementById("lucky");

// Adding Hidden Property for removeIcon
removeIcon.classList.add("hidden");

var searchString = "";

// Respond to user when typed in inputFeild
inputFeild.addEventListener("input", function(e){
    searchString += e.data;

    if (searchString && searchString !=""){


        // Removing the Hidden Property from Clear Icon when the user types in the Input Feild
        removeIcon.classList.remove("hidden");

        //Responding To the user when clicked on the button: Remove Icon
        removeIcon.addEventListener("click", function(){

            // resetting the value of inputFeild
            inputFeild.value = "";

            // Adding hidden property to removeIcon
            removeIcon.classList.add("hidden");
        });
    }
});

// When user clicks on luckyBtn the page redirects to https://google.com/doodles
luckyBtn.addEventListener("click", function(){
    // Redirect to the Link
    window.location.href = "https://www.google.com/doodles";
})