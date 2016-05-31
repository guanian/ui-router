function index($scope,$rootScope){
    console.log('index');
    $rootScope.indexArr=[1,2,3,3,3,3]
}
function list($scope,$rootScope){
    /*console.log('list');*/
    $scope.arr=[1,2,3,4,5,6]
    console.log($rootScope);
}
function pro($scope,$location){
    console.log('pro');
    $scope.getInfo = function(){
        console.log($location);
        $location.path("user/info");
    }
}
function about($scope,$location){
    console.log($location.search().name);
}
function dom($scope){
    console.log($scope)
}
angular.module("app")
       .controller("index",index)
       .controller("list",list)
       .controller("pro",pro)
       .controller("about",about)
       .controller("dom",dom)