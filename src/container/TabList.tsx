import clsx from "clsx";
import { useState } from "react";

export function TabList() {
  // 👇 useStateを使って、タブの状態を管理しよう
  const [tabIndex, setActive] = useState(0);
  const handleClick = (tabIndex: number) => {
      setActive(tabIndex);
  }
  const tabContents = [
    "ここにタブ1のコンテンツが入ります。",
    "ここにタブ2のコンテンツが入ります。",
    "ここにタブ3のコンテンツが入ります。"
  ]
  return (
    <div className="tab" role="tablist">
      <div className="tab-list">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            aria-selected={tabIndex === index}
            role="tab"
          >
            タブ{index + 1}
          </button>
        ))}
      </div>
      <div 
        className="tab-panel active" 
        role="tabpanel"
      >
        {tabContents[tabIndex]}
      </div>
    </div>
  );

//   return (
    // <div className="tab" role="tab">
    //   <div className="tab-list" role="tablist">
    //     <button onClick={() => handleClick(0)}>タブ1</button>
    //     <button onClick={() => handleClick(1)}>タブ2</button>
    //     <button onClick={() => handleClick(2)}>タブ3</button>
    //   </div>
    //   {tabIndex === 0 &&  <div className={`tab-panel ${tabIndex === 0 ? 'active' : '' }`}>ここにタブ1のコンテンツが入ります。</div>}
    //   {tabIndex === 1 &&  <div className={`tab-panel ${tabIndex === 1 ? 'active' : '' }`}>ここにタブ2のコンテンツが入ります。</div> }
    //   {tabIndex === 2 &&  <div className={`tab-panel ${tabIndex === 2 ? 'active' : '' }`}>ここにタブ3のコンテンツが入ります。</div> }  
    // </div>
//     <div className="tab" role="tab">
//       {[0,1,2].map((i) => (
//         <button key={i} onClick={()=> handleClick(i)}>{`タブ${i}`}</button>
//       ))}
//       {tabList.map((content) => (
//         <div className="tab-panel">{content}</div> 
//       ))}

//     </div>
    
     
//   );
}