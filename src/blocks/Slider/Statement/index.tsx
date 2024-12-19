'use client'

import React from 'react'

import { Page } from '@payload-types'

import { BackgroundGrid } from '@components/Background/Grid'
import { BlockWrapper, PaddingProps } from '@components/BlockWrapper'
import { CMSLink } from '@components/CMSLink'
import Code from '@components/Code'
import { Gutter } from '@components/Gutter'
import { Media } from '@components/Media'
import { RichText } from '@components/RichText'

import classes from './index.module.scss'

export type StatementProps = Extract<
  Page['layout'][0],
  { blockType: 'statement' }
> & {
  padding?: PaddingProps
  hideBackground?: boolean
}

export const Statement: React.FC<StatementProps> = (props) => {
  const {
    statementFields: {
      richText,
      links,
      assetType,
      media,
      code,
      mediaWidth,
      backgroundGlow,
      settings,
      assetCaption
    },
    padding,
    hideBackground
  } = props

  const hasLinks = links && links.length > 0

  const mediaWidthClass =
    mediaWidth === 'small'
      ? 'cols-8 start-5 cols-m-8 start-m-1'
      : mediaWidth === 'large'
        ? 'cols-16 cols-m-8'
        : mediaWidth === 'full'
          ? 'cols-16 cols-m-8'
          : 'cols-12 start-3 cols-m-8 start-m-1'

  return (
    <BlockWrapper
      settings={settings}
      padding={padding}
      hideBackground={hideBackground}
    >
      <BackgroundGrid zIndex={0} />
      <Gutter className={classes.statementWrap}>
        <div className={['grid'].filter(Boolean).join(' ')}>
          <div
            className={[classes.statement, 'cols-8 start-5 cols-m-8 start-m-1']
              .filter(Boolean)
              .join(' ')}
          >
            <RichText content={richText} className={classes.content} />
            {hasLinks && (
              <div className={[classes.links].filter(Boolean).join(' ')}>
                {links.map(({ link }, i) => {
                  return (
                    <CMSLink
                      {...link}
                      key={i}
                      appearance="default"
                      fullWidth
                      buttonProps={{
                        icon: 'arrow',
                        hideHorizontalBorders: true,
                        hideBottomBorderExceptLast: true
                      }}
                    />
                  )
                })}
              </div>
            )}
          </div>
        </div>
        {(media || code) && (
          <div className={[classes.assetWrap, 'grid'].join(' ')}>
            {assetType === 'media'
              ? media &&
                typeof media !== 'string' && (
                  <div
                    className={[
                      mediaWidthClass,
                      mediaWidth === 'full' && classes.fullMedia
                    ]
                      .filter(Boolean)
                      .join(' ')}
                  >
                    <Media
                      resource={media}
                      className={[
                        mediaWidthClass,
                        backgroundGlow && classes[backgroundGlow]
                      ]
                        .filter(Boolean)
                        .join(' ')}
                    />
                  </div>
                )
              : code && (
                  <div
                    className={[
                      backgroundGlow && classes[backgroundGlow],
                      'cols-10 start-4 cols-m-8 start-m-1'
                    ]
                      .filter(Boolean)
                      .join(' ')}
                  >
                    <Code className={classes.codeBlock}>{code}</Code>
                  </div>
                )}
            {assetCaption && (
              <div className={classes.assetCaption}>
                <span>{assetCaption}</span>
              </div>
            )}
          </div>
        )}
      </Gutter>
    </BlockWrapper>
  )
}
