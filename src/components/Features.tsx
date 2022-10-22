import React from 'react'
import Feature from './Feature'

import truck from "../assets/icons/svg/truck.svg"
import phone from "../assets/icons/svg/phone.svg"
import whatsapp from "../assets/icons/svg/whatsapp.svg"
import checkbadge from "../assets/icons/svg/check-badge.svg"

const features = [
    {
        title: "Secure Shipping",
        desc: "On all orders",
        icon: truck
    },
    {
        title: "Telephone",
        desc: "+1 23 456 7890",
        icon: phone
    },
    {
        title: "Chat WhatsApp",
        desc: "Mon – Fri: 9:00 – 21:00  •  Sat – Sun: 9:00 – 17:00",
        icon: whatsapp
    },
    {
        title: "Quality Guarantee",
        desc: "Verified Purchase Reviews",
        icon: checkbadge
    }
]
const Features = () => {
    return (
        <div className='features'>
            {features.map((item)=>(
                <>
                    <Feature icon={item.icon} title={item.title} desc={item.desc} />
                </>
            ))}
        </div>
    )
}

export default Features