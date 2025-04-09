import profilePhoto from '../assets/profile.jpeg'

export default function Header() {
  return (
    <div className="contents items-center p-6 bg-[#1E293B]">
        <div className="flex justify-between border-b border-[#4A5568] pb-2.5 uppercase">
            <span className="font-bold">Photo </span>
            <span>01</span>
        </div>
        <div className="overflow-hidden mt-6 mb-4 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 mx-auto rounded-full">
  <img 
    src={profilePhoto}
    alt="Subarno Paul"
    className="w-full h-full object-cover"
  />
</div>
    </div>
  )
}