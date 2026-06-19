import { useState, useRef, useEffect } from 'react'

import {ChatInput} from './components/ChatInput.jsx';

import './App.css'
import RobotProfileImage from './assets/robot.png';
import UserProfileImage from './assets/user.png'; 



    function ChatMessage({message,sender}) {
        return (
            //ternary operator
            <div 
            className={sender==='user' ? 'chat-message-user' : 'chat-message-robot'}
            > 
                {sender ==='robot' && (
                    <img src={RobotProfileImage}
                    className="chat-message-profile" />
                )}
                
                <div className="chat-message-text">
                    {message}
                </div>
                
                {sender ==='user' && (
                    <img src={UserProfileImage} 
                    className="chat-message-profile" />
                )}
            </div>
        );
    }

    function ChatMessages ({chatMessages}) {
        const chatMessagesRef=useRef(null);
        useEffect(()=>{
            const containerElem=chatMessagesRef.current;
            if (containerElem) {
                containerElem.scrollTop=containerElem.scrollHeight; 
            }
        },[chatMessages]);
        return (
            <div 
            className="chat-messages-container"
            ref={chatMessagesRef}>
            {chatMessages.map((chatMessage)=>{
                return (
                    <ChatMessage 
                    message={chatMessage.message} 
                    sender={chatMessage.sender}
                    key={chatMessage.id}
                    />
                );
            })}
            </div>
        )
    }

function App(){
        // relift the state into app, that can be shared into <App>'s components
        const [chatMessages, setChatMessages]=useState( 
        //useState return an array
        [
            //remove initial chat
        ]);
        return (
            <div className="app-container">
                {chatMessages.length===0 && 
                    (<p className="welcome-message">Hello, welcome to the site</p>)}
                <ChatMessages 
                chatMessages={chatMessages} 
                />
                
                <ChatInput 
                chatMessages={chatMessages} 
                setChatMessages={setChatMessages} 
                />
            </div>
        ); 
    }

export default App
