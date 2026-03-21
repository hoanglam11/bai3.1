function upDate(previewPic) {
    console.log("Mouse over triggered");

    console.log("Alt:", previewPic.alt);
    console.log("Source:", previewPic.src);

    let imageDiv = document.getElementById("image");

    // Đổi text
    imageDiv.innerHTML = previewPic.alt;

    // Đổi ảnh nền
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
    console.log("Mouse out triggered");

    let imageDiv = document.getElementById("image");

    // Reset ảnh
    imageDiv.style.backgroundImage = "url('')";

    // Reset text
    imageDiv.innerHTML = "Hover over an image below to display here.";
}