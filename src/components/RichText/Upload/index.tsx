import React from 'react'

import { SerializedUploadNode } from '@payloadcms/richtext-lexical'

import { Media as MediaType } from '@payload-types'

import { CMSLink, CMSLinkType } from '@components/CMSLink'
import { Media } from '@components/Media'

export type RichTextUploadNodeType = {
  fields: {
    link?: CMSLinkType
    enableLink?: boolean
  }
  value?: MediaType
  relationTo: string
}

export type Props = {
  node: SerializedUploadNode
  className?: string
}

export const RichTextUpload: React.FC<Props> = (props) => {
  const {
    node: { fields, value },
    className
  } = props

  let Wrap: React.ComponentType<CMSLinkType> | string = 'div'

  const styles: React.CSSProperties = {}

  let wrapProps: CMSLinkType = {}

  if (fields?.enableLink) {
    Wrap = CMSLink
    wrapProps = {
      ...fields?.link
    }
  }

  return (
    <div style={styles} className={className}>
      <Wrap {...wrapProps}>
        <Media resource={value as MediaType} />
      </Wrap>
    </div>
  )
}

export default RichTextUpload
