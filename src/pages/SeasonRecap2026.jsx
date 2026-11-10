// Nine Lives 2026 Season Recap, as a React component.
// Images live in src/assets/images and are bundled by Vite.
// Styles are scoped to .nl-recap, so the component won't restyle the rest of your site.

import wordmark from "../assets/images/wordmark.svg";
import kitFront from "../assets/images/kit-front.png";
import kitBack from "../assets/images/kit-back.png";

const STATS = [
  { num: "2", label: "Singlespeed Cyclocross world titles" },
  { num: "2", label: "Cyclocross Crusade series titles" },
  { num: "100%", label: "of the non-binary races we entered, won" },
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
      { place: "1st", race: "Odyssey of the VOG", rider: "Tori Riemersma" },
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
  { num: "110K", label: "social impressions a month" },
  { num: "17%", label: "average Instagram engagement" },
  { num: "66K", label: "views on our top post" },
  { num: "100+", label: "events raced and hosted as a team" },
];

const NEXT = [
  { num: "9 lives for 9 Lives", text: "Our roster grows from four riders to nine, with five new women and non-binary athletes to announce." },
  { num: "10 months of racing", text: "From MidSouth and Sea Otter in spring to FoCo Fondo and Gravel Worlds in summer, then cyclocross through winter, and more to be announced." },
];

