
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-6xl font-black">🎨 Colour Challenge Voting</h1>
      <p className="mt-6 text-zinc-400 text-xl">
        Your fully fixed Next.js deployment package is working.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {['BLACK','RED','BLUE','YELLOW','GREEN','BROWN','PINK'].map((c)=>(
          <div key={c} className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
            <h2 className="text-3xl font-black">{c}</h2>
            <button className="mt-6 w-full rounded-2xl bg-white px-5 py-4 font-bold text-black">
              Vote for {c}
            </button>
          </div>
        ))}
      </div>

      <section className="mt-20 rounded-[40px] border border-zinc-800 bg-zinc-900 p-10">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
          PRIVATE ACCESS
        </p>

        <h2 className="mt-4 text-5xl font-black">
          Real-Time Results Dashboard
        </h2>

        <input
          type="password"
          placeholder="Enter access code"
          className="mt-8 w-full rounded-2xl border border-zinc-700 bg-black px-5 py-4"
        />

        <button className="mt-5 rounded-2xl bg-white px-8 py-4 font-bold text-black">
          Check Results
        </button>
      </section>
    </main>
  )
}
