import { useEffect, useRef } from "react";

type ContactFormProps = {
    mascot: string;
    mascotAlt: string;
};

export function ContactForm(props: ContactFormProps) {
    const { mascot, mascotAlt, } = props;
    const isFirstTime = useRef(true);

    useEffect(() => {
        setTimeout(() => {
            if (!isFirstTime.current) {
                return;
            }
            isFirstTime.current = false;

            const resizer = (window as any).iFrameResize;

            resizer?.({
                checkOrigin: false,
                heightCalculationMethod: "taggedElement"
            });
        }, 1000);
    }, []);

    return (
        <section className="bg-brand-blue" >
            <div className="box-content p-4 sm:p-16 max-w-[1200px] mx-auto flex justify-center items-center flex-col sm:flex-row sm:h-[184px]" id="contact">
                <img src={mascot} alt={mascotAlt} className="w-full max-w-[100px] sm:absolute sm:translate-x-[-300%]" />
                <h2 className="text-center text-white">Let's Get In Touch!</h2>
            </div>

            <div className="max-w-5xl min-h-[880px] mx-4 bg-white md:mx-auto rounded-3xl shadow-md">
                <iframe
                    title="contact form"
                    className="w-full"
                    src="https://hello.dubsado.com/public/form/view/659d89e29a4d93003a7ea7ab"
                >
                </iframe>
            </div>
        </section >
    );
}
