

function ChatMessage({message,sender}){
                

              return(
              <div className={
                    sender=="user"?
                        "chat-message-user":
                        "chat-message-bot"
              }>
              {sender==="bot"&& (
                <img src="robot.png" className="chat-message-profile"/>
              )}
              <div className="chat-message-text">
              {message} 
              </div>
              {sender==="user"&& (
                <img src="user.png" 
                className="chat-message-profile"/>
              )}

               
              </div>
            );
      }
export default ChatMessage;