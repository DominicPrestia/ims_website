import time from '../assets/time_icon.png'
import hospital from '../assets/hospital_icon.png'
import light from '../assets/lightbulb_icon.png'
import shield from '../assets/healthshield_icon.png'

const services = [
    {
        id: 1,
        type: "On Call",
        desc: "On call 24h/365 days a year for injury evaluation and management",
        icon: time,
    },
    {
        id: 2,
        type: "OSHA Certified",
        desc: "Practice solid medicine while respecting your OSHA recordable/lost time sensitivity",
        icon: hospital
    },
    {
        id: 3,
        type: "Development and Support",
        desc: "Assist staff or setup your medical unit, customized to your needs and specifications",
        icon: light
    },
    {
        id: 4,
        type: "ER and Acute Medicine",
        desc: "Expert clincical experience in ER and acute medicine for your work site",
        icon: shield
    }

];


export default services