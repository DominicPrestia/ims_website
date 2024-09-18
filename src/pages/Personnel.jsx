import PersonnelCard from '../components/PersonnelCard.jsx'
import employee_data from '../data/employeeData.js'

const Personnel = () => {
  return (
    <div className="personnelwrapper">
      <div className='personnelheader'>
        <div 
        style={{color: '#f8e3e3', 
        fontSize:'26px', 
        fontWeight:'500',
        }}>We are a distinct group of</div>
        <div>
          <span 
          style={{
            color:'#f8e3e3', 
            fontSize:'32px',
            fontWeight:'500',
            textShadow:'3px 3px 2px black',
          }}>
            Occupational Medicine Professionals
          </span>
        </div>
      </div>

      {employee_data.map((data, index) => {
        return <PersonnelCard {...data} />
      })}
    </div>
  )
}

export default Personnel