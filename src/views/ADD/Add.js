import React, { useState } from 'react'
import toast from 'react-hot-toast';
import './Add.css'
import Homebtn from '../../components/Homebtn/Homebtn'
import EmojiPicker from 'emoji-picker-react';
function Add() {

  const [title, setTitle] = useState('');
  const [description, setdescription] = useState('');
  const [category, setcategory] = useState('');
  const [emoji, setemoji] = useState('');
  const [openEmojiDialogue, setOpenEmojiDialogue] = useState('')

  const addnote= ()=>
  {
    const notes=JSON.parse(localStorage.getItem("notes")) || [];

    const noteObject =
    {
        title,
        description,
        category,
        emoji,
    };
    notes.push(noteObject);

    localStorage.setItem("notes", JSON.stringify(notes));

    toast.success("Note added successfully")

    setTitle("");
    setdescription("");
    setcategory("");
    setemoji("");

  }
  return (
    <div>

      <h1 className='text-center text-primary' >{'   '}Keep Note</h1>

      <input
        type="text"
        placeholder='Title of note'
        className='user-input'
        value={title}
        onChange={(e) => {
          console.log(e.target.value)
          setTitle(e.target.value)
        }}
      />

      <input
        type="text"
        placeholder='Description of note'
        className='user-input'
        value={description}
        onChange={(e) => {
          setdescription(e.target.value)
        }}
      />

      <select value={category} onChange={(e) => setcategory(e.target.value)}
        className='user-input-select user-input'>
           <option value="shopping">Select category</option>
        <option value="shopping">Shopping</option>
        <option value="work">Work</option>
        <option value="personal">Personal</option>
        <option value="learn">Learning</option>
      </select>

      <EmojiPicker
        open={openEmojiDialogue}
        height={'300px'}
        width={'300px'}
        className='emoji-picker'
        searchDisabled={false}
        skinTonesDisabled='true'
        onEmojiClick={(emojiObject) => {
          setemoji(emojiObject.emoji);
          setOpenEmojiDialogue(false)
        }} />

      <div className='emoji-cotainer user-input user-inpiut-emoji' onClick={()=>setOpenEmojiDialogue(true)}>
      {emoji ? emoji : "Select emoji✨"}
      </div>

      <button type='button'
                  className='btn btn-primary add-note-btn'
             onClick= {addnote}  
      >{'    '}Create Note 📩</button>
      <Homebtn />
    </div>
  )
}

export default Add