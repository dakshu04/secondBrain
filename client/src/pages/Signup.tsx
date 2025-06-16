import  { useRef }  from "react";
import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { BACKEND_URL } from "../Config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function SignUp() {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const navigate = useNavigate()

    async function signup() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        await axios.post(`${BACKEND_URL}/api/v1/signup`, {
            username,
            password
        })
        navigate("/signin")
        alert("you have signed up")
    }

    return (
        <div className="h-screen w-screen bg-gray-200 flex justify-center  items-center">
            <div className="bg-white rounded-xl border min-w-48 p-8">
                <Input reference={usernameRef} placeholder="username" />
                <Input reference={passwordRef} placeholder="password" />
                <div className="flex justify-center pt-4">
                    <Button onClick={signup} pointer={true} loading={false} variant="primary" text="Sign up" fullWidth={true}/>
                </div>
            </div>
        </div>
    )
}
