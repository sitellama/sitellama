import { classNames } from "@/utils";
import { HTMLAttributes } from "react";

export function ArrowRight({ className, ...rest }: HTMLAttributes<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" className={classNames("fill-none stroke-current", className)} {...rest}>
            <path stroke-linecap="round" stroke-linejoin="round" d="m14 5 7 7m0 0-7 8m7-8H3" />
        </svg>
    );
}
