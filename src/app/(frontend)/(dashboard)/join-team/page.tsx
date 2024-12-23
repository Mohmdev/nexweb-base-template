import { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { mergeOpenGraph } from '@lib/seo/mergeOpenGraph'

import { fetchMe } from '@dashboard/api/fetchMe.js'

import { JoinTeam } from './page_client.js'

// TODO: server render the `JoinTeam` page
// see the `verify` page for an example
export default async function JoinTeamPage(props) {
  const { user } = await fetchMe()

  if (!user) {
    redirect(
      `/login?redirect=${encodeURIComponent(`/join-team`)}&error=${encodeURIComponent(
        'You must be logged in to join a team'
      )}`
    )
  }

  return <JoinTeam {...props} user={user} />
}

export const metadata: Metadata = {
  title: 'Join Team | Payload Cloud',
  description: 'Join a Payload team',
  openGraph: mergeOpenGraph({
    title: 'Join Team | Payload Cloud',
    url: '/join-team'
  })
}
