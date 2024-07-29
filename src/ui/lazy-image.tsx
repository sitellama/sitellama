import { HTMLAttributes } from "react";
import { useInView } from "react-intersection-observer";

type LazyImageProps = HTMLAttributes<HTMLImageElement> & {
    width: number;
    height: number;
    src: string;
};

export function LazyImage({ width, height, src, ...rest }: LazyImageProps) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: "200px 0px",
    });

    return (
        <div
            ref={ref}
            style={{
                position: "relative",
                paddingBottom: `${(height / width) * 100}%`,
                background: "red",
            }}
        >
            {inView ? (
                <img
                    src={src}
                    width={width}
                    height={height}
                    className="absolute inset-0 object-cover"
                    {...rest}
                />
            ) : null}
        </div>
    );
}
