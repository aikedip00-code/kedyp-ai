"use client"

/**
 * Lightweight CSS-based background scenes with vivid colored orbs.
 */

function GridOverlay() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 opacity-[0.12]"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(59,130,246,0.5) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
      }}
    />
  )
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden" style={{ backgroundColor: '#050817' }}>
      <GridOverlay />
      {/* Large blue orb top-left */}
      <div
        className="orb orb-float"
        style={{
          width: 500, height: 500,
          background: 'radial-gradient(circle, rgba(59,130,246,0.55) 0%, rgba(59,130,246,0.1) 70%)',
          top: -100, left: -100,
        }}
      />
      {/* Violet orb right */}
      <div
        className="orb orb-float-slow"
        style={{
          width: 420, height: 420,
          background: 'radial-gradient(circle, rgba(139,92,246,0.50) 0%, rgba(139,92,246,0.08) 70%)',
          top: '20%', right: -80,
        }}
      />
      {/* Cyan orb bottom */}
      <div
        className="orb orb-float"
        style={{
          width: 320, height: 320,
          background: 'radial-gradient(circle, rgba(6,182,212,0.40) 0%, rgba(6,182,212,0.06) 70%)',
          bottom: 0, left: '35%',
          animationDelay: '-3s',
        }}
      />
    </div>
  )
}

export function ServicesScene() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div
        className="orb orb-float-slow"
        style={{
          width: 450, height: 450,
          background: 'radial-gradient(circle, rgba(59,130,246,0.40) 0%, rgba(59,130,246,0.06) 70%)',
          left: -100, top: '10%',
        }}
      />
      <div
        className="orb orb-float"
        style={{
          width: 380, height: 380,
          background: 'radial-gradient(circle, rgba(139,92,246,0.38) 0%, rgba(139,92,246,0.05) 70%)',
          right: -80, bottom: 0,
        }}
      />
    </div>
  )
}

export function CTAScene() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div
        className="orb orb-float"
        style={{
          width: 520, height: 520,
          background: 'radial-gradient(circle, rgba(139,92,246,0.45) 0%, rgba(139,92,246,0.08) 70%)',
          left: 'calc(50% - 260px)', top: 'calc(50% - 260px)',
        }}
      />
      <div
        className="orb orb-float-slow"
        style={{
          width: 350, height: 350,
          background: 'radial-gradient(circle, rgba(59,130,246,0.38) 0%, rgba(59,130,246,0.06) 70%)',
          left: '15%', top: '5%',
        }}
      />
      <div
        className="orb orb-float"
        style={{
          width: 300, height: 300,
          background: 'radial-gradient(circle, rgba(6,182,212,0.30) 0%, rgba(6,182,212,0.05) 70%)',
          right: '15%', bottom: '5%',
          animationDelay: '-4s',
        }}
      />
    </div>
  )
}
