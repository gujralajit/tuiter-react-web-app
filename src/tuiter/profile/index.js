import React from "react";
import '../index.css'
import ProfileData from "./profile";
import {useSelector} from "react-redux";

const ProfileComponent = () => {
    const profile = useSelector(state => state.profile)
    return(
        <>
            <ProfileData profiledata={profile[0]}/>
        </>
    );
};
export default ProfileComponent;
