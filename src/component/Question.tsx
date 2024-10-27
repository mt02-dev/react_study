import { useState } from "react";

export function Question() {
  const [answer, setAnswer] = useState("");
  const [success, setSuccess] = useState(false);
  const [answered, setAnswered] = useState(false);
  
  const handleClick = () => {
    setAnswered(true);
    if(answer === '富士山'){
      setSuccess(true);
    } else {
      setSuccess(false);
    }
  }
  return (
    <div className="quiz-wrap">
      <h1 className="quiz-title">クイズ</h1>
      <p className="quiz-question">Q.日本で一番高い山は？</p>
      <input 
        placeholder="回答を入力"
        type="text"
        value={answer} 
        onChange={
          (e) => {setAnswer(e.target.value)}
        }
      />
      <button
        onClick={handleClick}
      >回答する</button>
      {/* 👇正解の場合と不正解の場合、それぞれに対して下にメッセージを表示するようにしてください */}
      { answered && success &&  <p className="result">正解！</p> }
      { answered && success === false &&  <p className="result">不正解！</p>}
    </div>
  );
}