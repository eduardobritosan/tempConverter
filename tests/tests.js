var assert = chai.assert; 
//Prueba de Farenheit a Celsius
suite('temperature converter test suite', function() {
    test('23 c = 73.4 Farenheit', function() {
        original.value = "23 c";
        calc();
        assert.deepEqual(converted.innerHTML, "73.4 Farenheit");
    });//Prueba de Celsius a Farenheit
    test('73.4 f = 23 Celsius', function() {
        original.value = "73.4 f";
        calc();
        assert.deepEqual(converted.innerHTML, "23 Celsius");
    });//Prueba del mensaje de error
    test('aiomxd328752 = Failure in conversion', function() {
        original.value = "aiomxd328752";
        calc();
        assert.match(converted.innerHTML, "Failure in conversion");
    });
});

