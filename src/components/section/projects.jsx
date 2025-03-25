import { REvealOnscroll } from "./RevealOnscroll"

export const Projects = ()=>{
  return <section id="Projects" className="min-h-screen flex items-center justify-center py-20">
    <REvealOnscroll>
    <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent text-center ">
        featured projects
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:hover:border-purple-500 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
        <h3 className="text-xl font-bold mb-2">E-commerce</h3>
        <p className="text-gray-400 mb-4">
            developed a fullstack e-commerce website using
        </p>
        
        <div className="flex flex-wrap gap-2 ">
            {["react", "postgres", "stripe", ".Net"].map((tech, key) =>(
                <span 
                key={key}
                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all
                ">
                    {tech}

                </span>
            ))}
        </div>
        <div className="flex justify-between items-center my-4">
            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">view project</a>
        </div>
        </div>
        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
        <h3 className="text-xl font-bold mb-2">cloud platform</h3>
        <p className="text-gray-400 mb-4">
            expertise in web development and fullstack mobile apps development
        </p>
        
        <div className="flex flex-wrap gap-2">
            {["react", "mysql",  "stripe", "node"].map((tech, key) =>(
                <span 
                key={key}
                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all
                ">
                    {tech}

                </span>
            ))}
        </div>
        <div className="flex justify-between items-center my-4">
            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">view project</a>
        </div>
        </div>
        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
        <h3 className="text-xl font-bold mb-2">Web Banking</h3>
        <p className="text-gray-400 mb-4">
            Developed cash bank using
        </p>
        
        <div className="flex flex-wrap gap-2">
            {["react", "mysql", "stripe", "django"].map((tech, key) =>(
                <span 
                key={key}
                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all
                ">
                    {tech}

                </span>
            ))}
        </div>
        <div className="flex justify-between items-center my-4">
            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">view project</a>
        </div>
        </div>
        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
        <h3 className="text-xl font-bold mb-2">Web food odering</h3>
        <p className="text-gray-400 mb-4">
            Developed online food odering website using
        </p>
        
        <div className="flex flex-wrap gap-2">
            {["react", "mongo", "springboot", "stripe"].map((tech, key) =>(
                <span 
                key={key}
                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all
                ">
                    {tech}

                </span>
            ))}
        </div>
        <div className="flex justify-between items-center my-4">
            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">view project</a>
        </div>
        </div>

    </div>
    </div>
    </REvealOnscroll>

  </section>
};