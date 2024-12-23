import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { ME_QUERY } from '@_data/me.js'

import type { User } from '@payload-cloud-types'

import { payloadCloudToken } from './token.js'

export const fetchMe = async (args?: {
  nullUserRedirect?: string
  userRedirect?: string
}): Promise<{
  token?: string
  user: User
}> => {
  const { nullUserRedirect, userRedirect } = args || {}
  const cookieStore = await cookies()
  const token = cookieStore.get(payloadCloudToken)?.value

  const meUserReq = await fetch(
    `${process.env.NEXT_PUBLIC_CLOUD_CMS_URL}/api/graphql`,
    {
      body: JSON.stringify({
        query: ME_QUERY
      }),
      headers: {
        Authorization: `JWT ${token}`,
        'Content-Type': 'application/json'
      },
      method: 'POST',
      next: { tags: ['user'] }
    }
  )

  const json = await meUserReq.json()

  const user = json?.data?.meUser?.user

  if (userRedirect && meUserReq.ok && user) {
    redirect(userRedirect)
  }

  if (nullUserRedirect && (!meUserReq.ok || !user)) {
    redirect(nullUserRedirect)
  }

  return {
    token,
    user
  }
}