import { HTMLAttributes, useCallback, useRef, useState } from "react";
import { Link, Location, useLocation } from "react-router-dom";
import { useClickAway } from "react-use";
import { classNames } from "@/utils";
import { IconCross, IconHamburger } from "@/ui";
import { createPortal } from "react-dom";

const menuRowClasses = "\
py-8 \
\
hidden \
sm:flex \
1space-x-4 \
";

const menuColClasses = "\
w-full \
sm:hidden \
\
bg-white \
\
flex flex-col items-center \
";

export function MainMenu() {
    const loc = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const ref = useRef(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useClickAway<MouseEvent | TouchEvent>(ref,
        useCallback((event) => {
            if (!buttonRef.current) {
                return;
            }

            const target = event.target as HTMLElement;
            const isChild = buttonRef.current.contains(target);

            if (!isChild) {
                setIsMenuOpen(false);
            }
        }, [buttonRef])
    );

    const closeMenu = useCallback(
        function closeMenu() {
            setIsMenuOpen(false);
        }, []
    );

    return (
        <div className="z-50">
            <MenuBody className={menuRowClasses} loc={loc} closeMenu={closeMenu} />

            <div className="relative">
                <div>
                    <button
                        ref={buttonRef}
                        className="sm:hidden"
                        onClick={() => setIsMenuOpen(v => !v)}
                        role="navigation"
                        aria-label="Main Menu"
                        type="button"
                    >
                        {isMenuOpen
                            ? <IconCross className="size-7 fill-black" />
                            : <IconHamburger className="size-7 fill-white" />
                        }
                    </button>

                    {isMenuOpen &&
                        createPortal(
                            <div ref={ref} className="w-full absolute right-0 top-0 flex justify-end">
                                <MenuBody className={menuColClasses} loc={loc} closeMenu={closeMenu} />
                            </div>, document.body
                        )
                    }
                </div>
            </div>
        </div>
    );
}

const liClasses = "\
block \
px-3 \
py-2 \
text-lg \
\
md:text-white \
\
hover:underline \
\
1border-red-500 1border \
\
1md:p-0 \
1md:border-0 \
1md:hover:bg-transparent \
1md:hover:text-blue-700 \
1md:dark:hover:text-blue-500 \
1md:dark:hover:bg-transparent \
\
select-none \
";

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

function OurLink({ closeMenu, label, to, loc }: { closeMenu: () => void; label: string; to: string; loc: Location; }) {
    const isActive = to === loc.pathname;
    return (
        <li>
            {/* <Link
                to={to}
                // className={itemClasses(to, loc)}
                className={classNames(liClasses, isActive && "text-white")}
                aria-current={isActive ? "page" : undefined}
                onClick={() => {
                    closeMenu();
                }}
            >
                {label}
            </Link> */}

            <a
                href={to}
                className={classNames(liClasses, isActive && "text-white")}
                target="_blank"
                aria-current={isActive ? "page" : undefined}
                onClick={(event) => {
                    event.preventDefault();
                    closeMenu();
                    window.location.href = to;
                }
                }
            >
                {label}
            </a>
        </li>
    );
}

function MenuBody({ loc, closeMenu, ...rest }: { loc: Location; closeMenu: () => void; } & HTMLAttributes<HTMLUListElement>) {
    return (
        <ul {...rest}>
            {/* <OurLink label="Home" to="/" loc={loc} /> */}
            <OurLink label="Services" to="#services" loc={loc} closeMenu={closeMenu} />
            <OurLink label="Portfolio" to="#portfolio" loc={loc} closeMenu={closeMenu} />
            <OurLink label="Pricing" to="#pricing" loc={loc} closeMenu={closeMenu} />
            <OurLink label="Blogs" to="/blogs" loc={loc} closeMenu={closeMenu} />
            <OurLink label="Contact" to="#contact" loc={loc} closeMenu={closeMenu} />
        </ul>
    );
}
