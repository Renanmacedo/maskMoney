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
 var regEx = /\d/g;
 var mask = function(inputValue){
 
  _value = document.getElementById(inputValue).value;
 	// valida se somente numeros estão sendo digitados
 	if(regEx.test(_value) == false){
 		document.getElementById(inputValue).value = "";
 		return ;
 	}
 		// cria o array com os numeros
 	 _arr = _value.split("");
 	 _length = _arr.length;
  		for (var i = 0;i < _length; i++) {
  			_test += _arr[i];
  		}
 	var regEx2 = /^?\d[,.]\$/g
 }
  d.mask = mask;	
})(document);
