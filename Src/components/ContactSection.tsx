import React, { useState } from 'react';
import { BUSINESS_INFO, SERVICES } from '../data/detailingData';
import { Phone, MessageSquare, Mail, MapPin, Send, CheckCircle2, Clock, Calendar } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicle: '',
    service: 'mobile-detailing',
    postcode: '',
    date: '',
    comments: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Drench Detailing Contact Form Submitted:', formData);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-neutral-900 text-white relative border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-400 font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 inline-block mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            BOOK YOUR DETAIL TODAY
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Ready to give your vehicle the care it deserves? Fill out our quick form or call us directly for immediate booking confirmation.
          </p>
        </div>

        {/* 2-Column Form & Direct Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-6 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-2">Direct Contact Info</h3>
              <p className="text-neutral-400 text-sm">
                We respond quickly to all WhatsApp messages, phone calls, and email inquiries across Cheshire.
              </p>

              {/* Phone / Call */}
              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                className="flex items-center space-x-4 p-4 rounded-xl bg-neutral-900 border border-neutral-800/80 hover:border-blue-500/60 transition-colors group"
              >
                <div className="p-3 rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-900/40">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-neutral-400 block font-semibold uppercase">Call or SMS Us</span>
                  <span className="text-lg font-extrabold text-white group-hover:text-blue-400 transition-colors">
                    {BUSINESS_INFO.phone}
                  </span>
                </div>
              </a>

              {/* WhatsApp Direct */}
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20Drench%20Detailing,%20I'd%20like%20a%20mobile%20detailing%20quote.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-xl bg-neutral-900 border border-neutral-800/80 hover:border-emerald-500/60 transition-colors group"
              >
                <div className="p-3 rounded-xl bg-emerald-600 text-white shadow-lg shadow-emerald-900/40">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-neutral-400 block font-semibold uppercase">Instant WhatsApp Chat</span>
                  <span className="text-lg font-extrabold text-emerald-400">
                    Chat on WhatsApp
                  </span>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center space-x-4 p-4 rounded-xl bg-neutral-900 border border-neutral-800/80 hover:border-blue-500/60 transition-colors group"
              >
                <div className="p-3 rounded-xl bg-blue-950 text-blue-400 border border-blue-800">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-neutral-400 block font-semibold uppercase">Email Us</span>
                  <span className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                    {BUSINESS_INFO.email}
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-neutral-900 border border-neutral-800/80">
                <div className="p-3 rounded-xl bg-blue-950 text-blue-400 border border-blue-800">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-neutral-400 block font-semibold uppercase">Base & Service Radius</span>
                  <span className="text-sm font-bold text-white">
                    Knutsford & Cheshire • Northwest UK
                  </span>
                </div>
              </div>

              {/* Working Hours */}
              <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-800/50 text-xs text-blue-200 flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-400 shrink-0" />
                <div>
                  <span className="font-bold block text-white">Operating Hours:</span>
                  <span>Monday – Saturday: 8:00 AM – 6:00 PM (Sunday by appointment)</span>
                </div>
              </div>
            </div>

          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-neutral-950 border border-neutral-800 shadow-xl relative">
              <h3 className="text-2xl font-bold text-white mb-2">Request Booking / Quote</h3>
              <p className="text-neutral-400 text-sm mb-6">
                Fill in your details below and we will confirm availability and exact pricing for your vehicle.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-blue-950/80 border border-blue-600 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto shadow-xl shadow-blue-900/50">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-black text-white">Thank You, {formData.name}!</h4>
                  <p className="text-neutral-200 text-sm max-w-md mx-auto">
                    Your quote request for <strong className="text-blue-400">{formData.vehicle || 'your vehicle'}</strong> has been received! Our team will contact you shortly on <strong>{formData.phone}</strong>.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-neutral-900 text-neutral-200 text-xs font-semibold hover:bg-neutral-800 border border-neutral-700"
                    >
                      Submit Another Booking
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 07123 456789"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
                        Postcode / Area *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. WA16 6DA / Knutsford"
                        value={formData.postcode}
                        onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
                        Vehicle Make & Model *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Porsche 911 / Range Rover Sport"
                        value={formData.vehicle}
                        onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
                        Service Desired
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-blue-500 text-sm"
                      >
                        {SERVICES.map(s => (
                          <option key={s.id} value={s.id}>
                            {s.title} ({s.startingPrice})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
                      Preferred Date (Optional)
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-blue-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
                      Additional Notes / Paint Condition
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Mention any specific concerns e.g. severe swirl marks, pet hair, ceramic coating interest..."
                      value={formData.comments}
                      onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500 text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-lg shadow-blue-900/40 transition-all flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <Send className="w-5 h-5" />
                    <span>Submit Quote Request</span>
                  </button>

                  <p className="text-[11px] text-neutral-500 text-center mt-2">
                    🔒 We respect your privacy. No spam. You will receive direct confirmation from Drench Detailing.
                  </p>

                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
