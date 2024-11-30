import { useLocation } from 'react-router-dom';
function BoardsPage(){
    const location = useLocation();
    const { boardID } = location.state || {};
    // useEffect(() => {
    //     fetch(`http://localhost:8080/getBoardData/${boardID}`)
    //     .then(res =>{
    //         return res.json()
    //     }).then(data=>{
    //         setBoardData(data.boardDetails)
    //     })
    // }, [])
    return(
        <>
        ashok board id is {boardID}
        </>
    )
}

export default BoardsPage