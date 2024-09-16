import ServiceCard from '../components/ServiceCard'
import services from '../data/servicesData.js'

const Services = () => {
  return (

    <div className="serviceswrapper">
      <div className='personnelheader'>
        <div>
          <span style={{ color: 'white', fontSize: '32px' }}>
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