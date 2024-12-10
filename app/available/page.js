"use client"

import { useState } from "react";
import NavBar from "../components/navbar";
import Library from "../components/library";
import booksData from "../components/books.json";

export default function Available () {

    const [book, setBook] = useState(
        booksData.map((book) => ({...book,
            title: new String(book.title),
            category: new String(book.category),
            author: new String(book.author),
        }))
    );

    return (
        <main>
            <NavBar />
            <Library book={book}/>
        </main>
    );
}