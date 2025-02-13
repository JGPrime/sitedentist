import React from "react";
// function About() {
//     return(
//         <section>
//             <h2>À propos de nous</h2>
//             <p>Dentiste Sourire est un cabinet dentaire moderne dédié à votre bien-être bucco-dentaire.</p>
//         </section>
//     );

// }

function About() {
    return (
      <section id="about" className="about">
        <h2>À propos de nous</h2>
        <div className="about-content">
          <img src="/img/doctor.png" alt="Notre équipe" className="team-image" />
          <div className="about-text">
            <p>Notre cabinet dentaire s'engage à fournir des soins de haute qualité dans un environnement confortable et accueillant. Avec notre équipe expérimentée et nos équipements modernes, nous nous efforçons d'offrir à chaque patient une expérience dentaire positive.</p>
          </div>
        </div>
      </section>
    );
  }

export default About;