require(['primality'], function (primality) {
  describe('Suite', function() {
    describe('primality()', function() {
      it('should expose version number', function () {
        primality.version.should.match(/[0-9]+\.[0-9]+\.[0-9]+/);
      });
      it('should expose public constructors', function () {
        primality.should.be.a('function');
      });
      it('should return true when value is prime', function() {
        primality(7).should.equal(true);
        primality(new Number(11)).should.equal(true);
      });
      it('should return false when value is not prime', function() {
        primality(6).should.equal(false);
        primality(new Number(8)).should.equal(false);
      });
      it('should return false for 1', function() {
        primality(1).should.equal(false);
        primality(new Number(1)).should.equal(false);
      });
      it('should turn strings into numbers', function() {
        primality('13').should.equal(true);
        primality(new String('24')).should.equal(false);
      });
      it('should return true if an array of prime numbers is passed', function() {
        primality([17, 19, 23]).should.equal(true);
        primality([29, 30, 31]).should.equal(false);
      });
    });
  });
});