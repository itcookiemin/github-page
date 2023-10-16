const MinsCommon = {
  addEvent: (elementID, eventName, functionContent, isCapture) => {
    if (window.addEventListener) {
      //Edge, Chrome, Safari
      elementID.addEventListener(eventName, functionContent, isCapture);
    } else if (window.attachEvent) {
      //IE Mode 10 이하
      elementID.attachEvent("on" + eventName, functionContent);
    } else {
      elementID["on" + eventName] = functionContent;
    }
  },
};

/*
//Element Event Handler 등록 방법
1. <body>

    ... 제일 아래에 등록 <script src=".js"></script>
    </body>
2. </html> 태그 아래 등록 <script src=".js"></script>
    2-1 .js 파일 내에 window.onload() 사용
    2-2 .js 파일 내에 jQuery 이용 ($(document.ready())) 
*/

//아래는 body tag 아래 작성한다.
//Get Event Handler
// let btnHamgerBox = document.getElementById("btn-hambuger-box");
// btnHamgerBox.addEventListener("click", HamburgerMenu.moveLeftMenu);

// </html> 아래 작성
// window.onload(() => {
//     //Get Event Handler
//     alert(1);
//     let btnHamgerBox = document.getElementById("btn-hambuger-box");
//     btnHamgerBox.addEventListener("click", HamburgerMenu.moveLeftMenu);
// });

// window.onload = myFunction;
