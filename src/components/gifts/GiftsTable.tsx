import React from "react";
import { GiftEntity } from "types";
import { GiftTableRow } from "./GiftTableRow";

interface Props {
    gifts: GiftEntity[];
    onGiftChanged: () => void;
}

export const GiftsTable = (props: Props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Count</th>
                </tr>
            </thead>
            <tbody>
            {
                props.gifts.map(gift => <GiftTableRow gift={gift} key={gift.id} onGiftChanged={props.onGiftChanged}/>)
            }
            </tbody>
        </table>
    )
}
