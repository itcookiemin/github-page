const GoodArticle = {
  // writeEvent : () => {
  //   //Get Event Handler
  //   let btnWriteNo1 = document.getElementById("write_no1");
  //   btnWriteNo1.addEventListener("click", GoodArticle.writeBox("no1"), false);
  //   let btnWriteNo2 = document.getElementById("write_no2");
  //   btnWriteNo2.addEventListener("click", GoodArticle.writeBox("no2"), false);
  //   let btnWriteNo3 = document.getElementById("write_no3");
  //   btnWriteNo3.addEventListener("click", GoodArticle.writeBox("no3"), false);
  // },

  //write in BOX
  writeBox: (param_write_no) => {
    let temp_writing_no;
    if (param_write_no === "no1") {
      temp_writing_no = GoodArticle.writing_no1;
    } else if (param_write_no === "no2") {
      temp_writing_no = GoodArticle.writing_no2;
    } else if (param_write_no === "no3") {
      temp_writing_no = GoodArticle.writing_no3;
    }

    //Display Write Box
    document.getElementById("article-main").innerHTML = temp_writing_no;
  },

  writing_no1: `<pre><b>인생의 절반쯤에 꼭 생각해 볼 것들</b>

가끔씩 피식 혼자서 웃어보곤 합니다
지나온 추억들을 떠올려 보는 시간
지나온 그 추억이 아름다운 이유는
그것이 내 삶에 있어 
다시는 되돌릴 수 없는 일들이기 때문이겠지요

어떤 아픔일지라도 시간이 지나면 
내 삶의 보석들이 되어
이렇게 나의 기억 속에
존재하고 있다는 사실이
무척이나 고맙다는 생각이 들곤 합니다
하지만 아쉬움은 남습니다
조금만 더 열심히 살았더라면
힘들 때 한 걸음만 더 내딛고

한 사람에게만 더 가슴으로
더 가슴으로 진실하게 다가섰더라면
정말 슬플 때 오히려
미소 지을 수 있엇다면
이렇게 아쉬움이
가득하지만은 않을텐데라는
미련 이미 살아온
내 삶이 아름다우면서도
아쉬울 수 밖에 없는 이유는
그것이 다시는 재현될 수
없는 일이기 때문이라는 것을
나는 알고 있습니다

이제 그 아쉬움을 조금이라도 줄여 가는 것이
내 삶의 남겨진 숙제라는 것을
나는 알고 있기에
잠시만 있으면
또 과거가 되어버릴
지금 이 시간부터라도
좀 더 내 삶에 진지하게
임해야겠습니다
</pre>`,
  writing_no2: `<pre><b>아무것도 아닌 것이</b>

아무것도 아닌 것이
아무것인게 인생이더라.
아무것도 아닌 것들이
아무것이고,
아무것인게 아무것도 아닙니다.
....

"여행을 생활처럼 하고
생활을 여행처럼 해봐"
</pre>`,
  writing_no3: `<pre><b>기다림의 여행</b>

자기자신과 함께 시간을 보내고 싶으면
당연히 혼자 떠나야 한다. 
그리고 목적지 빼곤
아는 곳이 없어야 한다.
</pre>`,
};

// window load event

// window.onload = GoodArticle.writeEvent;
