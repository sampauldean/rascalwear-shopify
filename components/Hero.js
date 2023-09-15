import Animate from "./Animate"

export default function Hero() {
  return (
      <div className="h-[100vh] flex items-center justify-center">

      <Animate>
          <h1 className="text-white heading text-[72px] animate animate--fade-up">Coming Soon</h1>
      </Animate>

      </div>
  )
}
