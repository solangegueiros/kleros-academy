const baseUrl = 'https://github.com/solangegueiros/kleros.academy'

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Solange Gueiros. All Rights Reserved.`,
  repo: {
    url: baseUrl,
    editUrl: `${baseUrl}/edit/develop`,
    blobUrl: `${baseUrl}/blob/develop`,
  },
  seo: {
    title: 'Kleros Academy',
    titleTemplate: '%s - Kleros Academy',
    description: 'Kleros Academy Description',
    siteUrl: 'https://kleros.academy',
    twitter: {
      handle: '@kleros-academy',
      site: '@kleros-academy',
      cardType: 'summary_large_image',
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://rsk.academy',
      title: 'Kleros Academy',
      description: 'Kleros Academy Description',
      siteName: 'Kleros Academy',
      images: [
        {
          url: '/og-image.png',
          width: 1240,
          height: 480,
          alt: 'Kleros Academy Description',
        },
        {
          url: '/twitter-og-image.png',
          width: 1012,
          height: 506,
          alt: 'Kleros Academy Description',
        },
      ],
    },
  },
}

export default siteConfig
