'use client'
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "next-auth/react";

export default function LogoutButton()
{
    return(
        <button className="border p-2 px-4 shadow" 
        onClick={() => signOut()}>
            <span className="">Logout</span>
            <FontAwesomeIcon className="pl-4" icon={faRightFromBracket} />
        </button>
    )
}