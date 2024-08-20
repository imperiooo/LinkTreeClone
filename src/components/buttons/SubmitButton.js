import {useFormStatus} from 'react-dom'
import RightIcon from "@/components/icons/right";
export default function SubmitButton({children})
{
    const {pending} = useFormStatus();
    return(
        <div>
              <button type="submit" disabled={pending} className="bg-blue-500 disabled:bg-blue-300 disabled::text-gray-200 text-white py-2 px-4 mx-auto w-full flex gap-4 justify-center items-center">
                        <span >Claim Your Username</span>
                        <RightIcon></RightIcon>
                        {children}
              </button>
        </div>
    )
}