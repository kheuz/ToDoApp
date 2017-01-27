/**
 * Created by jeevan on 23/1/15.
 */

angular.module("todo", []).controller("TodoCtrl", ['$scope', 'TodoService', function($scope, TodoService) {
    $scope.todos = TodoService.todos;

    $scope.keypress = function() {
        if(event.keyCode == 13) {
            $scope.add();
        }
    }

    $scope.add = function() {
        TodoService.add($scope.newTodo);
        $scope.newTodo = {};
    }

    $scope.delete = function(index) {
        TodoService.delete(index);
    }

    $scope.clearCompleted = function() {
        TodoService.clearCompleted();
    }
}]);