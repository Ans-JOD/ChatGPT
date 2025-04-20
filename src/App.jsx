import './App.css';
import { LeftSideBar } from './Components/LeftSideBar';
import send from './assets/send.svg';
import chatgpt from './assets/chatgptLogo.svg';
import userlogo from './assets/user.png';
import { sendMsgToOpenAI } from './OpenAI';
import {useEffect, useRef, useState} from 'react';

function App () {
  const msgEnd = useRef(null);
  const [input, setInput] = useState("");
  const [responses, setResponse] = useState([
    {
    text: "Hi, I am ChatGPT. How may I help you",
    isBot: true
    }
]);

  useEffect(()=> {
    msgEnd.current.scrollIntoView();
  }, [responses])

  const handleSend =  async() =>{
    const text = input;
    setInput('');
    setResponse([
      ...responses,
      {text, isBot: false}
    ])
    const res = await sendMsgToOpenAI(text);
    setResponse([
      ...responses,
      {text, isBot: false},
      {text: res, isBot: true}
  ]);
  }

  const handleEnter = async (e) =>{
    if(e.key==='Enter') await handleSend();
  }

  const handleQuery = async(text) =>{
    setResponse([
      ...responses,
      {text, isBot: false}
    ])
    const res = await sendMsgToOpenAI(text);
    setResponse([
      ...responses,
      {text, isBot: false},
      {text: res, isBot: true}
  ]);
  }

  return (
    <div className='app'>
      <LeftSideBar handleQuery={handleQuery}/>
      <div className='main'>
        <div className='chats'>
          
            {responses.map((response, i)=>
              <div key={i} className={response.isBot?"chat bot":"chat"}>
                 <img src={response.isBot?chatgpt:userlogo} alt='chatgpt' className='chatImg' />
                 <p>  {response.text}   </p>
              </div>
            )}
            <div ref={msgEnd}/>
        </div>
        <div className='chatFooter'>
          <div className='inp'>
            <input type='text' placeholder='Ask anything' value={input} onKeyDown={handleEnter} onChange={(e)=> {setInput(e.target.value)}}/>
            <button className='send'  onClick={handleSend}>
              <img src={send} alt='send' />
            </button>
          </div>
          <p>
            ChatGPT can make mistakes. Check important info.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
