import {
  Brain,
  CheckCircle2,
  FileText,
  ImageIcon,
  Layers3,
  Lightbulb,
  ExternalLink,
  Link as LinkIcon,
  Network,
  Rocket,
  Sparkles,
  Target,
  Users,
  Wrench,
} from 'lucide-react';
import { projectData } from './data/projectData';

const base = (import.meta as any).env.BASE_URL as string;

function SectionHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p className="section-description">{description}</p>
    </div>
  );
}

function PlaceholderGalleryCard({ title, caption, placeholder }: { title: string; caption: string; placeholder: string }) {
  return (
    <div className="surface gallery-card">
      <div className="gallery-placeholder">
        <div className="gallery-placeholder-inner">
          <ImageIcon size={28} />
          <p>{placeholder}</p>
        </div>
      </div>
      <div className="gallery-body">
        <h3>{title}</h3>
        <p>{caption}</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="page-shell">
      <div className="page-container">
        <section className="hero surface hero-surface hero-two-col">
          <div className="hero-copy">
            <div className="template-pill">
              <Sparkles size={14} />
              MSIS 522 Final Project
            </div>
            <h1>{projectData.title}</h1>
            <p className="owner-line">{projectData.ownerLine}</p>
            <p className="hero-subtitle">{projectData.subtitle}</p>
            <p className="hero-summary">{projectData.executiveSummary}</p>

            <div className="badge-row">
              {projectData.badges.map((badge) => (
                <span key={badge} className="chip">
                  {badge}
                </span>
              ))}
            </div>

            <div className="link-row">
              {projectData.links.map((link) => (
                <a
                  key={`${link.label}-${link.url}`}
                  href={link.url.startsWith('/') ? `${base}${link.url.replace(/^\//, '')}` : link.url}
                  className={link.primary ? 'primary-link' : 'secondary-link'}
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkIcon size={16} />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="hero-visual">
            <img
              src={`${base}project-assets/roadmap-dashboard.png`}
              alt="WayVion roadmap dashboard showing module progression, streaks, and adapt controls"
              className="hero-screenshot"
            />
          </div>
        </section>

        <section className="try-live-section">
          <div className="try-live-header">
            <div>
              <p className="eyebrow">Interactive</p>
              <h2>Try WayVion live</h2>
            </div>
            <a
              href="https://pathfinderairoadmap.lovable.app"
              target="_blank"
              rel="noreferrer"
              className="open-new-tab-link"
            >
              Open in new tab <ExternalLink size={16} />
            </a>
          </div>
          <div className="browser-chrome">
            <div className="browser-dots">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
              <span className="browser-url">https://pathfinderairoadmap.lovable.app</span>
            </div>
            <iframe
              src="https://pathfinderairoadmap.lovable.app"
              title="WayVion Live App"
              className="live-iframe"
              loading="lazy"
            />
          </div>
        </section>

        <section>
          <SectionHeader
            eyebrow="Team"
            title="Founding Team"
            description=""
          />
          <div className="card-grid two-up">
            {projectData.members.map((member) => (
              <div key={`${member.name}-${member.role}`} className="surface padded-card team-card">
                <div className="team-avatar">{member.name.replace(/[[\]]/g, '').split(' ').filter(Boolean).map((part) => part[0]).join('').slice(0, 2).toUpperCase() || 'TM'}</div>
                <div>
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="body-copy compact">{member.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="two-col-grid">
          <div className="surface padded-card">
            <div className="card-heading">
              <div className="icon-box emerald-box">
                <Target size={18} />
              </div>
              <div>
                <p className="eyebrow">Problem</p>
                <h3>What problem are you trying to solve?</h3>
              </div>
            </div>
            <p className="body-copy">{projectData.problemStatement}</p>
            <div className="meta-grid">
              <div className="mini-panel">
                <p className="mini-label">Audience</p>
                <p>{projectData.audience}</p>
              </div>
              <div className="mini-panel">
                <p className="mini-label">Impact Goal</p>
                <p>{projectData.impactGoal}</p>
              </div>
              <div className="mini-panel">
                <p className="mini-label">Status</p>
                <p>{projectData.status}</p>
              </div>
            </div>
          </div>

          <div className="dark-card padded-card">
            <div className="card-heading">
              <div className="icon-box dark-icon-box">
                <Lightbulb size={18} />
              </div>
              <div>
                <p className="dark-eyebrow">Solution</p>
                <h3>What are you building?</h3>
              </div>
            </div>
            <p className="dark-copy">{projectData.solutionSummary}</p>
            <div className="method-row">
              {projectData.methods.map((method) => (
                <span key={method.name} className="dark-chip">
                  {method.name}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="surface instructions-surface">
          <div className="instruction-heading">
            <div className="icon-box cyan-box">
              <FileText size={22} />
            </div>
            <div>
              <p className="instruction-title">How to use WayVion</p>
              <p className="instruction-subtitle">Generate a personalized learning roadmap in four steps.</p>
            </div>
          </div>

          <div className="instruction-list">
            {projectData.instructions.map((instruction) => (
              <div key={instruction} className="instruction-card">
                <CheckCircle2 size={20} />
                <p>{instruction}</p>
              </div>
            ))}
          </div>

          <div className="metrics-grid">
            {projectData.metrics.map((metric) => (
              <div key={metric.label} className="metric-card">
                <p className="metric-label">{metric.label}</p>
                <p className="metric-value">{metric.value}</p>
                <p className="metric-note">{metric.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader
            eyebrow="Product"
            title="WayVion's Features Highlight"
            description=""
          />
          <div className="card-grid two-up">
            {projectData.features.map((feature) => (
              <div key={feature.title} className="surface padded-card feature-card-with-image">
                {feature.assetPath && (
                  <div className="feature-image-wrap">
                    <img src={`${base}${feature.assetPath.replace(/^\//, '')}`} alt={feature.title} className="feature-image" />
                  </div>
                )}
                <div className="icon-box cyan-box">
                  <Rocket size={18} />
                </div>
                <h3>{feature.title}</h3>
                <p className="body-copy compact">{feature.description}</p>
                <div className="check-list">
                  {feature.highlights.map((highlight) => (
                    <div key={highlight} className="check-item">
                      <CheckCircle2 size={16} />
                      <p>{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="two-col-grid">
          <div className="surface padded-card">
            <div className="card-heading">
              <div className="icon-box lab-box">
                <Wrench size={18} />
              </div>
              <div>
                <p className="eyebrow">Stack</p>
                <h3>Full Stack App</h3>
              </div>
            </div>
            <div className="stack-list">
              {projectData.stack.map((group) => (
                <div key={group.category} className="stack-card">
                  <div className="stack-title-row">
                    <Layers3 size={16} />
                    <h4>{group.category}</h4>
                  </div>
                  <div className="badge-row compact-row">
                    {group.tools.map((tool) => (
                      <span key={tool} className="chip">
                        {tool}
                      </span>
                    ))}
                  </div>
                  <p className="body-copy compact">{group.note}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="surface padded-card">
            <div className="card-heading">
              <div className="icon-box violet-box">
                <Brain size={18} />
              </div>
              <div>
                <p className="eyebrow">Methods</p>
                <h3>WayVion's Techniques</h3>
              </div>
            </div>
            <div className="method-grid">
              {projectData.methods.map((method) => (
                <div key={method.name} className="method-card">
                  <div className="method-icon">
                    <Sparkles size={14} />
                  </div>
                  <div>
                    <p className="method-title">{method.name}</p>
                    <p className="method-note">{method.note}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="methods-flowchart">
              <img
                src={`${base}project-assets/user-workflow-flowchart.png`}
                alt="User workflow: Create Roadmap, Complete Courses, Provide Feedback, AI Adapts Learning Path"
                className="methods-flowchart-image"
              />
            </div>
          </div>
        </section>

        <section>
          <div className="surface padded-card">
            <div className="card-heading">
              <div className="icon-box lab-box">
                <Network size={18} />
              </div>
              <div>
                <p className="eyebrow">Architecture</p>
                <h3>How WayVion Works</h3>
              </div>
            </div>
            <div className="architecture-list">
              {projectData.architecture.map((step, index) => (
                <div key={step.title} className="architecture-card">
                  <div className="step-badge">{index + 1}</div>
                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="methods-flowchart">
              <img
                src={`${base}project-assets/ai-agents-orchestra.png`}
                alt="The Orchestra: 4 Specialized AI Agents — Curriculum Architect, Resource Curator, Performance Evaluator, Quiz/Flashcard Gen"
                className="methods-flowchart-image"
              />
            </div>
          </div>
        </section>

        <section>
          <SectionHeader
            eyebrow="Gallery"
            title="Snapshots from WayVion Roadmap Creation, Adaptation and Usage"
            description=""
          />
          <div className="card-grid two-up">
            {projectData.gallery.map((item) =>
              item.assetPath ? (
                <div key={item.title} className="surface gallery-card">
                  <div className="gallery-image-wrap">
                    <img src={`${base}${item.assetPath.replace(/^\//, '')}`} alt={item.title} className="gallery-image" />
                  </div>
                  <div className="gallery-body">
                    <h3>{item.title}</h3>
                    <p>{item.caption}</p>
                  </div>
                </div>
              ) : (
                <PlaceholderGalleryCard
                  key={item.title}
                  title={item.title}
                  caption={item.caption}
                  placeholder={item.placeholder ?? 'Add a visual asset here'}
                />
              ),
            )}
          </div>
        </section>

        <section className="closing-card">
          <div>
            <p className="dark-eyebrow">Conclusion</p>
            <h2>A fully-personalized and adaptive learning assistant</h2>
            <p>
              Unlike ChatGPT or Claude, WayVion does not just answer questions — it builds a structured, sequenced learning path with real verified resources, adapts in real time based on your performance, and remembers where you left off. Unlike online learning platforms like Coursera or Udemy, WayVion is not locked to a fixed library or pre-defined syllabus — it covers any topic, budgets time to your schedule, and restructures your roadmap when you struggle.
            </p>
          </div>

          <div className="card-grid two-up">
            <div className="closing-mini-card">
              <div className="icon-box dark-icon-box">
                <Users size={18} />
              </div>
              <h3>Who benefits?</h3>
              <ul className="closing-list">
                <li>Self-directed learners who need structure</li>
                <li>Students preparing for exams or new skills</li>
                <li>Corporate teams upskilling on demand</li>
                <li>Educators assigning guided learning paths</li>
              </ul>
            </div>
            <div className="closing-mini-card">
              <div className="icon-box dark-icon-box">
                <Target size={18} />
              </div>
              <h3>What changes?</h3>
              <ul className="closing-list">
                <li>No more searching for resources or guessing what to study next</li>
                <li>Adaptive, time-budgeted roadmaps replace unstructured browsing</li>
                <li>Quizzes and progress tracking keep learners accountable</li>
                <li>Reduced time-to-competency across any topic</li>
              </ul>
            </div>
            <div className="closing-mini-card">
              <div className="icon-box dark-icon-box">
                <Layers3 size={18} />
              </div>
              <h3>Why this build?</h3>
              <ul className="closing-list">
                <li>4 specialized AI agents orchestrate curriculum, resources, evaluation, and quizzes</li>
                <li>10-stage resource pipeline scores content for quality, difficulty, and fit</li>
                <li>Live web search — not a static library</li>
                <li>Credible where LLMs hallucinate links and fixed platforms cannot adapt</li>
              </ul>
            </div>
            <div className="closing-mini-card">
              <div className="icon-box dark-icon-box">
                <Rocket size={18} />
              </div>
              <h3>What is next?</h3>
              <ul className="closing-list">
                <li>Enterprise workforce upskilling with team analytics</li>
                <li>University-wide rollouts for professors and classes</li>
                <li>Certification partnerships for verified outcomes</li>
                <li>Multi-language support for global reach</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
