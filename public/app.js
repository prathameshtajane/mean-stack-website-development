/**
 * Created by prathamesh on 1/16/17.
 */
angular
    .module('TodoApp',[])
    .controller('TodoController',TodoController);

function TodoController($scope) {
    $scope.List=[
        {title:'Do hm1',content:'Do Hm1 before deadline1'},
        {title:'Do hm2',content:'Do Hm1 before deadline2'},
        {title:'Do hm3',content:'Do Hm1 before deadline3'},
        {title:'Do hm4',content:'Do Hm1 before deadline4'},
        {title:'Do hm5',content:'Do Hm1 before deadline5'},
    ];
}

