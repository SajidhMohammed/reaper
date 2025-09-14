// components/background-decor.tsx
const BackgroundDecor = () => {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_50%_at_50%_10%,rgba(16,185,129,0.20),transparent_60%)]" />
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.08]" 
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(circle at center, black, transparent 75%)'
        }} 
      />
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 bg-emerald-500/20 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 bg-emerald-400/20 blur-3xl rounded-full" />
    </>
  )
}

export default BackgroundDecor