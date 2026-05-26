import { useState, useEffect, useCallback } from 'react'

const PROJECTS = [
  {
    id: 'fda',
    name: 'FDACompliance',
    tagline: "Multi-agent reasoning over the FDA's 21 CFR — ask any compliance question in plain English.",
    tags: ['HYBRID RAG', 'MULTI-AGENT', 'CFR DATA'],
    url: 'https://fda-compliance.vercel.app/',
    urlLabel: 'fda-compliance.vercel.app',
    bg: 'linear-gradient(145deg, #1a3a6b 0%, #0d5ea6 60%, #1a7abf 100%)',
    screenshot: '/images/screenshot-fda.png',
  },
  {
    id: 'neuro',
    name: 'NeuroGraph AI',
    tagline: "Graph-RAG over Alzheimer's literature — traversing a Neo4j knowledge graph to answer research questions.",
    tags: ['GRAPH RAG', 'NEO4J', 'BIOMEDICAL AI'],
    url: 'https://alzheimerskg.vercel.app/',
    urlLabel: 'alzheimerskg.vercel.app',
    bg: 'linear-gradient(145deg, #2d1b69 0%, #6b21a8 60%, #9333ea 100%)',
    screenshot: '/images/screenshot-neuro.png',
  },
  {
    id: 'resolvly',
    name: 'Resolvly',
    tagline: "Drafts insurance-appeal letters in one click — denied claim in, ready-to-send letter out.",
    tags: ['LLM', 'INSURANCE AI', 'APPEALS'],
    url: 'https://resolvly.vercel.app/',
    urlLabel: 'resolvly.vercel.app',
    bg: 'linear-gradient(145deg, #0f4c3a 0%, #0f766e 60%, #14b8a6 100%)',
    screenshot: '/images/screenshot-resolvly.png',
  },
  {
    id: 'brainscope',
    name: 'BrainScopeN8N',
    tagline: "End-to-end BCI research orchestration — pgvector-backed and stitched together with N8N.",
    tags: ['N8N', 'PGVECTOR', 'BCI RESEARCH'],
    url: '#',
    urlLabel: 'brainscope.dev',
    bg: 'linear-gradient(145deg, #7c2d12 0%, #c2410c 60%, #f97316 100%)',
    screenshot: '/images/screenshot-brainscope.svg',
  },
]

const INTERVAL_MS = 5000

function BrowserMock({ project, size }: { project: typeof PROJECTS[0]; size: 'lg' | 'sm' }) {
  return (
    <div className={`proj-browser proj-browser--${size}`}>
      <div className="proj-chrome">
        <span className="proj-dots"><span /><span /><span /></span>
        <span className="proj-url-bar">{project.urlLabel}</span>
        <span className="proj-live-chip">
          <span className="proj-live-dot" />LIVE
        </span>
      </div>
      {project.screenshot ? (
        <div className="proj-screen proj-screen--shot">
          <img src={project.screenshot} alt={`${project.name} landing page`} />
        </div>
      ) : (
        <div className="proj-screen" style={{ background: project.bg }}>
          <span className="proj-screen-name">{project.name}</span>
          <span className="proj-screen-url">{project.urlLabel}</span>
        </div>
      )}
    </div>
  )
}

export default function Speaking() {
  const [active, setActive] = useState(0)
  const [timerKey, setTimerKey] = useState(0)

  const goTo = useCallback((i: number) => {
    if (i === active) return
    setActive(i)
    setTimerKey(k => k + 1)
  }, [active])

  useEffect(() => {
    const id = setInterval(() => {
      setActive(prev => (prev + 1) % PROJECTS.length)
    }, INTERVAL_MS)
    return () => clearInterval(id)
  }, [timerKey])

  const featured = PROJECTS[active]
  const thumbs = PROJECTS.filter((_, i) => i !== active)

  const openFeatured = () => {
    if (featured.url !== '#') window.open(featured.url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="speaking" id="projects">
      <span className="eyebrow">
        <span className="eyebrow-num">05</span>
        <span className="eyebrow-line" />
        <span>Projects · In Production</span>
      </span>
      <h2 className="speaking-headline">
        Built for <span className="serif italic">curiosity</span>.<br />
        Shipped to the <span className="serif italic">internet</span>.
      </h2>

      {/* key={active} re-mounts this div on swap, triggering the CSS fade-in */}
      <div key={active} className="proj-panel">
        <div className="proj-panel-left">
          <span className="proj-badge">
            <span className="proj-live-dot" />
            Featured · Live Now
          </span>
          <h3 className="proj-name">{featured.name}</h3>
          <p className="proj-tagline">{featured.tagline}</p>
          <div className="proj-tags">
            {featured.tags.map(t => <span key={t} className="proj-tag">{t}</span>)}
          </div>
          <a
            href={featured.url !== '#' ? featured.url : undefined}
            target="_blank"
            rel="noopener noreferrer"
            className="proj-cta"
          >
            {featured.urlLabel} <span className="proj-cta-arr">↗</span>
          </a>
        </div>

        <div className="proj-panel-right">
          <div
            className="proj-browser-wrap"
            onClick={openFeatured}
            onKeyDown={e => e.key === 'Enter' && openFeatured()}
            role={featured.url !== '#' ? 'button' : undefined}
            tabIndex={featured.url !== '#' ? 0 : undefined}
            aria-label={`Open ${featured.name}`}
            style={{ cursor: featured.url !== '#' ? 'pointer' : 'default' }}
          >
            <BrowserMock project={featured} size="lg" />
          </div>
        </div>
      </div>

      <div className="proj-thumbs">
        {thumbs.map(p => {
          const origIdx = PROJECTS.findIndex(x => x.id === p.id)
          return (
            <div
              key={p.id}
              className="proj-thumb"
              onClick={() => goTo(origIdx)}
              onKeyDown={e => e.key === 'Enter' && goTo(origIdx)}
              role="button"
              tabIndex={0}
              aria-label={`Preview ${p.name}`}
            >
              <BrowserMock project={p} size="sm" />
              <div className="proj-thumb-foot">
                <span className="proj-thumb-name">{p.name}</span>
                <span className="proj-thumb-arr">↗</span>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
