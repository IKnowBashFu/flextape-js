const assert = require('assert');
const flextape = require('../index.js');

describe('String Concat', function() {
	it('should return "THATS ALOTTA DAMAGE"', function() {
		assert.equal(flextape.slap("THATS ", "ALOTTA DAMAGE"), "THATS ALOTTA DAMAGE");
	});
});

describe('String and Int Concat', function() {
	it('should return "I SAWED 2 BOATS IN HALF!"', function() {
		assert.equal(flextape.slap("I SAWED ", 2, " BOATS IN HALF!"), "I SAWED 2 BOATS IN HALF!");
	});
});