import { CheckCircle2 } from 'lucide-react';

export function AboutSection() {
  const techStack = {
    frontend: ['{technology}', '{technology}', '{technology}', '{technology}'],
    backend: ['{technology}', '{technology}', '{technology}', '{technology}'],
    tools: ['{technology}', '{technology}', '{technology}', '{technology}'],
  };

  return (
    <section className="py-24 border-t border-cyan-500/20 relative">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image/Visual */}
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-purple-500/30 shadow-2xl shadow-purple-500/20">
                {/* Terminal mockup */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 pb-4 border-b border-gray-700">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-gray-500 ml-4">{`{terminal title}`}</div>
                  </div>
                  
                  <div className="space-y-3 font-mono text-sm">
                    <div className="flex gap-2">
                      <span className="text-cyan-400">$</span>
                      <span className="text-gray-300">{`{command showing developer info}`}</span>
                    </div>
                    <div className="pl-4 text-gray-400">
                      <div>{`{output line 1}`}</div>
                      <div>{`{output line 2}`}</div>
                      <div>{`{output line 3}`}</div>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-cyan-400">$</span>
                      <span className="text-gray-300">{`{another command}`}</span>
                    </div>
                    <div className="pl-4 text-green-400">
                      {`{success message}`}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-gray-900 px-6 py-4 rounded-xl shadow-2xl shadow-purple-500/50">
                <div className="text-2xl">{`{years/stat}`}</div>
                <div className="text-sm">{`{label}`}</div>
              </div>
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-pink-500/10 border border-pink-500/30 rounded-full mb-4 text-pink-400">
              {`{section label}`}
            </div>
            
            <h2 className="text-4xl md:text-5xl">
              {`{headline describing who the developer is}`}
            </h2>
            
            <p className="text-xl text-gray-400 leading-relaxed">
              {`{short biography explaining background and experience}`}
            </p>
            
            <p className="text-gray-400 leading-relaxed">
              {`{note about personal interests}`}
            </p>
            
            {/* Tech Stack */}
            <div className="space-y-4 pt-4">
              <h3 className="text-2xl text-cyan-400">{`{headline: tech stack}`}</h3>
              
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-gray-500 mb-2">{`{category: frontend}`}</div>
                  <div className="flex flex-wrap gap-2">
                    {techStack.frontend.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-400 flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="text-sm text-gray-500 mb-2">{`{category: backend}`}</div>
                  <div className="flex flex-wrap gap-2">
                    {techStack.backend.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-lg text-purple-400 flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="text-sm text-gray-500 mb-2">{`{category: tools & others}`}</div>
                  <div className="flex flex-wrap gap-2">
                    {techStack.tools.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-pink-500/10 border border-pink-500/30 rounded-lg text-pink-400 flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
