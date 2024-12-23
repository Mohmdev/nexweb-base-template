import { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { mergeOpenGraph } from '@lib/seo/mergeOpenGraph'

import { fetchMe } from '@dashboard/api/fetchMe.js'

import { ForgotPassword } from './page_client.js'

export default async (props) => {
  const { user } = await fetchMe()

  if (user) {
    redirect(
      `/cloud?error=${encodeURIComponent('You must be logged out to reset your password')}`
    )
  }

  return <ForgotPassword {...props} />
}

export const metadata: Metadata = {
  title: 'Forgot Password | Payload Cloud',
  description: 'If you forgot your password, reset it',
  openGraph: mergeOpenGraph({
    title: 'Forgot Password | Payload Cloud',
    url: '/forgot-password'
  })
}
