import MainBanner from '/temp/main_banner/main_banner.js'

const mainBanner = new MainBanner(
  $(".banner--box"),                // 배너의 가장 바깥쪽(올렸을 때 화살표가 보임)
  $(".banner--frame"),              // ul태그를 감싸는 박스(X, 틀)
  $(".banner ul"),                  // ul태그(얘가 움직이면서 배너가 움직임)
  $(".banner li"),                  // img를 감싸는 div(X,이미지 크기)

  $(".banner .arrow-box-left"),
  $(".banner .arrow-box-right")
);

mainBanner.autoSlide();             //작동 시작