export default class MainBanner {
  constructor($box, $frame, $ul, $li, $arrowLeft, $arrowRight) {
      this.$box = $box;
      this.$ul = $ul;
      this.$arrowLeft = $arrowLeft;
      this.$arrowRight = $arrowRight;

      this.IMG_WIDTH = $frame.width();
      this.IMG_LENGTH = $li.length;

      this.currentIdx = 0;

      $arrowLeft.on("click", () => {
          this.prevImg();
      });

      $arrowRight.on("click", () => {
          this.nextImg();
      });

      $box.on("mouseenter", ()=>{
          clearInterval(this.interval);
      });

      $box.on("mouseleave", ()=>{
          this.autoSlide();
      });
  }

  nextImg() {
      this.currentIdx++;
      if (this.currentIdx == this.IMG_LENGTH) this.currentIdx = 0;
      this.$ul.css("left", -(this.currentIdx * this.IMG_WIDTH));
      this.$ul.css("transition", "0.5s ease");
  }

  prevImg() {
      this.currentIdx--;
      this.$ul.css("left", -(this.currentIdx * this.IMG_WIDTH));
      this.$ul.css("transition", "0.5s ease");
  }

  autoSlide() {
      this.interval = setInterval(()=>{
          this.nextImg();
      }, 2000);
  }
}
