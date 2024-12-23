import { Metadata } from 'next'

import { mergeOpenGraph } from '@lib/seo/mergeOpenGraph'

import { fetchProjects } from '@dashboard/api/fetchProjects.js'
import { fetchTeamWithCustomer } from '@dashboard/api/fetchTeam.js'
import { fetchTemplates } from '@dashboard/api/fetchTemplates.js'

import { TeamPage } from './page_client.js'

export default async ({
  params
}: {
  params: Promise<{
    'team-slug': string
  }>
}) => {
  const { 'team-slug': teamSlug } = await params
  const team = await fetchTeamWithCustomer(teamSlug)
  const projectsRes = await fetchProjects([team?.id])

  const templates = await fetchTemplates()

  return (
    <TeamPage team={team} initialState={projectsRes} templates={templates} />
  )
}

export async function generateMetadata({
  params
}: {
  params: Promise<{
    'team-slug': string
  }>
}): Promise<Metadata> {
  const { 'team-slug': teamSlug } = await params
  return {
    title: `${teamSlug} - Team Projects`,
    openGraph: mergeOpenGraph({
      title: `${teamSlug} - Team Projects`,
      url: `/cloud/${teamSlug}`
    })
  }
}
