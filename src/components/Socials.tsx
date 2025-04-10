import { Linkedin, Github, Instagram } from 'lucide-react'

export default function Socials() {
  return (
    <section className="mb-8 ml-6 pb-6 pt-5">
      <div className="flex justify-between border-b border-[#4A5568] pb-2.5 mb-4 uppercase">
        <span className="font-bold">Social </span>
        <span>09</span>
      </div>        
      <div className="flex gap-4">
        <a 
          href="https://www.linkedin.com/in/carlos-farias-86b72a121/" 
          target="_blank" 
          className=" border-b border-[#4A5568] hover:border-white pb-2 transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5"/>
        </a>
        <a 
          href="https://github.com/CarlosFariass" 
          target="_blank" 
          className=" border-b border-[#4A5568] hover:border-white pb-2 transition-colors"
          aria-label="GitHub"
        >
          <Github className="w-5 h-5" />
        </a>
        <a 
          href="https://www.instagram.com/carloshf93/" 
          target="_blank" 
          className=" border-b border-[#4A5568] hover:border-white pb-2 transition-colors"
          aria-label="Instagram"
        >
          <Instagram className="w-5 h-5" />
        </a>
      </div>
    </section>
  )
}