import * as React from "react";
import Head from "next/head";

interface Props {
  title: string;
  description: string;
  keyword: string;
  image: string;
  url: string;
}

const CommonMeta = ({
  title,
  description,
  keyword,
  image,
  url,
}: Props): JSX.Element => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="keywords" content={keyword} />
      <meta name="description" content={description} />
      <meta property="og:type" content="lp" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@podteam2525" />
      <meta name="twitter:url" content={image} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={url} />
      <link rel="shortcut icon" href={"favicon.svg"} type="image/svg+xml" />
      <link rel="icon alternate" href={"icon.png"} type="image/png" />
      <link rel="apple-touch-icon" href={"icon.png"} />
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Benne&family=Shippori+Mincho+B1:wght@500;600;700;800&display=swap');
      </style>
    </Head>
  );
};

export default CommonMeta;
