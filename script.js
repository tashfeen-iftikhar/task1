const images = [
    "images/11.jpeg",
    "images/12.jpeg",
    "images/13.jpeg",
    "images/14.jpeg",
    "images/15.jpeg",
    "images/16.jpeg",
    "images/17.jpeg",
    "images/18.jpeg",
    "images/19.jpeg"
];

let currentImageIndex = 0;  
function openModal(index) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const caption = document.getElementById("caption");

    modal.style.display = "block";  
    modalImage.src = images[index];  

    currentImageIndex = index;  
}
function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";  
}


function changeImage(direction) {
    currentImageIndex += direction;  
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;  
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;  
    }

    const modalImage = document.getElementById("modalImage");
    const caption = document.getElementById("caption");

    modalImage.src = images[currentImageIndex];  
    caption.textContent = `Image ${currentImageIndex + 1}`;  
}
const imageItems = document.querySelectorAll(".Items");
imageItems.forEach((item, index) => {
    item.addEventListener("click", () => openModal(index));  
});
