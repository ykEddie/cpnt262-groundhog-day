const protagonists = [
  "Eren",
  "Bojji",
  "Light",
  "Luffy",
  "Tanjiro",
  "Zenitsu",
  "Inosuke",
  "Zoro",
  "Sanji",
  "Ichigo",
  "Denji",
  "Aki",
  "Gabimaru",
  "Byakuya",
  "Renji",
  "Uzui",
  "Sanemi",
  "Muzan",
  "Akaza"
];

const list = document.querySelector('.output')

console.log(protagonists);

let output = '';

for (let i = 0; i < protagonists.length; i++) {
  console.log(protagonists[i]);
  output += `<li>${protagonists[i]}</li>`
}

list.innerHTML = output
