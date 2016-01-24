/* @flow */

HitPoint = React.createClass({
  propTypes: {
    hp: React.PropTypes.object.isRequired
  },
  addHP() {
    HitPointCollections.update(this.props.hp._id,{
      $set: {hp: this.props.hp.hp+1}
    });
  },
  dropHP() {
    HitPointCollections.update(this.props.hp._id,{
      $set: {hp: this.props.hp.hp-1}
    });
  },
  render() {
    return (
      <div>
        <p>
          {this.props.hp.nakama}: {this.props.hp.hp}
        </p>
        <button className="plus button" onClick={this.addHP}>
          +
        </button>
        <button className="minus button" onClick={this.dropHP}>
          -
        </button>
      </div>
    );
  }
});
