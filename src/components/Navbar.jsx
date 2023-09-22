import { User } from "lucide-react";
import Container from "./Container";
import ThemeButton from "./ThemeButton";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full bg-white/50 dark:bg-slate-950/50 backdrop-blur-2xl border-b border-slate-200 dark:border-slate-800 z-50">
            <Container className="py-6 flex items-center justify-between gap-4">
                {/* brand */}
                <Link to="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 grid place-items-center bg-gradient-to-t from-pink-500 to-violet-500 rounded-lg">
                        <User size={16} strokeWidth={2} className="text-slate-50" />
                    </div>
                    <h3 className="font-semibold">People Desk</h3>
                </Link>

                {/* navlink and theme button */}
                <div className="flex items-center">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "text-violet-500 dark:text-violet-500"
                                : "text-slate-500 dark:text-slate-400"
                        }
                    >
                        <span className="mr-2 text-sm font-semibold">List View</span>
                    </NavLink>
                    <div className="w-[1px] h-3 bg-slate-300 dark:bg-slate-700"></div>
                    <ThemeButton />
                </div>
            </Container>
        </nav>
    );
};

export default Navbar;