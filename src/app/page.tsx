import Links from '@/components/links'
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="font-base">
      <h1 className="text-2xl font-heading sm:text-4xl">Rodriguez Adam</h1>
      <p className="mt-2 text-lg sm:text-xl">Dévellopeur débutant</p>
      <div className="mt-8 text-base sm:text-lg">
        <p>Bonjour,</p>

        <br />

        <p>
          Vous retouverez ici mes projets, mes coordonnées et mon cv
        </p>
        <br />
        <Button asChild>
  <a href="mailto:adamrodrigue2094@gmail.com">Contactez-moi !</a>
</Button>

      </div>

      <Links />
    </div>
  )
}
