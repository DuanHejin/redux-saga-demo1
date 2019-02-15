import React from "react";
// import axios from 'axios';
import {connect} from 'react-redux';
import { UserList } from "./user-list/user-list";
import { UserDetail } from "./user-detail/user-detail";
import { getUsers, getUserById, clearUsers } from '../../actions/user/user.action'

class User extends React.Component {

  fetchUsers = async() => {
    // const {data: users} = await axios.get("/users");
    // this.setState({users});
    const {getUsers} = this.props;
    getUsers();
  }

  onClickUserName = usrId => async() => {
    // const {data: user} = await axios.get(`/user/${usrId}`);
    // this.setState({user});
    this.props.getUserById(usrId);
  }

  render() {
    const {users, user} = this.props;
    return (
      <React.Fragment>
        <div className="form-group text-center">
          <button className="btn btn-primary" onClick={this.fetchUsers}>Get Users</button>
          <button className="btn btn-cancel" onClick={this.props.clearUsers}>Clear Users</button>
        </div>
        <hr></hr>
        <UserList users={users} onClickUserName={this.onClickUserName} />
        <hr></hr>
        <UserDetail user={user}/>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({userState}) => {
  return {
    users: userState.users,
    user: userState.user
  }
}

const mapDispatchToProps = {getUsers, clearUsers, getUserById}

export default connect(mapStateToProps, mapDispatchToProps)(User);