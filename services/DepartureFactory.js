test.factory('DeparturesFactory', function DeparturesFactory() {
    var factory = {};

    var city1 = {city_name: 'San Francisco', arrivals: ['Juneau', 'Tokyo', 'The Alamo']}
    var city2 = {city_name: 'Juneau', arrivals: ['San Francisco', 'Tokyo']};
    var city3 = {city_name: 'Tokyo', arrivals: ['San Francisco', 'Juneau']};

    factory.departures = [city1, city2, city3];

    return factory;
});
