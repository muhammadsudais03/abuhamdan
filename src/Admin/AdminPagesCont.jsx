import { useState } from "react";

const defaultContent = {
  hero: {
    slide1: { title: "Fly With Comfort & Confidence", subtitle: "Book flights, visas, and travel packages with your trusted travel partner.", btn1: "Book Flight", btn2: "Explore Packages" },
    slide2: { title: "Above the Clouds, Beyond Expectations", subtitle: "Enjoy world-class service on every route — from regional hops to long-haul journeys.", btn1: "View Routes", btn2: "Learn More" },
    slide3: { title: "Your Journey Starts Right Here", subtitle: "From visa assistance to full travel packages — we handle every detail so you don't have to.", btn1: "Get Visa Help", btn2: "Browse Packages" },
  },
  about: {
    story: "Abu Hamdan Aviation started in a small office in Islamabad with a big dream — to make travel accessible, affordable, and stress-free for every Pakistani family.",
    mission: "Our mission is to take the stress out of travel planning. Whether you're flying for business, heading on a family holiday, or going for Umrah — we handle every detail so you can focus on the journey, not the paperwork.",
    vision: "We envision a Pakistan where every family can travel the world with confidence and ease. We're building the most reliable, transparent, and customer-first travel agency in the country.",
  },
  contact: {
    phone1: "+92 314 9153292",
    phone2: "+92 51 1234567",
    email1: "info@abuhamdanaviation.com",
    email2: "support@abuhamdanaviation.com",
    address: "Office 12, Blue Area, Islamabad, Pakistan",
    hours: "Mon–Sat: 9AM – 7PM | Sun: 10AM – 4PM",
  },
  navbar: {
    brandName: "ABU HAMDAN",
    tagline: "Aviation",
    bookBtnText: "Book Now",
  },
  footer: {
    description: "Your trusted travel partner for flights, visas, Umrah, Hajj, and holiday packages — making every journey smooth and memorable.",
    copyright: "Abu Hamdan Aviation. All rights reserved.",
  },
};

const sections = ["hero", "about", "contact", "navbar", "footer"];

const sectionIcons = {
  hero:    "🏠",
  about:   "ℹ️",
  contact: "📞",
  navbar:  "🔝",
  footer:  "🔻",
};

