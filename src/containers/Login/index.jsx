import React from "react"
import LoginView from "../../conponents/LoginView"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as ActionInfo from "../../actions/login"
class Login extends React.Component {
    usernameHandler(username) {
        this.props.ActionInfo.setLogin({
            uname: username
        })
        //登录完毕 name传入redux 然后返回之前的页面
        window.history.back();
    }
    render() {
        return (
            <div>
                <LoginView usernameHandler={this.usernameHandler.bind(this)} />
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        ActionInfo: bindActionCreators(ActionInfo, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)