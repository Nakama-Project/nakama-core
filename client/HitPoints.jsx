/* @flow */

HitPointComponent = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      hps: HitPointCollections.find({}).fetch()
    }
  },

  renderHitPoints() {
    return this.data.hps.map((hp) => {
      return (
        <p className="nakama-hp" key={hp._id}>
          {hp.nakama}: {hp.hp}
        </p>
      );
    });
  },

  render() {
    return (
        <div className="hp-stats">
          {this.renderHitPoints()}
        </div>
    );
  }
});
