import LoginWithGoogle from "@/components/buttons/LoginWithGoogle"
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function loginPage()
{
    return (
        <div className="bg-white border p-4 max-w-xs">
            <h1 className="text-4xl font-bold text-center m-4">
                Sign In
            </h1>
            <p className="text-center mb-6 text-gray-500">
                Sign in to your account using one of the method belows
            </p>
            <LoginWithGoogle></LoginWithGoogle>
        </div>
    )
}