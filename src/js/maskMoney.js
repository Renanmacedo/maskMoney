/*
 Built 1.0.0
*/
'use strict';

(function(d){
 var _value;
 var _test = "";
 var _arr = [];
 var _length = 0;
 var mask = function(inputValue){
  _value = document.getElementById(inputValue).value;
  _arr = _value.split("");
  if(_value._length > _length){
  	_length = _value.length;	
  	for (var i = Things.length - 1; i >= 0; i--) {
  		_test += _arr[i];
  	}
  }
 	
 }
  d.mask = mask;	
})(document);
