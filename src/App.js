import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, withRouter } from "react-router-dom";
import UsersConteiner from "./Components/Users/UsersConteiner";
import HeaderConteiner from "./Components/Header/HederConteiner";
import Login from "./Components/Login/Login";
import News from "./Components/Navbar/News/News";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./Redux/app-reducer";
import Preloader from "./Components/Users/Preloader";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/redux-store";

const DialogsContainer = React.lazy(() =>
  import("./Components/Navbar/Dialogs/DialogConteiner")
);
const ProfileContainer = React.lazy(() =>
  import("./Components/Profile/ProfileConteiner")
);

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderConteiner />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path="/dialogs"
            render={() => {
              return (
                <React.Suspense fallback={<Preloader/>}>
                  <DialogsContainer />
                </React.Suspense>
              );
            }}
          />
          <Route
            path="/profile/:userId?"
            render={() => {
              return (
                <React.Suspense fallback={<Preloader/>}>
                  <ProfileContainer />
                </React.Suspense>
              );
            }}
          />
          <Route path="/users" render={() => <UsersConteiner />} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/news" render={() => <News />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

let AppConteiner = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const SamuraiJSApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppConteiner />
      </Provider>
    </BrowserRouter>
  );
};

export default SamuraiJSApp;
