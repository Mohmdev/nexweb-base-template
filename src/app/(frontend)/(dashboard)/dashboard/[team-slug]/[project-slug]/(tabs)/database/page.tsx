import { Metadata } from 'next'

import { fetchProjectAndRedirect } from '@dashboard/api/fetchProject'

import { ProjectDatabasePage } from './page_client'

import { PRODUCTION_ENVIRONMENT_SLUG } from '@constants'

export default async function Page({
  params
}: {
  params: Promise<{
    'team-slug': string
    'project-slug': string
    'environment-slug': string
  }>
}) {
  const {
    'team-slug': teamSlug,
    'project-slug': projectSlug,
    'environment-slug': environmentSlug = PRODUCTION_ENVIRONMENT_SLUG
  } = await params
  const { team, project } = await fetchProjectAndRedirect({
    teamSlug,
    projectSlug,
    environmentSlug
  })

  return (
    <ProjectDatabasePage
      project={project}
      team={team}
      environmentSlug={environmentSlug}
    />
  )
}

export const metadata: Metadata = {
  title: 'Database'
}
