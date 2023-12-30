document.addEventListener('DOMContentLoaded', function() {

    let currentIndex = 0; // 現在のスライドのインデックス
    const slides = document.querySelectorAll('.slide'); // すべてのスライドを取得
    const totalSlides = slides.length; // スライドの合計数
  
    // 左矢印をクリックしたときの処理
    document.querySelector('.left-arrow').addEventListener('click', function() {
      if (currentIndex > 0) {
        currentIndex--; // インデックスをデクリメント
      } else {
        currentIndex = totalSlides - 1; // 最後のスライドに戻る
      }
      updateSlidePosition();
    });
  
    // 右矢印をクリックしたときの処理
    document.querySelector('.right-arrow').addEventListener('click', function() {
      if (currentIndex < totalSlides - 1) {
        currentIndex++; // インデックスをインクリメント
      } else {
        currentIndex = 0; // 最初のスライドに戻る
      }
      updateSlidePosition();
    });
  
    // スライドの位置を更新する関数
    function updateSlidePosition() {
      for (let slide of slides) {
        slide.style.transform = `translateX(-${currentIndex * 100}%)`;
      }
    }
  
  });
  