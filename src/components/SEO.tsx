import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

type SEOProps = {
  title?: string
  description?: string
  children?: React.ReactNode
  imgType?: string
  image?: string
  imgTitle?: string
  imgSubtitle?: string
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  children,
  imgType,
  image,
  imgTitle,
  imgSubtitle,
}) => {
  const {
    title: siteTitle,
    description: siteDescription,
    twitterHandle,
    ogImageUrl,
  } = useSiteMetadata()

  const seo = {
    title: title ? `${title} · ${siteTitle}` : siteTitle,
    description: description ?? siteDescription,
    twitterHandle: twitterHandle,
    image: ogImageUrl,
  }

  if (seo.image) {
    const imageUrl = new URL(seo.image)
    imageUrl.searchParams.append("title", imgTitle ?? title ?? siteTitle)
    imageUrl.searchParams.append("subtitle", imgSubtitle ?? seo.description)
    if (imgType) imageUrl.searchParams.append("type", imgType)
    if (image) imageUrl.searchParams.append("image", image)
    seo.image = imageUrl
  }

  return (
    <>
      <html lang="en" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      {seo.twitterHandle && (
        <meta name="twitter:creator" content={seo.twitterHandle} />
      )}
      <meta name="og:title" content={seo.title} />
      <meta name="og:description" content={seo.description} />
      {seo.image && (
        <>
          <meta name="image" content={seo.image} />
          <meta name="twitter:image" content={seo.image} />
          <meta name="og:image" content={seo.image} />
        </>
      )}

      {/* <meta name="og:type" />
      <meta name="og:article? "/>
      <meta name="og:url" />
      <meta name="og:image:width" />
      <meta name="og:image:height" /> */}
      {children}
    </>
  )
}

export default SEO
