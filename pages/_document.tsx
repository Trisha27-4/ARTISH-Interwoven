import Head from 'next/head';

export default function Document() {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Digital Portfolio - A showcase of projects, research, and creative endeavors" />
      <meta name="keywords" content="portfolio, technology, AI, research, creative, developer" />
      <meta name="author" content="Digital Portfolio" />
      
      {/* Open Graph */}
      <meta property="og:title" content="Digital Portfolio" />
      <meta property="og:description" content="A dynamic showcase of projects, research, and creative endeavors" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://yourusername.github.io/digital-portfolio" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Digital Portfolio" />
      <meta name="twitter:description" content="A dynamic showcase of projects, research, and creative endeavors" />
      
      <title>Digital Portfolio</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

