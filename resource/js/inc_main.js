const MinsMain = {
  /* Loading URL */
  goHome: (moveType) => {
    //
    var _url_index = "";

    if (moveType === "HOME") {
      _url_index = "./index.html";
    } else if (moveType === "PAGE") {
      _url_index = "../index.html";
    } else if (moveType === "PAGE_JS") {
      _url_index = "../../index.html";
    }

    //go home index
    window.location.href = _url_index;
  },
  /* Go Sub Main */
  goSubMain: (movePage) => {
    var _url_sub_main = "";
    if (movePage === "LOADING") {
      // LOADING
      _url_sub_main = "./loading/loading_main.html";
    } else if (movePage === "HAMBURGER1") {
      // 햄버거 메뉴1
      _url_sub_main = "./menu/hamburger1/hamburger1.html";
    } else if (movePage === "HAMBURGER2") {
      // 햄버거 메뉴2
      _url_sub_main = "./menu/hamburger2/hamburger2.html";
    } else if (movePage === "COOKIE") {
      // MINS cookie shop
      _url_sub_main = "./cookie/cookie-main.html";
    } else if (movePage === "MODAL") {
      // MODAL 구현
      _url_sub_main = "./modal/modal-main.html";
    } else if (movePage === "DOMS") {
      // MODAL 구현
      _url_sub_main = "./dom/dom-main.html";
    } else {
      // default
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

/* Window Event 등록
  var elementID = document.getElementIDById("div3");
  addEvent(elementID, "click", function (e) {alert("clicked!");}, false);
  addEvent(elementID, "click", (e) => {alert("clicked!");}, false);

  //Cross Broser 로 인하여 요즘 선호하는 방식

  @param : elementID
  @param : eventName
  @param : functionContent
  @param : isCapture - 이벤트 처리 순서의 조정: capture vs bubble
*/
addEvent = (elementID, eventName, functionContent, isCapture) => {
  if (window.addEventListener) {
    //Edge, Chrome, Safari
    elementID.addEventListener(eventName, functionContent, isCapture);
  } else if (window.attachEvent) {
    //IE Mode 10 이하
    elementID.attachEvent("on" + eventName, functionContent);
  } else {
    elementID["on" + eventName] = functionContent;
  }
};
