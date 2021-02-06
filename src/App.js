
import { ChatEngine } from 'react-chat-engine'
import './App.css'
import ChatFeed from './Components/ChatFeed'
import LoginForm from './Components/LoginForm'


const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm />
    
  return (  
    <div>
        <ChatEngine
            height='100vh'
            projectID='1983bbad-71c0-417d-9e1c-067ff9e62c1a'
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={ (chatAppProps) => <ChatFeed {...chatAppProps}/> }
        />
    </div>
  )
}

export default App
