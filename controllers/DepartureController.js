test.controller('DeparturesCtrl', function DeparturesCtrl($scope, DeparturesFactory) {
    $scope.departures = DeparturesFactory.departures;
    $scope.DeparturesFactory = DeparturesFactory;

    $scope.pickedAirport = null;
    $scope.airportPicker = function(airport) {
        $scope.pickedAirport = airport;
    }


    // $scope.airportPicker = function(airport){
    //       var arrivalsVar = $scope.departures.airport.arrivals;
    //       return arrivalVar;
    // }

});
