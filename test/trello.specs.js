const assert = require('chai').assert;
global.window = global;
require('../src/js/modelo/modelo'); //Sólo enlaza el archivo, parecido al script de html

describe('Validar funcion', () => {  
    it('debería exponer función', () => {
      assert.isFunction(filterFunction);
    });
  });
       

  describe('validar input crear tarjeta', () => {
    describe('el input no debe estar vacio', () => {
      it('input no debe estar vacio', () => {
        assert.equal()
      })
      it('desabiliatr boton campo vacio', () => {
        
      })
    })
  })