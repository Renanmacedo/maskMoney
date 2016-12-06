/*
 Built 1.0.0
*/
'use strict';

(function(d){
 var _value;
 var _test = "";
 var _arr = [];
 var _length = 0;
 // somente números
 const regEx = /^(\d{1,3}\.?)+,?(\d{2})?$/;
 var mask = function(inputValue){
 
  _value = document.getElementById(inputValue).value;
     // valida se somente numeros estão sendo digitados
     if(regEx.exec(_value) === null){
         document.getElementById(inputValue).value = "";
         return ;
     }
         // cria o array com os numeros
      _arr = _value.split("");
      _length = _arr.length;
          for (var i = 0;i < _length; i++) {
              _test += _arr[i];
          }
 }

  d.mask = mask;    
})(document);
