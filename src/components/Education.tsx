export default function Tools() {
    const tools = [
      'Software Engineer - USP / Esalq - April 2024 - December 2025 - currently',
      'Ignite - Rocketseat – 06/2022 - done',
      'UX / UI - FIAP - done',
      'Marketing Technology - Universidade Nove de Julho - From July 2013 to July 2015'
    ]
    
    return (
      <section className="mb-8">
        <div className="flex justify-between border-b border-[#4A5568] pb-2.5 mb-4 uppercase">
          <span className="font-bold">Education </span>
          <span>05</span>
        </div>
        <ul className="space-y-2">
          {tools.map((tool, index) => (
            <li key={index} className="text-[#E2E8F0]">{tool}</li>
          ))}
        </ul>
      </section>
    )
  }