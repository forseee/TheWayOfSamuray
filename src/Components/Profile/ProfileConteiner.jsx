import React from 'react'
import Profile from './Profile'
import { setProfileInfo, getStatusThankCreator, updateStatusThankCreator } from '../../Redux/profiel-reducer'
import * as axios from 'axios'
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { WithAuthRedirect } from '../../Components/HOC/WithAuthRedirect'



class ProfileConteiner extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId

        if (!userId) {
            userId = 13989
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setProfileInfo(response.data)

            })

        this.props.getStatusThankCreator(userId)


    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatusThankCreator} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.auth,
        status: state.profilePage.status,

    }
}


// const authRedirect = WithAuthRedirect(ProfileConteiner)
// const WithRoutUrlComponentConteiner = withRouter(authRedirect)
// export default  connect (mapStateToProps, { setProfileInfo })(WithRoutUrlComponentConteiner)

export default compose(connect(mapStateToProps, { setProfileInfo, getStatusThankCreator, updateStatusThankCreator }),
    withRouter,
    //  WithAuthRedirect
)
    (ProfileConteiner);