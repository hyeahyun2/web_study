//클릭을하면 색이 바뀌어지는 코드
let heading = document.querySelector("h1") 
console.log(heading) //heading 불러오기, console에 heading을 쓰겠다!
heading.addEventListener("click", function() { //이벤트를 불러와서 heading에 담음?
	this.style.color = "green"; //this : 클릭이 발생된 요소 자체를 의미(=heading)
}) 
