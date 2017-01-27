/**
 * Created by jeevan on 23/1/15.
 */

angular.module("todo").service("TodoService", [ function() {
    var service = {};
    service.todos = [];

    service.add = function(item) {
        if(!item || !item.text) {
            alert('Todo can not be empty');
            return;
        }
        this.todos.push(item);
    };

    service.delete = function(item) {
        this.todos.splice(item, 1);
    };

    service.clearCompleted = function() {
        for(var i = this.todos.length - 1; i >= 0; i--) {
            if(this.todos[i].completed) {
                this.todos.splice(i, 1);
            }
        }
    };
    return service;

    /*return {
     todos : [],
     add : function(item) {
     this.todos.push(item);
     },
     delete : function(item) {
     this.todos.splice(item, 1);
     },
     clearCompleted : function() {
     for(var i = this.todos.length - 1; i >= 0; i--) {
     if(this.todos[i].completed) {
     this.todos.splice(i, 1);
     }
     }
     }
     };*/
}]);