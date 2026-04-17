import Addcard from "@/components/Addcard";
import Board from "@/components/Board";

export default function Home() {
  return (
    <main className="flex min-h-[90vh] min-w-full justify-around pt-2">
      <section className=" min-h-full min-w-[98%] flex p-2 items-center justify-between">
        <div className="w-[23%] min-h-full flex flex-col bg-neutral-600 rounded-2xl">
          <Addcard />
        </div>
        <div className="w-[76%] flex flex-col min-h-full max-h-[80vh] overflow-y-hidden bg-temp rounded-2xl">
          <Board/>
        </div>
      </section>
    </main>
  );
}
