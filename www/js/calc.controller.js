(function() {
    'use strict';

    angular
        .module('app')
        .controller('CalcController', Controller);

    Controller.$inject = ['MathService'];

    /* @ngInject */
    function Controller(MathService) {
        var vm = this;

        vm.calcular = function() {
            vm.result = {};

            var n1 = MathService.setNum(vm.n1);
            var n2 = MathService.setNum(vm.n2);

            if(n1 === 0 && n2 === 0) {
                vm.result = false;
                return false;
            }

            vm.result.somar = MathService.setFloat(MathService.somar(n1)(n2));
            vm.result.multiplicar = MathService.setFloat(MathService.multiplicar(n1)(n2));
            vm.result.subtrair = MathService.setFloat(MathService.subtrair(n1)(n2));
            vm.result.dividir = MathService.setFloat(MathService.dividir(n1)(n2));

            vm.n1 = '';
            vm.n2 = '';
        }
    }
})();