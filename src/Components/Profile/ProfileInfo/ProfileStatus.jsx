import React from 'react'

class ProfileStatus extends React.Component {

    state = {
        ChangingStatus: false,
        status: this.props.status,
    }



    activateInput = () => {
        this.setState({
            ChangingStatus: true
        })
    }

    diactivateInput = () => {
        this.setState({
            ChangingStatus: false
        })
        this.props.updateStatus(this.state.status)
    }

    changeStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }


    render() {
        return (
            <>
                { !this.state.ChangingStatus &&
                    <div>
                        <span onDoubleClick={this.activateInput}>{this.props.status || '-----'}</span>
                    </div>

                }

                { this.state.ChangingStatus &&
                    <div>
                        <input onChange={this.changeStatus} autoFocus={true} onBlur={this.diactivateInput} value={this.state.status} />
                    </div>
                }

            </>
        )
    }
}

export default ProfileStatus