import React, { useContext, useState } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {

  const { onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
    darkMode
  } = useContext(Context);

  const handleCardClick = (prompt) => {
    setInput(prompt);
  }

  const handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      onSent();
    }
  }


  return (
    <div className={`main ${darkMode ? 'dark-mode' : ''}`}>
    <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
    </div>
    <div className="main-container">
        {showResult ? (
            <div className="result">
                <div className='result-title'>
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {loading ? (
                        <div className="loader">
                            <hr className="animated-bg" />
                            <hr className="animated-bg" />
                            <hr className="animated-bg" />
                        </div>
                    ) : (
                        <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                    )}
                </div>
            </div>
        ) : (
            <>
                <div className="greet">
                    <p><span>Hello, Suteerth.</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className="cards">
                    <div onClick={() => handleCardClick("Compare the differences between pickleball and tennis")} className="card">
                        <p>Compare the differences between pickleball and tennis</p>
                        <img src={assets.sports_icon} alt="" width="60" height="40" />
                    </div>
                    <div onClick={() => handleCardClick("Draft an email to a recruiter to accept a job offer")} className="card">
                        <p>Draft an email to a recruiter to accept a job offer</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div onClick={() => handleCardClick("Plan a low-carb meal with what's available in my fridge")} className="card">
                        <p>Plan a low-carb meal with what's available in my fridge</p>
                        <img src={assets.food_icon} alt="" height="35" width="60"/>
                    </div>
                    <div onClick={() => handleCardClick("Give me a quick walkthrough of The Byzantine Empire")} className="card">
                        <p>Give me a quick walkthrough of The Byzantine Empire</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                </div>
            </>
        )}

        <div className="main-bottom">
            <div className="search-box">
                <input onKeyDown={handleKeyPress} onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
                <div>
                    {input ? <img onClick={() => onSent()} src={assets.send_icon} width={30} alt="" /> : null}
                </div>
            </div>
            <p className="bottom-info">
                Gemini may display inaccurate info, including about people, so double-check its responses. <u className='underline'>Your privacy and Gemini Apps</u>
            </p>
        </div>
    </div>
</div>
  )
}

export default Main
