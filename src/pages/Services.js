import React from "react";

function Services() {
    
    // const services = [
    //     { id: 1, name: 'Nettoyage dentaire', description: 'Un nettoyage professionnel pour une hygiène optimale.', image:'/img/doctor.png' },
    //     { id: 2, name: 'Orthodontie', description: 'Correction de l\'alignement des dents.', image:'/img/doctor.png' },
    //     { id: 3, name: 'Implants dentaires', description: 'Remplacement durable des dents manquantes.', image:'/img/doctor.png' },
    // ];

    // return (
    //     <section>
    //         <h2>Nos Services</h2>
    //         <ul>
    //             {services.map(service => (
    //                 <li key={service.id}>
    //                     <img src={service.image} alt={service.name}></img>
    //                     <h3>{service.name}</h3>
    //                     <p>{service.description}</p>
    //                 </li>
    //             ))}
    //         </ul>
    //     </section>
    // );

    return (
        <section id="services" className="services">
          <h2>Nos Services</h2>
          <div className="service-grid">
            <div className="service-item">
              <img src="/img/doctor.png" alt="Contrôle dentaire" />
              <h3>Contrôles dentaires</h3>
              <p>Examens réguliers pour maintenir une bonne santé bucco-dentaire</p>
            </div>
            <div className="service-item">
              <img src="/img/doctor.png" alt="Blanchiment dentaire" />
              <h3>Blanchiment dentaire</h3>
              <p>Retrouvez un sourire éclatant grâce à nos traitements de blanchiment</p>
            </div>
            <div className="service-item">
              <img src="/img/doctor.png" alt="Implants dentaires" />
              <h3>Implants dentaires</h3>
              <p>Solutions durables pour remplacer les dents manquantes</p>
            </div>
          </div>
        </section>
      );

}

export default Services;