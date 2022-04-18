import React from "react";
import { ChildrenList } from "../components/children/ChildrenList";
import {AddChild} from "../components/AddChild/AddChild";

export const ChildView = () => {
    return (
        <>
            <ChildrenList/>
            <AddChild/>
        </>
    )
}
