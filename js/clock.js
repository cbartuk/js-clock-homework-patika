let isim = prompt("İsminizi Giriniz");

if (isim <= 0 || !isim) {
  alert("Lütfen geçerli bir isim giriniz.");
  location.reload();
} else {
  let gelenDeger = document.querySelector("#myName");
  gelenDeger.innerHTML = isim;
}

const dayofWeek = [
  "Pazar",
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
];
function showTime() {
  let current = new Date();
  let day = dayofWeek[current.getDay()];
  let hours = current.getHours();
  let minutes = current.getMinutes();
  let seconds = current.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.querySelector(
    "#myClock"
  ).innerHTML = `${hours}: ${minutes}: ${seconds}  ${day}`;
}
setInterval(showTime, 1000);
showTime();
