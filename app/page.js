// Welcome landing page when entering the application.
import * as React from "react";
import Link from "next/link";

export default function Landing() {

  return (
    <main className = "flex flex-col text-center mt-10">
      <header>
        <p className="text-5xl" >Welcome to LibExchange!</p>
      </header>
      <div className="mt-20">
        <Link className="text-3xl hover:text-orange-200 active:text-orange-100 text-orange-300" href="/home">Enter Library</Link>
      </div>
      <footer className="absolute inset-x-0 bottom-0">
        <p>LibExchange is an online book exchange application to check out physical books.</p>
      </footer>
    </main>
  );
}