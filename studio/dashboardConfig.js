export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f9f329ab1c6666230792850',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-c4rd4dnx',
                  apiId: '58e0332c-a989-46a7-a8ea-c9c68c4b9aae'
                },
                {
                  buildHookId: '5f9f329a6a91dba518fa826d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-zqvhbkyr',
                  apiId: 'f36873c3-6641-4e98-8a53-aa8b32a98e9e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cklaymen/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-zqvhbkyr.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
