import React, {useEffect, useState} from "react";
import { ChildrenTable } from "./ChildrenTable";
import { ListChildrenRes } from "types";
import {Spinner} from "../common/Spinner/Spinner";
import {APICall} from "../../utils/APICall";
import {validateResponse} from "../../utils/validateResponse";

export const ChildrenList = () => {
    const [data, setData] = useState<ListChildrenRes | null>(null);

    const refreshChildrenTable = async () => {
        setData(null);
        const res = await APICall("child");
        await validateResponse(res);
        const data = await res.json();
        setData(data);
    }

    useEffect(() => {
        refreshChildrenTable();
    }, [])

    if(data === null) {
        return <Spinner/>
    }

    return (
        <>
            <h1>Gifts</h1>
            <ChildrenTable childrenList={data.childrenList} giftsList={data.giftsList}/>
        </>
    )
}
