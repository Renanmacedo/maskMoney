/*
 Built 1.0.0
*/


(function(d){

 'use strict';
 
 var _value 	="";
 var _length 	= 0;
 var _teste 	= "";
 var _aux		= "";
 var _aux1		= "";
	 
 /*																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																													
	Expressões regulares
 */
 const _regEx  		=		/^(\d{1,3}\.?)+,?(\d{2,3})?$/;
 const _onlyNumber	=		/^(\d{1,3}).*/;
 /*********************************************************************/
 var mask = function(inputValue){
 
  _value = document.getElementById(inputValue).value;
     // valida se somente numeros estão sendo digitados
     if(_regEx.exec(_value) === null){
         document.getElementById(inputValue).value = "";
         return ;
     }
     _length = _value.length;

      	for(var i = 0; i < _length; i++){
      		if( i == 1){
      			if(_value.indexOf(',') >=0){
      				continue;
      			}else{
      			_teste = _value.substring(0,1);
      			 _aux = _teste.concat(',');
      			 _aux1 = _aux.concat(_value.substring(1));
      			document.getElementById(inputValue).value =_aux1;
      			}
      		}else if(i == 3){
      			var num = _value.replace(_regEx,"$1$2");
      			if(num.length >= 4){
      				_aux = num.substring(0,2);
      				var before = num.substring(2);
      				_aux1 = _aux.replace(_regEx,"$1,").concat(before);
      				document.getElementById(inputValue).value = _aux1;
      			}
      		}else if( i > 3){
      			if(num.length >= 5){
      				var group1 = _value.replace(_onlyNumber,"$1");
      				var group2 = _value.replace(/^(\d)+([,.])?/,"$2");
      				var milhar = group1.substring(0,1);
      				var virgula= group2.
      				
      				document.getElementById(inputValue).value = _aux1;
      			}
      		}
      	}
 }

  d.mask = mask;    
})(document);
