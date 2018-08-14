function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// que desaparezca añadis texto
const btnAddComent = document.getElementById('btnAddComent');
const divAddComent = document.getElementById('rowAddComent');
const sectionComent = document.getElementById('sectionAddTar');

btnAddComent.addEventListener('click', ()=>{
  divAddComent.style.display ='none';
  sectionComent.style.display = 'block';
})


// imprimir la tarjeta addListaTar
let btnAddListaTar = document.getElementById('addListaTar');
const contAddTar = document.getElementById('sectionAddTar');
const contPrint = document.getElementById('dorDivsAdd');

btnAddListaTar.addEventListener('click', () =>{
  const valAdd = document.getElementById('inputValAdd').value;
  if(valAdd == ''){
    alert('ingrese un texto');
    console.log('Debe ingresar un texto');
    return false;    
  } else{
    contPrint.style.display = 'block';
    contPrint.style.float = 'left'  
  subContAddText.innerHTML += `<div class="subContText">${valAdd}<button class="btnDots">     <i class="fas fa-ellipsis-h"></i></button></div>`;
  document.getElementById('inputValAdd').value = '';
    return true
  }  
});





