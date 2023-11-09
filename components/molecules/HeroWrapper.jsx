export default function HeroWrapper({ children, className }) {
  return (
    <div className="hero-wrapper bg-white p-[1em] h-[100vh]">
      <div className="flex flex-col h-full">
        {children}
      </div>  
    </div>
  )
}