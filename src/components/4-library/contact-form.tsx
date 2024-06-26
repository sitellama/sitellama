import { useEffect, useRef, useState } from "react";

type ContactFormProps = {
    mascot: string;
    mascotAlt: string;
};

export function ContactForm(props: ContactFormProps) {
    const { mascot, mascotAlt, } = props;
    const isFirstTime = useRef(true);

    useEffect(() => {
        if (!isFirstTime.current) {
            return;
        }
        isFirstTime.current = false;

        const resizer = (window as any).iFrameResize;
        console.log('resizer2', resizer);

        resizer?.({
            checkOrigin: false,
            heightCalculationMethod: "taggedElement"
        });
    }, []);

    return (
        <section className="bg-brand-blue pt-[27rem] pb-20 mt-[-21rem]">

            <div className="max-w-[1200px] mx-auto">
                <img src={mascot} alt={mascotAlt} className="w-full max-w-[100px] mx-auto md:ml-[15%]" />
                <h2 className="text-center my-8 text-white before:content-llama-contact-form md:-mt-[100px] md:mb-[100px]">Let's Get In Touch!</h2>
            </div>

            <div className="max-w-[1000px] bg-white mx-auto rounded-3xl">
                <iframe
                    className="w-full"
                    src="https://hello.dubsado.com/public/form/view/659d89e29a4d93003a7ea7ab"
                >
                </iframe>
            </div>

        </section>
    );
}