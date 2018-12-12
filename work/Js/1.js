function buttonClicked() {
  var elem = document.getElementById('input');
  // console.log(elem);
  // alert(elem.value); 버튼을 누르면 입력값 창으로 띄어줌

  var target = document.getElementById('output');
  console.log(target.innerText);
  target.innerText = target.innerText + elem.value;

  console.log(target.innerText);
}