export default function AdminPages() {
  const [active, setActive]     = useState("hero");
  const [content, setContent]   = useState(defaultContent);
  const [saved, setSaved]       = useState(false);

  const update = (section, key, value) => {
    setContent(prev => ({
      ...prev,
      [section]: { ...prev[section], [key]: value },
    }));
    setSaved(false);
  };

  const updateNested = (section, parent, key, value) => {
    setContent(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [parent]: { ...prev[section][parent], [key]: value },
      },
    }));
    setSaved(false);
  };

  const handleSave = () => {
    // When backend is ready: send content to API here
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const inputClass = "w-full bg-sky-950/60 border border-cyan-400/20 rounded-lg px-3 py-2.5 text-white text-sm placeholder:text-sky-600 focus:outline-none focus:border-cyan-400 transition";
  const textareaClass = `${inputClass} resize-none`;
  const labelClass = "text-sky-400 text-xs uppercase tracking-widest mb-1 block";

  return (
    <div className="flex flex-col gap-6">

      {/* ── HEADER ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-white font-bold text-2xl">Page Content</h2>
          <p className="text-sky-400 text-sm mt-1">Edit text content across your website pages</p>
        </div>
        <button
          onClick={handleSave}
          className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition w-fit ${
            saved
              ? "bg-green-500 text-white"
              : "bg-cyan-400 text-sky-950 hover:bg-cyan-300"
          }`}
        >
          {saved ? "✓ Saved!" : "Save Changes"}
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-6">

        {/* ── SIDEBAR TABS ── */}
        <div className="md:w-48 flex md:flex-col flex-row gap-2 flex-wrap">
          {sections.map((s) => (
            <button
              key={s}
              onClick={() => setActive(s)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition capitalize text-left
                ${active === s
                  ? "bg-cyan-400/15 text-cyan-400 border border-cyan-400/25"
                  : "text-sky-300 hover:bg-sky-800/40 hover:text-white border border-transparent"
                }`}
            >
              <span>{sectionIcons[s]}</span> {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>

        {/* ── CONTENT PANEL ── */}
        <div className="flex-1 bg-sky-900/40 border border-cyan-400/10 rounded-2xl p-6">

          {/* HERO */}
          {active === "hero" && (
            <div className="flex flex-col gap-6">
              <h3 className="text-white font-semibold text-base">🏠 Hero Slider Content</h3>
              {[1, 2, 3].map((n) => {
                const key = `slide${n}`;
                return (
                  <div key={key} className="bg-sky-950/40 border border-cyan-400/10 rounded-xl p-4 flex flex-col gap-3">
                    <p className="text-cyan-400 text-xs uppercase tracking-widest">Slide {n}</p>
                    <div>
                      <label className={labelClass}>Title</label>
                      <input value={content.hero[key].title} onChange={e => updateNested("hero", key, "title", e.target.value)} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Subtitle</label>
                      <textarea rows={2} value={content.hero[key].subtitle} onChange={e => updateNested("hero", key, "subtitle", e.target.value)} className={textareaClass} />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className={labelClass}>Button 1</label>
                        <input value={content.hero[key].btn1} onChange={e => updateNested("hero", key, "btn1", e.target.value)} className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>Button 2</label>
                        <input value={content.hero[key].btn2} onChange={e => updateNested("hero", key, "btn2", e.target.value)} className={inputClass} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* ABOUT */}
          {active === "about" && (
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-semibold text-base">ℹ️ About Us Content</h3>
              <div>
                <label className={labelClass}>Our Story</label>
                <textarea rows={4} value={content.about.story} onChange={e => update("about", "story", e.target.value)} className={textareaClass} />
              </div>
              <div>
                <label className={labelClass}>Our Mission</label>
                <textarea rows={4} value={content.about.mission} onChange={e => update("about", "mission", e.target.value)} className={textareaClass} />
              </div>
              <div>
                <label className={labelClass}>Our Vision</label>
                <textarea rows={4} value={content.about.vision} onChange={e => update("about", "vision", e.target.value)} className={textareaClass} />
              </div>
            </div>
          )}

          {/* CONTACT */}
          {active === "contact" && (
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-semibold text-base">📞 Contact Info</h3>
              {[
                { label: "Phone 1",  key: "phone1"  },
                { label: "Phone 2",  key: "phone2"  },
                { label: "Email 1",  key: "email1"  },
                { label: "Email 2",  key: "email2"  },
                { label: "Address",  key: "address" },
                { label: "Working Hours", key: "hours" },
              ].map((f) => (
                <div key={f.key}>
                  <label className={labelClass}>{f.label}</label>
                  <input value={content.contact[f.key]} onChange={e => update("contact", f.key, e.target.value)} className={inputClass} />
                </div>
              ))}
            </div>
          )}

          {/* NAVBAR */}
          {active === "navbar" && (
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-semibold text-base">🔝 Navbar Content</h3>
              {[
                { label: "Brand Name",       key: "brandName"    },
                { label: "Tagline",          key: "tagline"      },
                { label: "Book Button Text", key: "bookBtnText"  },
              ].map((f) => (
                <div key={f.key}>
                  <label className={labelClass}>{f.label}</label>
                  <input value={content.navbar[f.key]} onChange={e => update("navbar", f.key, e.target.value)} className={inputClass} />
                </div>
              ))}
              <div className="bg-sky-950/40 border border-cyan-400/10 rounded-xl p-4 mt-2">
                <p className="text-sky-400 text-xs mb-3 uppercase tracking-widest">Preview</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white/10 border border-cyan-400/30 flex items-center justify-center text-xs text-cyan-300">
                    Logo
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{content.navbar.brandName}</p>
                    <p className="text-cyan-300 text-[10px] tracking-widest uppercase">{content.navbar.tagline}</p>
                  </div>
                  <button className="ml-auto bg-yellow-400 text-sky-950 px-3 py-1 rounded-lg text-xs font-semibold">
                    {content.navbar.bookBtnText}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* FOOTER */}
          {active === "footer" && (
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-semibold text-base">🔻 Footer Content</h3>
              <div>
                <label className={labelClass}>Brand Description</label>
                <textarea rows={3} value={content.footer.description} onChange={e => update("footer", "description", e.target.value)} className={textareaClass} />
              </div>
              <div>
                <label className={labelClass}>Copyright Text</label>
                <input value={content.footer.copyright} onChange={e => update("footer", "copyright", e.target.value)} className={inputClass} />
              </div>
              <div className="bg-sky-950/40 border border-cyan-400/10 rounded-xl p-4 mt-2">
                <p className="text-sky-400 text-xs mb-2 uppercase tracking-widest">Preview</p>
                <p className="text-sky-300 text-xs leading-relaxed">{content.footer.description}</p>
                <p className="text-sky-500 text-xs mt-3">© {new Date().getFullYear()} {content.footer.copyright}</p>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}