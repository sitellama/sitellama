import { CSSProperties, useRef, useState } from "react";
import { Link, Location, useLocation } from "react-router-dom";
import { useClickAway } from "react-use";
import { classNames, cn } from "@/utils";
import { IconCross, IconHamburger } from "@/ui";

const linkClasses = "\
px-2 py-3 text-sm \
\
text-slate-900 \
bg-slate-300 \
hover:bg-sky-500 hover:text-white \
";

const linkActiveClasses = "!bg-sky-700";

const itemClasses = (path: string, loc: Location): string => {
    const isActive = path === loc.pathname;
    return classNames(linkClasses, isActive && linkActiveClasses);
};

const menuRowClasses = "\
px-4 py-8 \
hidden \
sm:flex \
bg-red-500 \
\
flex-row \
\
items-center \
justify-end \
space-y-8 \
sm:space-y-0 \
sm:gap-2";

const menuColClasses = "\
sm:hidden \
\
bg-green-500 \
\
flex \
flex-col \
items-center \
\
";

export function MainMenu() {
    const loc = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const ref = useRef(null);

    useClickAway(ref, () => {
        closeMenu();
    });

    function closeMenu() {
        setIsMenuOpen(false);
    }

    return (
        <div className="z-50">

            <MenuBody closeMenu={closeMenu} loc={loc} className={menuRowClasses} />

            <div className="relative py-4 flex justify-end">
                <div className="" ref={ref}>
                    <button
                        className="sm:hidden"
                        onClick={() => setIsMenuOpen((v) => !v)}
                        role="navigation"
                        aria-label="Main Menu"
                        // aria-state={isMenuOpen ? "open" : "closed"}
                        type="button"
                    >
                        {isMenuOpen
                            ? <IconCross className="size-7 fill-red-500" />
                            : <IconHamburger className="size-7 fill-red-500" />
                        }
                    </button>

                    {isMenuOpen && (
                        <div className="absolute right-0 top-full flex justify-end">
                            <MenuBody closeMenu={closeMenu} loc={loc} className={menuColClasses} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function MenuBody({ closeMenu, loc, className }: { closeMenu: () => void; loc: Location; className?: string; }) {
    return (
        <ul className={cn(className)}>
            <li className="w-screen flex justify-center" onClick={closeMenu}>
                <Link to="/" className={itemClasses("/", loc)}>
                    Home
                </Link>
            </li>
            <li className="w-screen flex justify-center" onClick={closeMenu}>
                <Link to="/services" className={itemClasses("/services", loc)}>
                    Services
                </Link>
            </li>
            <li className="w-screen flex justify-center" onClick={closeMenu}>
                <Link to="/about" className={itemClasses("/about", loc)}>
                    About
                </Link>
            </li>
            <li className="w-screen flex justify-center" onClick={closeMenu}>
                <Link to="/contact" className={itemClasses("/contact", loc)}>
                    Contact
                </Link>
            </li>
        </ul>

    );
}