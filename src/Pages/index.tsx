import './index.scss'
import photo from '@Assets/photo.png'
import Card from '@Components/Card'
import CardContent from '@Data/CardContent'

export default function Index() {
  return (
    <div className='main'>
      <div className='left'>
        <img src={photo} alt="image.png" />
      </div>
      <div className='right'>
        <h1>My name is Pyshen (Wei-Chen Shen)</h1>
        <h2>I'm a ...</h2>
        <div className='cards'>
          {
            CardContent.map(card => <Card card={card} />)
          }
        </div>
      </div>
    </div>
  )
}
