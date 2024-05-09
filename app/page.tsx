import Image from "next/image";
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      width: '100%', // Ensure the container spans the full width
    }}>
      <div style={{
        border: '1px solid black', // Add a border to create a box
        padding: '10px', // Add some padding inside the box
        width: '35%', // Set the width of the box
        boxSizing: 'border-box' // Include padding and border in the width calculation
      }}>
              <Navbar backgroundColor="#20232a" textColor="#61dafb" />

        <p style={{ textAlign: 'left' }}>19 • senior @ florida state • jws22@fsu.edu</p>
        <p style={{ textAlign: 'left' }}>interests: systems software, intelligent machines, and human-computer interaction</p>
        <p style={{ textAlign: 'left' }}>other facts: raised in south florida, filipino-american, mediocre at chess, heat fan, loves to cook (and eat)</p>
        <p style={{ textAlign: 'left' }}>instagram • linkedin • spotify • x</p>
      </div>
    </div>
    </>
  );
}
