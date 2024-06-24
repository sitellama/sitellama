import { classNames } from "@/utils";
import { HTMLAttributes } from "react";

export function IconCheck({ className, ...rest }: HTMLAttributes<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" className={classNames("fill-none stroke-[1.5] stroke-current", className)} {...rest}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
    );
}
