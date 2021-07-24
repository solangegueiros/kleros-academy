import { RouteType } from '@components'
import klerosSidebar from '@configs/kleros-sidebar.json'

export const getRoutes = (slug: string): RouteType[] => {
  const configMap = {
    kleros: klerosSidebar,
  }

  const config = Object.entries(configMap).find(([path]) => slug.startsWith(path))

  const sidebar = config && config[1]

  return sidebar?.routes ?? []
}
