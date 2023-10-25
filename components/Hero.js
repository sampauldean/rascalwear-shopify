import Animate from "./Animate"

export default function Hero() {
  return (
      <div className="h-[100vh] flex items-center justify-center bg-black">

      <Animate>
        <div className="container">
          <h1 className="text-white heading text-[100px] animate animate--fade-up text-center leading-none">Coming Soon</h1>
        </div>
      </Animate>

      </div>
  )
}
