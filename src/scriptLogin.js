
const btnGenerator = document.getElementById('btnGenerator');

btnGenerator.addEventListener('click', () => {
  const hexNumber = '0123456789ABCDEF';
  let hexCod1 = "";
  let hexCod2 = "";

  for (let i = 0;  i < 6; i++)   {
          hexCod1 += hexNumber[Math.floor(Math.random()* hexNumber.length)];
          hexCod2 += hexNumber[Math.floor(Math.random()* hexNumber.length)];
  }

  document.body.style.background = `linear-gradient(90deg, #${hexCod1} 50%, #${hexCod2} 50%)`


     
})