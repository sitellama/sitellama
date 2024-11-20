export function Footer() {
    return (
        <Copyright />
    );
}

function Copyright() {
    return (
        <div className='bg-brand-blue text-white p-4'>
            <p className='text-center'>
                <a
                    href="https://sitellama.com/"
                    target="_blank">
                    Site by Sitellama LLC {new Date().getFullYear()}©
                </a>
                <p className="p-2 text-xs"><a href="/privacy-policy" className="p-2">Privacy Policy</a> | <a href="#" className="p-2">Sitemap</a></p>
            </p>
        </div>
    );
}