
let lists = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let next = document.querySelector('#next');
let prev = document.querySelector('#prev');

let index = 0;

next.onclick = function () {
    if (index + 1 > items.length - 1) {
        index = 0;
    } else {
        index++;
    }
    LoadSlide()
}
prev.onclick = function () {
    if (index - 1 < 0) {
        index = items.length - 1;
    } else {
        index--;
    }
    LoadSlide()
}
let clearsDefaulEvent = setInterval(() => {
    next.onclick();
},3000);
function LoadSlide() {

    var checkSize = items[index].offsetLeft;
    lists.style.left = -checkSize + 'px';
    let dotsActive = document.querySelector('.dots .active');
    dotsActive.classList.remove('active');
    dots[index].classList.add('active');
    clearInterval(clearsDefaulEvent)
    clearsDefaulEvent = setInterval(() => {
        next.onclick();
    },3000);
}

dots.forEach((li,curen_index) => {
    li.addEventListener('click', function(){
        index = curen_index;
        LoadSlide()
    })
})



