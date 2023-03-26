import { createSlice } from "@reduxjs/toolkit";
import postSummaryArray from "../post-summary-list/posts.json";

const postSummarySlice = createSlice({
    name: "postSummary",
    initialState: postSummaryArray
});

export default postSummarySlice.reducer;
