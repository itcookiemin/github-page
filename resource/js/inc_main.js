const MinsMain = {
  /* Loading URL */
  goHome: (moveType) => {
    //
    var _url_index = "";

    if (moveType === "HOME") {
      _url_index = "./index.html";
    } else if (moveType === "PAGE") {
      _url_index = "../index.html";
    }

    //go home index
    window.location.href = _url_index;
  },
  /* Go Sub Main */
  goSubMain: (movePage) => {
    var _url_sub_main = "";
    if (movePage === "LOADING") {
      _url_sub_main = "./loading/loading_main.html";
    } else if (movePage === "HAMBURGER") {
      _url_sub_main = "./menu/menu-hamburger.html";
    } else if (movePage === "COOKIE") {
      _url_sub_main = "./cookie/cookie-main.html";
    } else {
      _url_sub_main = "";
    }

    //go sub main
    window.location.href = _url_sub_main;
  },
  /* open subMenu */
  // isOpenAsideArticle: () => {
  //   return false;
  // },
  // openAsideArticle: () => {
  //   let isOpen = MinsMain.isOpenAsideArticle;
  //   if (!isOpen) {
  //     $("#article-main").css("display", "inline");
  //     $("#article-main").css("width", "calc(100% - 72px)");
  //   } else {
  //   }
  //   //
  //   MinsMain.isOpenAsideArticle = !MinsMain.isOpenAsideArticle;
  // },
};
