


const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

//외부 라이브러리를 통해서 throttle 을 사용했다  
window.addEventListener('scroll' , _.throttle(function() {
  console.log(window.scrollY);
  if(window.scrollY > 500){ 
    //gsap.to(요소 , 시간 , 옵션);
    gsap.to(badgeEl , .6 , {
      opacity: 0 ,
      display: 'none' 
    });

    gsap.to(toTopEl , .2, {
      x: 0
    });

  }else{
    //배지보이기
    gsap.to(badgeEl , .6 , {
      opacity: 1,
      display: 'block'
    });
    //버튼 숨기기
    gsap.to(toTopEl , .2, {
      x: 100
    });
  }
},300));
// _.throttle (사용할 함수 , 시간[밀리세컨드] )


toTopEl.addEventListener('click' , function(){
  gsap.to(window, .7 ,{
    scrollTo : 0  //이 옵션으로 제일 위로 올려보낸다.. 
  });
});




const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl , index) {
  //gsap.to(요소 , 시간 , 옵션);
  gsap.to(fadeEl , 1 , {
    delay: (index + 1) *.7, // 0.7 -> 1.4 -> 2.1 -> ...
    opacity: 1,
  });
});

//new Swiper('선택자' , 옵션)  슬라이드 하는 것들 
new Swiper('.notice-line .swiper-container',{
  direction : 'vertical', // 어떤방향으로 슬라이드 기본값 horizontal 
  autoplay : true,       // 자동으로 슬라이드 
  loop: true,            // 모든 슬라이드가 끝나고 다시 1부터 시작할것인지.
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween:10 , // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  //아래처럼 autoplay에 객체로 값을 넣어서 딜레이줄수 있다. 기본값 3000
  // autoplay : {  
  //   delay: 5000
  // } 
  pagination:{
    el: '.promotion .swiper-pagination', //페이지 번호요소 선택자 
    clickable : true // 사용자의 페이지 번호 요소 제어 가능 여부 
  },
  navigation: {
    prevEl : '.promotion .swiper-prev', // 이전슬라이드
    nextEl : '.promotion .swiper-next'  // 다음 슬라이드 
  }

});
//슬라이드 해주는 자바스크립트 라이브러리
new Swiper('.awards .swiper-container', {
  autoplay:true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl : '.awards .swiper-prev',
    nextEl : '.awards .swiper-next'
  }

});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion
  if(isHidePromotion){
    promotionEl.classList.add('hide');
  }else{
    promotionEl.classList.remove('hide');
  }

});

function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay ,size){
  //gsap.to(요소 , 시간 , 옵션);
  gsap.to(selector, random(1.5,2.5) , {
    y: size,
    repeat: -1, // 애니메이션 반복횟수가 무제한 
    yoyo :true, //애니메이션이 진행되고 돌아오는 
    ease: Power1.easeInOut,
    delay: random(0,delay)
  });
}

floatingObject('.floating1' ,1 , 15);
floatingObject('.floating2' ,.5 , 15);
floatingObject('.floating3' ,1.5 , 20);


  const spyEls = document.querySelectorAll('section.scroll-spy')
// 요소들 반복 처리!
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({ // 감시할 장면(Scene)을 추가
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
    })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)
}); 

//텍스트 
