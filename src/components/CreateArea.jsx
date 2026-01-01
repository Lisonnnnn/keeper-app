import React from "react";

// const [notes,setNotes]=React.useState([]);
//   function addNote(Newnote){
//     setNotes((prevNotes)=>{
//       return[...prevNotes,Newnote]
//     });
    
//   }
function CreateArea(props){

    const[note,setNote]=React.useState({
        title:"",
        content:""
    });
    function handleChange(event){
        console.log(event.target.name);
        const {name,value}=event.target;
        setNote((prevNote)=>{
            return{
                ...prevNote,
                [name]:value
            }
        })
    }
    function submitNote(event){
        props.onAdd(note);
        setNote({
            title:"",
            content:""
        });
        event.preventDefault();

    }


    return(
        <div>
            <form>
                <input name="title" onChange={handleChange} placeholder="Title" value={note.title}/>
                <textarea name="content" onChange={handleChange} placeholder="Take a note..." rows="3" value={note.content} />
                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    )
}
export default CreateArea;