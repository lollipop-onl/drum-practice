import { BeatVisualizer } from "./BeatVisualizer";

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
    <header className="bg-base-100 bg-opacity-50 backdrop-blur border-b border-base-300 px-2 py-4 grid gap-4">
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
        <p className="text-lg">BPM {bpm}</p>
        <select
          className="select select-bordered"
          defaultValue={resolution}
          onChange={(e) => onChangeResolution(e.target.value)}
        >
          <option value="16">1/16 notes</option>
          <option value="8">1/8 notes</option>
          <option value="4">1/4 notes</option>
        </select>
      </div>
      <BeatVisualizer sixteenNotes={sixteenNotes} />
    </header>
  );
};
