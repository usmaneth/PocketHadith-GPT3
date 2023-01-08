import Head from 'next/head';
import Image from 'next/image';
import buildspaceLogo from '../assets/buildspace-logo.png';

import { useState } from 'react';

const Home = () => {
  const [userInput, setUserInput] = useState('');
 
  const [apiOutput, setApiOutput] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  
  const callGenerateEndpoint = async () => {
    setIsGenerating(true);
    
    console.log("Calling OpenAI...")
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userInput }),
    });
  
    const data = await response.json();
    const { output } = data;
    console.log("OpenAI replied...", output.text)
  
    setApiOutput(`${output.text}`);
    setIsGenerating(false);
  }



  const onUserChangedText = (event) => {
    (event.target.value);
    setUserInput(event.target.value);
  };

  return (
    <div className="root">
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>Pocket Hadith</h1>
          </div>
          <div className="header-subtitle">
            <h2>Find peace, comfort, and direction through the Hadith of the Prophet SAW & discover the perfect Hadith for every emotion and situation </h2>

            <h2>Type in whatever you are feeling/going through and the AI will find the perfect hadith to match the situation</h2>

            <h3> Disclaimer: This machine learning bot is trained on only two sources (Sahih al-Bukhari & Sahih Muslim) More can be added later inshaAllah </h3>
          </div>
        </div>
  
        <div className="prompt-container">
        <textarea
          className="prompt-box"
          placeholder="start typing here"
          value= {userInput}
          onChange={onUserChangedText}
        />;
          
        <div className="prompt-buttons">
        <a className={isGenerating ? 'generate-button loading' : 'generate-button'}
         onClick={callGenerateEndpoint}>
        <div className="generate">
    {isGenerating ? <span className="loader"></span> : <p>Generate</p>}
    </div>
  </a>
        </div>
        {apiOutput && (
            <div className="output">
            <div className="output-header-container">
            <div className="output-header">
            <h3>Hadith</h3>
          </div>
      </div>
          <div className="output-content">
      <p>{apiOutput}</p>
    </div>
  </div>
)}
        </div>
      </div>
     
     
     
      <div className="badge-container grow">
        <a
          href="https://usmanasim.com"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <Image src={buildspaceLogo} alt="buildspace logo" />
            <p>Built by Usman Asim</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
