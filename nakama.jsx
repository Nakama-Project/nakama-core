if (Meteor.isClient) {
  // This code is executed on the client only
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });

  // counter starts at 0
  // Session.setDefault('counter', 0);

  // Template.hello.helpers({
  //   counter: function () {
  //     return Session.get('counter');
  //   }
  // });

  // Template.hello.events({
  //   'click button': function () {
  //     // increment the counter when button is clicked
  //     Session.set('counter', Session.get('counter') + 1);
  //   }
  // });

  Meteor.startup(function () {
    // Use Meteor.startup to render the component after the page is ready
    
  });

  Template.home.rendered = function () {
    ReactDOM.render(<App />, document.getElementById("render-target"));
  };

  Template.home.events({
    'click #login': function () {
      Meteor.loginWithGithub({
        requestPermissions: ['user', 'public_repo']
      }, function (err) {
        if (err)
          Session.set('errorMessage', err.reason || 'Unknown error');
      });
    },

    'click #logout': function (e, tmpl) {
      Meteor.logout(function (err) {
        if (err) {
          Session.set('errorMessage', err.reason || 'Unknown error'); 
        }
        else {
          // do something if the user is logged out successfully
        }
      });
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
