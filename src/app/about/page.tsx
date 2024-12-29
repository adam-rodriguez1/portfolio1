import Experience from '@/components/sections/experience'
import Skills from '@/components/sections/skills'

export default function About() {
  return (
    <div className="font-base">
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">Compétences et expérience</h1>

      <div className="mb-10 text-base sm:text-lg"></div>

      <Skills />
      <h2 className="text-2xl font-heading sm:text-4xl">Expérience</h2>
      <br />
      <p>
        J’ai eu la chance d’explorer différents horizons professionnels, ce qui m’a permis de développer une
        adaptabilité et une curiosité qui me servent aujourd’hui dans mon parcours. Après avoir suivi la formation
        Développeur Full-Stack chez OpenClassrooms, je mets désormais mes compétences au service de projets numériques.
      </p>
      <br />
      <p>Pour le reste, c’est à 👇</p>
      <br />
      <Experience />
    </div>
  )
}
