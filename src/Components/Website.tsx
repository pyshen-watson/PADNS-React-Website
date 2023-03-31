import './Website.scss'

type site = {
  site_name: string
  site_image: string
  site_url: string
}

type props = {
  site: site
}

export default function Website(props: props) {

  const { site_name, site_image, site_url } = props.site

  return (
    <div className='website'>
      <h2>{site_name}</h2>
      <a href={site_url}>
        <img src={site_image} alt={site_image} />
      </a>
    </div>
  )
}
