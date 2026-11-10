// Nine Lives 2026 Season Recap, as a React component.
// Usage: <SeasonRecap2026 assetsPath="/recap/assets" />
// assetsPath is the folder (served by your site) holding wordmark.svg, kit-front.png and kit-back.png.
// Styles are scoped to .nl-recap, so the component won't restyle the rest of your site.

const STATS = [
  { num: "2×", label: "Singlespeed Cyclocross World Champions" },
  { num: "2", label: "Cyclocross Crusade series titles" },
  { num: "100%", label: "of non-binary races we entered as a team, won" },
  { num: "17%", label: "average Instagram engagement" },
];

const DISCIPLINES = [
  {
    name: "Cyclocross",
    tone: "cx",
    results: [
      { place: "1st", race: "Singlespeed Cyclocross World Championships", category: "Women", rider: "Chloë Spritz" },
      { place: "1st", race: "Singlespeed Cyclocross World Championships", category: "Non-binary", rider: "Robin Cummings" },
      { place: "1st", race: "Cyclocross Crusade series", category: "Women 1/2", rider: "Chloë Spritz" },
      { place: "1st", race: "Cyclocross Crusade series", category: "Singlespeed", rider: "Chloë Spritz" },
    ],
  },
  {
    name: "Gravel",
    tone: "gravel",
    results: [
      { place: "1st", race: "MidSouth", category: "Pro Non-binary", rider: "Robin Cummings" },
      { place: "1st", race: "FoCo Fondo", category: "Pro Non-binary", rider: "Robin Cummings" },
      { place: "1st", race: "Cascadia Super Gravel", rider: "Robin Cummings" },
      { place: "8th", race: "MidSouth", category: "Pro Non-binary", rider: "Cade Spritz" },
      { place: "8th", race: "FoCo Fondo", category: "Pro Women", rider: "Chloë Spritz" },
      { place: "13th", race: "FoCo Fondo", category: "Pro Women", rider: "Tori Riemersma" },
      { place: "20th", race: "MidSouth", category: "Pro Women", rider: "Chloë Spritz" },
    ],
  },
  {
    name: "Mountain bike",
    tone: "mtb",
    results: [
      { place: "1st", race: "Ring of Fire", rider: "Chloë Spritz" },
      { place: "2nd", race: "Stagecoach 400", rider: "Tori Riemersma" },
    ],
  },
];

const REACH = [
  { num: "70K", label: "social impressions every month" },
  { num: "17%", label: "average Instagram engagement" },
  { num: "66K", label: "views on our top post" },
  { num: "100+", label: "events raced and hosted as a team" },
];

const NEXT = [
  { num: "4 → 9", text: "riders on the roster, with five new women and non-binary athletes to announce." },
  { num: "Mar–Dec", text: "MidSouth and Sea Otter in spring, FoCo Fondo and Gravel Worlds in summer, cyclocross through winter." },
];

