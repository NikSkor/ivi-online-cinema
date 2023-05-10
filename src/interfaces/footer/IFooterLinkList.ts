export interface IFooterLinkList {
  title: string
  links: IFooterLink[]
  enTitle: string
}

interface IFooterLink {
  url: string
  content: string
  enContent: string
}