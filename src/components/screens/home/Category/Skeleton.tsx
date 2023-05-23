import ContentLoader from "react-content-loader"

const Skeleton = (props: any) => {
  return (
    <ContentLoader 
    viewBox="0 0 190 292" 
    width={162} 
    height={262} 
    speed={2} 
    backgroundColor="#1f1b2e"
    foregroundColor="#2c283b">
    <rect x="30" y="20" rx="0" ry="0" width="162" height="228" />
    <rect x="30" y="260" rx="0" ry="0" width="162" height="10" />
    <rect x="30" y="280" rx="0" ry="0" width="80" height="10" />
  </ContentLoader>
  )
}

export default Skeleton