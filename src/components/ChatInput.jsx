
import {useState} from "react"; 
import {Chatbot}    from "supersimpledev";

function ChatInput({chatMessages, setChatMessages}){
        const [inputText, setInputText]=useState("");
        function saveInputText(event){
          setInputText(event.target.value);
        }
         
        async function sendMessage(){
          

          const newChatMessages = [...chatMessages, 
            {
              message:inputText,
              sender:"user",
              id:crypto.randomUUID()
            },
            {
              message:"Typing...",
              sender:"bot",
              id:crypto.randomUUID()
            }
          ]
          setChatMessages(newChatMessages);
          setInputText('');
          const response = await Chatbot.getResponse(inputText);
          
          setChatMessages(
            [...chatMessages, 
              {
                message:inputText,
                sender:"user",
                id:crypto.randomUUID()
              },
              {
                message:response,
                sender:"bot",
                id:crypto.randomUUID()
              }
            ]
          )
          
          setInputText('');
        }
        return(
         <div
            className="chat-input-container"   
         >
           <input 
              placeholder="Send a message to chatbot" 
              size="50"
              className="chat-input"
              value={inputText}
              onChange={saveInputText}
              onKeyDown={(e)=>{
                if(e.key==="Escape"){
                  setInputText('');
                }
                else if(e.key==="Enter"){
                  sendMessage();
                }
              }}
            />
           <button
              onClick={sendMessage}
              className="send-button"
           >Send</button>
          
          </div>

        );
      }
export default ChatInput;