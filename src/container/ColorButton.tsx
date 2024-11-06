import { useState } from "react";
import { ColorButton } from "../components/ColorButton";

const colors = ["#EF4444", "#F59E0B", "#10B981", "#3B82F6", "#6366F1"];

export default function ColorButtonContainer() {
    const [color, setColor] = useState(colors[0]);

    const handleSelectColor = (color: string) => () => {
        // ここに選択された色をstateに反映するコードを書いてください
        setColor(color);
    };

    return (
      <div className="mt-10 flex flex-col items-center space-y-4 p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 max-w-md mx-auto">
      <h2 className="text-xl font-semibold">Color Picker</h2>
      <div className="w-16 h-16 border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden">
          <div
          className="preview w-full h-full"
          style={{ backgroundColor: color }}
          />
      </div>
      <div className="flex space-x-2 mt-4">
          {colors.map((color) => (
          <ColorButton color={color} key={color} onSelect={handleSelectColor(color)} />
          ))}
      </div>
      </div>
  );
}