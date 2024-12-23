'use client'

import * as React from 'react'

import { CollapsibleGroup } from '@faceless-ui/collapsibles'

import { Accordion } from '@components/Accordion'
import { HR } from '@components/HR'
import { MaxWidth } from '@components/MaxWidth'
import { Project, Team } from '@dashboard/types'

import { NoData } from '../_layoutComponents/NoData'
import { SectionHeader } from '../_layoutComponents/SectionHeader'
import { AddDomain } from './AddDomain'
import { ManageDomain } from './ManageDomain'

export const ProjectDomainsPage: React.FC<{
  project: Project
  team: Team
  environmentSlug: string
}> = ({ project, team, environmentSlug }) => {
  return (
    <MaxWidth>
      <SectionHeader
        title="Custom Domains"
        intro={
          <>
            {project?.defaultDomain && (
              <p>
                <strong>Default domain: </strong>
                <a href={`https://${project.defaultDomain}`} target="_blank">
                  {project.defaultDomain}
                </a>
              </p>
            )}
          </>
        }
      />
      <CollapsibleGroup transTime={250} transCurve="ease">
        <Accordion label="New Domain" openOnInit>
          <AddDomain
            project={project}
            team={team}
            environmentSlug={environmentSlug}
          />
        </Accordion>
      </CollapsibleGroup>
      <HR />
      {project?.domains && project.domains.length > 0 ? (
        <React.Fragment>
          <SectionHeader title="Manage Domains" />
          <CollapsibleGroup transTime={250} transCurve="ease" allowMultiple>
            <div>
              {project.domains.map((domain) => (
                <ManageDomain
                  key={domain.id}
                  domain={domain}
                  project={project}
                  team={team}
                  environmentSlug={environmentSlug}
                />
              ))}
            </div>
          </CollapsibleGroup>
        </React.Fragment>
      ) : (
        <NoData message="This project currently has no custom domains configured." />
      )}
    </MaxWidth>
  )
}
