import './cv.scss'
import CVData from '@Data/CVData'
import CvCard from '@Components/CvCard'

export default function CV() {

  const { education, career } = CVData

  return (
    <div className='cv'>
        <h1>Education</h1>
        <div>
          {education.map(edu => <CvCard cv={edu} />)}
        </div>

        <h1>Career</h1>
        <div>
          {career.map(job => <CvCard cv={job} />)}
        </div>
    </div>
  )
}
