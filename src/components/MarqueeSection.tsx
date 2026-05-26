import { Fragment } from 'react'

const items = [
  'Saved 750+ hours daily',
  'Invoices: 5K → 16K per day',
  'Contract discovery: 5 min → 30 sec',
  'Poster creation: weeks → 3 min',
  '98% attendance accuracy',
  '10x faster bot deployment',
  '40% faster contract turnaround',
  '30,000+ daily check-ins',
]

export default function MarqueeSection() {
  const all = [...items, ...items]
  return (
    <section className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {all.map((item, i) => (
          <Fragment key={i}>
            <span>{item}</span>
            <span className="m-dot">●</span>
          </Fragment>
        ))}
      </div>
    </section>
  )
}
