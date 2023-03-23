import React from 'react'
import { auth } from '../firebase'

const messageStyles = {
    message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
    nameContainer: `relative`,
    nameSent: `absolute -top-10 -right-2 text-gray-600 text-xs whitespace-nowrap`,
    nameReceived: `absolute -top-10 -left-2 text-gray-600 text-xs whitespace-nowrap`,
    sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full`,
    received: `bg-[#e5e5ea] text-black float-left rounded-br-full`,
}

const Message = ({message}) => {
  const messageClass = message.uid === auth.currentUser.uid ? `${messageStyles.sent}` : `${messageStyles.received}`;
  const nameClass = message.uid === auth.currentUser.uid ? `${messageStyles.nameSent}` : `${messageStyles.nameReceived}`;
  return (
    <div>
      <div className={`${messageStyles.message} ${messageClass}`}>
        <div className={messageStyles.nameContainer}>
          <p className={`${nameClass}`}>{message.name}</p>
        </div>
        <p>{message.text}</p>
      </div>
    </div>
  )
}

export default Message