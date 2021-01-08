import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setUser} from "../../redux/auth-Reducer";

class HeaderContainer extends React.Component{
    componentDidMount() {
        this.props.setUser()
    }

    render() {
        return <Header {...this.props} />
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps,{setUser})(HeaderContainer);