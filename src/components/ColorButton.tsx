import React from "react";

export function ColorButton({ color, onSelect }: {color: string; onSelect: any}) {
 
  return (
    <button
      className="w-6 h-6 rounded-lg"
      style={{ backgroundColor: color }}
      // ここから下に背景色にcolorを指定するコードを書いてください
      // また、クリックされた時にonSelectにcolorを渡してください
      onClick={onSelect}
    />
  );
  
}

// パターン２ こっちの方がシンプル
// export function ColorButton({ color, onSelect }) {
 
//     return (
//       <button
//         className="w-6 h-6 rounded-lg"
//         style={{ backgroundColor: color }}
//         // ここから下に背景色にcolorを指定するコードを書いてください
//         // また、クリックされた時にonSelectにcolorを渡してください
//         onClick={() => onSelect(color)}
//       />
//     );
//   }