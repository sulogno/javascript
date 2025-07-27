



function rolldice(){
   const numofdice =  document.getElementById("noofdice").value;
   const diceresult = document.getElementById("Diceresult");
   const diceimages = document.getElementById("DiceImages");
   const values = [];
   const images = [];
   for(let i = 0;i<numofdice;i++){
    const value = Math.floor(Math.random()*6 +1);
    values.push(value);
    images.push(`<img src = "images/${value}.png"> `);
   }

   diceresult.textContent = `Dice: ${values.join(',')}`;
   diceimages.innerHTML = images.join(''); 


}