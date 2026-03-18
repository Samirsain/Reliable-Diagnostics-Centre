"use client"

export default function Footer() {
  const navLinks = ["Services","About Us","Health Packages","Gallery","Patient Reviews","Book a Test","Contact"];
  const tests = ["Complete Blood Count (CBC)","Liver Function Test (LFT)","Kidney Function Test (KFT)","Thyroid Profile","Lipid Profile"];

  const TestIcon = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0a74d4" strokeWidth="2">
      <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>
    </svg>
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
        .f-wrap{background:#f0f6ff;font-family:'Plus Jakarta Sans',sans-serif}
        .f-upper{background:#fff;border-top:1px solid #e4edf8;padding:56px 48px 48px}
        .f-grid{max-width:1160px;margin:0 auto;display:grid;grid-template-columns:1.6fr 1fr 1fr 1fr;gap:48px}
        @media(max-width:960px){.f-grid{grid-template-columns:1fr 1fr}.f-upper{padding:40px 24px}.f-lower{padding:16px 24px !important}}
        @media(max-width:560px){.f-grid{grid-template-columns:1fr}}
        .f-logo-wrap{display:flex;align-items:center;gap:10px;margin-bottom:14px}
        .f-logo-icon{width:38px;height:38px;background:linear-gradient(135deg,#0a74d4,#38b6ff);border-radius:8px;display:flex;align-items:center;justify-content:center}
        .f-logo-text{font-size:.95rem;font-weight:700;color:#0a2540;line-height:1.25}
        .f-logo-text span{display:block;font-size:.65rem;font-weight:500;color:#0a74d4;letter-spacing:.12em;text-transform:uppercase}
        .f-tagline{font-size:.82rem;color:#6b7d99;line-height:1.8;margin-bottom:20px;max-width:230px}
        .f-cta{display:inline-flex;align-items:center;gap:7px;background:#0a74d4;color:#fff;font-size:.78rem;font-weight:600;padding:10px 20px;border-radius:8px;text-decoration:none;transition:background .2s}
        .f-cta:hover{background:#085fae}
        .f-wa{display:inline-flex;align-items:center;gap:7px;background:#25d366;color:#fff;font-size:.72rem;font-weight:600;padding:9px 16px;border-radius:24px;text-decoration:none;margin-top:12px;transition:background .2s}
        .f-wa:hover{background:#1ebe5d}
        .f-badges{display:flex;gap:10px;flex-wrap:wrap;margin-top:18px}
        .f-badge{display:flex;align-items:center;gap:6px;background:#eef5ff;border:1px solid #d0e5f8;border-radius:20px;padding:5px 12px;font-size:.7rem;font-weight:600;color:#0a5fae}
        .f-socials{display:flex;gap:8px;margin-top:16px}
        .f-soc{width:32px;height:32px;border-radius:6px;border:1px solid #d8e6f5;display:flex;align-items:center;justify-content:center;color:#0a74d4;text-decoration:none;transition:all .2s}
        .f-soc:hover{background:#0a74d4;color:#fff;border-color:#0a74d4}
        .f-col-title{font-size:.65rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:#0a74d4;margin-bottom:18px;padding-bottom:10px;border-bottom:2px solid #e4edf8}
        .f-info-block{margin-bottom:18px}
        .f-info-lbl{font-size:.63rem;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#b0c0d8;margin-bottom:4px}
        .f-info-val{font-size:.87rem;color:#1a2e4a;font-weight:500}
        .f-info-sub{font-size:.8rem;color:#4a5e7a;line-height:1.75}
        .f-nav-link{display:flex;align-items:center;gap:7px;font-size:.83rem;color:#4a5e7a;text-decoration:none;padding:5px 0;transition:color .2s}
        .f-nav-link::before{content:'';width:4px;height:4px;border-radius:50%;background:#d8e6f5;flex-shrink:0;transition:background .2s}
        .f-nav-link:hover{color:#0a74d4}
        .f-nav-link:hover::before{background:#0a74d4}
        .f-test-item{display:flex;align-items:center;gap:9px;padding:7px 0;border-bottom:1px solid #eef3fb;text-decoration:none;cursor:pointer}
        .f-test-item:last-child{border-bottom:none}
        .f-test-icon{width:28px;height:28px;background:#eef5ff;border-radius:6px;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background .2s}
        .f-test-item:hover .f-test-icon{background:#dbeeff}
        .f-test-label{font-size:.8rem;color:#4a5e7a;transition:color .2s}
        .f-test-item:hover .f-test-label{color:#0a74d4}
        .f-lower{background:#0a74d4;padding:18px 48px}
        .f-lower-inner{max-width:1160px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px}
        .f-copy{font-size:.75rem;color:rgba(255,255,255,.6)}
        .f-bot-links{display:flex;gap:20px}
        .f-bot-a{font-size:.75rem;color:rgba(255,255,255,.6);text-decoration:none;transition:color .2s}
        .f-bot-a:hover{color:#fff}
      `}</style>

      <footer className="f-wrap">
        <div className="f-upper">
          <div className="f-grid">

            <div>
              <div className="f-logo-wrap">
                <div className="w-10 h-10 shrink-0">
                  <img src="/logo.svg" alt="Reliable Diagnostics Logo" className="w-full h-full" />
                </div>
                <div className="f-logo-text">RELIABLE DIAGNOSTICS<span>Centre · Hanumangarh</span></div>
              </div>
              <p className="f-tagline">Hanumangarh's most trusted diagnostic lab — accurate results with advanced laboratory services.</p>
              <a className="f-cta" href="#">
                Book a Test
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <br/>
              <a className="f-wa" href="https://wa.me/917737774617" target="_blank" rel="noreferrer">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
              <div className="f-badges">
                <div className="f-badge">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  NABL Certified
                </div>
                <div className="f-badge">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  ISO Certified
                </div>
              </div>
              <div className="f-socials">
                <a className="f-soc" href="#"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg></a>
                <a className="f-soc" href="#"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>
                <a className="f-soc" href="#"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg></a>
              </div>
            </div>

            <div>
              <div className="f-col-title">Contact Us</div>
              <div className="f-info-block"><div className="f-info-lbl">Phone</div><div className="f-info-val">077377 74617</div></div>
              <div className="f-info-block"><div className="f-info-lbl">Address</div><div className="f-info-sub">Bharat Mata Chowk, Puran Nagar<br/>Hanumangarh, Rajasthan 335513</div></div>
              <div className="f-info-block"><div className="f-info-lbl">Working Hours</div><div className="f-info-sub">Mon – Sat: 7:00 AM – 8:00 PM<br/>Sunday: 8:00 AM – 2:00 PM</div></div>
              <div className="f-info-block"><div className="f-info-lbl">Email</div><div className="f-info-val" style={{color:"#0a74d4",fontSize:".82rem"}}>info@reliablediag.in</div></div>
            </div>

            <div>
              <div className="f-col-title">Quick Links</div>
              {navLinks.map(link => <a key={link} className="f-nav-link" href="#">{link}</a>)}
            </div>

            <div>
              <div className="f-col-title">Popular Tests</div>
              {tests.map(test => (
                <a key={test} className="f-test-item" href="#">
                  <div className="f-test-icon"><TestIcon/></div>
                  <span className="f-test-label">{test}</span>
                </a>
              ))}
            </div>

          </div>
        </div>

        <div className="f-lower">
          <div className="f-lower-inner">
            <span className="f-copy">© 2026 Reliable Diagnostics Centre. All rights reserved.</span>
            <div className="f-bot-links">
              <a className="f-bot-a" href="#">Privacy Policy</a>
              <a className="f-bot-a" href="#">Terms of Use</a>
              <a className="f-bot-a" href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
