import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles.css'


const Users = (props) => {

    let pages = Math.ceil(props.totalUsersCount / props.pageSize)
    let paginator = []
    for (let i = 1; i <= pages; i++) {
        paginator.push(i)
    }

    return (
        <div>
            <div>
                {
                    paginator.map(page => {
                        return (<span className={props.currentPage === page && 'currentpage'} onClick={() => { props.changeCurrentPage(page) }} >{page}</span>
                        )
                    })
                }
            </div>

            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                                <img src={user.photos.small ? user.photos.small : 'https://www.speexx.com/wp-content/uploads/icon-think-user-centric-1.png'} className='userphoto' />
                            </NavLink>
                        </div>
                        <div>
                            {
                                user.followed
                                    ? <button onClick={() => {
                                        props.unFollowUserThankCreator(user.id)
                                    }}>UnFollow</button>

                                    : <button onClick={() => {
                                        props.followUserThankCreator(user.id)
                                    }}>Follow</button>
                            }

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>
                                {user.name}
                            </div>
                            <div>
                                {user.status}
                            </div>
                        </span>
                    </span>
                </div>
                )
            }
        </div>
    )


}

export default Users;