describe('search results', function(){
'use strict';
  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = 'base/spec/fixtures';
    loadFixtures('myfixture.html');
  });

  it('should render search results when give the results', function(){
      var results = [
        {
          'description': 'The largest city and national capital of the Netherlands (Holland).',
          'name': 'Amsterdam'
        },
        {
          'description': 'Formerly known as Angora, second largest city and the national capital of Turkey.',
          'name': 'Ankara'
        }
      ];
      var searchResults = new SearchResults();
      searchResults.render(results);
      expect($('#results div').length).toBe(2);
  });

  it('should trigger like event when like button clicked', function(){
    var searchResults = new SearchResults();
    searchResults.handler();
    spyOnEvent($(document), 'like');
    $('.like').click();
    expect('like').toHaveBeenTriggeredOn($(document));
  });
});
