import PersonnelCard from '../components/PersonnelCard.jsx'
import employee_data from '../data/employeeData.js'

const Personnel = () => {
  return (
    <div className="personnelwrapper">
        {employee_data.map((data, index) => {
          return <PersonnelCard {...data}/>
        })}
    </div>
  )
}

export default Personnel