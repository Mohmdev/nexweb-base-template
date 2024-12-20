/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    portfolio: Portfolio;
    'reusable-content': ReusableContent;
    media: Media;
    assets: Asset;
    users: User;
    docs: Doc;
    tickets: Ticket;
    forms: Form;
    'form-submissions': FormSubmission;
    redirects: Redirect;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    portfolio: PortfolioSelect<false> | PortfolioSelect<true>;
    'reusable-content': ReusableContentSelect<false> | ReusableContentSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    assets: AssetsSelect<false> | AssetsSelect<true>;
    users: UsersSelect<false> | UsersSelect<true>;
    docs: DocsSelect<false> | DocsSelect<true>;
    tickets: TicketsSelect<false> | TicketsSelect<true>;
    forms: FormsSelect<false> | FormsSelect<true>;
    'form-submissions': FormSubmissionsSelect<false> | FormSubmissionsSelect<true>;
    redirects: RedirectsSelect<false> | RedirectsSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: number;
  };
  globals: {
    'main-menu': MainMenu;
    footer: Footer;
  };
  globalsSelect: {
    'main-menu': MainMenuSelect<false> | MainMenuSelect<true>;
    footer: FooterSelect<false> | FooterSelect<true>;
  };
  locale: null;
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "portfolio".
 */
