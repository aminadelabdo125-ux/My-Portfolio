// add class active to header on scroll

let Header = document.querySelector("header");

window.onscroll = function () {
    if (this.scrollY >= 50) {
        Header.classList.add("active");
    } else {
        Header.classList.remove("active");
    }
};

const excelImages = [
    { src: "img/OverView .png", alt: "Overview" },
    { src: "img/Sales.png", alt: "Sales Analysis" },
    { src: "img/Customers.png", alt: "Customer Analysis" }
];

const excelModal = document.getElementById("excelModal");
const excelMainImage = document.getElementById("excelMainImage");
const excelCounter = document.getElementById("excelImageCounter");
const excelThumbs = document.querySelectorAll(".excel_thumbnails img");
const viewButton = document.getElementById("viewExcelProject");

let currentExcelImage = 0;

function showExcelImage(index) {
    currentExcelImage = (index + excelImages.length) % excelImages.length;

    excelMainImage.src = excelImages[currentExcelImage].src;
    excelMainImage.alt = excelImages[currentExcelImage].alt;
    excelCounter.textContent = `${currentExcelImage + 1} / ${excelImages.length}`;

    excelThumbs.forEach((thumb, i) => {
        thumb.classList.toggle("active", i === currentExcelImage);
    });
}

viewButton.addEventListener("click", (event) => {
    event.preventDefault();
    showExcelImage(0);
    excelModal.classList.add("active");
});

document.getElementById("closeExcelModal").addEventListener("click", () => {
    excelModal.classList.remove("active");
});

document.getElementById("prevExcelImage").addEventListener("click", () => {
    showExcelImage(currentExcelImage - 1);
});

document.getElementById("nextExcelImage").addEventListener("click", () => {
    showExcelImage(currentExcelImage + 1);
});

excelThumbs.forEach((thumb, index) => {
    thumb.addEventListener("click", () => showExcelImage(index));
});


