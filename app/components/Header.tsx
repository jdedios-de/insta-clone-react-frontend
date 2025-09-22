export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
            <nav className="max-w-2xl mx-auto flex items-center justify-between px-4 py-2">
                {/* Instagram Logo */}
                <h1 className="text-2xl font-black tracking-tight text-gray-900">
                    Instagram
                </h1>

                {/* Action Icons */}
                <div className="flex items-center space-x-4 text-xl">
                    <button className="p-2 rounded-full hover:bg-gray-100 transition">
                        ❤️
                    </button>
                    <button className="p-2 rounded-full hover:bg-gray-100 transition">
                        ✉️
                    </button>
                </div>
            </nav>
        </header>
    );
}