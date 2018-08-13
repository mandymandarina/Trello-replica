const assert = require('chai').assert;
global.window = global;
require('../src/js/modelo/modelo'); //Sólo enlaza el archivo, parecido al script de html

describe('Validar funcion', () => {  
    it('debería exponer función', () => {
      assert.isFunction(filterFunction);
    });
  });
       

  