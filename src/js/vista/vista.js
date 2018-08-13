function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// imprimir la tarjetaaddListaTar
let btnAddListaTar = document.getElementById('addListaTar');
const contAddTar = document.getElementById('sectionAddTar');
const contPrint = document.getElementById('dorDivsAdd');

btnAddListaTar.addEventListener('click', () =>{
  const valAdd = document.getElementById('inputValAdd').value;
  contPrint.style.display = 'block';
  subContAddText.innerHTML += `<div class="subContText">${valAdd}<button class="btnDots">     <i class="fas fa-ellipsis-h"></i></button></div>`;
  
});

