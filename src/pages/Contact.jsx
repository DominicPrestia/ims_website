import employee_data from '../data/employeeData.js'

const Contact = () => {
  return (
    <div className="contactwrapper">
      <div className='contactcontainer'>
        <div className='contactheader'>
          <h2>Please contact Dr. Edward Garcia for business inquiries:</h2>
        </div>
        <p>Dr. Garcia, MD </p>
        <p>{employee_data[0].title}</p>
        <p>Email: eddiegarcia10@hotmail.com</p>
      </div>
    </div>
  )
}

export default Contact