import chatgptLogo from '../assets/chatgpt.svg';
import addSign from '../assets/add-30.png';
import message from '../assets/message.svg';
import '../app.css';
import { LeftSideBottomList } from './LeftSideBottomList';

export const LeftSideBar = ({handleQuery}) => {
  return (
    <div className='sidebar'>
      <div className='upperSide'>
        <div className='upperSideTop'>
          <img src={chatgptLogo} alt='Logo' className='logo' /> <span className='brand'>ChatGPT</span>
        </div>
        <button className='midbtn' onClick={()=>{window.location.reload()}}>
          <img src={addSign} alt='Add sign' className='addbtn' /> New Chat
        </button>
        <div className='upperSideBottom'>
          <button className='query' onClick={() => handleQuery("What is programming?")}>
            <img src={message} alt='Message' className='queryImg' /> What is programming?
          </button>
          <button className='query' onClick={() => handleQuery("How to create a sample react app using vite?")}>
            <img src={message}  alt='Message' className='queryImg' /> How to create sample react app using vite?
          </button>
        </div>
      </div>
      <LeftSideBottomList/>
    </div>
  );
};
