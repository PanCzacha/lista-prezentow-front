import React, {FormEvent, useState} from "react";
import {ChildEntity, CreateChildReq} from "types";
import {Spinner} from "../common/Spinner/Spinner";
import {APICall} from "../../utils/APICall";
import {validateResponse} from "../../utils/validateResponse";

export const AddChild = () => {
    const [form, setForm] = useState<CreateChildReq>({
        name: "",
        giftId: "",
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
            const res = await APICall("child", "POST",  form);
            await validateResponse(res);
            const data: ChildEntity = await res.json();
            setResultInfo(`Child ${data.name} added to Santa list.`);
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
                <button onClick={() => setResultInfo(null)}>Add Another child</button>
            </div>
        )
    }

    return <form onSubmit={sendForm}>
        <h2>Add Child</h2>
        <p>
            <label>Name:
                <input
                    type="text"
                    value={form.name}
                    onChange={e => updateForm("name", e.target.value)}/>

            </label>
        </p>
        <button>Add</button>
    </form>


}
