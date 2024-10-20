import React  , {useState , useEffect}from 'react'
import './Show.css'
import Homebtn from '../../components/Homebtn/Homebtn'
import {Notecard , NoteCategory} from '../../components/Notecard/Notecard';
function Show() 
{
  const  [notes, setNote]=useState({});
  useEffect(()=>
  {
  const savednotes=JSON.parse(localStorage.getItem("notes")) || [];
  setNote(savednotes);
  },
  []);

  return (
    <div>
    <h1 className='text-center text-primary'>Showcase Notes</h1>
    {notes.length > 0 ? (
      notes.map((note, index) => {
        const { title, description, category, emoji } = note;
        return (
        <Notecard title={title} description={description} category={category} emoji={emoji}/>
        );
      })
    ) : (
      <center><p>No notes to display</p></center>
    )}
    <Homebtn />
  </div>
);
}


export default Show