angular.module('meusServicos', ['ngResource'])
.factory('recursoFoto',function($resource) {

    return $resource('v1/fotos/:fotoId', null,{
        update :{
            method: 'PUT'
        }
    });
})
.factory('cadastroFotos', function(recursoFoto, $q) {

    var servico = {};

    servico.cadastrar = function(foto) {
        return $q(function(resolve, reject) {
            resolve(1);
        });
    };

    return servico;
});
