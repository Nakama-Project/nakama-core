// App component - represents the whole app
App = React.createClass({

  // This mixin makes the getMeteorData method work
  // mixins: [ReactMeteorData],

  getInitialState() {
    return {
      hideCompleted: false
    }
  },

  render() {
    return (
      <div className="container">
        <header>
          <h1>Login/out</h1>

          <AccountsUIWrapper />

        </header>

      </div>
    );
  }
});