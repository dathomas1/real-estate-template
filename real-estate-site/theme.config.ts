import { defineThemeConfig } from '@utils/defineThemeConfig'
import previewImage from '@assets/img/social-preview-image.png'
import logoImage from '@assets/img/logo.svg'

export default defineThemeConfig({
  name: 'Alyson Thomas of Premier Plus Realty',
  id: 'alyson-thomas-of-premier-plus-realty',
  seo: {
    title: 'Alyson Thomas of Premier Plus Realty',
    description: 'Seller-focused real estate agent serving Sebring, Avon Park, Lake Placid, and Highlands County, Florida.',
    image: previewImage,
  },
  logo: logoImage,
  colors: {
    primary: '#1b3a5c',
    secondary: '#d4923a',
    neutral: '#ddd8d0',
    outline: '#1b3a5c',
  },
  navigation: {
    darkmode: true,
    items: [
      {
              type: 'link',
              label: 'Home',
              href: '/',
            },
      {
              type: 'link',
              label: 'Blog',
              href: '/blog',
            },
      {
              type: 'link',
              label: 'Portfolio',
              href: '/portfolio',
            },
      {
              type: 'link',
              label: 'Spike',
              href: '/spike',
            },
      {
              type: 'dropdown',
              label: 'Features',
              items: [
                {
                            label: 'Accessibility statement',
                            href: '/accessibility-statement',
                          },
                {
                            label: 'Accessible components',
                            href: '/accessible-components',
                          },
                {
                            label: 'Color contrast checker',
                            href: '/color-contrast-checker',
                          },
                {
                            label: 'Markdown page',
                            href: '/markdown-page',
                          },
                {
                            label: 'MDX page',
                            href: '/mdx-page',
                          },
                {
                            label: 'Sitemap',
                            href: '/sitemap',
                          }
              ],
            },
      {
              type: 'link',
              label: 'Contact',
              href: '/contact',
            }
    ],
  },
  socials: [],
})
