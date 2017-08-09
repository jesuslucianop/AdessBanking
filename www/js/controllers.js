
angular.module('starter.controllers', [])


.controller('Loginctr', function($scope, $ionicModal,$timeout,$http,$location,$state) {
  $scope.ConsultaBalance = function(){
    $state.go('app.consulta', {}, { reapp: true, cache: true, notify: true });

  };
  $scope.transacciones = function(){
    $state.go('app.Transacciones', {}, { reapp: true, cache: true, notify: true });

  };
  $scope.met = function(){
    $state.go('app.estatus', {}, { reapp: true, cache: true, notify: true });

  };
  $scope.contacto = function(){
    $state.go('app.contacto', {}, { reapp: true, cache: true, notify: true });

  };
  $scope.ib = function(){
    $state.go('app.info', {}, { reload: true, cache: true, notify: true });

  };
$scope.loginData={};
$scope.div = {};
  function obtener(nb,pass)
  {
    $http.get('http://74318009.ngrok.io/registrodecasos/re/login/loginmovil/'+nb+'/'+pass)
     .success(function(data) {
       return data;
      $scope.div = data;

   })


  }
$scope.contenido = "";
var vm=this;
vm.mydata = [];
$scope.hola={};

      $scope.dologin = function(){

        alert("entro");
  //$state.go('app.Transacciones', {}, {location: "replace", reload: true});
  //$state.go('app.search',{},{location:"replace",reload:true});

  $scope.contenedor = [];
  $scope.contenedor = $scope.loginData.username,$scope.loginData.password;
  $http.post('http://74318009.ngrok.io/registrodecasos/re/login/loginmovil/'+$scope.loginData.username+'/'+$scope.loginData.password)
  .success(function(data) {
    console.log(data);
    $scope.hola = data[0].nombres;
    console.log($scope.hola);
    console.log(data[0].nombres);
    console.log(data);
    //$scope.model =LoginService.get($scope.loginData.username,$scope.loginData.password);
    var j = {};
   var respuesta = (data[0].respuesta);
    //console.log(data);
    var prueban =  (data);
    var t = data['loginMovil'];
    var data_object = (data);
    var fecha_recibida = (data[0].fecha_nacimiento);
    //console.log(data_object);
    if(respuesta==2){
      console.log(fecha_recibida);
      $scope.validarfecha=function(){

      if($scope.datafecha.fechaconfirmacion == fecha_recibida){
        console.log("registro la fecha");
        $http.post('http://74318009.ngrok.io/registrodecasos/re/login/createuser/'+$scope.loginData.username+'/'+$scope.datafecha.fechaconfirmacion)
        .success(function(data) {

          console.log("esto sucedio");
          console.log(data);

        });
              $scope.fc.hide();
              $scope.tn.show();
            }
            };
        alert("hay que confirmar fecha");
        console.log(data);
        $scope.fc.show();
        $scope.modal.hide();
      }
      else if(respuesta==1){
        $scope.hola = data[0].nombres;
                    $scope.nombre_usuario = (data[0].nombre_usuarios);
        alert("es 1 ");
        console.log(data);
         $scope.mydata = "";
       $http.get('http://74318009.ngrok.io/registrodecasos/re/login/loginmovil/'+$scope.loginData.username+'/'+$scope.loginData.password)
      // $http.get('http://74318009.ngrok.io/registrodecasos/re/login/alluser/algo%20para%20que%20te%20devuelva%20todos%20los%20usuarios')
        .success(function(data) {
        sessionStorage.setItem('jonatan', JSON.stringify(data));
        sessionStorage.setItem('nombre_usuario',data[0].nombres);
        sessionStorage.setItem('primer_apellido',data[0].apellido1);
        sessionStorage.setItem('segundo_apellido',data[0].apellido2);
        sessionStorage.setItem('barrio',data[0].Barrio);
        sessionStorage.setItem('fecha_nacimiento',data[0].Barrio);
        sessionStorage.setItem('Estado',data[0].info);
        sessionStorage.setItem('Ciudad',data[0].Ciudad);
        sessionStorage.setItem('Municipio',data[0].Municipio);
        sessionStorage.setItem('Provincia',data[0].Provincia);
        sessionStorage.setItem('calle',data[0].calle);
        sessionStorage.setItem('cedula',$scope.loginData.username);
        sessionStorage.setItem('fecha_nacimiento',data[0].fecha_nacimiento);
        sessionStorage.setItem('telefono',data[0].telefono);
        sessionStorage.setItem('subsidios',data[0].subsidios);
        sessionStorage.setItem('plasticos',data[0].plasticos);
        console.log(data[0]);

   })


$state.go('app.prueba', {}, { reload: true, cache: true, notify: true });

    }
  });



      };
})
.controller('AppCtrl', function($scope, $http, $location) {
  $scope.mydata = sessionStorage.getItem('nombre_usuario');
  $scope.nombre = sessionStorage.getItem('nombre_usuario');
  $scope.cedula = sessionStorage.getItem('cedula');
  $scope.primer_apellido = sessionStorage.getItem('primer_apellido');
  $scope.segundo_apellido = sessionStorage.getItem('segundo_apellido');
  $scope.estado = sessionStorage.getItem('Estado');
  $scope.plasticos = sessionStorage.getItem('plasticos');
  $scope.fecha = sessionStorage.getItem('fecha_nacimiento');
  $scope.subsidios = sessionStorage.getItem('subsidios');
  if(sessionStorage.getItem('telefono') == 'null'){
    $scope.telefono = "No Tiene Telefono";
  }else{
  $scope.telefono = sessionStorage.getItem('telefono');
}
  $scope.calle = sessionStorage.getItem('calle');
  $scope.barrio = sessionStorage.getItem('barrio');
  $scope.municipio = sessionStorage.getItem('Municipio');
  $scope.direccion = $scope.calle+'  '+$scope.barrio+'  '+$scope.municipio;



})

.controller('PlaylistsCtrl', function($scope) {

})

.controller('PlaylistCtrl', function($scope, $stateParams){

});
