import { Mail, Calendar, Send } from 'lucide-react';

export function ContactSection() {
  return (
    <section className="py-24 border-t border-cyan-500/20 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-cyan-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-4 text-purple-400">
              {`{section label}`}
            </div>
            <h2 className="text-4xl md:text-5xl mb-4">
              {`{headline encouraging the visitor to get in touch}`}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {`{paragraph explaining availability or response time}`}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    {`{label for name input}`}
                  </label>
                  <input
                    type="text"
                    placeholder="{input for name}"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors duration-300 text-white placeholder-gray-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    {`{label for email input}`}
                  </label>
                  <input
                    type="email"
                    placeholder="{input for email}"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors duration-300 text-white placeholder-gray-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    {`{label for project description}`}
                  </label>
                  <textarea
                    rows={5}
                    placeholder="{textarea for project description}"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors duration-300 text-white placeholder-gray-500 resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/50"
                >
                  {`{submit button}`}
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 hover:border-purple-500/50 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">{`{email label}`}</h3>
                    <p className="text-gray-400 mb-2">{`{email description or preference}`}</p>
                    <a href="mailto:example@email.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      {`{email placeholder}`}
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900/50 backdrop-blur-sm border border-pink-500/30 rounded-2xl p-8 hover:border-pink-500/50 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">{`{calendar scheduling label}`}</h3>
                    <p className="text-gray-400 mb-2">{`{description of scheduling option}`}</p>
                    <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      {`{optional call scheduling link}`}
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-2xl p-8">
                <h3 className="text-xl mb-3">{`{availability headline}`}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {`{paragraph about working hours, timezone, or response time expectations}`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
