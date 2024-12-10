// Home page showing brief user data including any currently checked out books, check out history and recommendations based on previous categories. 
"use client"

import NavBar from "../components/navbar";

export default function Home() {

    let textStyle = "text-lg text-center text-amber-200 font-bold font-mono m-5 p-3";

    return (
        <main>
            <NavBar/>
            <p className={textStyle}>Please Navigate to Available for Functionality</p>
        </main>
    );
}