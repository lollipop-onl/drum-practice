import clsx from "clsx";
import { useEffect, useMemo, useState } from "react";
import pattern_a from "~assets/pattern-a.svg";
import pattern_b from "~assets/pattern-b.svg";
import pattern_c from "~assets/pattern-c.svg";
import note_hh from "~assets/note-hh.svg";
import note_line from "~assets/note-line.svg";
import note_divider from "~assets/note-divider.svg";

type Props = {
  sixteenthNotes: number;
};

type MusicNote = {
  key: string;
  patterns: Array<keyof typeof MUSIC_NOTE_PATTERNS>;
};

const MUSIC_NOTE_PATTERNS = {
  a: pattern_a,
  b: pattern_b,
  c: pattern_c,
} as const;

const sample = (): MusicNote => {
  const keys = Object.keys(MUSIC_NOTE_PATTERNS) as MusicNote["patterns"];
  return {
    key: crypto.randomUUID(),
    patterns: Array.from({ length: 4 }).map(() => {
      const index = Math.floor(Math.random() * keys.length);
      return keys[index];
    }),
  };
};

export const RandomBeats = ({ sixteenthNotes }: Props) => {
  const [musicNotes, setMusicNotes] = useState<MusicNote[]>([
    sample(),
    sample(),
  ]);
  const [noteCount, setNoteCount] = useState(0);

  const notes = useMemo(
    () => [
      musicNotes[noteCount % 2 ? 0 : 1],
      musicNotes[noteCount % 2 ? 1 : 0],
    ],
    [musicNotes, noteCount]
  );

  useEffect(() => {
    if (sixteenthNotes === 0) {
      setMusicNotes((notes) => [sample(), ...notes]);
      setNoteCount((count) => count + 1);
    }
  }, [sixteenthNotes]);

  useEffect(() => {
    setMusicNotes((notes) => notes.slice(0, 2));
  }, [musicNotes]);

  return (
    <>
      <ol className="py-8">
        {notes.map(({ key, patterns }, i) => (
          <li
            key={key}
            className={clsx(
              "border-l-8 p-4",
              noteCount % 2 === i ? "border-primary" : "border-transparent"
            )}
          >
            <div className="flex">
              <img src={note_line} alt="" />
              <div className="relative">
                <div className="flex">
                  <img src={note_hh} alt="" />
                  <img src={note_hh} alt="" />
                </div>
                <ul className="absolute left-0 top-0 flex">
                  {patterns.map((pattern, j) => (
                    <li key={j}>
                      <img src={MUSIC_NOTE_PATTERNS[pattern]} alt="" />
                    </li>
                  ))}
                  <li>
                    <img src={note_divider} alt="" />
                  </li>
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
};
