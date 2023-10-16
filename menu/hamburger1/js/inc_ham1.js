//1) 버튼 이벤트 등록 - Good
window.onload = () => {
  const btnMinsHome = document.getElementById("btn-hambuger-box");
  MinsCommon.addEvent(
    btnMinsHome,
    "click",
    (e) => {
      //햄버거 메뉴 이동
      HamburgerMenu.moveLeftMenu();
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
  moveLeftMenu: () => {
    const _left_menu = document.getElementById("id-left-menu");
    _left_menu.setAttribute("class", "move");
  },
};
