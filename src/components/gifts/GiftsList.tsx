import React, {useEffect, useState} from "react";
import { GiftsTable } from "./GiftsTable";
import { GiftEntity } from "types";
import {Spinner} from "../common/Spinner/Spinner";
import {validateResponse} from "../../utils/validateResponse";
import {APICall} from "../../utils/APICall";

export const GiftsList = () => {
    const [giftsList, setGiftsList] = useState<GiftEntity[] | null>(null);

    const refreshGiftsTable = async () => {
        setGiftsList(null);
        const res = await APICall("gift");
        await validateResponse(res);
        const data = await res.json();
        setGiftsList(data.giftsList);
    }

    useEffect(() => {
       refreshGiftsTable();
    }, [])

    if(giftsList === null) {
        return <Spinner/>
    }

    return (
        <>
            <h1>Gifts</h1>
            <GiftsTable gifts={giftsList} onGiftChanged={refreshGiftsTable}/>
        </>
    )
}
