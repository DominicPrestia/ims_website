import ServiceCard from '../components/ServiceCard'
import services from '../data/servicesData.js'

const Services = () => {
  return (
    <div id='services' className="serviceswrapper">
      <div className='serviceheader'>
        <div className='servicetitle'>
            <span style={{
              fontSize: '32px',
              textShadow: '3px 3px 2px black',
            }}>
              Services
            </span>
        </div>
      </div>
      {services.map((data, index) => {
        return <ServiceCard {...data} />
      })
      }
      <div className='servicesBackground'></div>
    </div>

  )
}

export default Services