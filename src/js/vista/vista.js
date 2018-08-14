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
    sectionAddTar.style.display = 'none'; 
  subContAddText.innerHTML += `<div class="subContText">${valAdd}<button class="btnDots"><i class="fas fa-ellipsis-h"></i></button></div>  
  
  <div id="otherAdd">
  <div class="js-add-list list-wrapper mod-add" id="sectionAddTarMae"><form><span class="placeholder js-open-add-list"><span class="icon-sm icon-add">
    <input class="list-name-input" id="inputValAdd" type="text" name="name" placeholder="Introduzca el título de la lista..." autocomplete="off" dir="auto" maxlength="512" value="">
    <div class="list-add-controls u-clearfix">
    <button class="primary mod-list-add-button js-save-edit" type="button" value="Añadir lista" id="addListaTar"><p>Añadir lista</p></button><i class="fas fa-times"></i><a class="icon-lg icon-close dark-hover js-cancel-edit" href="#"></a></div></form></div>
  </div>`;
  document.getElementById('inputValAdd').value = '';


    return true
  }  
});





