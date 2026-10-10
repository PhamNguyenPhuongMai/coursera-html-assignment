
function upDate(previewPic) {
        console.log("Mouse over triggered!");

    console.log("Alt text: " + previewPic.alt);
    console.log("Image source: " + previewPic.src);

    let imageDiv = document.getElementById("image");

    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";

    imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
    let imageDiv = document.getElementById("image");

    imageDiv.style.backgroundImage = "url('')";

    imageDiv.innerHTML = "Hover over an image below to display here.";
}