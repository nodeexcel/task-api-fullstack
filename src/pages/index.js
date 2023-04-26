import NavBar from "@/components/Navbar";
import dynamic from "next/dynamic";

// Import components dynamically
const LandingPage = dynamic(() => import("@/components/Home/index"), {
  ssr: false, // Set ssr to false to disable server-side rendering
});

export default function Home() {
  return (
    <>
      <NavBar />
      <LandingPage />
    </>
  );
}
