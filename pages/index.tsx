import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      className={`${inter.className}`}
    >
      <h1>Hello world </h1>
  
    </div>
  );
}
