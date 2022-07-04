import type { ProjectConfigInterface } from '@xrengine/projects/ProjectConfigInterface'

const config: ProjectConfigInterface = {
  // onEvent: ,
  worldInjection: () => import('./injectWidgets'),
  thumbnail: '/static/xrengine_thumbnail.jpg',
  routes: {},
  services: undefined,
  databaseSeed: undefined
}

export default config
