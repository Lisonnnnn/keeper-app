import React from "react";

// function deleteNote(id){
//     return (
//       notes.filter((note,index)=>index!==id)
//     );
//   }
function Note(props){

    return(
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={()=>{
                props.onDelete(props.id);
            }} >Delete</button>

        </div>
    );
}
export default Note;