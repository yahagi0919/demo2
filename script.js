 // IE、Safari対応
        // smoothscroll.js読み込み
        // https://github.com/iamdustan/smoothscroll

        // セレクタ名（.pagetop）に一致する要素を取得
        const pagetop_btn = document.querySelector(".pagetop");
        // // セレクタ名header英語文章
        // const headertext = document.querySelector(".header-text");
        // // セレクタ名no3-englishtext
        // const no3englishtext = document.querySelector(".no3-englishtext")

        // .pagetopをクリックしたら
        pagetop_btn.addEventListener("click", scroll_top);

        // ページ上部へスムーズに移動
        function scroll_top() {
            window.scroll({ top: 0, behavior: "smooth" });
        }

        // スクロールされたらトップに戻るボタン表示
        window.addEventListener("scroll", scroll_event);
        function scroll_event() {
            if (window.pageYOffset > 100) {
                pagetop_btn.style.opacity = "1";
            } else if (window.pageYOffset < 100) {
                pagetop_btn.style.opacity = "0";
            }
        }

        // window.addEventListener("scroll", scroll_event);
        // function scroll_event() {
        //     if (window.pageYOffset > 100) {
        //         no3englishtext.style.opacity = "1";
        //     } else if (window.pageYOffset < 100) {
        //         no3englishtext.style.opacity = "0";
        //     }
        // }