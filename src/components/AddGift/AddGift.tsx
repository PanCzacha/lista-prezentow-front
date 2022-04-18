import React, {FormEvent, useState} from "react";
import {CreateGiftReq, GiftEntity} from "types";
import {Spinner} from "../common/Spinner/Spinner";
import {APICall} from "../../utils/APICall";
import {validateResponse} from "../../utils/validateResponse";

export const AddGift = () => {
    const [form, setForm] = useState<CreateGiftReq>({
        name: "",
        count: 0,
    });
    const [loading, setLoading] = useState<boolean>(false);
    const [resultInfo, setResultInfo] = useState<string | null>(null);

    const updateForm = (key: string, value: any) => {
        setForm(form => {
            return {
                ...form,
                [key]: value,
            }
        })
    }

    const sendForm = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await APICall("gift", "POST", form);
            await validateResponse(res);
            const data: GiftEntity = await res.json();
            setResultInfo(`Gift ${data.name} added, with id ${data.id}`);

        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return (
            <Spinner/>
        )
    }

    if (resultInfo !== null) {
        return (
            <div>
                <p><strong>{resultInfo}</strong></p>
                <button onClick={() => setResultInfo(null)}>Add Another gift</button>
            </div>
        )
    }

    return <form onSubmit={sendForm}>
        <h2>Add Gift</h2>
        <p>
            <label>Name:
                <input
                    type="text"
                    value={form.name}
                    onChange={e => updateForm("name", e.target.value)}/>

            </label>
        </p>
        <p>
            <label>Gift count:
                <input
                    type="number"
                    value={form.count}
                    onChange={e => updateForm("count", Number(e.target.value))}/>
            </label>
        </p>
        <button>Add</button>
    </form>

}
