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
            </p>
        </div>
    );
}