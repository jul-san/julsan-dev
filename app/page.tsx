import Image from "next/image";
import Navbar from '../app/components/Navbar';
import Link from "next/link";

export default function Home() {
  return (
    <>   
        <p className="text-left">about: 19, senior at florida state, comp sci major</p><br/>
        <p className="text-left">interests: systems software, intelligent machines, and human-computer interaction</p><br/>
        <p className="text-left">other facts: raised in south florida, filipino-american, mediocre at chess, heat fan, loves to cook (and eat)</p><br/>
        <p className="text-left">
          <Link href="https://www.instagram.com/julianwsanchez/" className="underline">instagram</Link> •
          <Link href="https://www.instagram.com/julianwsanchez/" className="underline">linkedin</Link> •
          <Link href="https://www.instagram.com/julianwsanchez/" className="underline">spotify</Link> •
          <Link href="https://www.instagram.com/julianwsanchez/" className="underline">x</Link> 
        </p> 
    </>
  );
}
