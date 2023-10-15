//1) 버튼 이벤트 등록 - Good
window.onload = () => {
  const btnMinsHome = document.getElementById("btn-mins-home");
  // console.log(`window onload : `, btnMinsHome);
  // btnMinsHome.addEventListener(
  //   "click",
  //   () => {
  //     MinsMain.goHome("PAGE_JS");
  //   },
  //   false
  // );
};

//2) inc_main.js : addEvent 메소드 생성
const btnMinsHome = document.getElementById("btn-mins-home");
addEvent(
  btnMinsHome,
  "click",
  (e) => {
    MinsMain.goHome("PAGE_JS");
  },
  false
);
