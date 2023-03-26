import React from "react";
// import PostItem from "../post-item";
// import "./index.css";
import TuitsList from "../tuits/TuitsList";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return(
        <>
        <h2>Home</h2>
        <WhatsHappening/>
        <TuitsList/>
        {/*<PostItem/>*/}
        </>
    );
};
export default HomeComponent;

