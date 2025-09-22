import { Link } from "react-router";

export function BottomNav() {
    return (
        <footer className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 shadow-sm">
            <div className="max-w-lg mx-auto h-full grid grid-cols-5 font-medium text-xl">
                <Link
                    to="/home"
                    className="flex flex-col items-center justify-center p-2 hover:bg-gray-100 rounded-full transition"
                >
                    🏠
                </Link>
                <Link
                    to="/search"
                    className="flex flex-col items-center justify-center p-2 hover:bg-gray-100 rounded-full transition"
                >
                    🔍
                </Link>
                <Link
                    to="/create"
                    className="flex flex-col items-center justify-center p-2 hover:bg-gray-100 rounded-full transition"
                >
                    ➕
                </Link>
                <Link
                    to="/reels"
                    className="flex flex-col items-center justify-center p-2 hover:bg-gray-100 rounded-full transition"
                >
                    🎬
                </Link>
                <Link
                    to="/profile"
                    className="flex flex-col items-center justify-center p-2 hover:bg-gray-100 rounded-full transition"
                >
                    👤
                </Link>
            </div>
        </footer>
    );
}
