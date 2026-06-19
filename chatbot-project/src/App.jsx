import { useState} from 'react'

import {ChatInput} from './components/ChatInput.jsx';
import { ChatMessage } from './components/ChatMessage.jsx';
import {ChatMessages} from './components/ChatMessages.jsx';

import './App.css'

function App(){
    // relift the state into app, that can be sharedinto <App>'s components
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
