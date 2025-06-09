import { Poppins } from "next/font/google";

import "./globals.css";
// import Script from "next/script";
import Head from "next/head"; // Import Next.js Head component
import Script from "next/script";
import { headers } from "next/headers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});


const breadcrumbPages: Record<string, { name: string; url: string }> = {
  "/about": { name: "About Us", url: "https://www.inframeschool.com/about" },
  "/courses": { name: "Courses", url: "https://www.inframeschool.com/courses" },
  "/blog": { name: "Blog", url: "https://www.inframeschool.com/blog" },
  "/contact": {
    name: "Contact Us",
    url: "https://www.inframeschool.com/contact",
  },
  "/lifeatinframe": {
    name: "Student Life",
    url: "https://www.inframeschool.com/lifeatinframe",
  },
  "/careers": { name: "Careers", url: "https://www.inframeschool.com/careers" },
  "/download": {
    name: "Download Resources",
    url: "https://www.inframeschool.com/download",
  },
  "/mentors": { name: "Mentors", url: "https://www.inframeschool.com/mentors" },
};


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const pathname = (await headers()).get("x-pathname") || "/";

  const currentPage = breadcrumbPages[pathname];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.inframeschool.com",
      },
      ...(currentPage
        ? [
            {
              "@type": "ListItem",
              position: 2,
              name: currentPage.name,
              item: currentPage.url,
            },
          ]
        : []),
    ],
  };


  return (
    <html lang="en" className={poppins.className}>
      <Head>
        {/* Title & Description */}
       

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any"/>
      <link rel="icon" type="image/png" href="/favicon.png"/>

        {/* Open Graph Metadata (for social sharing) */}
        
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:image" content="https://yt3.googleusercontent.com/I3nimXEi9IpFwfTOoYovMl9RLJWHxZOewDCKXRYkrb4veYqEtu2vENdA3hLYemdtbBdta54kaQ=s160-c-k-c0x00ffffff-no-rj" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />

        {/* Google Site Verification */}
        <meta name="google-site-verification" content="dGWC26ZkV6A4Ue6fhZdXFh5gMfWQDF3Q-3qpLE71h5M" />
      </Head>

      <body>
        {/* Google Analytics (placed inside <body>, not inside <Head>) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1Q0ED5JDYB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1Q0ED5JDYB');
            gtag('config', 'AW-16950108871');
          `}
        </Script>
        

        {/* Inject Breadcrumb Schema */}
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        

        {children}
      </body>
    </html>
  );
}
