import { Helmet } from "react-helmet-async";

export function SEO({ title, description, href }: { title: string; description: string; href: string; }) {
    return (
        <Helmet>
            <link rel='canonical' href={href} />
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name="title" content="Sitellama" data-react-helmet="true"></meta>
            <meta name="og:title" content="Sitellama" data-react-helmet="true"></meta>
        </Helmet>
    );
}
