import { Badge } from './ui/badge';

export default function Skills() {
  return (
    <section
      className="sm:w-[90%] mx-auto h-[calc(100vh-72px)] flex flex-col justify-center gap-14 sm:gap-24"
      id="skills"
    >
      <h2 className="text-3xl font-bold text-center pt-4">{'//Skills'}</h2>

      <div>
        <div className="flex items-center font-medium sm:text-lg justify-center flex-wrap py-10">
          <h5 className="px-1.5 ">Tech Stack</h5>|
          <h5 className="px-1.5">Design</h5>
        </div>

        <article className="flex flex-col gap-5 px-5">
          <div className="flex gap-4 flex-wrap justify-center">
            <Badge variant={'secondary'}>HTML</Badge>
            <Badge variant={'secondary'}>CSS</Badge>
            <Badge variant={'secondary'}>Javascript</Badge>
            <Badge variant={'secondary'}>Tailwind</Badge>
            <Badge variant={'secondary'}>Typescript</Badge>
            <Badge variant={'secondary'}>React</Badge>
            <Badge variant={'secondary'}>Next.js</Badge>
            <Badge variant={'secondary'}>Figma</Badge>
            <Badge variant={'secondary'}>Shadcn UI</Badge>
            <Badge variant={'secondary'}>MUI</Badge>
          </div>
          <hr />
          <div className="flex items-center font-bold sm:text-lg justify-center flex-wrap ">
            <h5 className="px-1.5">Soft Skills</h5>
          </div>
          <div className="flex gap-4 flex-wrap justify-center">
            <Badge variant={'secondary'}>Communication</Badge>
            <Badge variant={'secondary'}>Deep Work</Badge>
            <Badge variant={'secondary'}>Time-management</Badge>
          </div>
        </article>
      </div>
    </section>
  );
}
