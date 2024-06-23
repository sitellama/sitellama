import { HTMLAttributes } from "react";
import { MainMenu } from "./main-menu";
import logoImg from "@/assets/llamamascot1.webp";
import { classNames } from "@/utils";

const logoClasses = "font-logo text-2xl font-semibold dark:text-white uppercase";

export function Header({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
    return (<>
        <div className={classNames("p-4 w-full", className)} role="navigation" {...rest}>
            <div className="mx-auto max-w-7xl flex items-center justify-between">

                <a href="/" className={logoClasses}>
                    {/* TODO: add logo */}
                    SiteLLama
                </a>

                <MainMenu />
            </div>
        </div>
    </>);
}
