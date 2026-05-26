const CATEGORIES = [
  {
    num: '01',
    name: 'Programming & Tools',
    items: ['Python', 'SQL', 'Java', 'C++', 'Docker', 'Kubernetes', 'FastAPI', 'Bash', 'Git', 'Linux', 'CI/CD'],
  },
  {
    num: '02',
    name: 'AI / ML Engineering',
    items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'XGBoost', 'LightGBM', 'MLflow', 'Feature Engineering', 'MLOps'],
  },
  {
    num: '03',
    name: 'NLP & Generative AI',
    items: ['LangChain', 'LlamaIndex', 'RAG', 'Fine-Tuning', 'Agentic Workflows', 'MCP', 'Tool Use', 'Guardrails', 'LoRA'],
  },
  {
    num: '04',
    name: 'Data & Analytics',
    items: ['PySpark', 'dbt', 'Airflow', 'ETL Pipelines', 'A/B Testing', 'Statistical Modeling', 'Power BI', 'Tableau'],
  },
  {
    num: '05',
    name: 'Databases & Cloud',
    items: ['PostgreSQL', 'MongoDB', 'Snowflake', 'BigQuery', 'Elasticsearch', 'Qdrant', 'FAISS', 'AWS', 'Azure', 'GCP'],
  },
]

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <span className="eyebrow">
        <span className="eyebrow-num">06</span>
        <span className="eyebrow-line" />
        <span>Skills</span>
      </span>

      <h2 className="skills-headline">
        The full stack.<br />
        <span className="serif italic">Every tool I've shipped with.</span>
      </h2>

      <div className="skills-grid">
        {CATEGORIES.map(cat => (
          <article key={cat.name} className="skills-card reveal">
            <header className="skills-cat-head">
              <span className="skills-cat-num">{cat.num}</span>
              <span className="skills-cat-name">{cat.name}</span>
            </header>
            <div className="skills-pills">
              {cat.items.map(skill => (
                <span key={skill} className="skills-pill">{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
