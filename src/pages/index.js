import NavBar from "@/components/Navbar";
import dynamic from "next/dynamic";
import { useState } from "react";

// Import components dynamically
const LandingPage = dynamic(() => import("@/components/Home/index"), {
  ssr: false, // Set ssr to false to disable server-side rendering
});

export default function Home() {
  const [show, setShow] = useState(false);

  return (
    <>
      <NavBar setShow={setShow} show={show} />
      <LandingPage />
    </>
  );
}
