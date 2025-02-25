
export default function Home() {
  return (
    <main className="flex max-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-4">
        <p className="text-lg">Projeto ainda em contrução, veja as classes.</p>
        <a href="/classes" className="bg-slate-800 p-8 py-4 text-center text-2xl rounded-md hover:bg-slate-800/85 hover:text-slate-100 font-bold cursor-pointer border border-white">CLASSES</a>
      </div>
    </main>
  );
}
