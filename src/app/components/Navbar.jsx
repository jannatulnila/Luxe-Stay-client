import Link from "next/link";

const NavBar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-white shadow">
            <div className="container mx-auto px-6 py-3 flex items-center justify-between">
                
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-blue-600">
                   LuxeStay
                </Link>

                {/* Menu */}
                <div className="hidden md:flex items-center gap-6">
                    <Link
                        href="/"
                        className="text-gray-700 hover:text-blue-600 font-medium"
                    >
                        Home
                    </Link>

                    <Link
                        href="/apartment"
                        className="text-gray-700 hover:text-blue-600 font-medium"
                    >
                        Apartment
                    </Link>

                    <Link
                        href="/about"
                        className="text-gray-700 hover:text-blue-600 font-medium"
                    >
                        About
                    </Link>

                    <Link
                        href="/contact"
                        className="text-gray-700 hover:text-blue-600 font-medium"
                    >
                        Contact
                    </Link>
                </div>

                {/* Mobile Icon (UI only) */}
                <div className="md:hidden text-gray-700">
                    ☰
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
