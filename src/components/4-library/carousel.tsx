import { Fragment, useState } from "react";
import { useMeasure } from "react-use";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import css from "./carousel.module.css";
import car1 from "../../assets/fav_llama-copy-1.png";
import car2 from "../../assets/fav_llama-copy-2.png";
import car3 from "../../assets/fav_llama-copy-3.png";
import car4 from "../../assets/fav_llama-copy-4.png";
import car5 from "../../assets/fav_llama-copy-5.png";
import { classNames } from "@/utils";

console.log('css', JSON.stringify(css, null, 2));

type ImageSliderProps = {
    url: string;
    alt: string;
};

const IMAGES: ImageSliderProps[] = [
    { url: car1, alt: "Car One" },
    { url: car2, alt: "Car Two" },
    { url: car3, alt: "Car Three" },
    { url: car4, alt: "Car Four" },
    { url: car5, alt: "Car Five" },
];

export default function Carousel() {
    const [ref, { width }] = useMeasure<HTMLDivElement>();
    const [refImg, { width: widthImg }] = useMeasure<HTMLImageElement>();

    console.log('width', width, Math.floor(width / widthImg));

    const [imageIndex, setImageIndex] = useState(0);

    function showNextImage() {
        setImageIndex(index => {
            if (index === IMAGES.length - 1) return 0;
            return index + 1;
        });
    }

    function showPrevImage() {
        setImageIndex(index => {
            if (index === 0) return IMAGES.length - 1;
            return index - 1;
        });
    }

    return (
        <section className="relative m-12" aria-label="Image Slider">

            <a className={css["skip-link"]} href="#after-image-slider-controls">
                Skip Image Slider Controls
            </a>

            <div className="relative m-auto flex overflow-hidden" ref={ref}>
                {IMAGES.map(
                    ({ url, alt }, index) => (
                        <Fragment key={index}>
                            <img
                                className={classNames(css["img-slider-img"], "p-4 1size-1/5 object-cover flex-none")}
                                style={{ translate: `${-100 * imageIndex}%` }}
                                src={url}
                                alt={alt}
                                aria-hidden={imageIndex !== index}
                                ref={imageIndex === 0 ? refImg : undefined}
                            />

                            {index === imageIndex && (
                                <div className="z-50 absolute text-2xl top-0 right-8">{index + 1}</div>
                            )}
                        </Fragment>
                    )
                )}
            </div>

            <button
                onClick={showPrevImage}
                className={css["img-slider-btn"]}
                style={{ left: 0 }}
                aria-label="View Previous Image"
            >
                <ArrowBigLeft aria-hidden />
            </button>
            <button
                onClick={showNextImage}
                className={css["img-slider-btn"]}
                style={{ right: 0 }}
                aria-label="View Next Image"
            >
                <ArrowBigRight aria-hidden />
            </button>

            <div id="after-image-slider-controls" />
        </section>
    );
}