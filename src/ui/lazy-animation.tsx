import { classNames } from "@/utils";
import { useInView } from "react-intersection-observer";

const c1Classes = "transition duration-[13000]";

const c2Classes = "opacity-100 bg-red-500";

const c3Classes = "opacity-0 bg-blue-500";

// export function LazyAnimation({ children }: { children: React.ReactNode }) {

//     const { ref, inView } = useInView({
//         triggerOnce: true,
//         rootMargin: "-100px 0px",
//     });

//     return (
//         <div ref={ref} className={classNames(c1Classes, inView ? c2Classes : c3Classes)}>
//             <span aria-label="Wave">👋</span>

//             <div className="w-96 h-96"></div>
//             {/* {children} */}
//         </div>
//     );
// }
export function LazyAnimation({ children }: { children: React.ReactNode }) {

    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: "-100px 0px",
    });

    console.log({ inView });
    

    return (
        <div ref={ref} className={classNames(c1Classes, inView ? c2Classes : c3Classes)}>
            {/* {inView && <div className="w-96 h-96"></div>} */}
            {inView && <div className={classNames("w-96 h-96", c1Classes, inView ? c2Classes : c3Classes)}></div>}
        </div>
    );
}
