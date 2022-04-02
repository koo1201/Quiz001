const quiz =[
    {
        question: "Question 1:\r大航海時代の要因となったものはどれか?",
        answers: [ '紙', '香辛料', '金', '書物'],
        correct: '香辛料',
        explanation:`胡椒などの香辛料はヨーロッパでは手に入らず、オスマン帝国が地中海東岸を占領し東方貿易を妨害した為、香辛料の価格が上がってしまったのが原因！`
    },
    {       question: 'Question 2:\rポルトガルの航海者で、1488年、アフリカ南端の喜望峰に到達した人物は誰か',
            answers: [ 'バルボア', 'マゼラン', 'バルトロメウ＝ディアス', 'カブラル'],
            correct: 'バルトロメウ＝ディアス',
            explanation:"喜望峰を発見したのはバルトロメウ＝ディアスだ。これが大航海時代の幕開けを告げることとなる。"},
    {
        question: 'Question 3:\rヴァスコ=ダ=ガマが到達した場所といえば',
        answers: [ 'カリカット', 'ゴア', 'マリンディ', 'リスボン'],
        correct: 'カリカット',
        explanation:"ヴァスコ=ダ=ガマは1498年5月にインド西岸のマラバール海岸のカリカットに到達している"
    },
    {
      question: 'Question 4:\rアメリカの名前の由来となったイタリアの探検家の名前は？',
      answers: [ 'フランシス=ドレーク', 'コルテス', 'アメリゴ=ヴェスプッチ', 'コロンブス'],
      correct: 'アメリゴ=ヴェスプッチ',
      explanation:"コロンブスは1492年10月12日にアメリカ大陸に到達したといわれているが、そこが新大陸であると気づかなかった。アメリゴ=ベスプッチが新大陸であると主張したため名前の由来になった。"
    },
    {
      question: "Question 5:\r1494年にスペインとポルトガル王国が新領土の分割方式を取り決めた条約の名前とは？",
      answers: [ 'サラゴサ条約', 'トルデシリャス条約', 'ウェストファリア条約', 'カトー・カンブレジ条約'],
      correct: 'トルデシリャス条約',
      explanation:`スペインとポルトガルの新大陸の取り合いから生まれた条約。この条約によりポルトガルには現在のブラジルにあたる領土が与えられ、スペインはアメリカ大陸全域での優先権を手に入れた。`
    }
]

const btns = document.querySelectorAll(".primary-button") 
let score = 0
const quizLen = quiz.length;
let quizCount = 0;
const qus = document.getElementById('Q')
const next = document.getElementById('next')
const modal = document.getElementById('easyModal')
const comment = document.getElementById('comment')
const result = document.getElementById('result')
const correct  = document.getElementById('correct')
const container = document.getElementById('container')


const init = ()=>{
    qus.textContent=quiz[quizCount].question;

    let btnIndex= 0;

    for(let i=0; i<4;i++){
        btns[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
        btnIndex++;
    }
    correct.textContent="答え:\n"+quiz[quizCount].correct
    comment.textContent=quiz[quizCount].explanation;


}
const goToNext = () => {
    quizCount++;
    if(quizCount < quizLen){
      init(quizCount);
    } else {
      // $window.alert('クイズ終了！');
      showEnd();
    }
  };
next.onclick = function(){
    goToNext()
    modal.classList.remove('modalopen')
}
const judge = (elm) => {
    if(elm.textContent === quiz[quizCount].correct){
      result.textContent="正解 👏🎉🎉 "
      modal.classList.add("modalopen")
      score++;
    } else {
      result.textContent="不正解 😱😱😱"
      modal.classList.add("modalopen")
    }
  };

  // btns[0].onclick=function(){
  //   modal.classList.add("modalopen")
  //   console.log(modal)
  // }

const resultScore = ()=>{
  const div1 = document.getElementById('question')
  if(score <3){
    qus.textContent = 'あなたのスコアは\n' + score + '/' + quizLen + 'です.';
    qus.style.display="block"
    const newspan = document.createElement('p')
    newspan.classList.add('result-answer')
    newspan.textContent='世界一周はまだまだ先になりそうだ....⛵⛵⛵ '
    div1.appendChild(newspan)

  }else if (score===5) {
    qus.textContent = '終了！あなたのスコアは' + score + '/' + quizLen + 'です。';
    qus.style.display="block"
    const newspan = document.createElement('p')
    newspan.classList.add('result-answer')
    newspan.textContent='おめでとう🎉🎉\nこれであなたも有名な航海者の仲間入りです!!🚢🚢🚢🌍 '
    div1.appendChild(newspan)
  } else {
    qus.textContent = '終了！あなたのスコアは' + score + '/' + quizLen + 'です。';
    qus.style.display="block"
    const newspan = document.createElement('p')
    newspan.classList.add('result-answer')
    newspan.textContent='世界一周まであと少し....⛵⛵⛵ '
    div1.appendChild(newspan)
  }
}

  const showEnd = () => {

    resultScore();
    
    const newBtn = document.createElement("button")
    newBtn.textContent = "タイトルへ戻る"
    newBtn.classList.add('title-button')
    newBtn.onclick=function(){
      history.back();
    }
    container.appendChild(newBtn)

    const items = document.getElementById('btn-item');
    items.style.visibility = 'hidden';

  };
  
  init();
  
  let answersIndex = 0;

  
  for(let a=0; a<4; a++){
    btns[answersIndex].addEventListener('click', (e) => {
      judge(e.target);
    });
    answersIndex++;
  }

const close = document.querySelector('.modalClose')
close.onclick=function(){
  modal.classList.remove('modalopen')
  goToNext();
}

