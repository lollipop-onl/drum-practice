import { useState } from "react";
import { clsx } from "clsx";
import { useMetronome } from "~hooks/useMetronome";

export const App = () => {
  const [bpm, setBpm] = useState(120);
  const [resolution, setResolution] = useState("8");
  const { isPlaying, sixteenNotes, start, stop } = useMetronome(bpm, resolution);

  return (
    <>
      <header className="sticky top-0 left-0 w-full">
        <div className="px-2 py-4 grid gap-4">
          <input
            type="range"
            className="range"
            min="40"
            max="160"
            defaultValue={bpm}
            step="10"
            onChange={(e) => setBpm(parseInt(e.target.value, 10))}
          />
          <div className="flex items-center justify-between">
            <p className="text-lg">BPM {bpm}</p>
            <select
              className="select select-bordered"
              defaultValue={resolution}
              onChange={(e) => setResolution(e.target.value)}
            >
              <option value="16">1/16 notes</option>
              <option value="8">1/8 notes</option>
              <option value="4">1/4 notes</option>
            </select>
          </div>
          <div className="max-w-screen-sm mx-auto w-full">
            <ul className="flex justify-between gap-2">
              {Array.from({ length: 16 }).map((_, i) => (
                <li
                  key={i}
                  className={clsx(
                    "aspect-square flex-grow border",
                    sixteenNotes === i ? i % 4 === 0 ? 'border-red-700' : "border-blue-700" : "border-slate-500",
                    i % 4 === 0
                      ? sixteenNotes === i
                        ? "bg-red-700"
                        : "bg-slate-500 bg-opacity-40"
                      : sixteenNotes === i
                      ? "bg-blue-700"
                      : ""
                  )}
                />
              ))}
            </ul>
          </div>
        </div>
      </header>
      <div className="min-h-full">
        <p>content</p>
      </div>
      <div className="sticky bottom-0 left-0 w-full">
        <div className="px-2 py-4">
          <button
            className="btn w-full"
            onClick={() => (isPlaying ? stop() : start())}
          >
            {isPlaying ? "Stop" : "Start"}
          </button>
        </div>
      </div>
    </>
  );
};
