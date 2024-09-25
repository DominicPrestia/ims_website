import employee_data from '../data/employeeData.js'

const Contact = () => {
  return (
    <div id='contact' className="contactwrapper">
      <div className='contactcontainer'>
        <div className='contactheader'>
          <h2>For business inquiries:</h2>
        </div>
        <p>Ed Garcia, MD </p>
        <p>{employee_data[0].title}</p>
        <p>Email: eddiegarcia10@hotmail.com</p>
      </div>
    </div>
  )
}

export default Contact