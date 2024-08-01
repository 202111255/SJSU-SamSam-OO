function changeImage(event, element) {
    event.preventDefault(); // 기본 링크 동작을 막음

    var icons = document.querySelectorAll('ul li img');
    for (var i = 0; i < icons.length; i++) {
        var img = icons[i];
        var originalSrc = img.getAttribute('src');
        var newSrc = originalSrc.replace('click_', ''); 
        img.setAttribute('src', newSrc);
    }
    
    // 클릭된 이미지의 src 속성을 업데이트
    var clickedImg = element.querySelector('img');
    var currentSrc = clickedImg.getAttribute('src');
    
    if (!currentSrc.includes('click_')) {
        var newSrc = currentSrc.replace('./img/Icon/', './img/Icon/click_');
        clickedImg.setAttribute('src', newSrc);
    }

    // 링크로 이동
    var link = element.getAttribute('href');
    if (link) {
        window.location.href = link;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const templateTabs = document.querySelectorAll('.logo');
    templateTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const templateType = tab.dataset.template;
            localStorage.setItem('selectedTemplate', templateType);
            window.location.href = './main.html';
        });
    });
});


var preloadImages = function (srcs) {
    srcs.forEach(function (src) {
        var img = new Image();
        img.src = src;
    });
};

// 사용할 이미지 경로들을 배열로 지정
var imagePaths = [
    './img/Icon/home_icon.png',
    './img/Icon/subscribe.png',
    './img/Icon/my_bag.png',
    './img/Icon/account_icon.png'
];

// 페이지 로드 시 이미지 프리로딩
preloadImages(imagePaths);


// 슬라이드
let currentIndex = 0;
        const slides = document.querySelector('.slides');
        const dots = document.querySelectorAll('.dot');
        const totalSlides = document.querySelectorAll('.slide').length;

        const updateDots = () => {
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        };

        setInterval(() => {
            currentIndex = (currentIndex + 1) % totalSlides;
            const offset = -currentIndex * 100;
            slides.style.transform = `translateX(${offset}%)`;
            updateDots();
        }, 4000); // 슬라이드 변경 간격을 4초로 설정

