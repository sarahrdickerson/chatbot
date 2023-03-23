import React from 'react'

const messageStyles = {
    message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
    name: `fixed mt-[-4rem] text-gray-600 text-xs`,
    sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full`,
    received: `bg-[#e5e5ea] text-black float-left rounded-br-full`,
}

const Message = ({message}) => {
  return (
    <div>
        <div className={messageStyles.message}>
            <p className={messageStyles.name}>Dave</p>
            <p>{message.text}</p>
        </div>
    </div>
  )
}

export default Message