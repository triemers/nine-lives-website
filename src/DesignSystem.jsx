import './styles/tokens.css'

export default function DesignSystem() {
  return (
    <div style={{ backgroundColor: 'var(--color-black)', minHeight: '100vh' }}>

      {/* ── Hero gradient with animated grain ── */}
      <div
        className="grain grain--heavy scanlines"
        style={{
          background: 'var(--gradient-hero)',
          minHeight: '340px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          gap: 'var(--space-3)',
        }}
      >
        <p className="label" style={{ color: 'rgba(255,255,255,0.5)', letterSpacing: 'var(--tracking-widest)' }}>
          Nine Lives Cycling Collective
        </p>
        <h1 className="display-xl" style={{ textAlign: 'center' }}>Design System</h1>
        <p className="label neon-green" style={{ marginTop: 'var(--space-2)' }}>
          ✦ 2026 Season ✦
        </p>
      </div>

      <div style={{ padding: 'var(--space-16) var(--space-8)' }}>

        {/* ── Neon divider ── */}
        <hr className="divider-neon" />

        {/* ── Colors ── */}
        <Section title="Color">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))', gap: 'var(--space-4)' }}>
            <Swatch name="Black"     hex="#0C0C0C" />
            <Swatch name="White"     hex="#F4F4F0" />
            <Swatch name="Green"     hex="#52FF7A" glow="0 0 12px #52FF7A" />
            <Swatch name="Purple"    hex="#CC33FF" glow="0 0 12px #CC33FF" />
            <Swatch name="Olive"     hex="#6B7540" />
            <Swatch name="Olive Lt"  hex="#8A9650" />
            <Swatch name="Gray 900"  hex="#1A1A1A" />
            <Swatch name="Gray 700"  hex="#3A3A3A" />
            <Swatch name="Gray 500"  hex="#666660" />
            <Swatch name="Gray 300"  hex="#ADADAA" />
            <Swatch name="Gray 100"  hex="#E0E0DC" />
          </div>
        </Section>

        <hr className="divider-neon" />

        {/* ── Typography ── */}
        <Section title="Typography">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-10)' }}>
            <TypeRow label="Display 2XL · Barlow Condensed Black" className="display-2xl" sample="Nine Lives" />
            <TypeRow label="Display XL · Barlow Condensed Black"  className="display-xl"  sample="Nine Lives" />
            <TypeRow label="Display LG · Barlow Condensed Bold"   className="display-lg"  sample="2026 Roster" />
            <TypeRow label="Display MD · Barlow Condensed Bold"   className="display-md"  sample="Race Schedule" />
            <TypeRow label="Body Lead · DM Sans 20px"             className="body-lead"   sample="An elite women's and gender expansive cycling collective." />
            <TypeRow label="Body · DM Sans 16px"                  className="body"        sample="Nine Lives Cycling Collective exists to create space for women and gender expansive people in competitive cycling — at every level." />
            <TypeRow label="Label · DM Sans uppercase"            className="label"       sample="Race Schedule · 2026 Season" />
          </div>
        </Section>

        <hr className="divider-neon" />

        {/* ── Retro / Neon Accents ── */}
        <Section title="Retro / Neon Accents">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>

            {/* Neon text */}
            <div>
              <p className="label" style={{ color: 'var(--color-gray-500)', marginBottom: 'var(--space-4)' }}>Neon Text</p>
              <div style={{ display: 'flex', gap: 'var(--space-8)', alignItems: 'baseline', flexWrap: 'wrap' }}>
                <span className="display-lg neon-green">Nine Lives</span>
                <span className="display-lg neon-purple">Nine Lives</span>
              </div>
            </div>

            {/* Neon divider */}
            <div>
              <p className="label" style={{ color: 'var(--color-gray-500)', marginBottom: 'var(--space-4)' }}>Neon Divider</p>
              <hr className="divider-neon" style={{ margin: 0 }} />
            </div>

            {/* Dot grid */}
            <div>
              <p className="label" style={{ color: 'var(--color-gray-500)', marginBottom: 'var(--space-4)' }}>Dot Grid Background</p>
              <div
                className="bg-dot-grid"
                style={{
                  height: '120px',
                  border: '1px solid var(--color-gray-700)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span className="label neon-green">section background treatment</span>
              </div>
            </div>

            {/* Scanlines on gradient */}
            <div>
              <p className="label" style={{ color: 'var(--color-gray-500)', marginBottom: 'var(--space-4)' }}>Scanlines + Grain on Gradient</p>
              <div
                className="grain scanlines"
                style={{
                  background: 'var(--gradient-hero)',
                  height: '120px',
                  border: '1px solid var(--color-gray-700)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span className="display-md" style={{ color: 'white' }}>Hero Treatment</span>
              </div>
            </div>

            {/* Retro stat blocks */}
            <div>
              <p className="label" style={{ color: 'var(--color-gray-500)', marginBottom: 'var(--space-4)' }}>Retro Stat / Info Blocks</p>
              <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
                <div className="retro-stat">
                  <span className="retro-stat__value neon-green">5</span>
                  <span className="retro-stat__label">Riders</span>
                </div>
                <div className="retro-stat" style={{ borderColor: 'var(--color-gray-700)' }}>
                  <span className="retro-stat__value">2020</span>
                  <span className="retro-stat__label">Founded</span>
                </div>
                <div className="retro-stat" style={{ borderColor: 'rgba(204, 51, 255, 0.3)', boxShadow: '0 0 12px rgba(204,51,255,0.08)' }}>
                  <span className="retro-stat__value neon-purple">12</span>
                  <span className="retro-stat__label">Race Days</span>
                </div>
              </div>
            </div>

          </div>
        </Section>

        <hr className="divider-neon" />

        {/* ── Buttons ── */}
        <Section title="Buttons">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)', alignItems: 'center' }}>
              <button className="btn btn--primary">Primary</button>
              <button className="btn btn--secondary">Secondary</button>
              <button className="btn btn--accent">Join the Team</button>
              <button className="btn btn--neon">Neon Outline</button>
              <button className="btn btn--ghost">Read More →</button>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)', alignItems: 'center' }}>
              <button className="btn btn--neon btn--lg">Large Neon</button>
              <button className="btn btn--primary btn--lg">Large Primary</button>
              <button className="btn btn--primary btn--sm">Small</button>
            </div>
          </div>
        </Section>

        <hr className="divider-neon" />

        {/* ── Tags ── */}
        <Section title="Tags / Disciplines">
          <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', alignItems: 'center' }}>
            <span className="tag tag--default">Road</span>
            <span className="tag tag--default">Gravel</span>
            <span className="tag tag--default">Cyclocross</span>
            <span className="tag tag--green">Criterium</span>
            <span className="tag tag--olive">Track</span>
            <span className="tag tag--neon">Featured</span>
          </div>
        </Section>

        <hr className="divider-neon" />

        {/* ── Ticker ── */}
        <Section title="Ticker / Marquee">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <div className="ticker" style={{ marginInline: 'calc(var(--space-8) * -1)' }}>
              <div className="ticker__track">
                {[1, 2].map((i) => (
                  <TickerItems key={i} />
                ))}
              </div>
            </div>
            <div className="ticker ticker--inverted" style={{ marginInline: 'calc(var(--space-8) * -1)' }}>
              <div className="ticker__track" style={{ animationDirection: 'reverse', animationDuration: '18s' }}>
                {[1, 2].map((i) => (
                  <TickerItems key={i} separator="✧" />
                ))}
              </div>
            </div>
          </div>
        </Section>

        <hr className="divider-neon" />

        {/* ── Rider Cards ── */}
        <Section title="Rider Cards — hover to see effects">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 'var(--space-6)', maxWidth: '900px' }}>
            <MockRiderCard number="01" name="JORDAN RILEY" pronouns="she/her" disciplines={['Road', 'Cyclocross']} />
            <MockRiderCard number="02" name="ALEX CHEN" pronouns="she/they" disciplines={['Gravel', 'Road']} />
            <MockRiderCard number="03" name="SAM OKAFOR" pronouns="they/them" disciplines={['Track', 'Criterium']} />
          </div>
        </Section>

        <hr className="divider-neon" />

        {/* ── Blog Post Cards ── */}
        <Section title="Blog Post Cards (The Scratching Post)">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 'var(--space-8)' }}>
            <MockPostCard title="Gravel Season Begins: Chasing the Scratch" tag="Team News" />
            <MockPostCard title="Mid South 100: Mud, Grit, and a Top-10 Finish" tag="Race Recap" />
          </div>
        </Section>

      </div>
    </div>
  )
}


