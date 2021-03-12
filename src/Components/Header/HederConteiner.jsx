import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { LogoutUserTC } from "../../Redux/auth-reducer";

class HeaderConteiner extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { LogoutUserTC })(HeaderConteiner);
