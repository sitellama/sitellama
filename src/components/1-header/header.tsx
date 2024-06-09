import { HTMLAttributes } from "react";
import { MainMenu } from "./main-menu";
import logoImg from "@/assets/llamamascot1.webp";
import { classNames } from "@/utils";

const logoClasses = "text-2xl font-semibold whitespace-nowrap dark:text-white uppercase";

export function Header({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
    return (<>
        <div className={classNames("p-4 w-full", className)} role="navigation" {...rest}>
            <div className="mx-auto max-w-7xl flex items-center justify-between">

                {/* TODO: add logo */}
                <a className="flex items-center space-x-3 rtl:space-x-reverse" href="/">
                    <span className={logoClasses}>
                        SiteLLama
                    </span>
                </a>

                <MainMenu />
            </div>
        </div>
    </>);
}
