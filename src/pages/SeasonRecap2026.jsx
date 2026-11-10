// Nine Lives 2026 Season Recap — route /recap-2026.
// Styles: src/styles/recap.scss (scoped to .nl-recap).

import wordmark from "../assets/images/wordmark.svg";
import kitFront from "../assets/images/kit-front.png";
import kitBack from "../assets/images/kit-back.png";
import "../styles/recap.scss";

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

const wordmarkMask = `url(${wordmark}) left center/contain no-repeat`;

function StatRow({ items }) {
  return (
    <div className="stat-row">
      {items.map((item) => (
        <div className="stat-row__item" key={item.label}>
          <span className="num">{item.num}</span>
          <span className="stat-row__label">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export default function SeasonRecap2026() {
  return (
    <div className="nl-recap">

      <header className="cover">
        <div className="wrap">
          <div className="wordmark" role="img" aria-label="Nine Lives" style={{ WebkitMask: wordmarkMask, mask: wordmarkMask }} />
          <h1>
            Two world titles. <span className="cover__line">One very good year.</span>
          </h1>
          <p className="sub">
            Thank you for backing Nine Lives in 2026. Here's what our women and non-binary riders did with it, and
            where we're headed next.
          </p>
          <StatRow items={STATS} />
        </div>
      </header>

      <main className="wrap">
        <section>
          <h2>The results</h2>
          <p className="pull"><span className="pull-arrow" aria-hidden="true">→</span>Chloë Spritz won every cyclocross race she entered in 2026.</p>
          <div className="disciplines">
            {DISCIPLINES.map((d) => (
              <div className={`disc disc--${d.tone}`} key={d.name}>
                <h3>{d.name}</h3>
                <ul className="results">
                  {d.results.map((r) => (
                    <li key={`${r.race}-${r.category ?? ""}-${r.rider}`}>
                      <span className={r.place === "1st" ? "place place--first" : "place"}>{r.place}</span>
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

        <section className="reach-band">
          <h2>People follow along</h2>
          <StatRow items={REACH} />
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
              <div className="next-item" key={n.num}>
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

