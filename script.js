document.getElementById('loadImage').addEventListener('click', function() {
    const imageUrl = document.getElementById('imageUrl').value;
    
    if(imageUrl) {
        const dogImage = document.getElementById('dogImage');
        dogImage.src = imageUrl;  
    } else {
        alert("Please enter a valid URL");
    }
});
