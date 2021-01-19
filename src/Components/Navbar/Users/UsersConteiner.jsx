import React from 'react'
import { connect } from "react-redux";
import { setCurrentPage, getUserThunkCreator, followUserThankCreator, unFollowUserThankCreator } from '../../../Redux/users-reducer'
import Users from './Users'
import Preloader from './Preloader';


class UsersConteinerComponent extends React.Component {

    componentDidMount() {
        this.props.getUserThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    changeCurrentPage = (page) => {
        this.props.getUserThunkCreator(page, this.props.pageSize)
        this.props.setCurrentPage(page)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    changeCurrentPage={this.changeCurrentPage}
                    users={this.props.users}
                    followUserThankCreator={this.props.followUserThankCreator} 
                    unFollowUserThankCreator={this.props.unFollowUserThankCreator}/>
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,

    }
}

const UserConteiner = connect(mapStateToProps, { setCurrentPage, getUserThunkCreator, followUserThankCreator, unFollowUserThankCreator })(UsersConteinerComponent);

export default UserConteiner
