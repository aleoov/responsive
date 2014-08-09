angular.module('vooelaWeb',[])
        .controller('mainCtrl',['',function($scope){
                $scope.printConsole = function(){
                    console.log("test");
                };
            
        }]);