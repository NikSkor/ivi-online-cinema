export interface IPathListItem {
  pathLink: string
  pathName: string
}

export interface IBreadCrumbs {
  pathList: IPathListItem[]
  slug: string
}