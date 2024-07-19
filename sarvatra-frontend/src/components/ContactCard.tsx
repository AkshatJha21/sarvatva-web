import banner from "../assets/contact-banner.png";

const ContactCard = () => {
  return (
    <div className="h-[140vh] md:h-[130vh]">
        <img src={banner} alt="" className="w-full h-[30vh] object-cover" />
        <div className="flex h-[110vh] md:h-[100vh] flex-col justify-center items-center">
            <div className="flex flex-col text-center mb-2">
                <h1 className="font-staatliches tracking-[0.125em] text-[#131313] text-3xl md:text-4xl">Let's Connect</h1>
                <p className="font-avenir font-light text-lg md:text-xl text-[#131313]/50">Over a cup of Tea...</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 my-2 md:my-8 gap-x-4 md:gap-x-24 gap-y-2 md:gap-y-10 w-[90%]">
                <input type="text" placeholder="Company / Name *" className="placeholder:text-[#131313] font-avenir font-light md:text-xl px-4 py-2 border-b border-[#131313]" />
                <input type="text" placeholder="Country *" className="placeholder:text-[#131313] font-avenir font-light md:text-xl px-4 py-2 border-b border-[#131313]" />
                <input type="text" placeholder="First Name *" className="placeholder:text-[#131313] font-avenir font-light md:text-xl px-4 py-2 border-b border-[#131313]" />
                <input type="text" placeholder="Last Name *" className="placeholder:text-[#131313] font-avenir font-light md:text-xl px-4 py-2 border-b border-[#131313]" />
                <input type="text" placeholder="Email *" className="placeholder:text-[#131313] font-avenir font-light md:text-xl px-4 py-2 border-b border-[#131313]" />
                <input type="text" placeholder="Phone No. *" className="placeholder:text-[#131313] font-avenir font-light md:text-xl px-4 py-2 border-b border-[#131313]" />
              </div>
              <div className="flex flex-col my-4 w-[90%]">
                <textarea name="message" id="message" placeholder="Tell us more about your vision? We would love to collaborate with you *" className="border rounded-md text-sm md:text-lg font-avenir placeholder:italic border-[#393939] p-2 resize-none" rows={8}></textarea>
                <div className="flex my-2 font-avenir font-light text-sm md:text-lg">
                  <input type="checkbox" id="notifications" value="true" />
                  <label htmlFor="notifications" className="px-4">I would like to receive the Sarvatva newsletter with updates, inspiration and more</label>
                </div>
                <button className="text-[#131313] tracking-widest font-medium opacity-80 border-[#131313] backdrop-blur-sm w-full md:w-[200px] my-2 transition-all rounded-md border-[0.5px] font-avenir text-[10px] md:text-sm text-center hover:text-[#EDE6D6] hover:bg-[#131313] px-4 py-2 bg-white/10 shadow-lg">SUBMIT</button>
              </div>
        </div>
    </div>
  )
}

export default ContactCard