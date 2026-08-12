import React from 'react';

export default function ContactUs() {
  return (
    <section className="w-full bg-zinc-950 py-24 relative overflow-hidden border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl text-white font-bold tracking-wider uppercase drop-shadow-md" style={{ fontFamily: "var(--font-milker)" }}>
            Contact Us
          </h2>
          <p className="mt-4 text-zinc-400 text-lg max-w-2xl mx-auto">
            Have a question? Want to join the club? Reach out to us using the form below or via our direct contact details.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left Column - Contact Form */}
          <div className="flex-1 bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl backdrop-blur-sm shadow-xl">
            <h3 className="text-2xl text-white font-bold mb-8 uppercase tracking-wide" style={{ fontFamily: "var(--font-milker)" }}>
              Send us a message
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-zinc-400 text-sm font-medium uppercase tracking-wider">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-zinc-400 text-sm font-medium uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-zinc-400 text-sm font-medium uppercase tracking-wider">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="How can we help?"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-zinc-400 text-sm font-medium uppercase tracking-wider">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest text-lg rounded-xl hover:scale-[1.02] transition-transform shadow-lg shadow-white/10 mt-4" 
                style={{ fontFamily: "var(--font-milker)" }}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Column - Contact Details */}
          <div className="flex-1 space-y-10">
            
            {/* Contact Information Section */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/10">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <h3 className="text-2xl text-white font-bold uppercase tracking-wide" style={{ fontFamily: "var(--font-milker)" }}>Get In Touch</h3>
              </div>
              
              <div className="space-y-4 pl-16">
                <div>
                  <h4 className="text-zinc-400 text-sm font-bold uppercase tracking-wide">Email</h4>
                  <a href="mailto:management@uaefalconsfc.com" className="text-white text-lg hover:text-zinc-300 transition-colors">management@uaefalconsfc.com</a>
                </div>
                <div>
                  <h4 className="text-zinc-400 text-sm font-bold uppercase tracking-wide">Phone / WhatsApp</h4>
                  <a href="tel:+971551231160" className="text-white text-lg hover:text-zinc-300 transition-colors">+971 55 123 1160</a>
                </div>
                <div>
                  <h4 className="text-zinc-400 text-sm font-bold uppercase tracking-wide">Instagram</h4>
                  <a href="https://instagram.com/uaefalconsac" target="_blank" rel="noopener noreferrer" className="text-white text-lg hover:text-zinc-300 transition-colors">@uaefalconsac</a>
                </div>
              </div>
            </div>

            <hr className="border-white/10" />

            {/* Hours Section */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/10">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h3 className="text-2xl text-white font-bold uppercase tracking-wide" style={{ fontFamily: "var(--font-milker)" }}>Hours of Operation</h3>
              </div>
              
              <div className="space-y-3 pl-16 text-lg">
                <div className="flex justify-between max-w-xs">
                  <span className="text-zinc-400">Monday - Friday</span>
                  <span className="text-white font-medium">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between max-w-xs">
                  <span className="text-zinc-400">Saturday</span>
                  <span className="text-white font-medium">10:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between max-w-xs">
                  <span className="text-zinc-400">Sunday</span>
                  <span className="text-red-400 font-medium">Closed</span>
                </div>
              </div>
            </div>

            <hr className="border-white/10" />

            {/* Location Section */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/10">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <h3 className="text-2xl text-white font-bold uppercase tracking-wide" style={{ fontFamily: "var(--font-milker)" }}>Location</h3>
              </div>
              
              <div className="pl-16">
                <p className="text-white text-xl">Damac hills 2</p>
                <p className="text-zinc-400 text-lg">Dubai, United Arab Emirates</p>
                <a href="https://maps.google.com/?q=Damac+hills+2,+Dubai,+United+Arab+Emirates" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-zinc-400 hover:text-white transition-colors underline underline-offset-4 decoration-white/30">
                  Get Directions
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
