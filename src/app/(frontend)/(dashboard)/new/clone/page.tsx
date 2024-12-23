import React, { Fragment } from 'react'
import { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { mergeOpenGraph } from '@lib/seo/mergeOpenGraph'

import { Gutter } from '@components/Gutter'
import { NewProjectBlock } from '@components/NewProject'
import { RenderParams } from '@components/RenderParams'
import { fetchMe } from '@dashboard/api/fetchMe.js'
import { fetchTemplates } from '@dashboard/api/fetchTemplates.js'

export default async () => {
  const { user } = await fetchMe()

  if (!user) {
    redirect(
      `/login?redirect=${encodeURIComponent('/new/clone')}&warning=${encodeURIComponent(
        'You must first login to clone a template'
      )}`
    )
  }

  const templates = await fetchTemplates()

  return (
    <Fragment>
      <Gutter>
        <RenderParams />
      </Gutter>
      <NewProjectBlock templates={templates} />
    </Fragment>
  )
}

export const metadata: Metadata = {
  title: 'Clone Template | Payload Cloud',
  openGraph: mergeOpenGraph({
    title: 'Clone Template | Payload Cloud',
    url: '/new/clone'
  })
}
