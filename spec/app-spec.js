describe('app', function(){
  'use strict';
  var app;
  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = 'base/spec/fixtures';
    loadFixtures('myfixture.html');
    app = new App();
  });

  it('when click search button will send a Ajax request', function(){
    app.sender();
    spyOn($, 'get');
    $('#searchButton').click();
    expect($.get).toHaveBeenCalled();
  });

  it('when like event trigger will add like place', function(){
    //TODO
  });
});
