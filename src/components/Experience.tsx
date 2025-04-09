export default function Experience() {
    const experiences = [
      {
        period: "12/2023 - 10/2024",
        company: "Amaris Consultant",
        position: "Team Leader | Front-End Developer",
        description: "Leadership of a multidisciplinary team, acting as a bridge between technical and commercial teams. Development of technical proposals by analyzing client needs in meetings and briefings. Presentation of proposals to stakeholders, ensuring alignment with project goals."
      },
      {
        period: "03/2023 - 10/2024",
        company: "Amaris Consultant",
        position: "React.JS and React Native Developer",
        description: "Consultant on a specific project, I work as a front-end web and mobile developer. Among various aspects, the project also involves the implementation of the product's first payment method using QRCode. The web product is a platform built with React.Js and Vite.JS, utilizing a custom layout standardization library. The platform's goal is to assist users with sales demonstrations and negotiations. It also alows the generation of a unique QRCode for each merchant, enabling payments through the app."
      },
      {
        period: "08/21 - 12/2022",
        company: "Samurai Experts | Wake",
        position: "Front-End Developer",
        description: "The Shopify platform is used for the development of client applications and e-commerce. I work on projects from their initial implementation as well as on projects already in production. Shopify uses the Liquid programming language, allowing for some script injections in JS."
      },
      {
        period: "03/2021 – 08/2021",
        company: "Infracommerce",
        position: "Front-End Developer | React.JS",
        description: "As a Front-End Developer, I worked in two squads, Chatbot and Monitoring. The technologies used in the internal control applications of both squads included React, with Material UI, Jest, React Testing, Context and Hooks. One of the applications used a REST API, while the other used GraphQL for data querying."
      },
      {
        period: "03/2021 – 08/2021",
        company: "Opah IT",
        position: "React Native Developer",
        description: "Assigned to a client whose core business was a card points exchange service, I worked on new features, improvements, and other tasks. The app was developed using React Native, with Redux for state management, along with Styled Components, Atomic Design, Storybook, and other tools."
      },
      {
        period: "08/2019 – 03/2020",
        company: "Ally:Code",
        position: "Front-End Jr",
        description: "Creation of websites requested on a project basis, most of which had predefined UX. The websites, e-commerce platforms, and projects in general were built using Vue.JS, React.JS, React Native, PHP, and Python. Relational database management was done with MySQL, while non-relational databases were handled using MongoDB."
      }
    ]
    
    return (
      <section className="mb-8 md:ml-6">
        <div className="flex justify-between border-b border-[#4A5568] pb-2.5 mb-4 uppercase">
          <span className="font-bold">Experience </span>
          <span>08</span>
        </div>
        <div   className="space-y-6 overflow-y-auto" 
        style={{ 
          maxHeight: experiences.length > 3 ? '600px' : 'none',
          scrollbarWidth: 'thin',
          scrollbarColor: '#4A5568 #2D3748'
        }}
      >
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-4 border-primary pl-4 pb-4 pt-4">
              <p className="text-semibold">{exp.period}</p>
              <h4 className="text-xl font-semibold">{exp.company} – {exp.position}</h4>
              <p className=" mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }