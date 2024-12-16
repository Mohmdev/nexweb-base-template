import { generateForgotPasswordEmail } from '@/services/email/generateForgotPasswordEmail'
import { generateVerificationEmail } from '@/services/email/generateVerificationEmail'

import { admins } from '@access/admins'
import { adminsAndUser } from '@access/adminsAndUser'
import { anyone } from '@access/anyone'
import { canUpdateUser } from '@access/canUpdateUser'

import type { CollectionConfig } from 'payload'

import { rolesField } from './fields/roles'

export const Users: CollectionConfig<'users'> = {
  slug: 'users',
  admin: {
    defaultColumns: ['name', 'email', 'roles'],
    useAsTitle: 'name'
  },
  fields: [
    {
      name: 'name',
      type: 'text'
    },
    rolesField
  ],
  access: {
    create: anyone,
    read: adminsAndUser,
    update: canUpdateUser,
    delete: admins,
    admin: admins,
    unlock: admins
  },
  auth: {
    forgotPassword: {
      generateEmailHTML: generateForgotPasswordEmail,
      generateEmailSubject: () => 'Reset your password'
    },
    verify: {
      generateEmailHTML: generateVerificationEmail,
      generateEmailSubject: () => 'Verify your email'
    }
  },
  timestamps: true
}
