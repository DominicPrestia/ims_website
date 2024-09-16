import PersonnelCard from '../components/PersonnelCard.jsx'
import employee_data from '../data/employeeData.js'

const Personnel = () => {
  return (
    <div className="personnelwrapper">
      <div className='personnelheader'>
        <div style={{fontSize:'20px'}}>We are a distinct group of</div>
        <div>
          <span style={{color:'red', fontSize:'32px'}}>
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