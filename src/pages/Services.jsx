import ServiceCard from '../components/ServiceCard'
import services from '../data/servicesData.js'

const Services = () => {
  return (

      <div className="serviceswrapper">
        {services.map((data, index) => {
          return <ServiceCard {...data} />
        })

        }
      </div>
  )
}

export default Services