import { useEffect, useState } from "react";
import { Location, Outlet, useLocation } from "react-router-dom";
import ReactGA from 'react-ga';
import { Header } from "../components/1-header";
import { Footer } from "../components/3-footer";
import { classNames } from "@/utils";

// ReactGA.initialize('G-XMXJ22G27Y');

const debugClasses = import.meta.env.PROD ? "" : "debug-screens";

export function Root() {
    const loc = useLocation();

    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        setInitialized((v) => {
            if (!v) {
                console.log("Root mounted1");
            }
            return true;
        });
    }, []);

    useEffect(() => {
        if (!initialized) {
            console.log("Root mounted2");
            setInitialized(true);
        }
    }, []);

    useEffect(
        () => {
            reportGA(loc);
        }, [loc.pathname, loc.search]
    );

    return (<>
        <div className={`relative bg-zinc-100 ${debugClasses}`}>
            <Header className={classNames(loc.pathname === "/" && "absolute")} />
            <Outlet />
        </div>

        <Footer />
    </>);
}

function reportGA(loc: Location) {
    ReactGA.pageview(loc.pathname + loc.search, undefined, "0-root-title");

    ReactGA.event({
        category: 'Page Click',
        action: 'Visited landing page',
        label: `${loc.pathname} Page`,
    });
}
