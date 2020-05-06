function extend(){
  // je stock dans ma variable imgWidth la valeur de la largeur de mon image
  var imgWidth = document.getElementById('littleGirl').clientWidth;
  console.log(imgWidth);
  // j'attribue une nouvelle valeur à la width de mon image en ajoutant 20px à partir de la taille récupérée dans imgWidth
  document.getElementById('littleGirl').style.width = (imgWidth + 150) + 'px';
}
