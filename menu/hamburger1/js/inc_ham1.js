//1) 버튼 이벤트 등록 - Good
window.onload = () => {
  //버튼 Event (btn-hambuger-box)
  const btnMinsHome = document.getElementById("btn-hambuger-box");
  MinsCommon.addEvent(
    btnMinsHome,
    "click",
    (e) => {
      //햄버거 메뉴 이동
      if (HamburgerMenu.bToggleFlag === false) {
        HamburgerMenu.moveLeftMenu();
      } else {
        HamburgerMenu.closeLeftMenu();
      }
    },
    false
  );
  //버튼 Event (사이드메뉴 X)
  const btnTopCloseX = document.getElementById("btnTopCloseX");
  MinsCommon.addEvent(
    btnTopCloseX,
    "click",
    (e) => {
      //햄버거 메뉴 이동
      HamburgerMenu.closeLeftMenu();
    },
    false
  );
};

//2) inc_main.js : addEvent 메소드 생성
// const btnMinsHome = document.getElementById("btn-hambuger-box");
// MinsCommon.addEvent(
//   btnMinsHome,
//   "click",
//   (e) => {
//     //햄버거 메뉴 이동
//     HamburgerMenu.moveLeftMenu();
//   },
//   false
// );

const HamburgerMenu = {
  // MENU Flag
  bToggleFlag: false,
  // MENU OPEN
  moveLeftMenu: () => {
    const _left_menu = document.getElementById("id-left-menu");
    _left_menu.setAttribute("class", "left-menu-open");

    //hamburger rotate = make X -----------------
    // const _hamspan_1 = document.getElementById("box-span-1");
    // _hamspan_1.setAttribute("class", "hambuger-x1");

    // const _hamspan_2 = document.getElementById("box-span-2");
    // _hamspan_2.setAttribute("class", "hambuger-x2");

    // const _hamspan_3 = document.getElementById("box-span-3");
    // _hamspan_3.setAttribute("class", "hambuger-x3");
    // -------------------------------------------

    HamburgerMenu.bToggleFlag = true;
  },
  // MENU CLOSE
  closeLeftMenu: () => {
    const _left_menu = document.getElementById("id-left-menu");
    _left_menu.setAttribute("class", "left-menu-close");

    // const _hamspan_1 = document.getElementById("box-span-1");
    // _hamspan_1.setAttribute("class", "hamburger-x1-close");

    // const _hamspan_2 = document.getElementById("box-span-2");
    // _hamspan_2.setAttribute("class", "hambuger-x2-close");

    // const _hamspan_3 = document.getElementById("box-span-3");
    // _hamspan_3.setAttribute("class", "hamburger-x3-close");

    HamburgerMenu.bToggleFlag = false;
  },
};
