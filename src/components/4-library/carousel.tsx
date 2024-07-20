import { useRef } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../index.css';
import tornjak from '../../../src/assets/mockup-tornjak.webp';
import tornjakTwo from '../../../src/assets/mockup-tornjak2.webp';
import kcrafts from '../../../src/assets/mockup-kcrafts.webp';
import dynamic from '../../../src/assets/mockup-dynamic-equine.webp';
import dndivination from '../../../src/assets/mockup-dndivination.webp';
import { ArrowLeft } from "@/ui/icons/arrow-left";
import { ArrowRight } from "@/ui/icons/arrow-right";


export default function Carousel() {
    const sliderRef = useRef<Slider>(null);

    const next = () => {
        sliderRef.current?.slickNext();
    };

    const previous = () => {
        sliderRef.current?.slickPrev();
    };

    const data = [
        {
            name: "Custom website designed and built by Sitellama for The Dynamic Equine",
            img: dynamic,
        },
        {
            name: "Custom website designed and built by Sitellama for Tornjak Club of North America",
            img: tornjak,
        },
        {
            name: "Custom website designed and built by Sitellama for Kcrafts",
            img: kcrafts,
        },
        {
            name: "Custom website designed and built by Sitellama for DnDivination",
            img: dndivination,
        },
        {
            name: "Custom website designed and built by Sitellama for Tornjak Club of North America",
            img: tornjakTwo,
        },
    ];

    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        // centerMode: true,
        // centerPadding: "0px",
        // className: "bg-red-500",
        // autoplay: true,
        // autoplaySpeed: 2000,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            // {
            //     breakpoint: 600,
            //     settings: {
            //         slidesToShow: 3,
            //         slidesToScroll: 2,
            //         initialSlide: 2,
            //     }
            // },
            // {
            //     breakpoint: 480,
            //     settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1
            //     }
            // }
        ]
    };
    return (
        <div className="flex flex-col items-center md:items-end">
            <div className="w-full">
                <div className="mt-20">
                    <Slider {...settings} ref={sliderRef}>
                        {data.map((item, index) => (
                            <div className=" text-green-400 rounded-xl" key={index}>
                                <div className="rounded-t-xl flex justify-center items-center">
                                    <img src={item.img} alt={item.name} />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            <div className="flex justify-center md:justify-end max-w-[80%] gap-6 mt-4 md:mr-4">
                <button className="bg-brand-purple rounded-full p-2" onClick={previous}>
                    <ArrowLeft className="size-8 stroke-white" />
                    <span className="sr-only">
                        Previous
                    </span>
                </button>
                <button className="bg-brand-purple rounded-full p-2" onClick={next}>
                    <ArrowRight className="size-8 stroke-white" />
                    <span className="sr-only">
                        Next
                    </span>
                </button>
            </div>
        </div>
    );
}