export default function SeasonRecap2026() {
  const mask = (url, position) => {
    const value = `url(${url}) ${position}/contain no-repeat`;
    return { WebkitMask: value, mask: value };
  };

  return (
    <div className="nl-recap">
      <style>{CSS}</style>

      <header className="cover">
        <div className="wrap">
          <div className="wordmark" role="img" aria-label="Nine Lives" style={mask(wordmark, "left center")} />
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
          <h2>The results</h2>
          <p className="pull"><span className="pull-arrow" aria-hidden="true">→</span>Chloë Spritz won every cyclocross race she entered in 2026.</p>
          <div className="disciplines">
            {DISCIPLINES.map((d) => (
              <div className={`disc ${d.tone}`} key={d.name}>
                <h3>{d.name}</h3>
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
          <h2>People follow along</h2>
          <div className="reach">
            {REACH.map((r) => (
              <div key={r.label}>
                <span className="num">{r.num}</span>
                <span>{r.label}</span>
              </div>
            ))}
          </div>
          <p className="prose">Half our audience is women, with a median household income of $100K–150K.</p>
        </section>

        <section className="thanks">
          <div className="thanks-text">
            <h2>Thank you</h2>
            <p className="prose">
              Thank you to every partner who backed us in our first season. Here's a first look at next year's kit:
              the SS27 sunset print.
            </p>
          </div>
          <div className="kit">
            <img
              src={kitFront}
              alt="SS27 jersey front with the sunset tie-dye print"
              width="844"
              height="1100"
            />
            <img
              src={kitBack}
              alt="SS27 jersey back with the Nine Lives wordmark and Cinder the cat"
              width="796"
              height="1034"
            />
          </div>
        </section>

        <section>
          <h2>Coming in 2027</h2>
          <div className="next">
            {NEXT.map((n) => (
              <div key={n.num}>
                <h3>{n.num}</h3>
                <p>{n.text}</p>
              </div>
            ))}
          </div>
          <div className="cta">
            <h3>We'd love to keep racing with you</h3>
            <p className="prose">
              Let's find 20 minutes to talk before your 2027 plans are set:{" "}
              <a href="mailto:ninelivescycling@gmail.com">ninelivescycling@gmail.com</a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

// Layout: a Sunset podium cover with the season in three numbers, then a short bone-paper results sheet by discipline.
const CSS = `
.nl-recap{
  --magenta:#D33367; --magenta-ink:#B0244F; --coral:#E06C62; --apricot:#DF7A60; --lime:#A9CA54; --plum:#5E2A5B; --night:#2A1729; --bone:#FBF3EF; --ink:#1A1614;
  --bg:#FBF3EF; --surface:#FFFFFF; --fg:#1A1614; --muted:#6B5560; --rule:#E7D6D4; --accent:#B0244F; --chip:#F4E4E2;
  --sunset: radial-gradient(60% 80% at 15% 20%, #A9CA54cc 0%, transparent 55%),
            radial-gradient(50% 70% at 85% 75%, #5E2A5Bdd 0%, transparent 60%),
            radial-gradient(70% 90% at 70% 10%, #DF7A60 0%, transparent 60%),
            linear-gradient(115deg, #D33367 0%, #E06C62 45%, #D33367 70%, #5E2A5B 100%);
  background:var(--bg); color:var(--fg); font-family:var(--font-body); font-size:var(--text-lg); font-weight:var(--weight-regular); line-height:1.65; -webkit-font-smoothing:antialiased;
}
@media (prefers-color-scheme: dark){ :root:not([data-theme="light"]) .nl-recap{
  --bg:#1E121D; --surface:#2A1729; --fg:#FBF3EF; --muted:#C9AEBB; --rule:#43283F; --accent:#F27A9E; --chip:#3A2137; color-scheme:dark } }
:root[data-theme="dark"] .nl-recap{ --bg:#1E121D; --surface:#2A1729; --fg:#FBF3EF; --muted:#C9AEBB; --rule:#43283F; --accent:#F27A9E; --chip:#3A2137; color-scheme:dark }

.nl-recap *{box-sizing:border-box}
.nl-recap h1,.nl-recap h2,.nl-recap h3{font-family:var(--font-display); font-weight:var(--weight-black); letter-spacing:var(--tracking-tight); text-transform:uppercase; line-height:1; text-wrap:balance; margin:0}
.nl-recap h2{font-size:var(--text-display-lg)}
.nl-recap h3{font-size:clamp(1.5rem,2.5vw,2rem)}
.nl-recap p{margin:0}
.nl-recap a{color:var(--accent)}
.nl-recap :focus-visible{outline:3px solid var(--lime); outline-offset:2px}
.nl-recap .wrap{max-width:900px; margin:0 auto; padding-left:max(16px, env(safe-area-inset-left,0px)); padding-right:max(16px, env(safe-area-inset-right,0px))}
.nl-recap .num{font-family:var(--font-display); font-weight:var(--weight-black); letter-spacing:var(--tracking-tight); font-variant-numeric:tabular-nums; line-height:1}
.nl-recap .prose{max-width:60ch}

.nl-recap .cover{background:var(--sunset); color:#fff; -webkit-print-color-adjust:exact; print-color-adjust:exact}
.nl-recap .cover .wrap{padding-block:calc(60px + 56px) 0; display:grid; gap:24px}
.nl-recap .wordmark{width:min(240px,60%); aspect-ratio:10876/2381; background:#fff}
.nl-recap .cover h1{font-size:var(--text-display-xl); line-height:.94}
.nl-recap .cover h1 em{font-style:normal; display:block}
.nl-recap .cover .sub{max-width:52ch; font-size:var(--text-xl); line-height:1.5; text-shadow:0 1px 12px #5E2A5B66}
.nl-recap .stats{display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); border-top:1.5px solid #ffffff88; margin-top:16px}
.nl-recap .stat{padding:24px 16px 32px 0; display:grid; gap:8px; align-content:start}
.nl-recap .stat + .stat{padding-left:20px; border-left:1.5px solid #ffffff55}
.nl-recap .stat .num{font-size:clamp(2.5rem,5vw,4rem)}
.nl-recap .stat span:last-child{font-size:var(--text-base)}

.nl-recap main.wrap{display:grid; gap:96px; padding-block:72px 96px}
.nl-recap section{display:grid; gap:28px; min-width:0}

.nl-recap .pull{font-family:var(--font-serif); font-style:italic; font-weight:600; font-size:clamp(1.5rem,3vw,2rem); line-height:1.2; color:var(--accent)}
.nl-recap .pull-arrow{font-style:normal; margin-right:.4em}
.nl-recap .disciplines{display:grid; gap:40px}
.nl-recap .disc{display:grid; grid-template-columns:200px minmax(0,1fr); gap:24px; padding-top:20px; border-top:3px solid var(--magenta)}
.nl-recap .disc.gravel{border-color:var(--apricot)}
.nl-recap .disc.mtb{border-color:var(--lime)}
.nl-recap .results{list-style:none; margin:0; padding:0; display:grid}
.nl-recap .results li{display:grid; grid-template-columns:auto minmax(0,1fr); gap:16px; align-items:baseline; padding:12px 0; border-bottom:1px solid var(--rule)}
.nl-recap .results li:last-child{border-bottom:0}
.nl-recap .place{font-family:var(--font-display); font-weight:var(--weight-black); font-size:var(--text-xl); line-height:1; min-width:3.2ch; color:var(--fg)}
.nl-recap .place.first{color:var(--accent)}
.nl-recap .results b{font-weight:var(--weight-bold)}
.nl-recap .results .who{color:var(--muted)}

.nl-recap .reach{display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:24px 56px}
.nl-recap .reach div{display:grid; gap:8px; align-content:start; position:relative}
.nl-recap .reach div + div::before{content:""; position:absolute; top:0; bottom:0; left:-29px; width:2px; background:var(--plum)}
.nl-recap .reach .num{font-size:clamp(2.5rem,5vw,4rem); color:var(--accent)}
.nl-recap .reach span:last-child{color:var(--muted)}

.nl-recap .thanks{grid-template-columns:minmax(0,1fr) minmax(0,1fr); gap:40px; align-items:center}
.nl-recap .thanks-text{display:grid; gap:20px}
.nl-recap .kit{display:flex; gap:12px}
.nl-recap .kit img{width:50%; height:auto; background:var(--bone); border:1px solid var(--rule); border-radius:6px}
.nl-recap .next{display:grid; grid-template-columns:minmax(0,1fr); gap:40px}
.nl-recap .next div{display:grid; gap:10px; align-content:start}
.nl-recap .next p{max-width:60ch}
.nl-recap .cta{display:grid; gap:10px; margin-top:16px}

@media (max-width:760px){
  .nl-recap main.wrap{gap:72px; padding-block:56px 72px}
  .nl-recap .stats{grid-template-columns:minmax(0,1fr)}
  .nl-recap .stat{padding:18px 0}
  .nl-recap .stat + .stat{padding-left:0; border-left:0; border-top:1.5px solid #ffffff55}
  .nl-recap .reach{grid-template-columns:repeat(2,minmax(0,1fr))}
  .nl-recap .reach div:nth-child(odd)::before{content:none}
  .nl-recap .next{grid-template-columns:minmax(0,1fr)}
  .nl-recap .disc{grid-template-columns:minmax(0,1fr); gap:12px}
  .nl-recap .thanks{grid-template-columns:minmax(0,1fr)}
}
@media print{ .nl-recap main.wrap{gap:40px; padding-block:24px} .nl-recap section{break-inside:avoid-page} }
`;
