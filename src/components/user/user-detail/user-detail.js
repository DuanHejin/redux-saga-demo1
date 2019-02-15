import React from "react";
import PropTypes from "prop-types"

export class UserDetail extends React.Component {
  static propTypes = {
    user: PropTypes.object
  };

  render() {
    const {user} = this.props;
    if (user) {
      return (
        <div>
          <h2>User Detail</h2>
          <form className="form-horizontal">
            <div className="form-group">
              <label className="col-md-4 control-label">User Name:</label>
              <div className="col-md-8">
                <input className="form-control" value={user.name} readOnly />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-4 control-label">User age:</label>
              <div className="col-md-8">
                <input className="form-control" value={user.age} readOnly />
              </div>
            </div>
          </form>
        </div>
      );
    }
    return "No Detail Data";
  }
}