import time from '../assets/time_icon.png'
import hospital from '../assets/hospital_icon.png'
import light from '../assets/lightbulb_icon.png'
import shield from '../assets/healthshield_icon.png'

const services = [
    {
        id: 1,
        type: "On Call",
        desc: "We are on call 24 hours a day 365 days a year for injury evaluation and management",
        icon: time,
    },
    {
        id: 2,
        type: "OSHA Sensitive",
        desc: "We uphold the highest standards of care while respecting your OSHA recordable/lost time sensitivity",
        icon: hospital
    },
    {
        id: 3,
        type: "Development and Support",
        desc: "We assist staff or setup your medical unit, customized to your needs and specifications",
        icon: light
    },
    {
        id: 4,
        type: "ER & Acute Medicine Expertise",
        desc: "We have expert clincical experience in emergency care and acute medicine to provide for your work site",
        icon: shield
    }

];


export default services