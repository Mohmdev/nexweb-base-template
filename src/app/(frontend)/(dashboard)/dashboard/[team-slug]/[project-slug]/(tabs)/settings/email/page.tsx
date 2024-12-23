import React from 'react'

import { mergeOpenGraph } from '@lib/seo/mergeOpenGraph'

import { fetchProjectAndRedirect } from '@dashboard/api/fetchProject'

import { ProjectEmailPage } from './page_client'

import { PRODUCTION_ENVIRONMENT_SLUG } from '@constants'

export default async function Page({
  params
}: {
  params: Promise<{
    'environment-slug': string
    'project-slug': string
    'team-slug': string
  }>
}) {
  const {
    'environment-slug': environmentSlug = PRODUCTION_ENVIRONMENT_SLUG,
    'project-slug': projectSlug,
    'team-slug': teamSlug
  } = await params
  const { project, team } = await fetchProjectAndRedirect({
    environmentSlug,
    projectSlug,
    teamSlug
  })
  return (
    <ProjectEmailPage
      environmentSlug={environmentSlug}
      project={project}
      team={team}
    />
  )
}

export async function generateMetadata({
  params
}: {
  params: Promise<{
    'project-slug': string
    'team-slug': string
  }>
}) {
  const { 'project-slug': projectSlug, 'team-slug': teamSlug } = await params
  return {
    openGraph: mergeOpenGraph({
      url: `/cloud/${teamSlug}/${projectSlug}/settings/email`
    }),
    title: 'Email'
  }
}
