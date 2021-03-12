import React from "react";
import Dialogs from "./Dialogs";
import {
  sendMassageCreator,
  updateNewMessageBadyCreator,
} from "../../../Redux/dialogs-reducer";
import { connect } from "react-redux";
import { WithAuthRedirect } from "../../../Components/HOC/WithAuthRedirect";
import { compose } from "redux";

let MapStateToProps = (state) => {
  return {
    state: state.dialogsPage,
    isAuth: state.auth.isAuth,
  };
};

export default compose(
  connect(MapStateToProps, { sendMassageCreator, updateNewMessageBadyCreator }),
  WithAuthRedirect
)(Dialogs);
