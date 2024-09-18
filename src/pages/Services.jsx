import ServiceCard from '../components/ServiceCard'
import services from '../data/servicesData.js'

const Services = () => {
  return (

    <div className="serviceswrapper">
      <div className='personnelheader'>
        <div>
          <span style={{ 
            fontSize: '32px', 
            textShadow:'3px 3px 2px black', 
            }}>
            Services
          </span>
        </div>
      </div>
      {services.map((data, index) => {
        return <ServiceCard {...data} />
      })

      }
    </div>
  )
}

export default Services