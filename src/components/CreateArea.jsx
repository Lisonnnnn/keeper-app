import React from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { Zoom } from '@mui/material';


// const [notes,setNotes]=React.useState([]);
//   function addNote(Newnote){
//     setNotes((prevNotes)=>{
//       return[...prevNotes,Newnote]
//     });
    
//   }
function CreateArea(props){
    const [isExpanded,setExpanded]=React.useState(false);


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

    function expand(){
        setExpanded(true);
    }

    return(
        <div>
            <form className="create-note">
               {
                isExpanded && <input name="title" onChange={handleChange} placeholder="Title" value={note.title}/>

               }
                <textarea onClick={expand} name="content" onChange={handleChange} placeholder="Take a note..." rows={isExpanded?"3":"1"} value={note.content} />
               <Zoom in={isExpanded?true:false}>
               <Fab onClick={submitNote} ><AddIcon /></Fab>
               </Zoom>
            </form>
        </div>
    )
}
export default CreateArea;