export default function SeasonRecap2026({ assetsPath = "assets" }) {
  const mask = (file, position) => {
    const value = `url(${assetsPath}/${file}) ${position}/contain no-repeat`;
    return { WebkitMask: value, mask: value };
  };

  return (
    <div className="nl-recap">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Gloock&family=Poppins:ital,wght@0,400;0,500;0,700;0,900;1,900&display=swap"
      />
      <style>{CSS}</style>

      <header className="cover">
        <div className="wrap">
          <div className="wordmark" role="img" aria-label="Nine Lives" style={mask("wordmark.svg", "left center")} />
          <span className="tag">2026 Season Recap</span>
          <h1>
            Two world titles. <em>One very good year.</em>
          </h1>
          <p className="sub">
            Thank you for backing Nine Lives in 2026. Here's what our women and non-binary riders did with it, and
            where we're headed next.
          </p>
          <div className="stats">
            {STATS.map((s) => (
              <div className="stat" key={s.label}>
                <span className="num">{s.num}</span>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main className="wrap">
        <section>
          <div className="head">
            <span className="eyebrow">Results</span>
            <h2>Fast across three disciplines</h2>
          </div>
          <div className="callout">
            <q>Chloë Spritz won every cyclocross race she entered in 2026.</q>
            <span className="muted">
              That includes a world title and the Cyclocross Crusade series in two categories.
            </span>
          </div>
          <div className="disciplines">
            {DISCIPLINES.map((d) => (
              <div className={`disc ${d.tone}`} key={d.name}>
                <div>
                  <h3>{d.name}</h3>
                </div>
                <ul className="results">
                  {d.results.map((r) => (
                    <li key={`${r.race}-${r.category ?? ""}-${r.rider}`}>
                      <span className={r.place === "1st" ? "place first" : "place"}>{r.place}</span>
                      <span>
                        <b>{r.race}</b>
                        {r.category ? `, ${r.category}` : ""} <span className="who">· {r.rider}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="head">
            <span className="eyebrow">Reach</span>
            <h2>People actually look at what we post</h2>
          </div>
          <div className="reach">
            {REACH.map((r) => (
              <div key={r.label}>
                <span className="num">{r.num}</span>
                <span>{r.label}</span>
              </div>
            ))}
          </div>
          <p className="muted">Our audience is 50% women, with a median household income of $100K–150K.</p>
        </section>

        <section className="thanks">
          <div className="head">
            <span className="eyebrow">Thank you</span>
            <h2>To all our partners</h2>
            <p className="lede">
              Every one of these results was raced by four riders building something new for women and non-binary
              cyclists. Thank you to every partner who backed us in our first season, and here's a sneak peek at
              what's coming next: the SS27 sunset print.
            </p>
          </div>
          <div className="kit">
            <img
              src={`${assetsPath}/kit-front.png`}
              alt="SS27 jersey front with the sunset tie-dye print"
              width="844"
              height="1100"
            />
            <img
              src={`${assetsPath}/kit-back.png`}
              alt="SS27 jersey back with the Nine Lives wordmark and Cinder the cat"
              width="796"
              height="1034"
            />
          </div>
        </section>

        <section>
          <div className="head">
            <span className="eyebrow">2027</span>
            <h2>More riders, more races, more for you</h2>
          </div>
          <div className="next">
            {NEXT.map((n) => (
              <div key={n.num}>
                <span className="num">{n.num}</span>
                <p>{n.text}</p>
              </div>
            ))}
          </div>
          <p className="lede">We'd love to keep racing with you. Let's find 20 minutes before your 2027 plans are set.</p>
        </section>
      </main>

    </div>
  );
}

// Layout: a Sunset podium cover with the season in four numbers, then a short bone-paper results sheet by discipline.
const CSS = `
.nl-recap{
  --magenta:#D33367; --magenta-ink:#B0244F; --coral:#E06C62; --apricot:#DF7A60; --lime:#A9CA54; --plum:#5E2A5B; --night:#2A1729; --bone:#FBF3EF; --ink:#1A1614;
  --bg:#FBF3EF; --surface:#FFFFFF; --fg:#1A1614; --muted:#6B5560; --rule:#E7D6D4; --accent:#B0244F; --chip:#F4E4E2;
  --f-display:"Gloock", Didot, "Bodoni 72", Georgia, serif;
  --f-body:"Poppins", system-ui, -apple-system, "Segoe UI", sans-serif;
  --sunset: radial-gradient(60% 80% at 15% 20%, #A9CA54cc 0%, transparent 55%),
            radial-gradient(50% 70% at 85% 75%, #5E2A5Bdd 0%, transparent 60%),
            radial-gradient(70% 90% at 70% 10%, #DF7A60 0%, transparent 60%),
            linear-gradient(115deg, #D33367 0%, #E06C62 45%, #D33367 70%, #5E2A5B 100%);
  background:var(--bg); color:var(--fg); font:400 16px/1.6 var(--f-body); -webkit-font-smoothing:antialiased;
}
@media (prefers-color-scheme: dark){ :root:not([data-theme="light"]) .nl-recap{
  --bg:#1E121D; --surface:#2A1729; --fg:#FBF3EF; --muted:#C9AEBB; --rule:#43283F; --accent:#F27A9E; --chip:#3A2137; color-scheme:dark } }
:root[data-theme="dark"] .nl-recap{ --bg:#1E121D; --surface:#2A1729; --fg:#FBF3EF; --muted:#C9AEBB; --rule:#43283F; --accent:#F27A9E; --chip:#3A2137; color-scheme:dark }

.nl-recap *{box-sizing:border-box}
.nl-recap h1,.nl-recap h2,.nl-recap h3{font-family:var(--f-display); font-weight:400; text-transform:uppercase; line-height:1.06; text-wrap:balance; margin:0}
.nl-recap h2{font-size:clamp(1.8rem,4vw,2.5rem)}
.nl-recap h3{font-size:1.2rem}
.nl-recap p,.nl-recap ul,.nl-recap ol{margin:0}
.nl-recap a{color:var(--accent)}
.nl-recap :focus-visible{outline:3px solid var(--lime); outline-offset:2px}
.nl-recap .wrap{max-width:1000px; margin:0 auto; padding-left:max(16px, env(safe-area-inset-left,0px)); padding-right:max(16px, env(safe-area-inset-right,0px))}
.nl-recap .eyebrow{font:700 .72rem/1 var(--f-body); letter-spacing:.16em; text-transform:uppercase; color:var(--accent)}
.nl-recap .num{font-family:var(--f-body); font-weight:900; font-style:italic; letter-spacing:-.03em; font-variant-numeric:tabular-nums; line-height:.95}
.nl-recap .lede{font-size:1.1rem; max-width:62ch}
.nl-recap .muted{color:var(--muted)}

.nl-recap .cover{background:var(--sunset); color:#fff; -webkit-print-color-adjust:exact; print-color-adjust:exact}
.nl-recap .cover .wrap{padding-block:40px 0; display:grid; gap:18px}
.nl-recap .wordmark{width:min(280px,66%); aspect-ratio:10876/2381; background:#fff}
.nl-recap .cover .tag{justify-self:start; font:800 .74rem/1 var(--f-body); letter-spacing:.16em; text-transform:uppercase; padding:8px 12px; background:var(--ink); color:var(--bone); transform:rotate(-2deg); box-shadow:4px 4px 0 #5E2A5B}
.nl-recap .cover h1{font-size:clamp(2.8rem,8vw,5.4rem); line-height:.96}
.nl-recap .cover h1 em{font-style:normal; display:block}
.nl-recap .cover .sub{max-width:56ch; font-size:1.06rem; text-shadow:0 1px 12px #5E2A5B66}
.nl-recap .stats{display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); border-top:1.5px solid #ffffff88; margin-top:14px}
.nl-recap .stat{padding:20px 14px 24px 0; display:grid; gap:6px; align-content:start}
.nl-recap .stat + .stat{padding-left:18px; border-left:1.5px solid #ffffff55}
.nl-recap .stat .num{font-size:clamp(2.2rem,5.4vw,3.4rem)}
.nl-recap .stat span:last-child{font-size:.88rem}

.nl-recap main.wrap{display:grid; gap:64px; padding-block:48px 64px}
.nl-recap section{display:grid; gap:20px; min-width:0}
.nl-recap .head{display:grid; gap:10px}

.nl-recap .disciplines{display:grid; gap:20px}
.nl-recap .disc{display:grid; grid-template-columns:200px minmax(0,1fr); gap:24px; padding-top:18px; border-top:3px solid var(--magenta)}
.nl-recap .disc.gravel{border-color:var(--apricot)}
.nl-recap .disc.mtb{border-color:var(--lime)}
.nl-recap .disc h3{font-size:1.5rem}
.nl-recap .results{list-style:none; padding:0; display:grid; gap:0}
.nl-recap .results li{display:grid; grid-template-columns:auto minmax(0,1fr); gap:14px; align-items:baseline; padding:10px 0; border-bottom:1px solid var(--rule)}
.nl-recap .results li:last-child{border-bottom:0}
.nl-recap .place{font:900 italic 1.25rem/1 var(--f-body); min-width:3.2ch; color:var(--fg)}
.nl-recap .place.first{color:var(--accent)}
.nl-recap .results b{font-weight:700}
.nl-recap .results .who{color:var(--muted); font-size:.92rem}

.nl-recap .callout{background:var(--surface); border:1px solid var(--rule); border-left:4px solid var(--magenta); border-radius:6px; padding:18px 22px; display:grid; gap:6px}
.nl-recap .callout q{font-family:var(--f-display); font-size:1.3rem; line-height:1.25; quotes:none}

.nl-recap .reach{display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:20px}
.nl-recap .reach div{display:grid; gap:6px; padding-top:14px; border-top:2px solid var(--fg)}
.nl-recap .reach .num{font-size:clamp(2rem,4.6vw,2.8rem); color:var(--accent)}
.nl-recap .reach span:last-child{font-size:.9rem; color:var(--muted)}

.nl-recap .thanks{display:grid; grid-template-columns:minmax(0,1.3fr) minmax(0,1fr); gap:32px; align-items:center}
.nl-recap .kit{display:flex; gap:12px}
.nl-recap .kit img{width:50%; height:auto; background:var(--bone); border:1px solid var(--rule); border-radius:6px}
.nl-recap .next{display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:20px}
.nl-recap .next div{display:grid; gap:6px; align-content:start}
.nl-recap .next .num{font-size:2.4rem; color:var(--fg)}
.nl-recap .next p{font-size:.94rem}


@media (max-width:760px){
  .nl-recap .stats,.nl-recap .reach{grid-template-columns:repeat(2,minmax(0,1fr))}
  .nl-recap .stat:nth-child(3){padding-left:0; border-left:0}
  .nl-recap .stat:nth-child(n+3){border-top:1.5px solid #ffffff55}
  .nl-recap .disc{grid-template-columns:minmax(0,1fr); gap:8px}
  .nl-recap .thanks,.nl-recap .next{grid-template-columns:minmax(0,1fr)}
}
@media print{ .nl-recap main.wrap{gap:32px; padding-block:24px} .nl-recap section{break-inside:avoid-page} }
`;
