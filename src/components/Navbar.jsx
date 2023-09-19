import { User } from "lucide-react";
import Container from "./Container";
import ThemeButton from "./ThemeButton";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full bg-slate-50/50 dark:bg-slate-900/50 backdrop-blur-2xl border-b border-slate-200 dark:border-slate-800">
            <Container className="py-6 flex items-center justify-between gap-4">
                {/* brand */}
                <Link to="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 grid place-items-center bg-gradient-to-t from-pink-500 to-violet-500 rounded-lg">
                        <User size={16} strokeWidth={1.5} className="text-slate-50" />
                    </div>
                    <h3 className="font-medium">People Desk</h3>
                </Link>
                <ThemeButton />
            </Container>
        </nav>
    );
};

export default Navbar;