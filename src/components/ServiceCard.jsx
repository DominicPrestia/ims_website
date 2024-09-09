

const ServiceCard = ({ id, type, desc, icon }) => {
    return (
        <div className="serviceCardWrapper">
            <h2>{type}</h2>
            <img src={icon} alt="profile pic" />
            <p>{desc}</p>
            
        </div>
    )
}

export default ServiceCard



