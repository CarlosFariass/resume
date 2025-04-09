export default function Skills() {
  const skills = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'JQuery',
    'Laravel',
    'React Native',
    'React.JS',
    'Redux',
    'Bootstrap',
    'Git',
    'Atomic Design',
    'Storybook',
    'Material UI',
    'Lucide',
    'Styled Components',
    'Jest',
    'React Testing Library',
    'GraphQL',
    'Liquid',
    'Figma',
    'Next.JS',
    'Tailwind',
    'MySQL',
    'Python',
    'Datadog',
    'Node',
  ]
  
  return (
    <section className="mb-8 pb-6 pt-5">
      <div className="flex justify-between border-b border-[#4A5568] pb-2.5 mb-4 uppercase">
          <span className="font-bold">Skills </span>
          <span>05</span>
      </div>        
      <ul className="space-y-2 max-h-[150px] overflow-y-auto" 
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#4A5568 #2D3748'
        }}>
        {skills.map((skill, index) => (
          <li key={index} className="text-[#E2E8F0]">{skill}</li>
        ))}
      </ul>
    </section>
  )
}