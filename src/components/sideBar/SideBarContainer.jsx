import React from 'react';
import s from './sideBar.module.css';
import Friends from "./Friends";
import {connect} from "react-redux";
import SideBar from "./SideBar";


let mapStateToProps = (state) =>{
    return{
        state: state.sideBar.friends
    }
}

const SideBarContainer = connect(mapStateToProps)(SideBar)
export default SideBarContainer;