import React from 'react'
import { useState } from 'react'
import { auth, db } from '../firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const sendMessageStlyes = {
    form: `flex justify-between items-center p-4 py-10 absolute bottom-0 w-full max-w-[728px] h-14 `,
    input: `h-14 w-full max-w-[728px] flex bg-gray-200 p-3 rounded-full focus:outline-none`,
    button: `bg-[#395dff] text-white mx-1 px-4 py-2 rounded-full hover:bg-[#2c4dbf]`,
}

const SendMessage = ({scroll}) => {

  const [input, setInput] = useState('');
    
  const sendMessage = async (e) => {
    e.preventDefault();
    if(input === '') {
      alert('Please enter a message');
      return;
    }
    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, 'messages'), {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    });
    setInput('');
    scroll.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <form onSubmit={sendMessage} className={sendMessageStlyes.form}>
        <input value={input} onChange={(e) => setInput(e.target.value)} className={sendMessageStlyes.input} type="text" placeholder="Type your message here..."/>
        <button className={sendMessageStlyes.button} type="submit">Send</button>
    </form>
  )
}

export default SendMessage