"use client"

import { useState } from "react";
import BookCard from "./bookCard";

export default function Library ({book}) {

    let bookData = [...new Set(book.map((data) => ({...data,
        id: new String(data.id),
        title: new String(data.title),
        category: new String(data.category),
        author: new String(data.author),
    })))];

    // Two arrays to hold books selected.
    const [checkOut, setCheckOut] = useState([]);
    const [lastTen, setLastTen] = useState([]);
    
    function handleAddBook (title, category, author) {
        if (lastTen.length == 10) {
            setLastTen(lastTen.slice(1));
        }
        if (checkOut.length < 3) {
            const newData = {title, category, author};
            setCheckOut(checkOut => [...checkOut, newData]);
            setLastTen(lastTen => [...lastTen, newData]);
        }
        else if (checkOut.length = 3) {
            alert("Maximum amount of books reached. Please return checked out books to exchange for others.");
        }
    }


    // Sort by title or category.
    const [sort, setSort] = useState("title");

    // Button styles.
    let textStyle = "text-lg text-amber-200 font-bold font-mono m-5 p-3";
    let titleStyle = "text-xl text-orange-300 font-bold font-mono m-5 p-3 hover:text-orange-200 active:text-orange-100";
    let categoryStyle = "text-xl text-orange-300 font-bold font-mono m-5 p-3 hover:text-orange-200 active:text-orange-100";
    let disabledButton = "text-lg text-gray-400 m-5 p-3 font-bold font-mono pointer-events-none"

    // Change style based on which sort is in use.
    if (sort == "title") {
        titleStyle = disabledButton;
    }
    else if (sort == "category") {
        categoryStyle = disabledButton;
    }
    
    // Sort methods.
    if (sort == "title") {
        bookData = bookData.sort((a, b) => a.title.localeCompare(b.title));
    }
    else if (sort == "category") {
        bookData = bookData.sort((a, b) => a.category.localeCompare(b.category));
    }

    return(
        <div>
            <div className="text-center">
                <button className="text-xl text-orange-300 font-bold font-mono m-5 p-3 hover:text-orange-200 active:text-orange-100"
                    onClick={() => setCheckOut([])}
                    >Clear Checkout
                </button>
            </div>
            <div className="text-center">
                <button className={titleStyle}
                    onClick={() => setSort("title")}
                    >Name
                </button>
                <button className={categoryStyle}
                    onClick={() => setSort("category")}
                    >Category
                </button>
            </div>
            <div className="flex flex-row">
                <div className="flex flex-col w-60 ml-36">
                    <h2 className={textStyle}>Book Selection</h2>
                    
                        {bookData.map((data) => (
                            <button key={data.id} onClick={() => handleAddBook(data.title, data.category, data.author)}>
                                <BookCard
                                    title={data.title}
                                    category={data.category}
                                    author={data.author}
                                />
                            </button>
                        ))}
                    
                </div>
                <div className="flex flex-col w-60 ml-36">
                    <h2 className={textStyle}>Selected Books</h2>
                    {checkOut.map((checkOut, index) => (
                        <BookCard key={index}
                            title={checkOut.title}
                            category={checkOut.category}
                            author={checkOut.author}
                        />
                    ))}
                </div>
                <div className="flex flex-col w-60 ml-36">
                    <h2 className={textStyle}>Previous Books</h2>
                    {lastTen.map((lastTen, index) => (
                        <BookCard key={index}
                            title={lastTen.title}
                            category={lastTen.category}
                            author={lastTen.author}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}