import React from 'react';
import {sendMessageCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) =>{
    return {
        dialogsPage: state.dialogsPage
    }
}


let mapDispatchToProps = (dispatch) =>{
    return {
        sendMessage: (message) => {
            dispatch(sendMessageCreator(message))
        }
    }
}


export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    //AuthRedirect
)(Dialogs)
