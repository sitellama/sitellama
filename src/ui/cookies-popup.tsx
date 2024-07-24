import { CSSProperties, useEffect, useState } from "react";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";

const style: CSSProperties = {
    fontFamily: "Montserrat, sans-serif",
    background: "#2B373B",
    position: "fixed",
    bottom: 0,
    left: 0,
    width: '100%',
    zIndex: 200,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
};

const rootClasses = "fixed p-4 left-0 bottom-0 w-full z-[200] text-zinc-100 bg-zinc-700 flex flex-col items-end gap-4";

export function CookiesPopup() {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const hasCookie = document.cookie?.includes('cookieConsent2=true');
        if (hasCookie) {
            return;
        }

        setTimeout(() => setShowPopup(true), 2000);

        // setShowPopup(true);

        // setShowPopup(!getCookieConsentValue());

        // console.log('Cookie consent value:', document.cookie);
        // console.log('Cookie consent includes:', document.cookie?.includes('cookieConsent2=true'));

        // if (getCookieConsentValue() === 'true') {
        //     console.log('User has consented to cookies');
        // }
    }, []);

    function onClick() {
        document.cookie = 'cookieConsent2=true; max-age=31536000; path=/';
    }

    return (<>
        {showPopup && (
            // <div style={style}>
            <div className={rootClasses}>
                {/* <CookieConsent
                    location="bottom"
                    buttonText="Accept"
                    cookieName="cookieConsent"
                    style={{ background: "transparent", position: "relative", maxWidth: '600px' }}
                    buttonStyle={{ border: "2px solid transparent", background: "#1a1a1a", color: "white", fontSize: "13px" }}
                    expires={150}
                >
                    <div>This website uses cookies to enhance the user experience.{" "}</div>
                    {/* <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span> * /}
                </CookieConsent> */}

                <div>
                    This website uses cookies to enhance the user experience.
                </div>

                <button className="border-2 border-transparent bg-black text-white text-sm px-4 py-2 rounded-md" onClick={onClick}>
                    Accept
                </button>
            </div>
        )}
    </>);
}
