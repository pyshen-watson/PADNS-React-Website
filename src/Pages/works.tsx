import './works.scss'
import Website from "@Components/Website"
import WebsiteList from "@Data/WebsiteList"

export default function Works() {
  return (
    <div className="website-grid">
      {
        WebsiteList.map((site) => <Website site={site}/> )
      }
    </div>
  )
}
