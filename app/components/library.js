"use client"

import BookCard from "./bookCard";

export default function Library ({book}) {

    let bookData = [...new Set(book.map((data) => ({...data,
        id: new String(data.id),
        title: new String(data.title),
        category: new String(data.category),
        author: new String(data.author),
    })))];



    return(
        <div className="flex flex-col w-60 ml-36">
            {bookData.map((data) => (
                <BookCard 
                key={data.id}
                title={data.title}
                category={data.category}
                author={data.author}
                />
            ))}
        </div>
    );
}