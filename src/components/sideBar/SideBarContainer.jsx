import React from 'react';
import {connect} from "react-redux";
import SideBar from "./SideBar";


let mapStateToProps = (state) =>{
    return{
        state: state.sideBar.friends
    }
}

const SideBarContainer = connect(mapStateToProps)(SideBar)
export default SideBarContainer;