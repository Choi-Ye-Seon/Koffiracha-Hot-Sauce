$(document).ready(function () {
  const videoPc = $('.intro-video.pc')[0];
  const videoMobile = $('.intro-video.mobile')[0];
  const cartDotEl = document.querySelector('#nav .btn-cart circle');
  
  const mediaQuery = window.matchMedia('(min-width: 992px)');
  
  // 비디오 로드 후, circle 노출
  function showCartDot() {
    gsap.to(cartDotEl, { autoAlpha: 1, duration: 0.1 });
  }
  
  function videoChange(){
    // 모든 비디오 정지 및 초기화
    if (videoPc) {
      videoPc.pause();
      videoPc.currentTime = 0;
      videoPc.removeEventListener('ended', showCartDot);
    }
    if (videoMobile) {
      videoMobile.pause();
      videoMobile.currentTime = 0;
      videoMobile.removeEventListener('ended', showCartDot);
    }


    gsap.set(cartDotEl, {autoAlpha: 0});

    if(mediaQuery.matches){
      if(videoPc){
        videoPc.play();
        videoPc.addEventListener('ended', showCartDot, { once: true });
      }
    }else{
      if(videoMobile){
        videoMobile.play();
        videoMobile.addEventListener('ended', showCartDot, { once: true });
      }
    }
  }
  
videoChange();
mediaQuery.addEventListener('change', videoChange);
});


// Scroll text 롤링 애니메이션
gsap.to('.sc-scroll-text .scroll-component', 30, {
  xPercent: -213,
  repeat: -1,
  ease: 'none'
});


// Visual scale 애니메이션
const visual = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-visual',
    start: '0% 80%',
    end: '100% 50%',
    scrub: 1
    // markers:true
  }
})
visual
.to('.sc-visual', {scale: 0.9,},"<")
.to('.sc-visual .visual-pc', {scale: 1.05,},"<");



// Comment slide
const commentSwiper = new Swiper('.sc-comment-slide .swiper', {
  slidesPerView: 'auto',
  spaceBetween: 24,
  autoHeight:true,
  loop: false,
  navigation: {
    nextEl: '.sc-comment-slide .swiper-next-btn'
  },
  breakpoints:{
    991:{
      slidesPerView: 1.37,
      spaceBetween: 45,
      loop: true,

    },
    767:{
      slidesPerView: 1,
      spaceBetween: 45,
      loop: true,
    }
  }
});



// sc-chilli-flame canvas
const canvas = document.querySelector('#flame');
const ctx = canvas.getContext('2d');

canvas.width = 900;
canvas.height = 1050;

const frameCount = 300; //이미지프레임 수
const currentFrame = (idx) => {
  return `./assets/images/chilli-flame/0_${idx.toString().padStart(4, '0')}.png`;
}; 

const images = []; 
const card = {
  frame: 0, //처음 프레임값
};

// 미리 로드
for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i + 1);
  images.push(img);
}

const chilliFlame = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-product.chilli-flame',
    scrub: 1,
    start: '5% top',
    end: '95% bottom',
    // markers: true
  },
  onUpdate: render, 

})
gsap.set(".sc-product.chilli-flame .pd-motion .target",{scale:"1, 0.9866", yPercent:-135});

// 모션 정의
chilliFlame.to(card, {
  frame: frameCount - 1,
  snap: 'frame', 
  ease: 'none',
},"<")
.to(".sc-product.chilli-flame .pd-motion .target",{scale:"1, 1", yPercent:0},"<");

images[0].onload = render;

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(images[card.frame], 0, 0);
}




// Recommend 슬라이드 애니메이션
// show 버튼 hover
$(".sc-recommend .btn-slide.show").hover(function () {
  if(!$(".sc-recommend").hasClass('active')){
    $(".sc-recommend .swiper").addClass('slide');
  }
}, function () {
  $(".sc-recommend .swiper").removeClass('slide');
}
);

