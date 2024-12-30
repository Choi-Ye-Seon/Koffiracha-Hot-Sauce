const navBtn = gsap.timeline({
  paused: true, 
  reversed: true, 
  defaults: {
    duration: 0.4, ease: 'back.out(1)'
  }});

navBtn.to('#nav .nav-btn-wrap', {zIndex: 1}, 'a')
.to('#nav .btn-shadow', {opacity: 0}, 'a')
.to('#nav .nav-menu-area', {zIndex: 2}, 'a')
.to('#nav .nav-menu-wrap', {width: '100%', height: '650%'}, 'a')
.to('#nav .nav-menu__bg', {boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}, 'a')
.to('#nav .btn-close-nav', {y: 0, opacity: 1}, 'a')
.to('#nav .link-nav', {y: 0, opacity: 1, stagger: 0.05}, '<+0.15');

// 메뉴 열림 버튼 클릭 시
$('#nav .btn-nav').click(function () {
  navBtn.play();
});
// 메뉴 닫기 버튼 클릭 시
$('#nav .btn-close-nav').click(function () {
  navBtn.reverse();
});

// 장바구니 버튼
const navCart = gsap.timeline({
  paused: true, 
  reversed: true, 
  defaults: {
    duration: 0.4, 
    ease: 'back.out(1)'
  }});

navCart.to('#nav .nav-btn-wrap', {zIndex: 1}, 'a')
.to('#nav .nav-cart-area', {display: 'flex', zIndex: 2}, 'a')
.to('#nav .cart-list-wrap', {width: '100%', height: 370}, 'a');



// 장바구니 열림 버튼 클릭 시
$('#nav .btn-cart').click(function () {
  navCart.play();
});



// 장바구니 닫기 버튼 클릭 시
$('#nav .btn-close-cart').click(function () {
  navCart.reverse();
});

// 메인 메뉴 텍스트 변경 (chilli-flame)
gsap.to('#nav .link-product .text', {
  scrollTrigger: {
    trigger: '.chilli-flame .pd-detail',
    start: '0% 90%',
    end: '100% 100%',
    // markers: 'true',
    onEnter: function () {
      $('#nav .link-product .text').text('ADD TO CART'); 
    },
    onLeave: function () {
      $('#nav .link-product .text').text('EXPLORE SAUCES'); 
    },
    onEnterBack: function () {
      $('#nav .link-product .text').text('ADD TO CART'); 
    },
    onLeaveBack: function () {
      $('#nav .link-product .text').text('EXPLORE SAUCES'); 
    }
  }
});

// 메인 메뉴 텍스트 변경 (chilli-fire)
gsap.to('#nav .link-product .text', {
  scrollTrigger: {
    trigger: '.chilli-fire .pd-detail',
    start: '0% 90%',
    end: '100% 100%',
    // markers: true,
    onEnter: function () {
      $('#nav .link-product .text').text('ADD TO CART'); 
    },
    onLeave: function () {
      $('#nav .link-product .text').text('EXPLORE SAUCES'); 
    },
    onEnterBack: function () {
      $('#nav .link-product .text').text('ADD TO CART'); 
    },
    onLeaveBack: function () {
      $('#nav .link-product .text').text('EXPLORE SAUCES'); 
    }
  }
});


// nav darkmode
const navDark = gsap.timeline({
  scrollTrigger:{
    trigger:".sc-saucy-era",
    start:"100% 100%",
    end:"100% 0%",
    // markers:true,
    toggleActions:"play  none reverse reverse"
  },
});
navDark
.to("#nav",0.2,{
  "--colour--black": "#ffffff",
  "--colour--yellow": "#000000",
  "--colour--white": "#000000"
})


// footer thisYear
const thisYear = document.getElementById('thisYear');
thisYear.textContent = new Date().getFullYear();

