export interface IFooterLinkList {
  title: string
  links: IFooterLink[]
}

interface IFooterLink {
  url: string
  content: string
}