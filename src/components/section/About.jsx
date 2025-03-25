import { REvealOnscroll } from "./RevealOnscroll";

export const About = () =>{
    const frontendSkills=[
        "react",
        "vue",
        "typescript",
        "and many more"
    ];
    const backendSkills=[
        "node.js",
        "springboot",
        ".Net",
        "and many more"
    ];
 return(
  <section id="About"
  className="min-h-screen flex items-center justify-center py-20">
    <REvealOnscroll>
    <div className="max-w-3xl mx-auto px-4 ">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent text-center ">
            Who is markluhcom
        </h2>
        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all hover:border-purple-500">
            <p className="text-gray-300 mb-6">
                passionate web developer in building both the frontend and backend application
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl p-6 hover:-translate-y-1 transition-all">
                        frontend

                    </h3>
                    <div className="flex flex-wrap gap-2">

                            {frontendSkills.map((tech, key)=>(
                                <span 
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition
                                ">
                                    {tech}

                                </span>
                            ))}
                    </div>

                </div>
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl p-6 hover:-translate-y-1 transition-all">
                        backend

                    </h3>
                    <div className="flex flex-wrap gap-2">

                            {backendSkills.map((tech, key)=>(
                                <span 
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition
                                ">
                                    {tech}

                                </span>
                            ))}
                    </div>

                </div>
            </div>
        </div>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="p-6 rounded-xl border-white/10 border hover:border-purple-500">

        <h3 className="text-xl font-bold mb-4">
            est 2025
        </h3>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>
                founded by mark hillary
            </li>
            <li>
                provides web and mobile application development
            </li>
            <li>
                specializes in building high-performance web and mobile applications
            </li>
        </ul>
        </div>
        <div className="p-6 rounded-xl border-white/10 border hover:border-purple-500">

        <h3 className="text-xl font-bold mb-4">
            Experience
        </h3>
        <div className="space-y-4 text-gray-300">
            <div>
                <h4 className="font-semibold">mobile development</h4>
                <p>
                developed cashbank app
                </p>
            </div>
            <div>
                <h4 className="font-semibold">web development</h4>
                <p>
                developed wow-foods
                    
                </p>
            </div>

        </div>
        </div>
        </div> 
    </div>
    </REvealOnscroll>
  </section>
 );

};