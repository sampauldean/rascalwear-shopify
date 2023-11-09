import Animate from "./Animate";
import HeroWrapper from "./molecules/HeroWrapper";

export default function Hero() {
  return (
    <HeroWrapper>
      <div className="content flex items-center justify-center h-full bg-black rounded-[1.25em]">
        <Animate>
          <div className="container">
            <h1 className="text-white heading text-[100px] animate animate--fade-up text-center leading-none">Rascal Wear</h1>
          </div>
        </Animate>
      </div>
    </HeroWrapper>
  );
}
