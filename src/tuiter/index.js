import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import {Routes, Route} from "react-router";
import HomeComponent from "./home";
import whoReducer from "./reducers/who-reducer";
import homeTuitsReducer from "./reducers/hometuits-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import profileReducer from "./reducers/profile-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import postSummaryReducer from "./reducers/post-summary-reducer";
import ProfileComponent from "./profile";
import EditProfileComponent from "./edit-profile";
const store = configureStore({reducer: {who: whoReducer, postSummary: postSummaryReducer, tuitsData: tuitsReducer,
        hometuits: homeTuitsReducer, profile: profileReducer}});

function Tuiter() {
    return (
        <Provider store={store}>
        <div className="row mt-2">
            <div className="col-1 col-md-1 col-lg-1 col-xl-2">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
                <Routes>
                    <Route path="home"    element={<HomeComponent/>}/>
                    <Route path="explore" element={<ExploreComponent/>}/>
                    <Route path="edit-profile" element={<EditProfileComponent/>}/>
                    <Route path="profile" element={<ProfileComponent/>}/>
                    <Route path="/" element={<HomeComponent/>}/>
                </Routes>
            </div>
            <div className="d-none d-lg-block col-lg-4">
                <WhoToFollowList/>
            </div>
        </div>
        </Provider>
    );
}

export default Tuiter

