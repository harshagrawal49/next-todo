import Image from "next/image";
import List from "./components/List"
export default function Home() {
  return (
    <div className="border rounded-xl px-[50px] py-[30px] border-slate-200 w-2/6">
      <form action="" className="flex flex-col gap-1 my-10 w-full">
        <input type="text" className="border border-slate-500 rounded-md p-2 w-full" required={true} placeholder="what you wanna do today..?"/>
        <input type="time" className="border border-slate-500 rounded-md p-2 w-full"/>
        <button type="submit" className="bg-slate-200 hover:bg-slate-800 hover:text-white transition duration-750 border rounded-lg p-2 ">ADD TODO</button>
      </form>
      <List/>
    </div>
  );
}
