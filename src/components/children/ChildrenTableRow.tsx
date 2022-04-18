import React from "react";
import {ChildEntity, GiftEntity} from "types";
import {ChildGiftSelect} from "../ChildGiftSelect";

interface Props {
    child: ChildEntity;
    giftsList: GiftEntity[];
}

export const ChildrenTableRow = (props: Props) => {
    return (<tr>
        <td>
            {props.child.name}
        </td>
        <td>
            <ChildGiftSelect giftList={props.giftsList} selectedId={props.child.giftId === undefined ? "" : props.child.giftId} childId={props.child.id as string}/>
        </td>

    </tr>)
}
