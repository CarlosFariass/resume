export default function About({ className = '' }) {
  return (
    <div className={className}>
      <div>
        <div className="flex justify-between border-b border-[#4A5568] pb-2.5 md:ml-6 uppercase">
          <span className="font-bold">Name </span>
          <span>02</span>
        </div>

        <section className="p-6 pb-5 pl-0 md:pl-6">
          <h1 className="text-4xl font-bold text-white">Carlos Henrique de Farias, </h1>
          <p className="text-4xl font-bold">Software Engineer</p>
        </section>
      </div>

      <section className="md:pl-6 pb-6 pt-5 mb-4">
        <div className="flex justify-between border-b border-[#4A5568] pb-2.5 uppercase">
          <span className="font-bold">About myself </span>
          <span>03</span>
        </div>
        <p className="pt-5">
          Brazilian Front-End Developer | React Specialist | UX/UI Enthusiast<br/><br/>
          I specialize in developing scalable, user-friendly applications with React.js, React Native, Next.js, and modern front-end technologies. Experienced in leading multidisciplinary teams, delivering technical solutions, and collaborating with stakeholders to achieve project goals. Passionate about create seamless user experiences.
        </p>
      </section>
    </div>
  );
}
