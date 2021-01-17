import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logOut} from "../../redux/auth-Reducer";

class HeaderContainer extends React.Component{

    render() {
        return <Header {...this.props} />
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    isFetching: state.auth.isFetching
})

export default connect(mapStateToProps,{logOut})(HeaderContainer);