/* ── Helpers ── */

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 'var(--space-16)' }}>
      <p className="label" style={{ color: 'var(--color-gray-500)', marginBottom: 'var(--space-8)' }}>{title}</p>
      {children}
    </div>
  )
}

function Swatch({ name, hex, glow }) {
  return (
    <div>
      <div style={{
        backgroundColor: hex,
        height: '72px',
        border: '1px solid var(--color-gray-700)',
        boxShadow: glow || 'none',
      }} />
      <p style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)', color: 'var(--color-white)', marginTop: 'var(--space-2)' }}>{name}</p>
      <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-gray-500)', fontFamily: 'monospace' }}>{hex}</p>
    </div>
  )
}

function TypeRow({ label, className, sample }) {
  return (
    <div>
      <p className="label" style={{ color: 'var(--color-gray-500)', marginBottom: 'var(--space-2)' }}>{label}</p>
      <p className={className}>{sample}</p>
    </div>
  )
}

function TickerItems({ separator = '✦' }) {
  return (
    <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-8)' }}>
      <span className="ticker__item">2026 Roster</span>
      <span className="ticker__separator" aria-hidden>{separator}</span>
      <span className="ticker__item">Nine Lives Cycling Collective</span>
      <span className="ticker__separator" aria-hidden>{separator}</span>
      <span className="ticker__item">Race Season</span>
      <span className="ticker__separator" aria-hidden>{separator}</span>
      <span className="ticker__item">The Scratching Post</span>
      <span className="ticker__separator" aria-hidden>{separator}</span>
    </span>
  )
}

