import React, { useRef } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../index.css';
import { classNames } from "@/utils";
import arrow from '../../../src/assets/arrow.svg';
import { ArrowLeft } from "@/ui/icons/arrow-left";
import { ArrowRight } from "@/ui/icons/arrow-right";

export default function Carousel() {
    let sliderRef = useRef(null);

    const next = () => {
        // @ts-ignore
        sliderRef.slickNext();
    };

    const previous = () => {
        // @ts-ignore
        sliderRef.slickPrev();
    };

    const data = [
        {
            name: "1",
            img: "src/assets/example1.png",
        },
        {
            name: "2",
            img: "src/assets/example2.png",
        },
        {
            name: "3",
            img: "src/assets/example1.png",
        },
    ];

    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        centerMode: true,
        // centerPadding: "0px",
        className: "bg-red-500",
        // autoplay: true,
        // autoplaySpeed: 2000,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <div className="w-full">
                <div className="mt-20">
                    <Slider {...settings} ref={slider => {
                        // @ts-ignore
                        sliderRef = slider;
                    }}>
                        {data.map((item, index) => (
                            <div className="bg-white text-green-400 rounded-xl" key={index}>
                                <div className="rounded-t-xl bg-indigo-500 flex justify-center items-center">
                                    <img className="size-48" src={item.img} alt={item.name} />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div className="flex justify-center md:justify-end gap-6 mt-4 md:mr-4">
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