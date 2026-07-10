import { useState } from 'react'
import RobotProfileImage from './assets/robot.png';
import { ChatInput } from './components/ChatInput.jsx';
import ChatMessages from './components/ChatMessages.jsx';

import './App.css'

function App() {
    // relift the state into app, that can be sharedinto <App>'s components
    const [chatMessages, setChatMessages] = useState(
        //useState return an array
        [
            //remove initial chat
        ]);
    const title=`${chatMessages.length} Messages`;
    return (
        <>
        <link rel="icon" type="image/svg+xml" href={RobotProfileImage} />
            <title>{title}</title>
            <div className="app-container">
                {chatMessages.length === 0 &&
                    (<p className="welcome-message">Hello, welcome to the site</p>)}
                <ChatMessages
                    chatMessages={chatMessages}
                />

                <ChatInput
                    chatMessages={chatMessages}
                    setChatMessages={setChatMessages}
                />
            </div>
        </>

    );
}

export default App
