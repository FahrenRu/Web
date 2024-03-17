const smile = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile-fill" viewBox="0 0 16 16">
<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8"/>
</svg>`;
const frown = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown-fill" viewBox="0 0 16 16">
<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m-2.715 5.933a.5.5 0 0 1-.183-.683A4.5 4.5 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 0 1-.866.5A3.5 3.5 0 0 0 8 10.5a3.5 3.5 0 0 0-3.032 1.75.5.5 0 0 1-.683.183M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8"/>
</svg>`;
const textInfo = document.querySelector("#info")
let examGrade = prompt("Notunuzu girin");

if (examGrade >= 90 && examGrade <= 100) {
  document.querySelector("#info").innerHTML = `AA ${smile}`;
  textInfo.classList.add("text-primary")
} else if (examGrade >= 85 && examGrade < 90) {
  document.querySelector("#info").innerHTML = `BA ${smile}`;
  textInfo.classList.add("text-primary")
} else if (examGrade >= 80 && examGrade < 85) {
  document.querySelector("#info").innerHTML = `BB ${smile}`;
  textInfo.classList.add("text-primary")
} else if (examGrade >= 75 && examGrade < 80) {
  document.querySelector("#info").innerHTML = `CB ${smile}`;
  textInfo.classList.add("text-primary")
} else if (examGrade >= 70 && examGrade < 75) {
  document.querySelector("#info").innerHTML = `CC ${smile}`;
  textInfo.classList.add("text-primary")
} else if (examGrade >= 65 && examGrade < 70) {
  document.querySelector("#info").innerHTML = `DC ${smile}`;
  textInfo.classList.add("text-primary")
} else if (examGrade >= 60 && examGrade < 65) {
  document.querySelector("#info").innerHTML = `DD ${smile}`;
  textInfo.classList.add("text-primary")
} else if (examGrade >= 50 && examGrade < 60) {
  document.querySelector("#info").innerHTML = `FD ${smile}`;
  textInfo.classList.add("text-primary")
} else if (examGrade >= 0 && examGrade < 50) {
  document.querySelector("#info").innerHTML = `FF ${frown}`;
  textInfo.classList.add("text-danger")
} else {
  alert("0 ile 100 arasında bir not girmediniz!");
}
