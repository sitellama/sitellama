import { classNames } from "@/utils";
import { HTMLAttributes } from "react";

export function ArrowLeft({ className, ...rest }: HTMLAttributes<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" className={classNames("fill-none stroke-[1.5] stroke-current", className)} {...rest}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m11 20-8-8m0 0 8-7m-8 7h18" />
        </svg>
    );
}
