/* @flow */
// App component - represents the whole app
App = React.createClass({

  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      currentUser: Meteor.user(),
      hps: HitPointCollections.find({}).fetch()
    };
  },

  getInitialState() {
    return {
    }
  },

  renderHitPoints() {
    return this.data.hps.map((hp) => {
      return <HitPoint key={hp._id} hp={hp} />;
    });
  },

  render() {
    return (
      <div className="row">
        <header>
          { this.renderHitPoints() }
        </header>
      </div>
    );
  }
});
