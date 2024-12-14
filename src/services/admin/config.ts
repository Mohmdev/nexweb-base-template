import { Users } from '@/CMS/Users/config'
import { fileURLToPath } from 'url'
import path from 'path'
import type { Config } from 'payload'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export const adminConfig: Config['admin'] = {
  components: {
    beforeLogin: ['@/components/BeforeLogin']
    // beforeDashboard: ['@/components/BeforeDashboard']
  },
  importMap: {
    baseDir: path.resolve(dirname)
  },
  user: Users.slug,
  livePreview: {
    breakpoints: [
      {
        label: 'Mobile',
        name: 'mobile',
        width: 375,
        height: 667
      },
      {
        label: 'Tablet',
        name: 'tablet',
        width: 768,
        height: 1024
      },
      {
        label: 'Desktop',
        name: 'desktop',
        width: 1440,
        height: 900
      }
    ]
  }
  // routes?: {
  //   /** The route for the account page. */
  //   account?: string;
  //   /** The route for the create first user page. */
  //   createFirstUser?: string;
  //   /** The route for the forgot password page. */
  //   forgot?: string;
  //   /** The route the user will be redirected to after being inactive for too long. */
  //   inactivity?: string;
  //   /** The route for the login page. */
  //   login?: string;
  //   /** The route for the logout page. */
  //   logout?: string;
  //   /** The route for the reset password page. */
  //   reset?: string;
  //   /** The route for the unauthorized page. */
  //   unauthorized?: string;
  // };
}