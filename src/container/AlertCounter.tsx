import { useRef } from "react";

export default function AlertCounter() {
  // 👇 useRefを使ってボタンが10回クリックされたらアラートを表示してみよう！
  const ref = useRef(0);
  const handleClick = () => {
    ref.current++;
    if(ref.current === 10){
      alert('クリックしすぎです！');
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4 bg-gray-100 rounded-sm my-4 mx-4">
      <button onClick={handleClick} className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 bg-pink-500 hover:bg-pink-600 text-white rounded-md px-4 py-2 transition-colors duration-200">
        クリックしてね！
      </button>
    </div>
  );
}

