import React, {FormEvent, useState} from "react";
import { GiftEntity, SetGiftForChild } from "types";
import {APICall} from "../utils/APICall";

interface Props {
    giftList: GiftEntity[];
    selectedId: string;
    childId: string;
}

export const ChildGiftSelect = (props: Props) => {
    const [selected, setSelected] = useState<string>(props.selectedId);

    const sendForm = async (e: FormEvent) => {
        e.preventDefault();
        await APICall(`child/gift/${props.childId}`, "PATCH", {giftId: selected} as SetGiftForChild);
        };



    return (
        <>
            <form onSubmit={sendForm}>
                <select value={selected} onChange={e => setSelected(e.target.value)}>
                {props.giftList.map(gift => (
                    <option value={gift.id} key={gift.id}>{gift.name}</option>
                ))
                }
            </select>
                <button type="submit">Change Gift</button>
            </form>

        </>

    )

}
