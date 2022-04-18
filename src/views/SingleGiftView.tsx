import React, {useEffect, useState} from "react";
import {GetSingleGiftRes} from "types";
import {Link, useParams} from "react-router-dom";

export const SingleGiftView = () => {
    const [gift, setGift] = useState<GetSingleGiftRes | null>(null);

    const {giftId} = useParams();

    useEffect(() => {
        (async () => {
           const res = await fetch(`http://localhost:3001/gift/${giftId}`);
           const data = await res.json();
           setGift(data);
        })()
    }, [])



    if (gift === null) {
        return null;
    }

    return (
        <>
            <h1>{gift.singleGift.name}</h1>
            <p>This gift has ID <strong>{gift.singleGift.id}</strong>.
                We had <strong>{gift.singleGift.count}</strong> of this item and <strong>{gift.givenGiftsCount}</strong> were already given.
            </p>
            <Link to="/gift">Go back to gifts</Link>
        </>
    )
}
