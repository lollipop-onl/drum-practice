import { BeatVisualizer } from "./BeatVisualizer";
import tailwindConfig from '@@tailwind.config';

type Props = {
  bpm: number;
  resolution: string;
  sixteenNotes: number;
  onChangeBpm: (bpm: number) => void;
  onChangeResolution: (resolution: string) => void;
};

export const Header = ({
  bpm,
  resolution,
  sixteenNotes,
  onChangeBpm,
  onChangeResolution,
}: Props) => {
  return (
    <header className="bg-base-100 bg-opacity-50 backdrop-blur border-b border-base-300 px-2 py-4">
      <div className="max-w-screen-sm mx-auto grid gap-4">
        <input
          type="range"
          className="range"
          min="40"
          max="240"
          defaultValue={bpm}
          step="10"
          onChange={(e) => onChangeBpm(parseInt(e.target.value, 10))}
        />
        <div className="flex items-center justify-between">
            <p className="text-sm">BPM {bpm}</p>
          <div className="flex gap-x-2 items-center">
          <select className="select select-bordered select-sm capitalize" data-choose-theme>
            {tailwindConfig.daisyui.themes.map((theme) => (
              <option value={theme}>{theme}</option>
            ))}
          </select>
            <select
              className="select select-bordered select-sm"
              defaultValue={resolution}
              onChange={(e) => onChangeResolution(e.target.value)}
            >
              <option value="16">1/16 notes</option>
              <option value="8">1/8 notes</option>
              <option value="4">1/4 notes</option>
            </select>
          </div>
        </div>
        <BeatVisualizer sixteenNotes={sixteenNotes} />
      </div>
    </header>
  );
};
