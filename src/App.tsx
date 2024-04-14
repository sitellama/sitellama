import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { CookiesPopup } from './ui/cookies-popup';
import { router } from './routes';

export function App() {
    return (<>
        <HelmetProvider context={{}}>
            <RouterProvider router={router} />
            <CookiesPopup />
        </HelmetProvider>
    </>);
}
