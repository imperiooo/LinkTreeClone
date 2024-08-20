'use client'

import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function HeroForm()
{
    // const [username,setUsername] = useState('')
    const router = useRouter();
    const res = useSession().data;
    console.log(res);
    useEffect(() => {
        if('localStorage' in window && window.localStorage.getItem('desiredUsername'))
        {
            const username = window.localStorage.getItem('desiredUsername');
            window.localStorage.removeItem('desiredUsername');
            redirect('/account?desiredUsername='+username)
        }
    }, []);
    async function handleSubmit(ev)
    {
        ev.preventDefault();

        const form = ev.target;

        const input = form.querySelector('input')
        const username = input.value
        if(username.length > 0)
        {
            window.localStorage.setItem('desiredUsername', username);
            if(res!=null)
            {
                router.push('/account?desiredUsername='+username)
            }
            else
            await signIn('google')
        }
    }
    return (
        <div>
            <form onSubmit={ handleSubmit } className="inline-flex items-center shadow-lg shadow-gray-500/20">
        <span className="bg-white pl-4 py-4">Linklist.to/</span>
        <input type="text" className="py-4" placeholder="Username"></input>
        <button type="submit" className="bg-blue-500 text-white py-4 px-6">Join For Free</button>
        </form>
        </div>
        );
}