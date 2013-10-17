function multiSelectController($scope){

    $scope.options = [
        {
            name: 'Option A',
            value: 10,
            active:false
        },{
            name: 'Option B',
            value: 20,
            active:true
        },{
            name: 'Option C',
            value: 30,
            active:false
        },{
            name: 'Option D',
            value: 40,
            active:false
        }
    ];

    $scope.toggleActive = function(s){
        s.active = !s.active;
    };

    $scope.total = function(){

        var total = 0;

        angular.forEach($scope.options, function(s){
            if (s.active){
                total+= s.value;
            }
        }); 

        return total;
    };
}