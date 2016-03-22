(function() {
    'use strict';

    angular
        .module('app')
        .service('MathService', Service);

    /* @ngInject */
    function Service() {
    	var vm = this;

        vm.setNum = function(n) {
	      if(typeof n === 'number') {
	        return n;
	      }
	      return 0;
	    }

	    vm.setInt = function(n) {
	    	n = vm.setNum(n);

	    	return parseInt(n);
	    }

	    vm.setFloat = function(n, fixed) {
	    	n = vm.setNum(n);
	    	fixed = vm.setNum(fixed);

	    	if(fixed === 0) {
	    		fixed = 2;
	    	}

	    	return parseFloat(n.toFixed(fixed));
	    }

	    vm.somar = function(n1) {
	      var n1 = vm.setNum(n1);

	      return function(n2) {
	        var n2 = vm.setNum(n2);
	        
	        var r = (n1 + n2);

	        return r;
	      }
	    }

	    vm.multiplicar = function(n1) {
	      var n1 = vm.setNum(n1);

	      return function(n2) {
	        var n2 = vm.setNum(n2);
	        
	        var r = (n1 * n2);

	        return r;
	      }
	    }

	    vm.subtrair = function(n1) {
	      var n1 = vm.setNum(n1);

	      return function(n2) {
	        var n2 = vm.setNum(n2);
	        
	        var r = (n1 - n2);

	        return r;
	      }
	    }

	    vm.dividir = function(n1) {
	      var n1 = vm.setNum(n1);

	      return function(n2) {
	        var n2 = vm.setNum(n2);

	        if(n2 === 0 && n1 === 0) {
	        	return 0;
	        }
	        
	        var r = (n1 / n2);

	        return r;
	      }
	    }
    }
})();