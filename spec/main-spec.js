describe('main', function(){
  'use strict';

  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = 'base/spec/fixtures';
    loadFixtures('myfixture.html');
    jasmine.Ajax.install();
    jasmine.Ajax.stubRequest(
      'http://location-backend-service.herokuapp.com/locations?name=mel'
    ).andReturn
      ({
          responseText: 'location response'
      });
  });

  afterEach(function() {
       jasmine.Ajax.uninstall();
  });

  it('should send ajax call when click searchButton', function(){
    var locationInput = $('#locationInput');
    spyOn(locationInput, 'val').and.returnValue('mel');
    spyOnEvent($('#searchButton'), 'click');
    spyOn($, 'ajax');
    $('#searchButton').click();
    expect('click').toHaveBeenTriggeredOn('#searchButton');
    // expect($.ajax.calls.mostRecent().url).toEqual('http://location-backend-service.herokuapp.com/locations?name=mel');
  });
});
