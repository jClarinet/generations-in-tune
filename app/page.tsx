import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-secondary font-sans ">
      <main className="flex min-h-screen w-full  flex-col items-center justify-between">
        <div className="relative h-screen w-screen">
          <div className="absolute inset-0 bg-[url('/genintunepic.webp')] bg-cover bg-center  justify-center"></div>
          <div className="absolute inset-0 bg-lightcolor/50"></div> 
          <div className="relative z-10 flex h-full mt-20 justify-center items-center flex-col">

              <h1 className="text-primary text-6xl font-bold p-10">
                Generations in Tune
              </h1>
              <h2 className="text-secondary text-3xl font-bold p-10">
                Connecting Generations Through Music
              </h2>
          </div>
        </div>
      </main>
    </div>
  );
}
