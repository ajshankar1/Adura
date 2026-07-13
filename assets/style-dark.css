/* ===========================================================
   Adura Paint Emporium — Dark Theme (replica direction)
   Adura brand colors on a dark canvas:
   blue #3A82C4 · orange #F0834C · gold #F4B93E · green #5FA83C
=========================================================== */

:root{
  --bg:#0F151C;
  --bg-panel:#161E28;
  --bg-panel2:#1B2530;
  --text:#EEF1F4;
  --text-soft:rgba(238,241,244,0.68);
  --text-faint:rgba(238,241,244,0.45);
  --blue:#3E8AD1;
  --blue-deep:#2A5F92;
  --orange:#F0834C;
  --gold:#F4B93E;
  --green:#5FA83C;
  --line:rgba(255,255,255,0.09);
  --shadow: 0 24px 60px -24px rgba(0,0,0,0.6);
  --serif: 'Fraunces', Georgia, serif;
  --sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --mono: 'IBM Plex Mono', monospace;
}

*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
html,body{overflow-x:hidden; max-width:100%;}
@media (prefers-reduced-motion: reduce){
  html{scroll-behavior:auto;}
  *{animation-duration:0.001ms !important; transition-duration:0.001ms !important;}
}

body{
  margin:0; background:var(--bg); color:var(--text);
  font-family:var(--sans); font-size:16px; line-height:1.6;
  -webkit-font-smoothing:antialiased;
}

.wrap{max-width:1200px; margin:0 auto; padding:0 28px;}
a{color:inherit; text-decoration:none;}
:focus-visible{outline:2px solid var(--orange); outline-offset:3px;}
img{max-width:100%; display:block;}
h1,h2,h3{font-family:var(--serif); font-weight:600; margin:0; letter-spacing:-0.01em; color:var(--text);}

.eyebrow{font-family:var(--mono); font-size:12.5px; text-transform:uppercase; letter-spacing:0.16em; color:var(--orange); margin:0 0 14px; display:flex; align-items:center; gap:10px;}
.eyebrow::before{content:""; width:22px; height:1px; background:var(--orange);}
.eyebrow.center{justify-content:center;}
.center{text-align:center;}

/* decorative dotted grid, used as background texture */
.dots{position:absolute; inset:0; background-image:radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px); background-size:14px 14px; opacity:0.5; pointer-events:none;}
.glow{position:absolute; border-radius:50%; filter:blur(70px); opacity:0.35; pointer-events:none;}

