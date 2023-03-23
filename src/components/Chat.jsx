import { collection } from 'firebase/firestore';
import React, {useState, useEffect, useRef} from 'react'
import Message from './Message';
import { db } from '../firebase';
import { onSnapshot, query, orderBy } from 'firebase/firestore';

const chatStyles = {
    main: `flex flex-col p-[10px] relative`,
}

const Chat = () => {
    const [messages, setMessages] = useState([]);

    const scroll = useRef();

    useEffect(() => {
        const q = query(collection(db, 'messages'), orderBy('timestamp'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let messages = [];
            querySnapshot.forEach((doc) => {
                messages.push(doc.data());
            });
            setMessages(messages);
        });
        return ()=> unsubscribe();
    }, [])

    return (
        <>
            <main className={chatStyles.main}>
                {messages && messages.map((msg) => (
                    <Message key={msg.id} message={msg} />
                ))}
                
            </main>
            {/* Send Message Component */}
            <span ref={scroll}></span>
        </>
    )
}

export default Chat