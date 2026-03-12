function update(previewPic){

    console.log("Mouse over image");
    
    console.log("Alt text:", previewPic.alt);
    console.log("Source:", previewPic.src);
    
    let imageDiv = document.getElementById("image");
    
    imageDiv.innerHTML = previewPic.alt;
    
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    
    }
    
    function undo(){
    
    console.log("Mouse left image");
    
    let imageDiv = document.getElementById("image");
    
    imageDiv.innerHTML = "Hover over an image below to display here.";
    
    imageDiv.style.backgroundImage = "url('')";
    
    }