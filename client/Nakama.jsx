/* @flow */

Nakama = React.createClass({
  propTypes: {
    nakama: React.PropTypes.object.isRequired
  },
  addHP() {
    NakamaCollection.update(this.props.nakama._id,{
      $set: {hp: this.props.nakama.hp+1}
    });
  },
  dropHP() {
    NakamaCollection.update(this.props.nakama._id,{
      $set: {hp: this.props.nakama.hp-1}
    });
  },
  render() {
    return (
      <div>
        <p>
          {this.props.nakama.name}: {this.props.nakama.hp}
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
