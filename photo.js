// Function to update the displayed image and text
function upDate(previewPic) {
    // Log to check event triggering
    console.log("Event triggered");

    // Log information about the previewPic
    console.log("Alt: " + previewPic.alt);
    console.log("Source: " + previewPic.src);

    // Change text of the element with id of 'image'
    document.getElementById('image').innerHTML = previewPic.alt;

    // Change background image of the element with id of 'image'
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";

}

// Function to undo changes
function undo() {
    // Update background image url back to original
    document.getElementById('image').style.backgroundImage = "url('')";

    // Update text back to original
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
}