export interface Portfolio {
  id: number;
  title: string;
  industry?: string | null;
  useCase?: string | null;
  featuredImage: number | Media;
  layout?:
    | (
        | {
            calloutFields: {
              settings?: {
                theme?: ('light' | 'dark') | null;
                background?: ('solid' | 'transparent' | 'gradientUp' | 'gradientDown') | null;
              };
              richText: {
                root: {
                  type: string;
                  children: {
                    type: string;
                    version: number;
                    [k: string]: unknown;
                  }[];
                  direction: ('ltr' | 'rtl') | null;
                  format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                  indent: number;
                  version: number;
                };
                [k: string]: unknown;
              };
              logo: number | Media;
              author?: string | null;
              role?: string | null;
              images?:
                | {
                    image: number | Media;
                    id?: string | null;
                  }[]
                | null;
            };
            id?: string | null;
            blockName?: string | null;
            blockType: 'callout';
          }
        | {
            ctaFields: {
              settings?: {
                theme?: ('light' | 'dark') | null;
                background?: ('solid' | 'transparent' | 'gradientUp' | 'gradientDown') | null;
              };
              style?: ('buttons' | 'banner') | null;
              richText: {
                root: {
                  type: string;
                  children: {
                    type: string;
                    version: number;
                    [k: string]: unknown;
                  }[];
                  direction: ('ltr' | 'rtl') | null;
                  format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                  indent: number;
                  version: number;
                };
                [k: string]: unknown;
              };
              commandLine?: string | null;
              links?:
                | {
                    type?: ('link' | 'npmCta') | null;
                    npmCta?: {
                      label: string;
                    };
                    link?: {
                      type?: ('reference' | 'custom') | null;
                      newTab?: boolean | null;
                      reference?: {
                        relationTo: 'portfolio';
                        value: number | Portfolio;
                      } | null;
                      url?: string | null;
                      label: string;
                      customId?: string | null;
                    };
                    id?: string | null;
                  }[]
                | null;
              bannerLink?: {
                type?: ('reference' | 'custom') | null;
                newTab?: boolean | null;
                reference?: {
                  relationTo: 'portfolio';
                  value: number | Portfolio;
                } | null;
                url?: string | null;
                label: string;
                customId?: string | null;
              };
              bannerImage?: (number | null) | Media;
              gradientBackground?: boolean | null;
            };
            id?: string | null;
            blockName?: string | null;
            blockType: 'cta';
          }
      )[]
    | null;
  slug: string;
  slugLock?: boolean | null;
  url?: string | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: number;
  darkModeFallback?: (number | null) | Media;
  alt: string;
  caption?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  prefix?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
  sizes?: {
    thumbnail?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    square?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    small?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    medium?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    large?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    xlarge?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    og?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "reusable-content".
 */
export interface ReusableContent {
  id: number;
  title: string;
  layout: {
    bannerFields: {
      settings?: {
        theme?: ('light' | 'dark') | null;
        background?: ('solid' | 'transparent' | 'gradientUp' | 'gradientDown') | null;
      };
      type?: ('default' | 'success' | 'warning' | 'error') | null;
      addCheckmark?: boolean | null;
      content: {
        root: {
          type: string;
          children: {
            type: string;
            version: number;
            [k: string]: unknown;
          }[];
          direction: ('ltr' | 'rtl') | null;
          format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
          indent: number;
          version: number;
        };
        [k: string]: unknown;
      };
    };
    id?: string | null;
    blockName?: string | null;
    blockType: 'banner';
  }[];
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "assets".
 */
export interface Asset {
  id: number;
  darkModeFallback?: (number | null) | Media;
  alt: string;
  prefix?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number;
  firstName: string;
  lastName: string;
  twitter?: string | null;
  photo?: (number | null) | Media;
  role: 'admin' | 'editor' | 'public';
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  _verified?: boolean | null;
  _verificationToken?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "docs".
 */
export interface Doc {
  id: number;
  dummy?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "tickets".
 */
export interface Ticket {
  id: number;
  dummy?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "forms".
 */
export interface Form {
  id: number;
  title: string;
  fields?:
    | (
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            required?: boolean | null;
            defaultValue?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'checkbox';
          }
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'country';
          }
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'email';
          }
        | {
            message?: {
              root: {
                type: string;
                children: {
                  type: string;
                  version: number;
                  [k: string]: unknown;
                }[];
                direction: ('ltr' | 'rtl') | null;
                format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                indent: number;
                version: number;
              };
              [k: string]: unknown;
            } | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'message';
          }
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            defaultValue?: number | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'number';
          }
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            defaultValue?: string | null;
            options?:
              | {
                  label: string;
                  value: string;
                  id?: string | null;
                }[]
              | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'select';
          }
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'state';
          }
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            defaultValue?: string | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'text';
          }
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            defaultValue?: string | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'textarea';
          }
      )[]
    | null;
  submitButtonLabel?: string | null;
  confirmationType?: ('message' | 'redirect') | null;
  confirmationMessage?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  redirect?: {
    url: string;
  };
  emails?:
    | {
        emailTo?: string | null;
        cc?: string | null;
        bcc?: string | null;
        replyTo?: string | null;
        emailFrom?: string | null;
        subject: string;
        message?: {
          root: {
            type: string;
            children: {
              type: string;
              version: number;
              [k: string]: unknown;
            }[];
            direction: ('ltr' | 'rtl') | null;
            format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
            indent: number;
            version: number;
          };
          [k: string]: unknown;
        } | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "form-submissions".
 */
export interface FormSubmission {
  id: number;
  form: number | Form;
  submissionData?:
    | {
        field: string;
        value: string;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "redirects".
 */
export interface Redirect {
  id: number;
  from: string;
  to?: {
    type?: ('reference' | 'custom') | null;
    reference?: {
      relationTo: 'portfolio';
      value: number | Portfolio;
    } | null;
    url?: string | null;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: number;
  document?:
    | ({
        relationTo: 'portfolio';
        value: number | Portfolio;
      } | null)
    | ({
        relationTo: 'reusable-content';
        value: number | ReusableContent;
      } | null)
    | ({
        relationTo: 'media';
        value: number | Media;
      } | null)
    | ({
        relationTo: 'assets';
        value: number | Asset;
      } | null)
    | ({
        relationTo: 'users';
        value: number | User;
      } | null)
    | ({
        relationTo: 'docs';
        value: number | Doc;
      } | null)
    | ({
        relationTo: 'tickets';
        value: number | Ticket;
      } | null)
    | ({
        relationTo: 'forms';
        value: number | Form;
      } | null)
    | ({
        relationTo: 'form-submissions';
        value: number | FormSubmission;
      } | null)
    | ({
        relationTo: 'redirects';
        value: number | Redirect;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "portfolio_select".
 */
export interface PortfolioSelect<T extends boolean = true> {
  title?: T;
  industry?: T;
  useCase?: T;
  featuredImage?: T;
  layout?:
    | T
    | {
        callout?:
          | T
          | {
              calloutFields?:
                | T
                | {
                    settings?:
                      | T
                      | {
                          theme?: T;
                          background?: T;
                        };
                    richText?: T;
                    logo?: T;
                    author?: T;
                    role?: T;
                    images?:
                      | T
                      | {
                          image?: T;
                          id?: T;
                        };
                  };
              id?: T;
              blockName?: T;
            };
        cta?:
          | T
          | {
              ctaFields?:
                | T
                | {
                    settings?:
                      | T
                      | {
                          theme?: T;
                          background?: T;
                        };
                    style?: T;
                    richText?: T;
                    commandLine?: T;
                    links?:
                      | T
                      | {
                          type?: T;
                          npmCta?:
                            | T
                            | {
                                label?: T;
                              };
                          link?:
                            | T
                            | {
                                type?: T;
                                newTab?: T;
                                reference?: T;
                                url?: T;
                                label?: T;
                                customId?: T;
                              };
                          id?: T;
                        };
                    bannerLink?:
                      | T
                      | {
                          type?: T;
                          newTab?: T;
                          reference?: T;
                          url?: T;
                          label?: T;
                          customId?: T;
                        };
                    bannerImage?: T;
                    gradientBackground?: T;
                  };
              id?: T;
              blockName?: T;
            };
      };
  slug?: T;
  slugLock?: T;
  url?: T;
  updatedAt?: T;
  createdAt?: T;
  _status?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "reusable-content_select".
 */
export interface ReusableContentSelect<T extends boolean = true> {
  title?: T;
  layout?:
    | T
    | {
        banner?:
          | T
          | {
              bannerFields?:
                | T
                | {
                    settings?:
                      | T
                      | {
                          theme?: T;
                          background?: T;
                        };
                    type?: T;
                    addCheckmark?: T;
                    content?: T;
                  };
              id?: T;
              blockName?: T;
            };
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  darkModeFallback?: T;
  alt?: T;
  caption?: T;
  prefix?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
  sizes?:
    | T
    | {
        thumbnail?:
          | T
          | {
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
        square?:
          | T
          | {
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
        small?:
          | T
          | {
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
        medium?:
          | T
          | {
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
        large?:
          | T
          | {
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
        xlarge?:
          | T
          | {
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
        og?:
          | T
          | {
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
      };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "assets_select".
 */
export interface AssetsSelect<T extends boolean = true> {
  darkModeFallback?: T;
  alt?: T;
  prefix?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  firstName?: T;
  lastName?: T;
  twitter?: T;
  photo?: T;
  role?: T;
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  _verified?: T;
  _verificationToken?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "docs_select".
 */
export interface DocsSelect<T extends boolean = true> {
  dummy?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "tickets_select".
 */
export interface TicketsSelect<T extends boolean = true> {
  dummy?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "forms_select".
 */
export interface FormsSelect<T extends boolean = true> {
  title?: T;
  fields?:
    | T
    | {
        checkbox?:
          | T
          | {
              name?: T;
              label?: T;
              width?: T;
              required?: T;
              defaultValue?: T;
              id?: T;
              blockName?: T;
            };
        country?:
          | T
          | {
              name?: T;
              label?: T;
              width?: T;
              required?: T;
              id?: T;
              blockName?: T;
            };
        email?:
          | T
          | {
              name?: T;
              label?: T;
              width?: T;
              required?: T;
              id?: T;
              blockName?: T;
            };
        message?:
          | T
          | {
              message?: T;
              id?: T;
              blockName?: T;
            };
        number?:
          | T
          | {
              name?: T;
              label?: T;
              width?: T;
              defaultValue?: T;
              required?: T;
              id?: T;
              blockName?: T;
            };
        select?:
          | T
          | {
              name?: T;
              label?: T;
              width?: T;
              defaultValue?: T;
              options?:
                | T
                | {
                    label?: T;
                    value?: T;
                    id?: T;
                  };
              required?: T;
              id?: T;
              blockName?: T;
            };
        state?:
          | T
          | {
              name?: T;
              label?: T;
              width?: T;
              required?: T;
              id?: T;
              blockName?: T;
            };
        text?:
          | T
          | {
              name?: T;
              label?: T;
              width?: T;
              defaultValue?: T;
              required?: T;
              id?: T;
              blockName?: T;
            };
        textarea?:
          | T
          | {
              name?: T;
              label?: T;
              width?: T;
              defaultValue?: T;
              required?: T;
              id?: T;
              blockName?: T;
            };
      };
  submitButtonLabel?: T;
  confirmationType?: T;
  confirmationMessage?: T;
  redirect?:
    | T
    | {
        url?: T;
      };
  emails?:
    | T
    | {
        emailTo?: T;
        cc?: T;
        bcc?: T;
        replyTo?: T;
        emailFrom?: T;
        subject?: T;
        message?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "form-submissions_select".
 */
export interface FormSubmissionsSelect<T extends boolean = true> {
  form?: T;
  submissionData?:
    | T
    | {
        field?: T;
        value?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "redirects_select".
 */
export interface RedirectsSelect<T extends boolean = true> {
  from?: T;
  to?:
    | T
    | {
        type?: T;
        reference?: T;
        url?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "main-menu".
 */
export interface MainMenu {
  id: number;
  tabs?:
    | {
        label: string;
        enableDirectLink?: boolean | null;
        enableDropdown?: boolean | null;
        link?: {
          type?: ('reference' | 'custom') | null;
          newTab?: boolean | null;
          reference?: {
            relationTo: 'portfolio';
            value: number | Portfolio;
          } | null;
          url?: string | null;
          customId?: string | null;
        };
        description?: string | null;
        descriptionLinks?:
          | {
              link: {
                type?: ('reference' | 'custom') | null;
                newTab?: boolean | null;
                reference?: {
                  relationTo: 'portfolio';
                  value: number | Portfolio;
                } | null;
                url?: string | null;
                label: string;
                customId?: string | null;
              };
              id?: string | null;
            }[]
          | null;
        navItems?:
          | {
              style?: ('default' | 'featured' | 'list') | null;
              defaultLink?: {
                link: {
                  type?: ('reference' | 'custom') | null;
                  newTab?: boolean | null;
                  reference?: {
                    relationTo: 'portfolio';
                    value: number | Portfolio;
                  } | null;
                  url?: string | null;
                  label: string;
                  customId?: string | null;
                };
                description?: string | null;
              };
              featuredLink?: {
                tag?: string | null;
                label?: {
                  root: {
                    type: string;
                    children: {
                      type: string;
                      version: number;
                      [k: string]: unknown;
                    }[];
                    direction: ('ltr' | 'rtl') | null;
                    format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                    indent: number;
                    version: number;
                  };
                  [k: string]: unknown;
                } | null;
                links?:
                  | {
                      link: {
                        type?: ('reference' | 'custom') | null;
                        newTab?: boolean | null;
                        reference?: {
                          relationTo: 'portfolio';
                          value: number | Portfolio;
                        } | null;
                        url?: string | null;
                        label: string;
                        customId?: string | null;
                      };
                      id?: string | null;
                    }[]
                  | null;
              };
              listLinks?: {
                tag?: string | null;
                links?:
                  | {
                      link: {
                        type?: ('reference' | 'custom') | null;
                        newTab?: boolean | null;
                        reference?: {
                          relationTo: 'portfolio';
                          value: number | Portfolio;
                        } | null;
                        url?: string | null;
                        label: string;
                        customId?: string | null;
                      };
                      id?: string | null;
                    }[]
                  | null;
              };
              id?: string | null;
            }[]
          | null;
        id?: string | null;
      }[]
    | null;
  menuCta: {
    type?: ('reference' | 'custom') | null;
    newTab?: boolean | null;
    reference?: {
      relationTo: 'portfolio';
      value: number | Portfolio;
    } | null;
    url?: string | null;
    label: string;
    customId?: string | null;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer".
 */
export interface Footer {
  id: number;
  coloumns?:
    | {
        label: string;
        navItems?:
          | {
              link: {
                type?: ('reference' | 'custom') | null;
                newTab?: boolean | null;
                reference?: {
                  relationTo: 'portfolio';
                  value: number | Portfolio;
                } | null;
                url?: string | null;
                label: string;
                customId?: string | null;
              };
              id?: string | null;
            }[]
          | null;
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "main-menu_select".
 */
export interface MainMenuSelect<T extends boolean = true> {
  tabs?:
    | T
    | {
        label?: T;
        enableDirectLink?: T;
        enableDropdown?: T;
        link?:
          | T
          | {
              type?: T;
              newTab?: T;
              reference?: T;
              url?: T;
              customId?: T;
            };
        description?: T;
        descriptionLinks?:
          | T
          | {
              link?:
                | T
                | {
                    type?: T;
                    newTab?: T;
                    reference?: T;
                    url?: T;
                    label?: T;
                    customId?: T;
                  };
              id?: T;
            };
        navItems?:
          | T
          | {
              style?: T;
              defaultLink?:
                | T
                | {
                    link?:
                      | T
                      | {
                          type?: T;
                          newTab?: T;
                          reference?: T;
                          url?: T;
                          label?: T;
                          customId?: T;
                        };
                    description?: T;
                  };
              featuredLink?:
                | T
                | {
                    tag?: T;
                    label?: T;
                    links?:
                      | T
                      | {
                          link?:
                            | T
                            | {
                                type?: T;
                                newTab?: T;
                                reference?: T;
                                url?: T;
                                label?: T;
                                customId?: T;
                              };
                          id?: T;
                        };
                  };
              listLinks?:
                | T
                | {
                    tag?: T;
                    links?:
                      | T
                      | {
                          link?:
                            | T
                            | {
                                type?: T;
                                newTab?: T;
                                reference?: T;
                                url?: T;
                                label?: T;
                                customId?: T;
                              };
                          id?: T;
                        };
                  };
              id?: T;
            };
        id?: T;
      };
  menuCta?:
    | T
    | {
        type?: T;
        newTab?: T;
        reference?: T;
        url?: T;
        label?: T;
        customId?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer_select".
 */
export interface FooterSelect<T extends boolean = true> {
  coloumns?:
    | T
    | {
        label?: T;
        navItems?:
          | T
          | {
              link?:
                | T
                | {
                    type?: T;
                    newTab?: T;
                    reference?: T;
                    url?: T;
                    label?: T;
                    customId?: T;
                  };
              id?: T;
            };
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}