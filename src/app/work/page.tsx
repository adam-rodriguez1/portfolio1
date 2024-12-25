import PROJECTS from "@/data/projects";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Work() {
  return (
    <div>
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">Projet</h1>

      <div className="flex flex-col gap-5">
        {PROJECTS.map((project, id) => {
          return (
            <div
              className="relative group border-border dark:border-darkBorder shadow-light dark:shadow-dark rounded-base border-2 bg-main p-4 sm:p-5"
              key={id}
            >
             
              <AspectRatio
                className="border-border dark:border-darkBorder shadow-light dark:shadow-dark rounded-base border-2"
                ratio={16 / 9} 
              >
                <img
                  className="w-full h-full object-cover rounded-base"
                  src={project.previewImage}
                  alt={project.name}
                />
              </AspectRatio>

              
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-white bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-base p-4">
                <h2 className="text-xl font-heading sm:text-2xl">{project.name}</h2>
                <p className="mt-2 text-center">{project.description}</p>
                <div className="mt-8 grid grid-cols-2 gap-5">
                  <a
                    className="rounded-base border-2 border-border bg-white px-4 py-2 text-center text-sm font-medium transition-all hover:translate-x-1 hover:translate-y-1"
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit
                  </a>
                  <a
                    className="rounded-base border-2 border-border bg-white px-4 py-2 text-center text-sm font-medium transition-all hover:translate-x-1 hover:translate-y-1"
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
