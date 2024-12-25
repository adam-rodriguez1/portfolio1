import Marquee from '@/components/ui/marquee'

const textItems = ['A venir ', 'A venir', 'A venir', 'A venir', 'A venir', 'A venir'];


export default function Experience() {
  return (
    <div>
      <h2 className="text-2xl font-heading sm:text-4xl">Experience</h2>
      <br />
      <Marquee items={textItems} />
      <br />
     
    </div>
  );
}
