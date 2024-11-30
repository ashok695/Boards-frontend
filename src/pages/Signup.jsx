import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
function SignUpPage(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = () => {
        console.log("Name:", name);
        console.log("Password:", password);
        // You can handle the values here, such as sending them to a backend
    };
    return(
        <>
            <div className="flex justify-center mt-10">
                <Card className="w-[350px]">
                    <CardHeader>
                        <CardTitle>Sign-Up Page</CardTitle>
                        <CardDescription>Enter Your details.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" placeholder="Enter the UserName" value={name}
                                        onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" placeholder="Enter the Email" value={email}
                                        onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="password">Password</Label>
                                    <Input id="password" placeholder="Enter the Password" value={password}
                                        onChange={(e) => setPassword(e.target.value)} />
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button onClick={handleSubmit}>Sign-up</Button>
                    </CardFooter>
                </Card>
            </div>
        </>
    )
}

export default SignUpPage