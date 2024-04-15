import Head from "next/head";

const Seo = ({ title, description, url }: { title: string, description: string, url: string }) => {
    return (
        <Head>
            <meta name="author" content="Maeztra" />
            <meta name="keywords" content="Javascript" />
            <link rel="fluid-icon" href="/assets/favicons/favicon.svg" title="Maeztra" />
            <link rel="icon" type="svg+xml" href="/assets/favicons/favicon.svg" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{title}</title>
            <link rel="shortcut icon" href="/assets/favicons/favicon.svg" type="x-icon" />
            <link rel="icon" href="/assets/favicons/favicon-32.png" sizes="32x32" />
            <link rel="icon" href="/assets/favicons/favicon-48.png" sizes="48x48" />
            <link rel="icon" href="/assets/favicons/favicon-57.png" sizes="57x57" />
            <link rel="icon" href="/assets/favicons/favicon-60.png" sizes="60x60" />
            <link rel="icon" href="/assets/favicons/favicon-72.png" sizes="72x72" />
            <link rel="icon" href="/assets/favicons/favicon-76.png" sizes="76x76" />
            <link rel="icon" href="/assets/favicons/favicon-96.png" sizes="96x96" />
            <link rel="icon" href="/assets/favicons/favicon-120.png" sizes="120x120" />
            <link rel="icon" href="/assets/favicons/favicon-144.png" sizes="144x144" />
            <link rel="icon" href="/assets/favicons/favicon-152.png" sizes="152x152" />
            <link rel="icon" href="/assets/favicons/favicon-180.png" sizes="180x180" />
            <link rel="icon" href="/assets/favicons/favicon-192.png" sizes="192x192" />
            <link rel="icon" href="/assets/favicons/favicon-512.png" sizes="512x512" />
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content="Maeztra" />
            <meta property="og:type" content="website" key="ogtype" />
            <meta property="og:url" content={url} />
            <meta property="og:image:alt" content={description} />
            <meta property="og:image" content="/screenshot/screenshot-desktop-wide.png" />
            <meta name="twitter:title" content="Maeztra" />
            <meta name="twitter:site" content="@vagnermengali" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content="/screenshot/screenshot-desktop-wide.png" />
            <meta name="twitter:description" content={description} />
            <meta property="al:ios:app_name" content="Maeztra" />
            <meta property="al:ios:url" content={url} />
            <meta property="al:android:app_name" content="Maeztra" />
            <meta property="al:android:url" content={url} />
            <link rel="canonical" href={url} />
            <meta name="theme-color" content="#FFF" />
            <meta name="msapplication-TileColor" content="#FFF" />
            <meta name="msapplication-navbutton-color" content="#FFF" />
            <meta name="apple-mobile-web-app-status-bar-style" content="#FFF" />
            <link rel="manifest" href={"/manifest.webmanifest"} />
            <meta name="robots" content="index,follow" />
            <meta name="googlebot" content="index, follow" />
        </Head>
    );
};

export default Seo;