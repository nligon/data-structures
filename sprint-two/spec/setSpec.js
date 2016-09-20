describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  it('should be capable of handling numbers', function() {
    set.add(5);
    set.add(6);
    set.remove(5);
    expect(set.contains(6)).to.equal(true);
    expect(set.contains(5)).to.equal(false);
  });

  it('should be capable of handling input objects of any type', function() {
    set.add([1, 2]);
    set.add({ a: 'b' });
    set.add(function() {});
    set.remove(6);
    expect(set.contains([1, 2])).to.equal(true);
    expect(set.contains({ a: 'b' })).to.equal(true);
    expect(set.contains(function() {})).to.equal(true);

  });
});
