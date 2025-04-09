export default function Tools() {
    const tools = [
      'Shopify',
      'Figma',
      'Elasticsearch',
      'Datadog'
    ]
    
    return (
      <section className="mb-8">
        <div className="flex justify-between border-b border-[#4A5568] pb-2.5 mb-4 uppercase">
          <span className="font-bold">Tools </span>
          <span>07</span>
        </div>
        <ul className="space-y-2">
          {tools.map((tool, index) => (
            <li key={index} className="text-[#E2E8F0]">{tool}</li>
          ))}
        </ul>
      </section>
    )
  }