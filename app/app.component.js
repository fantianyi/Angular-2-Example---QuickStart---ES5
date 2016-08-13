(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<h1>My First Angular 2 App</h1><div>with ES5 and angular2 2.0.0.rc.5!</div>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));