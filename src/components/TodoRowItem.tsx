import React from "react"

export const TodoRowItem: React.FC<{
    rowNumber: number,
    rowDescription: string,
    rowAssigned: string,
    deleteTodo: Function
}> = (props) => {

//    first react component

    return (
        <tr onClick={() => props.deleteTodo(props.rowNumber)}>

            <th scope='row '>{props.rowNumber}</th> 
            <td scope='row '>{props.rowDescription}</td>
            <td scope='row '>{props.rowAssigned}</td>
        </tr>
        

    )
}


