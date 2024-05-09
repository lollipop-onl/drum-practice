import clsx from "clsx";

type Props = {
  sixteenNotes: number;
};

export const BeatVisualizer = ({ sixteenNotes }: Props) => {
  return (
    <ul className="flex justify-between gap-2">
      {Array.from({ length: 16 }).map((_, i) => (
        <li
          key={i}
          className={clsx(
            "aspect-square flex-grow border",
            sixteenNotes === i && 'shadow-lg',
            i % 4 === 0 ? 'shadow-red-700' : 'shadow-blue-700',
            sixteenNotes === i
              ? i % 4 === 0
                ? "border-red-700"
                : "border-blue-700"
              : "border-slate-500",
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
  )
}