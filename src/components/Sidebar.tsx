export default function Sidebar() {
    return (
      <div className="flex justify-end">
        <a
          href="/resume-carlos-farias.pdf" 
          download="Carlos-Farias-Curriculo.pdf" 
          className="
            mr-8 mt-2 
            text-white 
            text-xs
            tracking-wide
            uppercase 
            bg-transparent 
            border-b border-[#4A5568]
            hover:border-white 
            pb-1
            transition-colors
            cursor-pointer
            focus:outline-none
          "
        >
          Download CV
        </a>
      </div>
    )
  }