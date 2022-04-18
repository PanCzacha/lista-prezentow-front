import React, {FormEvent, useState} from "react";
import { GiftEntity, SetGiftForChild } from "types";
import {APICall} from "../utils/APICall";
import {validateResponse} from "../utils/validateResponse";

interface Props {
    giftList: GiftEntity[];
    selectedId: string | undefined;
    childId: string;
    childName: string;
}

export const ChildGiftSelect = (props: Props) => {
    const [selected, setSelected] = useState<string | undefined>(props.selectedId || "");
    const [resultInfo, setResultInfo] = useState<string | null>(null);

    const sendForm = async (e: FormEvent) => {
            e.preventDefault();
            const res = await APICall(`child/gift/${props.childId}`, "PATCH", {giftId: selected} as SetGiftForChild);
            await validateResponse(res);
            setResultInfo(`Gift has been assigned to ${props.childName}`);
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
            {resultInfo &&
            <p>
              <strong>{resultInfo}</strong>
              <button onClick={() => setResultInfo(null)}>OK</button>
            </p>}
        </>

    )

}
