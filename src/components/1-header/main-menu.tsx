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

const linkActiveClasses = "!bg-white-700";

const itemClasses = (path: string, loc: Location): string => {
    const isActive = path === loc.pathname;
    return classNames(linkClasses, isActive && linkActiveClasses);
};

const menuRowClasses = "\
px-4 py-8 \
\
hidden \
sm:flex \
space-x-4 \
";

const menuRowClasses2 = "\
hidden w-full md:block md:w-auto \
";

const menuColClasses = "\
sm:hidden \
\
bg-green-500 \
\
flex \
flex-col \
items-center \
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

            <div className="relative flex justify-end">
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
            <li>
                <a
                    href="/"
                    className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">
                    Home
                </a>
            </li>
            <li>
                <a
                    href="/Services"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    Services
                </a>
            </li>
            <li>
                <a
                    href="/Portfolio"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    Portfolio
                </a>
            </li>
            <li>
                <a
                    href="/Pricing"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    Pricing
                </a>
            </li>
            <li>
                <a
                    href="/Contact"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    Contact
                </a>
            </li>
        </ul>
    );
}