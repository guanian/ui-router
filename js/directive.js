function pageTitle($rootScope){
    return {
        link : function(scope,element){
            var func = function(event,toState){
                //console.log(scope);
                var str="___";
                if(toState.data && toState.data.title){
                    str+=toState.data.title;
                }
                element.text(str);
            }
            $rootScope.$on("$stateChangeStart",func);
        }
    }
}
function createDom($rootScope){
    return {
        //restrict : "E",
        link : function(scope,element){
           /* var func = function(event,toState){
                //console.log(element);
                var str="";
                for(var i=0; i<toState.data.length; i++){
                    str+="<li>"+"id:"+toState.data[i]+"</li>";
                }
                element.append(str);
            }
            $rootScope.$on("$stateChangeStart",func)*/
            var str="";
            for(var i=0; i<scope.arr.length;i++){
                str+="<p>id:"+scope.arr[i]+"</p>"
            }
            element.append(str);
        }
    }
}
angular.module("app")
       .directive("pageTitle",pageTitle)
       .directive("createDom",createDom)