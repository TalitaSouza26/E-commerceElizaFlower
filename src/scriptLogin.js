const btnGenerator = document.getElementById('btnGenerator');

btnGenerator.addEventListener('click', () => {
  const colors = ['#BDA897', '#FFDECC', '#A3CC88', '#D6B098', '#CC9870','#756E80','#B9AECA','#89757F','#C9ADBB','#FFC2C7','#D19FA3','#D6C097']; 
  const randomIndex1 = Math.floor(Math.random() * colors.length);
  let randomIndex2 = Math.floor(Math.random() * colors.length);

  while (randomIndex2 === randomIndex1) {
    randomIndex2 = Math.floor(Math.random() * colors.length);
  }

  const color1 = colors[randomIndex1];
  const color2 = colors[randomIndex2];

  document.body.style.background = `linear-gradient(90deg, ${color1} 50%, ${color2} 50%)`;
});
