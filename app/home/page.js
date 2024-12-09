// Home page showing brief user data including any currently checked out books, check out history and recommendations based on previous categories. 
import NavBar from "../components/navbar";

export default function Home() {

    return (
        <main>
            {/* Make navbar component check if on current page and if so disable the button (in this case add an additional home icon/link) */}
            <NavBar />
        </main>
    );
}