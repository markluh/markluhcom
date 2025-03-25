import { REvealOnscroll } from "./RevealOnscroll"


export const Home =()=>{
    return(
     <section id="home" className="min-h-screen flex items-center justify-center relative">
        <REvealOnscroll>
        <div className="text-center z-10 px-4">
            <h1 className="text-3xl md-text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">Hello welcome to markluhcom</h1>
            <p className="text-sky-400 text-lg mb-8 max-w-lg mx-auto">
            Welcome to markluhcom, where we specialize in building modern, scalable, and high-performance web and mobile applications.
             Whether you need a custom website, enterprise software,
              or a full-stack application,you are in the right place we produce efficient,
               and secure solutions tailored to your needs. Let’s bring your ideas to life—explore our services
                or get in touch today!
            </p>
        </div>
       <div className="flex justify-center space-x-4">
        <br></br><a href="#" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] ">view projects</a>
        <a href="#Contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] hover:bg-blue-500/10">Contact us</a>


       </div>
       </REvealOnscroll>

     </section>
    )
}