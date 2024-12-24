import React from 'react'

import { ArrowIcon } from '@icons/ArrowIcon'
import { BackgroundScanline } from '@components/Background/Scanline'
import { LoadingShimmer } from '@components/LoadingShimmer'
import { Repo } from '@dashboard/api/fetchRepos'

import classes from './index.module.scss'

export const RepoCard: React.FC<{
  repo: Repo
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  isLoading?: boolean
  isHovered?: boolean
  onClick?: (repo: Repo) => void
}> = (props) => {
  const { repo, onMouseEnter, onMouseLeave, isLoading, onClick } = props
  const { name, description } = repo || {}

  return (
    <button
      className={classes.repoCard}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={() => {
        if (typeof onClick === 'function') {
          onClick(repo)
        }
      }}
    >
      {!isLoading && (
        <>
          <div className={classes.repoContent}>
            <h5 className={classes.repoName}>{name}</h5>
            {description && (
              <p className={classes.repoDescription}>{description}</p>
            )}
          </div>
          <BackgroundScanline className={classes.scanlines} />
          <ArrowIcon className={classes.arrow} />
        </>
      )}
      {isLoading && (
        <LoadingShimmer heightPercent={100} className={classes.shimmer} />
      )}
    </button>
  )
}
