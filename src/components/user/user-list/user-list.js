import React from "react";
import PropTypes from "prop-types"

export class UserList extends React.Component {
  static propTypes = {
    users: PropTypes.array,
    onClickUserName: PropTypes.func
  };

  render() {
    const {users, onClickUserName} = this.props;
    if (users && users.length > 0) {
      return (
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>age</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user) => 
                (<tr key={user.id}>
                  <td>{user.id}</td>
                  <td onClick={onClickUserName(user.id)}>{user.name}</td>
                  <td>{user.age}</td>
                </tr>)
              )
            }
          </tbody>
        </table>
      );
    }
    return 'No result!'
  }
}