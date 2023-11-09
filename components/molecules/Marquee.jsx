import React from 'react';

export default function Marquee() {
  const duration = 50000;
  const repetitions = 12;
  const text = "ALL DOGS ARE GOOD DOGS";

  const content = Array.from({ length: repetitions }, (_, index) => (
    <span key={index} className="font-bold font-mudstone">{text}</span>
  ));

  return (
    <div className="overflow-hidden relative py-3xs">
      <div
        className="animate-marquee flex gap-xs tablet:gap-2xl pr-xs tablet:pr-2xl w-max"
        style={{
          animationDuration: `${duration}ms`,
        }}
      >
        {content}
        {content}
      </div>
    </div>
  );
}
