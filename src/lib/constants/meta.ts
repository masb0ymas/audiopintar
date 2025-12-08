import { env } from '~/env'
import { MetaLink } from '~/types/meta'

export const META_URL = 'https://audiopintar.com'
export const META_TITLE = 'audiopintar - AI-Powered Audio Transcription & Translation'
export const META_DESCRIPTION = `Transform your audio into text with audiopintar. Advanced AI-powered transcription and translation service supporting multiple languages with high accuracy.`
export const META_IMAGE = '/static/images/brand-logo.png'
export const META_KEYWORDS = `audio transcription, speech to text, audio translation, AI transcription, voice to text, audio converter, subtitle generator, transcription service, multilingual transcription, audio processing`

export const META_ICONS = [
  {
    rel: 'shortcut icon',
    sizes: '16x16 24x24 32x32 48x48 64x64',
    href: '/static/favicon/favicon.ico',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '57x57',
    href: '/static/favicon/apple-touch-icon.png',
  },
  {
    rel: 'apple-touch-icon-precomposed',
    sizes: '57x57',
    href: '/static/favicon/apple-touch-icon.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '72x72',
    href: '/static/favicon/apple-touch-icon.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '114x114',
    href: '/static/favicon/apple-touch-icon.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '120x120',
    href: '/static/favicon/apple-touch-icon.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '144x144',
    href: '/static/favicon/apple-touch-icon.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '152x152',
    href: '/static/favicon/apple-touch-icon.png',
  },
]

export const META_CONTENT = [
  {
    name: 'theme-color',
    content: '#ea580c',
  },
  {
    name: 'application-name',
    content: META_TITLE,
  },
  {
    name: 'msapplication-TileImage',
    content: '/static/favicon/apple-touch-icon.png',
  },
  {
    name: 'msapplication-TileColor',
    content: '#ea580c',
  },
  {
    name: 'apple-mobile-web-app-capable',
    content: 'yes',
  },
  {
    name: 'apple-mobile-web-app-status-bar-style',
    content: 'black-translucent',
  },
]

export const GOOGLE_FONTS: MetaLink[] = [
  {
    rel: 'preconnect',
    href: 'https://fonts.googleapis.com',
    crossOrigin: undefined,
  },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap',
    crossOrigin: undefined,
  },
]

export const OPEN_GRAPH_META = [
  {
    name: 'og:title',
    content: META_TITLE,
  },
  {
    name: 'og:description',
    content: META_DESCRIPTION,
  },
  {
    name: 'og:type',
    content: 'website',
  },
  {
    name: 'og:url',
    content: META_URL,
  },
  {
    name: 'og:site_name',
    content: env.VITE_APP_NAME,
  },
  {
    name: 'og:locale',
    content: 'id_ID',
  },
  {
    name: 'og:image',
    content: META_IMAGE,
  },
]

export const TWITTER_META = [
  {
    name: 'twitter:card',
    content: 'summary_large_image',
  },
  {
    name: 'twitter:title',
    content: META_TITLE,
  },
  {
    name: 'twitter:description',
    content: META_DESCRIPTION,
  },
  {
    name: 'twitter:image',
    content: META_IMAGE,
  },
]
