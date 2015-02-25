var assert = chai.assert; 
//Prueba de Farenheit a Celsius
suite('temperature converter test suite', function() {
    setup(function(){
      if (typeof __html__ !== 'undefined') {
          document.body.innerHTML = __html__['tests/karmatest.html'];
          original = document.getElementById('original');
          converted = document.getElementById('converted');
      }
    });
    test('23 c = 73.4 Farenheit', function() {
        original.value = "23 c";
        calc();
        assert.deepEqual(converted.innerHTML, "73.4 Farenheit");
    });//Prueba de Celsius a Farenheit
    test('73.4 f = 23.0 Celsius', function() {
        original.value = "73.4 f";
        calc();
        assert.deepEqual(converted.innerHTML, "23.0 Celsius");
    });//Prueba del mensaje de error
    test('aiomxd328752 = Failure in conversion', function() {
        original.value = "aiomxd328752";
        calc();
        assert.deepEqual(converted.innerHTML, "Failure in conversion");
    });
});