gsap.set('.sc-recommend .btn-slide.close', {autoAlpha: 0});
gsap.set('.sc-recommend .swiper', {xPercent: 60});

const recommendSwiper = new Swiper('.sc-recommend .swiper',{
  slidesPerView: 'auto',
  spaceBetween: 24,
  navigation: {
    nextEl: '.sc-recommend .slider-next-btn'
  },
  enabled: false 
});

const recommend = gsap.timeline({
  paused: true
});

recommend
.to('.sc-recommend .bg-area', {xPercent: -40}, 'b')
.to('.sc-recommend .swiper', {xPercent: 0}, 'b')
.to('.sc-recommend .btn-slide.close', {autoAlpha: 1, delay:0.3}, 'b');

// show 버튼 click
$('.sc-recommend .btn-slide.show').click(function () {
  const target = $('.sc-recommend').offset().top;
  gsap.to(window, {scrollTo: target});
  recommend.play();

  $(".sc-recommend").addClass('active');
  $("html").addClass('fixed');

  if ($(".sc-recommend").hasClass('active')) {
    recommendSwiper.enable(); 
  }

   // #nav 숨기기 (모바일 전용)
   if (window.matchMedia("(max-width: 767px)").matches) {
    $("#nav").css("display", "none");
  }
});

// close btn click
$('.sc-recommend .btn-slide.close').click(function () {
  recommend.reverse();
  $(".sc-recommend").removeClass('active');
  $("html").removeClass('fixed');

  if (!$(".sc-recommend").hasClass('active')) {
    recommendSwiper.slideTo(0,500); 
    recommendSwiper.disable(); 
  }
  if (window.matchMedia("(max-width: 767px)").matches) {
    $("#nav").css("display", "block");
  }
});



// sc-chilli-flame canvas
const canvas02 = document.querySelector('#fire');
const ctx02 = canvas02.getContext('2d');

canvas02.width = 900;
canvas02.height = 1050;

const frameCount02 = 300; //이미지프레임 수
const currentFrame02 = (idx) => {
  return `./assets/images/chilli-fire/0_${idx.toString().padStart(4, '0')}.png`;
}; 

const images02 = []; 
const card02 = {
  frame: 0, 
};

// 미리 로드
for ( i = 0; i < frameCount02; i++) {
  const img02 = new Image();
  img02.src = currentFrame02(i + 1);
  images02.push(img02);
}

const chilliFire = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-product.chilli-fire',
    scrub: 1,
    start: '5% top',
    end: '95% bottom',
    // markers: true
  },
  onUpdate: render02

});

gsap.set(".sc-product.chilli-fire .pd-motion .target",{scale:"1, 0.9866", yPercent:-135});

// 모션 정의
chilliFire.to(card02, {
  frame: frameCount02 - 1,
  snap: 'frame', 
  ease: 'none',
},"<")
.to(".sc-product.chilli-fire .pd-motion .target",{scale:"1, 1",yPercent:0 },"<");

images02[0].onload = render02;

function render02() {
  ctx02.clearRect(0, 0, canvas02.width, canvas02.height);
  ctx02.drawImage(images02[card02.frame], 0, 0);
}



// Saucy era 슬라이드
gsap.to(".sc-saucy-era .rolling-box .rolling-list",20,{
  xPercent: -100,
  repeat: -1,
  ease: 'none'
})

// Saucy era bg lottie
var animation = bodymovin.loadAnimation({
  container: $('.sc-saucy-era #bgMotion')[0], 
  path: './assets/data/pour.json', 
  renderer: 'canvas', 
  loop: false, 
  autoplay: false
});

ScrollTrigger.create({
  trigger:".sc-saucy-era",
  start:"0% 80%",
  end:"100% 100%",
  // markers:true,
  onEnter:function(){
    animation.goToAndPlay(0);
  },
  onLeaveBack:function(){
    animation.goToAndPlay(0);
  }
});