function MockRiderCard({ number, name, pronouns, disciplines }) {
  return (
    <div className="rider-card">
      <div className="rider-card__photo-wrap">
        <div style={{
          background: 'linear-gradient(160deg, var(--color-gray-700) 0%, var(--color-gray-900) 100%)',
          aspectRatio: '3/4',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <span style={{ color: 'var(--color-gray-500)', fontSize: 'var(--text-sm)' }}>Photo</span>
        </div>
      </div>
      <span className="rider-card__number" aria-hidden>{number}</span>
      <div className="rider-card__body">
        <p className="rider-card__name">{name}</p>
        <p className="rider-card__pronouns">{pronouns}</p>
        <div className="rider-card__tags">
          {disciplines.map((d) => (
            <span key={d} className="tag tag--olive">{d}</span>
          ))}
        </div>
        <p className="rider-card__bio">Hometown, riding background, and what drives them — short and punchy.</p>
      </div>
    </div>
  )
}

function MockPostCard({ title, tag }) {
  return (
    <div className="post-card">
      <div style={{
        background: 'linear-gradient(160deg, var(--color-gray-900) 0%, var(--color-gray-700) 100%)',
        aspectRatio: '16/9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <span style={{ color: 'var(--color-gray-500)', fontSize: 'var(--text-sm)' }}>Cover image</span>
      </div>
      <div className="post-card__meta">
        <span className="post-card__date">Aug 12, 2026</span>
        <span className="tag tag--neon">{tag}</span>
      </div>
      <p className="post-card__title">{title}</p>
      <p className="post-card__excerpt">A short excerpt — one or two punchy sentences that pull the reader in.</p>
      <button className="btn btn--ghost">Read More →</button>
    </div>
  )
}
