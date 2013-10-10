function EditorController($scope){

    $scope.show_editor = false;
    $scope.some_text = 'Edit me please';

    $scope.hideEditor = function(){
        $scope.show_editor = false;
    }

    $scope.toggleEditor = function(e){
        e.stopPropagation();
        $scope.show_editor= !$scope.show_editor;
    }
}