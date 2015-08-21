describe('liked places', function(){
'use strict';
  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = 'base/spec/fixtures';
    loadFixtures('myfixture.html');
  });

  it('should add one liked place when give the name ', function(){
      var likedPlaces = new LikedPlaces();
      likedPlaces.add("AMSTERDAM");
      expect($('li').length).toBe(2);
  });
});
