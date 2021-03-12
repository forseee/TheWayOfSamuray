import React from "react";
import Profile from "./Profile";
import {
  setProfileInfo,
  getStatusThankCreator,
  updateStatusThankCreator,
} from "../../Redux/profiel-reducer";
import * as axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import {
  getAuthId,
  getIsAuth,
  getProfile,
  getprofileStatus,
} from "../../Redux/profile-selectors";

class ProfileConteiner extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;

    if (!userId) {
      userId = this.props.autorizeUserId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }

    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then((response) => {
        this.props.setProfileInfo(response.data);
      });

    this.props.getStatusThankCreator(userId);
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatusThankCreator}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: getProfile(state),
    isAuth: getIsAuth(state),
    status: getprofileStatus(state),
    autorizeUserId: getAuthId(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    setProfileInfo,
    getStatusThankCreator,
    updateStatusThankCreator,
  }),
  withRouter
)(ProfileConteiner);
