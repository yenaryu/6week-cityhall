$(function(){


/* header - trans-area 버튼 클릭 시 새창 링크 이동 */

$('#btnTrans').click(function(){ //button(#id)을 클릭했을 때,
const url = $('#select-trans').val(); //select(#id)의 value값을 찾아서 링크(url)로 이동한다
window.open(url); //url 페이지를 새 창으로 연다
});



/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */



/* main - sc-visual 메인 슬라이드 swiper 설정 */

/* 1. 주요뉴스 화면 swiper 설정*/
//변수명 : visualNews / Swiper : visual-news의 swiper  
const visualNews = new Swiper(".visual-news .swiper", { 
  //숫자
   pagination: {
     el: ".visual-news .fraction",
     type : "fraction", 
   },
 
   //이전/다음버튼
   navigation: {
     nextEl: ".visual-news .next",
     prevEl: ".visual-news .prev",
   },
 
   //swiper 시간
   autoplay: {
     delay: 5000, //5초
     disableOnInteraction: false,
   }
 });
 


 /* 2. 시민참여 화면 swiper 설정*/
 //변수명 : visualCitizen / Swiper : visual-citizen의 swiper  
 const visualCitizen = new Swiper(".visual-citizen .swiper", { 
  //숫자
   pagination: {
     el: ".visual-citizen .fraction",
     type : "fraction", 
   },
 
   //이전/다음버튼
   navigation: {
     nextEl: ".visual-citizen .next",
     prevEl: ".visual-citizen .prev",
   },
 
   //시간
   autoplay: {
     delay: 5000, //5초
     disableOnInteraction: false,
   }
 });



/* 3. 왼쪽 버튼(주요뉴스/시민참여) active 설정 */
$('.visual-area').click(function(e){ // (1) visualarea을 눌렀을 때,
    e.preventDefault(); // (2 ) 새 탭으로 열리지 않게
  
    // (3)this(visual-area)의 부모(group-visual)에 active 클래스를 주면, 나머지 group-visual에서는 active클래스를 빼라
    $(this).parents('.group-visual').addClass('active').siblings().removeClass('active')
  
    // (8) 주요뉴스가 재생(start)되었고 + 부모(group-visual) 중 주요뉴스를 클릭했다면,
    if($(this).parents('.group-visual').hasClass('visual-news')){  
      visualCitizen.autoplay.stop()  // (9) 시민참여를 정지(stop)하라 
  
      // (7) 주요뉴스로 이동했을 때, 주요뉴스 active없는 stop상태라면,
      if(!$('.visual-news .autoplay').hasClass('active')){ 
        visualNews.autoplay.start() // 재생(start)하라
      }
  
    // (6) 시민참여가 재생(start)되었기때문에, 주요뉴스는 정지(stop)  
    }else{ 
      visualNews.autoplay.stop()
  
      // (5) 시민참여로 이동했을 때, 만약 시민참여가 active를 가지고 있지 않다면(stop),
      if(!$('.visual-citizen .autoplay').hasClass('active')){ 
        visualCitizen.autoplay.start() // 재생(start)하라
      }
    }
  });
  
  // (4) 시민참여는 정지(stop)상태 디폴트
  visualCitizen.autoplay.stop()
  
  
  
/* 4. 주요뉴스 정지/재생 버튼 설정 */
  $('.visual-news .autoplay').click(function(e){ 
    e.preventDefault();

    //1. active가 아닌 상태 : 정지
    if (!$(this).hasClass('active')) { //active가 없다면
      visualNews.autoplay.stop(); //autoplay버튼을 눌렀을 때, stop(정지)하라
      $(this).addClass('active'); //active class를 add추가해서 재생 이미지를 넣어라

    //2. active인 상태 : 재생
    } else { //active가 있다면
      visualNews.autoplay.start(); //autoplay를 start(재생)하라
      $(this).removeClass('active'); //active 클래스를 빼서 정지 이미지로 변하게 하라
    }
  });


/* 5. 시민참여 정지/재생 버튼 설정 */
  $('.visual-citizen .autoplay').click(function(e){ 
    e.preventDefault();

    if (!$(this).hasClass('active')) {
      visualCitizen.autoplay.stop();
      $(this).addClass('active');

    } else {
      visualCitizen.autoplay.start();
      $(this).removeClass('active');
    }
  });
  


/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */


/* main - sc-move 배너 swiper 설정 */

/* 1. 배너 전체 설정 */
//변수명 : moveBanner / Swiper : sc-move의 swiper  
const moveBanner = new Swiper(".sc-move .swiper", { 
  slidesPerView: 3,
  spaceBetween: 43,
 
  //숫자
  pagination: {
    el: ".sc-move .fraction", 
    type : "fraction", 
  },

  //이전/다음 버튼
  navigation: {
    nextEl: ".sc-move .next",
    prevEl: ".sc-move .prev",
  },

  //시간
  autoplay: {
    delay: 2000, //2초
    disableOnInteraction: false,
  }
});


/* 2. 정지/재생 버튼 설정 */
$('.sc-move .autoplay').click(function(e){
  e.preventDefault();

  //1. active가 아닌 상태 : 정지
  if (!$(this).hasClass('active')) {  //active가 없다면
    moveBanner.autoplay.stop(); //autoplay버튼을 눌렀을 때, stop(정지)하라
    $(this).addClass('active'); //active class를 add추가해서 재생 이미지를 넣어라

  //2. active인 상태 : 재생
  } else { //active가 있다면
    moveBanner.autoplay.start(); //autoplay를 start(재생)하라
    $(this).removeClass('active'); //active 클래스를 빼서 정지 이미지로 변하게 하라
  }
})



/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */



/* main - sc-related 탭 슬라이드 설정 */

/* 1. 탭 열고 닫기 */
$('.btn-more').click(function(e){ 
  e.preventDefault(); 

  if($(this).hasClass('active')){ // (1) active를 갖고 있는지 확인
    
  /* [2] slideDown된 btn-more을 다시 클릭했을때 slideUp으로 닫히게 */
    $(this).removeClass('active');//(5) 닫아주면서 active 제거로 배경색+아이콘 원상복귀
    $(this).siblings('.tab-area').slideUp(); //(4) 한번 더 클릭했을 때, active가 있기때문에 slideup으로 닫아줌

  /* [3] slideDown된 상태로, 다른 btn-more 클릭 시 slideUp으로 닫히게 */
  }else{ 
    $('.btn-more').removeClass('active'); //(7) 닫아주면서 active 제거로 배경색+아이콘 원상복귀
    $('.tab-area').slideUp(); // (6) 다른 btn-more클릭 시 현재 열려있는거 slideUp으로 닫기

  /* [1] slideDown으로 클릭시 열리게 */
    $(this).addClass('active'); //(3) active클래스를 추가해서 배경색+아이콘방향 변화
    $(this).siblings('.tab-area').slideDown(); //(2) 클릭했을 때 active가 없기 때문에, slidedown으로 tab-area를 열어줌

  }


/* 2. 브라우저 모드에서 shift/tab으로 이동하기 */

/* [1] shift+tab으로 맨 앞에 있는 요소에서 뒤로 갈 때(이전) ul이 닫히도록 */
  $('.tab-area li:first-child a').keydown(function(e){

    if(e.keyCode === 9 && e.shiftKey){ // shift+tab(뒤로가기) 동시에 눌렀을 때,
      $('.tab-area').slideUp(); // tab-area를 닫아주기
      $('.btn-more').removeClass('active'); //닫으며+active 제거
    }
  })

/* [2] tab으로 맨 뒤에 있는 요소에서 앞으로 갈 때(이후) ul이 닫히도록 */
  $('.tab-area .tab-item:last-child a').keydown(function(e){

    //탭만 눌렀을 때, shift tab이 아닌 것 (!로 shift를 부정해준다)
    if(e.keyCode === 9 && !e.shiftKey){ // tab(앞으로 가기)을 눌렀을 때,
      $('.tab-area').slideUp(); // tab-area를 닫아주기
      $('.btn-more').removeClass('active'); //닫으며+active 제거
    }
  })

})


});