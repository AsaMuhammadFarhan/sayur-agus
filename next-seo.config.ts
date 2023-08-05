import { DefaultSeoProps } from "next-seo";

const SeoConfig: DefaultSeoProps = {
  defaultTitle: "Agus Sayur",
  additionalLinkTags:[
    {
      rel:"shortcut icon",
      href: "/kubis-icon.png",
      type: "image/png"
    }
  ],
  openGraph: {
    type: "website",
    locale: "id",
    url: process.env.NEXT_PUBLIC_WEB_URL,
    siteName: "Do Tangi",
  },
};

export default SeoConfig;
