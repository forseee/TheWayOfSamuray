import React from 'react'

class ProfileStatus extends React.Component {

    state= {
        ChangingStatus: false
    }

    ChangeStatus= () => {
        this.state.ChangingStatus ?
        this.setState({
            ChangingStatus: false
        })
        :  this.setState({
            ChangingStatus: true
        })
    } 

    render() {
        return (
            <>
                { !this.state.ChangingStatus &&
                    <div>
                        <span onDoubleClick= {this.ChangeStatus}>{this.props.status}</span>
                    </div>

                }

                { this.state.ChangingStatus &&
                    <div>
                        <input autoFocus={true} onBlur={this.ChangeStatus} value={this.props.status} />
                    </div>
                }

            </>
        )
    }
}

export default ProfileStatus