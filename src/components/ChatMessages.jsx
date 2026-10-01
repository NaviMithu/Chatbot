import  {useEffect,useRef} from 'react'
    import ChatMessage from './ChatMessage'

function ChatMessages({chatMessages}){  
        const chatMessagesRef=useRef(null);
        useEffect(()=>{
            chatMessagesRef.current.scrollTop=chatMessagesRef.current.scrollHeight;
              },[chatMessages])    
        return(
          <div
          className="chat-messages-container"
          ref={chatMessagesRef}>
            
            {chatMessages.map((chat)=>{
            return(
              <ChatMessage 
                key={chat.id}
                message={chat.message}
                sender={chat.sender}
              />
          )
        })} 
          </div>
        )
      }
    export default ChatMessages;