type Props = {
  children: React.ReactNode;
}

export const Footer = ({ children }: Props) => {
  return (
    <footer className="px-2 py-4 bg-base-100 bg-opacity-50 backdrop-blur border-t border-base-300">
      <div className="max-w-screen-sm mx-auto">
        {children}
      </div>
    </footer>
  )
}