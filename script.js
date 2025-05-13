const slider = document.querySelector("#slider");
const images = [
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/519d3140743001.578bc6d8a47fa.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/433a1d40743001.578bc6d8a5147.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/939db740743001.578bc6d8a569d.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1cea4e40743001.578bc6d8a6a1b.jpg"
];

let currentIndex = 0;

const SliderFunc = () => {
    currentIndex = (currentIndex + 1) % images.length;
    console.log(currentIndex);
    slider.src = images[currentIndex];
}


 setInterval(SliderFunc, 3000);