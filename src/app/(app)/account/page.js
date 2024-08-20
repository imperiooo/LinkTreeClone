
import { getServerSession } from "next-auth"
import { authOptions } from "../../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation";

import UsernameForm from "@/components/forms/UsernameForm";
import { Page } from "@/models/page";

export default async function AccountPage({searchParams})
{
    const session = await getServerSession(authOptions);
    const desiredUsername = searchParams?.desiredUsername;
    if(!session)
    {
        redirect('/');
    }
    const page = await Page.findOne({owner: session?.user?.email})
    if(page)
        return(
    <div>your page is {desiredUsername}</div>
    )
    return (
        <div>
           <UsernameForm searchParams={{searchParams}}></UsernameForm>
        </div>
    )
}