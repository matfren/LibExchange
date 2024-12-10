// Each individual book listing.
export default function BookCard ({title, category, author}) {

    return(
        <div className="font-mono m-3 p-3 border-l-8 border-orange-300 bg-amber-900 bg-opacity-50 rounded-sm hover:border-orange-200 active:border-orange-100">
            <p className="text-cyan-300 font-bold">{title}</p>
            <p>{category}</p>
            <p>{author}</p>
        </div>
    );
}