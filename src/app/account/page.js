import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"

export default async function AccountPage(req)
{
    const session = await getServerSession(authOptions);
    const desiredusername = req.searchParams.username
    return (
        <div>
            account : {session?.user?.name}
            <br></br>
            desired username : {desiredusername}
        </div>
    )
}