import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import { setAuthUser } from '../../Redux/auth-reducer'
import * as axios from 'axios'


class HeaderConteiner extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
            .then(response => {
                    console.log(response)
                if (response.data.resultCode === 0) {
                    let { id, email, login } = response.data.data
                    this.props.setAuthUser(id, email, login)
                }
            })
    }
    render() {
        return (
            <Header {...this.props} />
        )
    }
}


let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.auth,
    }
}

export default connect(mapStateToProps, { setAuthUser })(HeaderConteiner)