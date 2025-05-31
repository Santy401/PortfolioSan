//-----//
import './Styles/Description.css'
import { Rocket, Code, RefreshCcw, Users, Users2 } from 'lucide-react';
import FeatureCard from './FeatureCard';
//-----//

const features = [
    {
        Icon: Rocket,
        title: 'Ideation and Prototyping',
        description: 'Desde una simple idea hasta un prototipo funcional, me enfoco en transformar conceptos en experiencias reales.',
    },
    {
        Icon: Code,
        title: 'Headless Web Development',
        description: 'Desarrollo aplicaciones web modernas y desacopladas que aprovechan el poder de, APIs y Next.js o Astro.',
    },
    {
        Icon: RefreshCcw,
        title: 'Redesigning Products',
        description: 'Si ya tenés un producto en marcha, puedo rediseñarlo desde la raíz sin perder lo bueno.',
    },
    {
        Icon: Users,
        title: 'Coach Teams',
        description: 'He trabajado con equipos de desarrollo para mejorar flujos de trabajo, comunicación y toma de decisiones técnicas.',
    },
    {
        Icon: Users2,
        title: 'Team Building',
        description: 'Ayudo a crear equipos sólidos y funcionales desde cero, identificando perfiles, tecnologías necesarias y dinámicas.',
    },
]


export const Description = () => {

    return (
        <section className="content-d">
            <h2>What i can offer Your Organization</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo esse reprehenderit voluptates sint architecto, minima, magni odio repellat doloribus dolorum </p>
            <section className="content-carts">
                {features.map((feature, idx) => (
                    <FeatureCard
                        key={idx}
                        Icon={feature.Icon}
                        title={feature.title}
                        description={feature.description}
                    />
                ))}
            </section>
        </section>
    )
}
