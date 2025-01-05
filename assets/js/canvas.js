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

images[0].onload = render;

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const currentImage = images[card.frame];
  
  const x = (canvas.width - currentImage.width) / 2;
  const y = (canvas.height - currentImage.height) / 2;
  
  if (currentImage.complete && currentImage.naturalWidth > 0) {
    ctx.drawImage(currentImage, x, y);
  }
}

const mm = gsap.matchMedia();

mm.add('(max-width:991px)',function(){
  const chilliFlame = gsap.timeline({
    scrollTrigger: {
      trigger: '.sc-product.chilli-flame',
      scrub: 1,
      start: '5% top',
      end: '95% bottom',
      // markers: true
    },
    onUpdate: render, 
  });

  gsap.set(".sc-product.chilli-flame .pd-motion .target",{
    scale:"1, 0.9866", 
    yPercent:-150
  });

  // 모션 정의
chilliFlame.to(card, {
  frame: frameCount - 1,
  snap: 'frame', 
  ease: 'none',
},"<")
.to(".sc-product.chilli-flame .pd-motion .target",{
  scale:"1, 1", 
  yPercent:0
},"<");
});

mm.add("(min-width:992px)",function(){
  const chilliFlame = gsap.timeline({
    scrollTrigger: {
      trigger: '.sc-product.chilli-flame',
      scrub: 1,
      start: '5% top',
      end: '95% bottom',
      // markers: true
    },
    onUpdate: render, 
  });

  gsap.set(".sc-product.chilli-flame .pd-motion .target",{
    scale:"1, 0.9866", 
    yPercent:-135
  });

  chilliFlame.to(card, {
    frame: frameCount - 1,
    snap: 'frame', 
    ease: 'none',
  },"<")
  .to(".sc-product.chilli-flame .pd-motion .target",{
    scale:"1, 1", 
    yPercent:0
  },"<");
});



// chilli-fire
const canvas02 = document.querySelector('#fire');
const ctx02 = canvas02.getContext('2d');

canvas02.width = 900;
canvas02.height = 1050;

const frameCount02 = 300; // 이미지 프레임 수
const currentFrame02 = (idx) => {
  return `./assets/images/chilli-fire/0_${idx.toString().padStart(4, '0')}.png`;
};

const images02 = [];
const card02 = {
  frame: 0, // 처음 프레임값
};

// 미리 로드
for (let i = 0; i < frameCount02; i++) {
  const img02 = new Image();
  img02.src = currentFrame02(i + 1);
  images02.push(img02);
}

images02[0].onload = render02;

// canvas 가운데 그리기
function render02() {
  ctx02.clearRect(0, 0, canvas02.width, canvas02.height);
  const currentImage02 = images02[card02.frame];

  const x02 = (canvas02.width - currentImage02.width) / 2;
  const y02 = (canvas02.height - currentImage02.height) / 2;

  if (currentImage02.complete && currentImage02.naturalWidth > 0) {
    ctx02.drawImage(currentImage02, x02, y02);
  }
}

// 반응형 matchMedia
mm.add('(max-width:991px)', function () {
  const chilliFire = gsap.timeline({
    scrollTrigger: {
      trigger: '.sc-product.chilli-fire',
      scrub: 1,
      start: '5% top',
      end: '95% bottom',
      // markers: true
    },
    onUpdate: render02, 
  });

  gsap.set('.sc-product.chilli-fire .pd-motion .target', {
    scale: '1, 0.9866',
    yPercent: -110
  });

  chilliFire
    .to(card02, { 
      frame: frameCount02 - 1, 
      snap: 'frame',
      ease: 'none',
    }, '<')
    .to('.sc-product.chilli-fire .pd-motion .target', {
      scale: '1, 1',
      yPercent: 0
    }, '<');
});

mm.add('(min-width:992px)', function () {
  const chilliFire = gsap.timeline({
    scrollTrigger: {
      trigger: '.sc-product.chilli-fire',
      scrub: 1,
      start: '5% top',
      end: '95% bottom',
      // markers: true
    },
    onUpdate: render02, 
  });

  gsap.set('.sc-product.chilli-fire .pd-motion .target', {
    scale: '1, 0.9866',
    yPercent: -135
  });

  chilliFire
    .to(card02, { 
      frame: frameCount02 - 1, 
      snap: 'frame',
      ease: 'none',
    }, '<')
    .to('.sc-product.chilli-fire .pd-motion .target', {
      scale: '1, 1',
      yPercent: 0
    }, '<');
});
