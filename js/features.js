let upload = document.getElementById("upload");
let preview = document.getElementById("preview");
let uploader = document.getElementById("uploader");
let gallery = document.getElementById("gallery");

function addToGallery(src) {
    let img = new Image();
    img.src = src;
    img.classList = "gallery-img";
    gallery.appendChild(img);
}

uploader.addEventListener("click", function () {
    upload.click();
});

upload.addEventListener("change", function () {
    let file = this.files;
    // console.log(file);
    for (let i = 0 ; i < file.length; i++) {
        const reader = new FileReader();
        reader.addEventListener("load", function () {
            addToGallery(reader.result);
            // preview.src = reader.result;
        })
        reader.readAsDataURL(file[i]);
    }
})