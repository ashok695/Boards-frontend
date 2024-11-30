import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
function ProjectPage(){
    const ProjectDetails = [
        {
            _id: "123",
            title: "Basic Boards",
            description: "This project will contain basic boards actions, contains small amount of data"
        },
        {
            _id: "234",
            title: "Performance Boards",
            description: "This project you can check the performance of boards, packed with large dataset"
        },
        {
            _id: "345",
            title: "Advanced Boards",
            description: "This project you can check the advanced features of boards, packed with huge features"
        }
    ]
    const navigate = useNavigate();
    function LaunchProjects(project){
        console.log("Hello")
        console.log(project.title)
        navigate('/boards',{state:{boardID:project._id}}); 
    }
    
    return (
        <>
            <div className="flex justify-center mt-20">
                {ProjectDetails.map(dt => {
                    return (
                        <Card className="w-[350px] ml-5" key={dt._id}>
                            <CardHeader>
                                <CardTitle>{dt.title}</CardTitle>
                                <CardDescription>{dt.description}</CardDescription>
                            </CardHeader>
                            <CardContent>

                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <Button onClick={()=>{LaunchProjects(dt)}}>Launch</Button>
                            </CardFooter>
                        </Card>
                    )
                })}

            </div>
        </>
    )
}

export default ProjectPage