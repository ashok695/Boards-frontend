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
function LoginPage() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        console.log("Name:", name);
        console.log("Password:", password);
        // You can handle the values here, such as sending them to a backend
    };

    function clearForm() {
        setName("")
        setPassword("")
        console.log("Name:", name);
        console.log("Password:", password);
    }
    return (
        <>
        
            <div className="flex justify-center mt-10">
                <Card className="w-[350px]">
                    <CardHeader>
                        <CardTitle>Login Page</CardTitle>
                        <CardDescription>Enter the UserName & Password.</CardDescription>
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
                                    <div className="flex flex-col space-y-1.5">
                                        <div className="flex items-center">
                                            <Label htmlFor="password">Password</Label>
                                            <Label href="#" className="ml-auto inline-block text-sm underline">
                                                Forgot your password?
                                            </Label>
                                        </div>
                                        <Input id="password" placeholder="Enter the Password" value={password}
                                            onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button variant="outline" onClick={clearForm}>Cancel</Button>
                        <Button onClick={handleSubmit}>Login</Button>
                    </CardFooter>
                    <div className="m-2 text-center text-sm">
                        Don&apos;t have an account?{" "}
                        <Label href="#" className="underline">
                            Sign up
                        </Label>
                    </div>
                </Card>
            </div>
        </>
    )
}

export default LoginPage