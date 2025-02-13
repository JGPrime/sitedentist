import React from "react";

function Services() {
    
    const services = [
        { id: 1, name: 'Nettoyage dentaire', description: 'Un nettoyage professionnel pour une hygiène optimale.', image:'/img/doctor.png' },
        { id: 2, name: 'Orthodontie', description: 'Correction de l\'alignement des dents.', image:'/img/doctor.png' },
        { id: 3, name: 'Implants dentaires', description: 'Remplacement durable des dents manquantes.', image:'/img/doctor.png' },
    ];

    return (
        <section>
            <h2>Nos Services</h2>
            <ul>
                {services.map(service => (
                    <li key={service.id}>
                        <img src={service.image} alt={service.name}></img>
                        <h3>{service.name}</h3>
                        <p>{service.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );

}

export default Services;