import Image from "next/image";
import Navbar from '../app/components/Navbar';
import Link from "next/link";

export default function Home() {
  return (
    <>   
        <p className="text-left">about: 20, west palm beach, third-year at florida state</p><br/>
        <p className="text-left">interests: human-computer interaction, social & personality psychology, asian representation</p><br/>
        <p className="text-left">other facts: steve lacy fan, filipino-american, mediocre at chess, loves to cook (and eat)</p><br/>
        <p className="text-left">
          <Link href="https://www.instagram.com/julianwsanchez/" className="underline">instagram</Link>•
          <Link href="https://www.linkedin.com/in/jul-san/" className="underline">linkedin</Link>•
          <Link href="https://open.spotify.com/user/31nvmp25h2eqhcih2re43lwcsjee" className="underline">spotify</Link>•
          <Link href="https://twitter.com/julianwsanchez" className="underline">x</Link> 
        </p> 
    </>
  );
}
