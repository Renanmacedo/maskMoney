/*
 Built 1.0.0
*/
(function(d){
 var _value;
 var _test;
 var _regExp	=	/^\d{3}/g;
 var mask = function(inputValue){
 	_value = document.getElementById(inputValue).value;
 	_test = _regExp.test(_value);
 	if(_test == false) return _test;
 	var result = _regExp.exec(_value);

 	var _f = document.getElementById(inputValue).innerHTML = result;
 }
  d.mask = mask;	
})(document);
