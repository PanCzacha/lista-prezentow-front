import React, {MouseEvent} from "react";
import { Link } from "react-router-dom";
import { GiftEntity } from "types";
import {validateResponse} from "../../utils/validateResponse"
import {APICall} from "../../utils/APICall";
interface Props {
    gift: GiftEntity;
    onGiftChanged: () => void;
}

export const GiftTableRow = (props: Props) => {

    const deleteGift = async (e: MouseEvent) => {
        e.preventDefault();
        if(!window.confirm(`Are you sure you want to delete ${props.gift.name}?`)) {
            return
        }
        const res = await APICall(`gift/${props.gift.id}`, "DELETE");
        await validateResponse(res);
        props.onGiftChanged();
    };



    return (<tr>
                <td>
                 <Link to={`/gift/${props.gift.id}`}>
                     {props.gift.name}
                 </Link>
                </td>
                <td>{props.gift.count}</td>
                <td>
                    <a href="#" onClick={deleteGift}>🧺</a> {/*zapobiega skakaniu do góry strony po kliknięciu w link */}
                </td>
            </tr>)
}