/* ---------- TOP BAR ---------- */
.topbar{background:var(--bg-panel); border-bottom:1px solid var(--line); font-size:12.5px; padding:9px 0;}
.topbar .wrap{display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;}
.topbar-items{display:flex; gap:24px; flex-wrap:wrap; color:var(--text-faint); font-family:var(--mono);}
.topbar-items a{color:var(--text-soft);}
.topbar-items a:hover{color:var(--orange);}
.topbar-socials{display:flex; gap:12px;}
.topbar-socials a{width:26px; height:26px; border:1px solid var(--line); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:10px; color:var(--text-soft);}
.topbar-socials a:hover{background:var(--orange); border-color:var(--orange); color:#0F151C;}

/* ---------- NAV ---------- */
.nav{position:sticky; top:0; z-index:50; background:rgba(15,21,28,0.85); backdrop-filter:blur(10px); border-bottom:1px solid var(--line);}
.nav-inner{display:flex; align-items:center; justify-content:space-between; height:78px;}
.brand{display:flex; align-items:center; gap:10px;}
.brand-mark{display:grid; grid-template-columns:1fr 1fr; gap:3px; width:26px; height:26px;}
.brand-mark span{border-radius:3px;}
.brand-mark .d1{background:var(--green);} .brand-mark .d2{background:var(--orange);}
.brand-mark .d3{background:var(--gold);} .brand-mark .d4{background:var(--blue);}
.brand-text{font-family:var(--serif); font-size:19px; font-weight:600; color:var(--text);}
.brand-text em{font-style:italic; font-weight:500; color:var(--orange);}

.nav-links{display:flex; align-items:center; gap:28px; z-index:5;}
.nav-links a{font-size:14.5px; font-weight:500; color:var(--text-soft);}
.nav-links a:hover, .nav-links a.active{color:var(--orange);}
.nav-cta{background:var(--orange); color:#0F151C !important; padding:11px 22px; border-radius:999px; font-weight:700 !important;}
.nav-cta:hover{background:var(--gold);}
.nav-toggle{display:none; flex-direction:column; gap:5px; background:none; border:0; cursor:pointer; padding:8px;}
.nav-toggle span{width:22px; height:2px; background:var(--text);}

/* ---------- BUTTONS ---------- */
.btn{display:inline-flex; align-items:center; justify-content:center; gap:8px; padding:15px 28px; border-radius:999px; font-weight:700; font-size:14.5px; border:1px solid transparent; cursor:pointer; transition:transform .15s ease, background .2s ease;}
.btn-primary{background:var(--orange); color:#0F151C;}
.btn-primary:hover{background:var(--gold); transform:translateY(-2px);}
.btn-ghost{border-color:rgba(255,255,255,0.3); color:var(--text);}
.btn-ghost:hover{background:var(--text); color:var(--bg);}
.btn.full{width:100%;}

/* ---------- HERO ---------- */
.hero{position:relative; padding:110px 0 100px; overflow:hidden; text-align:center;}
.hero .glow.g1{width:420px; height:420px; background:var(--blue); top:-160px; left:-100px;}
.hero .glow.g2{width:360px; height:360px; background:var(--orange); bottom:-160px; right:-80px; opacity:0.22;}
.hero-inner{position:relative; z-index:2; max-width:760px; margin:0 auto;}
.hero h1{font-size:clamp(38px,6vw,68px); line-height:1.08; margin:18px 0 26px;}
.hero h1 em{font-style:italic; color:var(--orange);}
.hero p{color:var(--text-soft); font-size:17px; max-width:520px; margin:0 auto 34px;}
.hero-actions{display:flex; gap:16px; justify-content:center; flex-wrap:wrap;}

/* ---------- SECTION ---------- */
.section{padding:100px 0; position:relative;}
.section.panel{background:var(--bg-panel);}
.section h2{font-size:clamp(28px,3.6vw,42px);}

/* ---------- ABOUT ---------- */
.about-grid{display:grid; grid-template-columns:0.9fr 1.1fr; gap:60px; align-items:center;}
.about-media{position:relative;}
.about-media .glow{width:300px; height:300px; background:var(--blue); top:20px; left:-40px; opacity:0.25;}
.about-photo{position:relative; z-index:1; aspect-ratio:4/5; border-radius:10px; background:linear-gradient(150deg, var(--bg-panel2), var(--bg-panel)); border:1px solid var(--line); overflow:hidden;}
.about-badge{position:absolute; z-index:2; right:-20px; bottom:-20px; background:var(--orange); color:#0F151C; border-radius:10px; padding:22px 26px; box-shadow:var(--shadow); text-align:center;}
.about-badge strong{display:block; font-family:var(--serif); font-size:36px; line-height:1;}
.about-badge span{font-size:11px; font-family:var(--mono); text-transform:uppercase; letter-spacing:0.06em;}
.about-copy p{color:var(--text-soft); font-size:16px; margin:0 0 18px;}
.about-points{list-style:none; margin:22px 0; padding:0; display:grid; gap:12px;}
.about-points li{padding-left:26px; position:relative; font-size:15px; color:var(--text-soft);}
.about-points li::before{content:"✓"; position:absolute; left:0; color:var(--orange); font-weight:700;}
.about-foot{display:flex; align-items:center; gap:40px; margin-top:32px; flex-wrap:wrap;}
.about-call{display:flex; align-items:center; gap:14px;}
.about-call .ic{width:46px; height:46px; border-radius:50%; background:var(--bg-panel2); border:1px solid var(--line); display:flex; align-items:center; justify-content:center; color:var(--orange); font-size:18px;}
.about-call span{display:block; font-size:12px; color:var(--text-faint); font-family:var(--mono); text-transform:uppercase;}
.about-call strong{font-family:var(--serif); font-size:18px;}

/* ---------- FEATURE ICON ROW ---------- */
.feature-row{display:grid; grid-template-columns:repeat(4,1fr); gap:1px; background:var(--line); border:1px solid var(--line); margin-top:20px;}
.feature-card{background:var(--bg); padding:36px 26px; transition:background .2s ease;}
.feature-card:hover{background:var(--bg-panel);}
.feature-ic{width:52px; height:52px; border-radius:12px; display:flex; align-items:center; justify-content:center; font-family:var(--serif); font-size:20px; margin-bottom:20px; color:#0F151C;}
.feature-card h3{font-size:18px; margin-bottom:8px;}
.feature-card p{font-size:13.5px; color:var(--text-soft); margin:0;}

/* ---------- SERVICES ---------- */
.service-row{display:grid; grid-template-columns:repeat(3,1fr); gap:24px; margin-top:48px;}
.service-tile{position:relative; border-radius:12px; overflow:hidden; aspect-ratio:4/5; border:1px solid var(--line);}
.service-tile-bg{position:absolute; inset:0; transition:transform .5s ease;}
.service-tile:hover .service-tile-bg{transform:scale(1.08);}
.service-tile-overlay{position:absolute; inset:0; background:linear-gradient(0deg, rgba(15,21,28,0.92) 10%, rgba(15,21,28,0.15) 60%);}
.service-tile-content{position:absolute; left:0; right:0; bottom:0; padding:26px; z-index:2;}
.service-tile-content h3{font-size:20px; margin-bottom:8px;}
.service-tile-content p{font-size:13.5px; color:var(--text-soft); margin:0 0 12px;}
.service-tile-content a{font-size:12.5px; font-family:var(--mono); text-transform:uppercase; letter-spacing:0.06em; color:var(--orange); font-weight:600;}

/* ---------- SKILLS / QUALITY SECTION ---------- */
.quality-grid{display:grid; grid-template-columns:1fr 1fr; gap:60px; align-items:center;}
.quality-media{position:relative; aspect-ratio:1; border-radius:16px; overflow:hidden; border:1px solid var(--line);}
.quality-media .glow{width:280px; height:280px; background:var(--green); top:10%; left:10%;}
.play-btn{position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:74px; height:74px; border-radius:50%; background:var(--orange); display:flex; align-items:center; justify-content:center; z-index:3; box-shadow:0 0 0 14px rgba(240,131,76,0.15);}
.skill-row{margin-top:14px;}
.skill{margin-bottom:26px;}
.skill-label{display:flex; justify-content:space-between; font-size:14px; margin-bottom:10px; font-weight:600;}
.skill-label span.pct{color:var(--orange); font-family:var(--mono);}
.skill-bar{height:8px; border-radius:99px; background:var(--bg-panel2); overflow:hidden;}
.skill-fill{height:100%; border-radius:99px; width:0%; transition:width 1.4s cubic-bezier(.2,.8,.2,1);}
.skill-fill.blue{background:linear-gradient(90deg, var(--blue), var(--blue-deep));}
.skill-fill.orange{background:linear-gradient(90deg, var(--gold), var(--orange));}

/* ---------- PROJECTS ---------- */
.project-grid{display:grid; grid-template-columns:repeat(2,1fr); gap:24px; margin-top:48px;}
.project-card{position:relative; border-radius:12px; overflow:hidden; aspect-ratio:16/11; border:1px solid var(--line);}
.project-bg{position:absolute; inset:0; transition:transform .5s ease;}
.project-card:hover .project-bg{transform:scale(1.06);}
.project-overlay{position:absolute; inset:0; background:linear-gradient(0deg, rgba(15,21,28,0.9), rgba(15,21,28,0.05) 55%);}
.project-content{position:absolute; left:0; right:0; bottom:0; padding:28px; z-index:2;}
.project-tag{font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:0.08em; color:var(--gold); margin-bottom:6px; display:block;}
.project-content h3{font-size:22px;}

/* ---------- TEAM ---------- */
.team-row{display:grid; grid-template-columns:repeat(4,1fr); gap:24px; margin-top:48px;}
.team-card{text-align:center;}
.team-photo{position:relative; aspect-ratio:1; border-radius:12px; margin-bottom:16px; background:linear-gradient(160deg, var(--bg-panel2), var(--bg-panel)); border:1px solid var(--line); display:flex; align-items:center; justify-content:center; font-family:var(--serif); font-size:32px; color:var(--orange); overflow:hidden;}
.team-social{position:absolute; bottom:12px; left:0; right:0; display:flex; justify-content:center; gap:8px; opacity:0; transform:translateY(8px); transition:all .25s ease;}
.team-photo:hover .team-social{opacity:1; transform:translateY(0);}
.team-social a{width:30px; height:30px; border-radius:50%; background:var(--orange); color:#0F151C; display:flex; align-items:center; justify-content:center; font-size:11px;}
.team-card span{font-size:12px; color:var(--orange); font-family:var(--mono); text-transform:uppercase; letter-spacing:0.06em;}
.team-card h3{font-size:17px; margin-top:4px;}

/* ---------- TESTIMONIALS ---------- */
.testi-row{display:grid; grid-template-columns:repeat(3,1fr); gap:24px; margin-top:48px;}
.testi-card{background:var(--bg-panel); border:1px solid var(--line); border-radius:12px; padding:30px;}
.testi-card p{font-family:var(--serif); font-style:italic; font-size:15px; line-height:1.6; color:var(--text); margin:0 0 20px;}
.testi-who{display:flex; align-items:center; gap:12px;}
.testi-avatar{width:42px; height:42px; border-radius:50%; background:linear-gradient(150deg,var(--blue),var(--green)); flex:none;}
.testi-who strong{display:block; font-size:14px;}
.testi-who span{font-size:12px; color:var(--text-faint); font-family:var(--mono);}

/* ---------- BRAND STRIP ---------- */
.brand-strip{padding:50px 0; border-top:1px solid var(--line); border-bottom:1px solid var(--line);}
.brand-strip-inner{display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:24px;}
.brand-chip{font-family:var(--mono); font-size:13px; color:var(--text-faint); letter-spacing:0.06em; text-transform:uppercase; border:1px solid var(--line); padding:10px 18px; border-radius:999px;}

/* ---------- BLOG ---------- */
.blog-row{display:grid; grid-template-columns:repeat(3,1fr); gap:24px; margin-top:48px;}
.blog-card{background:var(--bg-panel); border:1px solid var(--line); border-radius:12px; overflow:hidden;}
.blog-media{aspect-ratio:16/10; background:linear-gradient(150deg, var(--bg-panel2), var(--bg));}
.blog-body{padding:24px;}
.blog-meta{font-family:var(--mono); font-size:11.5px; color:var(--text-faint); text-transform:uppercase; letter-spacing:0.04em; margin-bottom:10px;}
.blog-body h3{font-size:18px; margin-bottom:10px; line-height:1.35;}
.blog-body a.link-arrow{font-size:12.5px; font-family:var(--mono); color:var(--orange); text-transform:uppercase; letter-spacing:0.05em;}

/* ---------- NEWSLETTER ---------- */
.newsletter{background:linear-gradient(120deg, var(--blue-deep), var(--bg)); border-radius:16px; padding:50px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:24px; border:1px solid var(--line);}
.newsletter h3{font-size:24px; margin-bottom:8px;}
.newsletter p{color:var(--text-soft); margin:0; font-size:14px;}
.newsletter-form{display:flex; gap:10px; flex-wrap:wrap;}
.newsletter-form input{padding:14px 18px; border-radius:999px; border:1px solid var(--line); background:var(--bg-panel); color:var(--text); font-size:14px; min-width:220px;}

/* ---------- FOOTER ---------- */
.footer{background:var(--bg-panel); padding:70px 0 0; margin-top:100px; border-top:1px solid var(--line);}
.footer-inner{display:grid; grid-template-columns:1.3fr 1fr 1fr 1fr; gap:40px; padding-bottom:48px;}
.footer-inner p{color:var(--text-faint); font-size:14px; margin-top:14px; max-width:280px;}
.footer-socials{display:flex; gap:10px; margin-top:20px;}
.footer-socials a{width:34px; height:34px; border-radius:50%; border:1px solid var(--line); display:flex; align-items:center; justify-content:center; font-size:11px; color:var(--text-soft);}
.footer-socials a:hover{background:var(--orange); color:#0F151C; border-color:var(--orange);}
.footer-col h4{font-family:var(--mono); font-size:12px; text-transform:uppercase; letter-spacing:0.08em; color:var(--orange); margin:0 0 18px;}
.footer-col a, .footer-col span{display:block; font-size:14px; color:var(--text-soft); margin-bottom:12px;}
.footer-col a:hover{color:var(--orange);}
.footer-bottom{padding:24px 0; font-size:12.5px; color:var(--text-faint); border-top:1px solid var(--line); display:flex; justify-content:space-between; flex-wrap:wrap; gap:8px;}

/* ---------- RESPONSIVE ---------- */
@media (max-width: 900px){
  .nav-links{position:fixed; top:78px; right:0; left:0; height:calc(100vh - 78px); background:var(--bg); flex-direction:column; align-items:flex-start; padding:32px 28px; gap:22px; transform:translateX(100%); transition:transform .3s ease; z-index:60; overflow-y:auto; border-top:1px solid var(--line);}
  .nav-links.open{transform:translateX(0);}
  .nav-toggle{display:flex;}
  .about-grid, .quality-grid{grid-template-columns:1fr;}
  .feature-row{grid-template-columns:1fr 1fr;}
  .service-row{grid-template-columns:1fr;}
  .project-grid{grid-template-columns:1fr;}
  .team-row{grid-template-columns:1fr 1fr;}
  .testi-row, .blog-row{grid-template-columns:1fr;}
  .footer-inner{grid-template-columns:1fr 1fr;}
  .newsletter{flex-direction:column; align-items:flex-start;}
  .topbar-items{display:none;}
}
@media (max-width: 560px){
  .feature-row, .team-row{grid-template-columns:1fr;}
  .footer-inner{grid-template-columns:1fr;}
}
