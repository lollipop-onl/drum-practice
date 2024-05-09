import { useEffect, useState } from "react";
import { useMetronome } from "~hooks/useMetronome";
import a from "~assets/a.svg";
import { Header } from "~components/Header";
import { Footer } from "~components/Footer";
import { themeChange } from 'theme-change'

export const App = () => {
  const [bpm, setBpm] = useState(120);
  const [resolution, setResolution] = useState("8");
  const { isPlaying, sixteenNotes, start, stop } = useMetronome(
    bpm,
    resolution
  );

  useEffect(() => {
    themeChange(false);
  }, [])

  return (
    <div className="flex flex-col h-full">
      <div className="sticky top-0 left-0 ">
        <Header
          bpm={bpm}
          resolution={resolution}
          sixteenNotes={sixteenNotes}
          onChangeBpm={setBpm}
          onChangeResolution={setResolution}
        />
      </div>
      <div className="max-w-screen-sm mx-auto w-full grow">
        <div className="min-h-full">
          <p>content</p>
          <img src={a} />
        </div>
      </div>
      <div className="sticky bottom-0 left-0 w-full">
        <Footer>
          <button
            className="btn w-full"
            onClick={() => (isPlaying ? stop() : start())}
          >
            {isPlaying ? "Stop" : "Start"}
          </button>
        </Footer>
      </div>
    </div>
  );
};
