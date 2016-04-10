/* @flow */
// App component - represents the whole app
App = React.createClass({

  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      currentUser: Meteor.user(),
      nakamas: NakamaCollection.find({}).fetch()
    };
  },

  getInitialState() {
    return {
    }
  },

  renderNakama() {
    return this.data.nakamas.map((nakama) => {
      return <Nakama key={nakama._id} nakama={nakama} />;
    });
  },

  render() {
    return (
      <div className="row">
        <header>
          { this.renderNakama() }
        </header>
      </div>
    );
  }
});
