
window.filterFunction = () => {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
      if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
          a[i].style.display = "";
      } else {
          a[i].style.display = "";
      }
  }
}

window.inputVacio = () => {
    valAdd = '';
    if(valAdd){
      alert('Debe ingresar un texto');
      return true;
      console.log('hola no');
    } else {
      return false;
      console.log('hola si');
    }
};
