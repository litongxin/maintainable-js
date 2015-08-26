describe('SearchFormView', function(){
  'use strict';

  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = 'base/spec/fixtures/template';
    loadFixtures('search-form.template');
  });

  it('#initialize', function(){
    var searchFormView = new SearchFormView(new Backbone.Model());
    expect(searchFormView).toBeDefined();
  });

  it('#render', function() {
    var searchFormView = new SearchFormView(new Backbone.Model());
    var html = searchFormView.render();
    expect(html.find('#locationInput')).toExist();
    expect(html.find('#searchButton')).toExist();
  });

  it('#addResultItem', function() {
    var model = new Backbone.Model({results: []});
    expect(model.get('results').length).toBe(0);
  })
});
