/*angular.module('starter', ['ionic', 'starter.controllers'])
  .service('LoginService', function ($scope,$http) {
    get: function(name, pw) {
    return
  $http.get('http://74318009.ngrok.io/registrodecasos/re/login/loginmovil/'+name+'/'+pw)
      .success(function(data) {

    })
  }
});*/

angular.module("starter",[]).service('LoginService', function($q) {
    return {
        loginUser: function(name, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;

            if (name == 'user' && pw == 'secret') {
                deferred.resolve('Welcome ' + name + '!');
            } else {
                deferred.reject('Wrong credentials.');
            }
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
        get: function(name, pw) {
        return
      $http.get('http://74318009.ngrok.io/registrodecasos/re/login/loginmovil/'+name+'/'+pw)
          .success(function(data) {

        })
      }
    }
})
