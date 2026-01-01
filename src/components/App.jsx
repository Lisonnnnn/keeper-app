import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";
import CreateArea from "./CreateArea";
function App(){
  const [notes,setNotes]=React.useState([]);
  function addNote(Newnote){
    setNotes((prevNotes)=>{
      return[...prevNotes,Newnote]
    });
    
  }

  function deleteNote(id){
    setNotes(PrevNotes=>{
      return PrevNotes.filter((note,index)=>{
        return index!==id;
      });
    })
  }




  
  return(
     <div>
     <Header />
     < CreateArea onAdd={addNote}/>
     {
      notes.map((note,index)=>{
        return(

          <Note 
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}


          />

        );
      })
     }
    <Footer />
    
   </div>
  )
}
export default App;