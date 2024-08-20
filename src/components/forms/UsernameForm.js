'use client'


import handleFormSubmit from "@/actions/grabUsername";
import UsernameFormResult from "../formResults/UsernameFormResult";
import { useState } from "react";
import { redirect } from "next/navigation";
import SubmitButton from "../buttons/SubmitButton";

export default function UsernameForm({searchParams})
{
    const[taken,setTaken] = useState(false);
    async function takenUsername(formData)
    {
        const username = (formData.get('username'));
        const result = await handleFormSubmit(formData)
        if(result == false)
        {
            setTaken(true);
        }
        else
        {
            setTaken(false);
            redirect('/account/created='+username);
        }
    }
    const desiredusername = searchParams.desiredUsername;
    return(
        <div>
             <form action={takenUsername}>
                <h1 className="text-4xl font-bold text-center mb-2">
                    Grab your Username
                </h1>
                <p className="text-center mb-6 text-gray-500">
                    Choose your Username
                </p>
                <div className="max-w-xs mx-auto">
                    <input  name="username" className="block p-2 mx-auto border w-full mb-2 text-center" defaultValue={desiredusername} type="text" placeholder="Username">
                    </input>
                    {taken &&(
                        <UsernameFormResult></UsernameFormResult>
                    )}
                    <SubmitButton></SubmitButton>
                </div>
            </form>
        </div>
    )
}