

const ServiceCard = ({ id, type, desc, icon }) => {
    return (
        <div className="serviceCardWrapper">
            
            <img src={icon} alt="profile pic" />
            <h2>{type}</h2>
            <p>{desc}</p>
            
        </div>
    )
}

export default ServiceCard



