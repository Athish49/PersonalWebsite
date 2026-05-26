const items = [
  { year: '2025', name: 'Luddy Hackathon', meta: '1st Place — Indiana University' },
  { year: '2024', name: 'GEP Innovator Award', meta: 'GEP Worldwide · Innovation in AI' },
  { year: '2023', name: 'GEP Techathon', meta: '3rd Place — Internal Engineering' },
  { year: '2022', name: 'VITAP Hack', meta: '2nd Place — VIT Amaravathi' },
]

export default function Recognition() {
  return (
    <section className="recognition" id="recognition">
      <span className="eyebrow">
        <span className="eyebrow-num">04</span>
        <span className="eyebrow-line" />
        <span>Awards</span>
      </span>

      <div className="recog-grid">
        {items.map(item => (
          <article key={item.name} className="recog-item reveal">
            <span className="recog-year">{item.year}</span>
            <h3 className="recog-name">{item.name}</h3>
            <p className="recog-meta">{item.meta}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
