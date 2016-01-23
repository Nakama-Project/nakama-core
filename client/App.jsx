// App component - represents the whole app
App = React.createClass({

  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {currentUser: Meteor.user()};
  },

  getInitialState() {
    return {
      hideCompleted: false
    }
  },

  render() {
    return (
      <div className="row">
        <header>
          

          { this.data.currentUser ?
            <div id="intro">
              <button id="logout" type="button" className="button">Logout</button> 
            </div>
            :
            <div id="welcome">
              <h1>Welcome to the World of Nakama</h1>
              <button id="login" type="button" className="large button"><i className="fa fa-github-alt"></i> Login with Github</button>
            </div>
          }

        </header>

      </div>
    );
  }
});