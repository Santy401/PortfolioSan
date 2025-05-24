//-----//
import './Styles/Section.css'
import Dev from '../assets/Dev.png'
//-----//

const Section = () => {
    return (
        <section className="contentSection">
            <img src={Dev} alt="DeveloperIMG" className='developer'/>
            <h1>Hi i'm Santiago, Web Developer And <br /> ARCH Wizard</h1>
            <p className='description'>Soy un desarrollador web autodidacta que se enfoca en crear interfaces limpias, funcionales y bien organizadas, aprendiendo cada dia nuevas cosas y aplicandolas en mi camino hacia un buen desarrollador  . Me gusta construir desde cero, optimizar el rendimiento y mantener un código claro.</p>
            <button className='bt-more'>Get in touch</button>
        </section>
    )
}

export default Section