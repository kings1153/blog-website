/**
 * KINGS Editorial Journal - Master Article & Authors Dataset
 */

const KINGS_ARTICLES = [
  {
    id: "lead-01",
    title: "The Architecture of Silence: Why Modern Spaces Must Reclaim Emptiness",
    slug: "architecture-of-silence",
    leadStory: true,
    featured: true,
    trending: true,
    category: "Architecture",
    readTime: "7 min read",
    date: "October 4, 2026",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
    author: {
      name: "Lord Julian Vance",
      role: "Architectural Theorist & Senior Editor",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    excerpt: "In an era of relentless sensory stimuli, the greatest luxury of the 21st century is not ornamentation or scale, but deliberate, reverberating spatial quietude.",
    tags: ["Minimalism", "Urban Design", "Philosophy", "Living"],
    content: `
      <p class="article-lead">We live in a cacophony disguised as hyper-connectivity. Every surface reflects a screen, every public concourse vibrates with programmed acoustic textures, and our residential spaces have become repositories of ambient noise.</p>
      
      <p>True luxury has always been synonymous with scarcity. When gold was scarce, palaces were gilded. When industrial textiles were rare, tapestry dictated nobility. Today, in our hyper-accelerated civilization, the scarcest resource on Earth is neither material nor computational; it is spatial and acoustic quietude.</p>
      
      <blockquote class="editorial-pullquote">
        "Space without noise is not void; it is the canvas where human contemplation first learns to breathe."
      </blockquote>
      
      <h3>The Monastic Blueprint in Contemporary Metropolis</h3>
      <p>Consider the courtyards of Kyoto or the cloistered corridors of medieval monastic foundations in Burgundy. These were not constructed merely for defense or theology; they were engineered as spatial filters. The acoustics were calculated to swallow low-frequency rumble while amplifying the transient murmur of water and wind through foliage.</p>
      
      <p>Contemporary architects—from Tadao Ando to John Pawson—have demonstrated that cast concrete, honed limestone, and unbroken vertical glass can induce a neurological deceleration in the dweller. The eye ceases to dart across fractured geometries. Heart rates drop; cognitive bandwidth returns.</p>
      
      <h3>The Five Principles of Negative Space</h3>
      <p>When curating the private domicile or the civic sanctuary, five immutable disciplines govern the architecture of silence:</p>
      <ul>
        <li><strong>Acoustic Decoupling:</strong> Heavy mass materials layered with intentional air voids to dissolve environmental dissonance.</li>
        <li><strong>Continuous Sightlines:</strong> Visual corridors extending at least thirty paces without jarring decorative interruptions.</li>
        <li><strong>Natural Light as Form:</strong> Shadow articulation replacing paint, allowing the passage of the sun to serve as the only dynamic artwork.</li>
        <li><strong>Subtractive Materiality:</strong> Limiting each interior volume to no more than three primary natural materials (e.g., cedar, blackened bronze, travertine).</li>
        <li><strong>The Absence of Machinery:</strong> Concealing HVAC, conduits, and electronic interfaces within seamless architectural reveals.</li>
      </ul>
      
      <p>To design for silence is ultimately an act of civilizational resistance. It asserts that our interior lives deserve dignity, and that true kingship is mastery over one's own attention.</p>
    `
  },
  {
    id: "tech-01",
    title: "Autonomous Sovereignty: The Post-Cloud Era and the Return to Local Compute",
    slug: "autonomous-sovereignty-post-cloud",
    leadStory: false,
    featured: true,
    trending: true,
    category: "Technology",
    readTime: "9 min read",
    date: "October 2, 2026",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Dr. Alistair Thorne",
      role: "Fellow at the Oxford Cybernetics Institute",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    excerpt: "Why the next frontier of high-agency technological power belongs to neural silicon running locally in bespoke private sanctuaries rather than rented corporate servers.",
    tags: ["Artificial Intelligence", "Hardware", "Sovereignty", "Privacy"],
    content: `
      <p class="article-lead">For two decades, the digital world operated under a singular dogma: centralization. We surrendered our documents, memories, models, and intellectual property to an oligopoly of server farms in Virginia and Dublin.</p>
      
      <p>That paradigm is cracking under the weight of latency, surveillance, regulatory overreach, and the fundamental thirst for digital sovereignty. As high-density silicon reaches exponential energy-efficiency thresholds, sovereign individuals and elite institutions are executing an unprecedented retreat: running high-parameter intelligence entirely air-gapped on personal hardware.</p>
      
      <blockquote class="editorial-pullquote">
        "He who rents his reasoning from a foreign server is forever a tenant in the kingdom of someone else's mind."
      </blockquote>
      
      <h3>The Sovereign Stack</h3>
      <p>The sovereign compute architecture of 2026 does not depend on continuous uplink. It treats internet access as an occasional query pipeline rather than an umbilical cord. High-speed unified memory, open neural architectures, and encrypted localized knowledge graphs empower individuals to conduct research, strategic analysis, and creative synthesis without leaking a single byte of metadata.</p>
      
      <p>This is not merely technical isolationism; it is the re-establishment of intellectual sanctuary. In an era where digital footprints are continuously monetized, localized compute is the ultimate citadel of intellectual privacy.</p>
    `
  },
  {
    id: "phil-01",
    title: "On Classical Temperament: Stoic Restraint in the Age of Outrage Algorithms",
    slug: "classical-temperament-stoic-restraint",
    leadStory: false,
    featured: true,
    trending: false,
    category: "Philosophy",
    readTime: "6 min read",
    date: "September 29, 2026",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Lady Elena Rostova",
      role: "Philosophical Columnist & Classical Scholar",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
    },
    excerpt: "Marcus Aurelius never faced an algorithmic feed engineered by behavioral psychologists, yet Meditations remains the premier operational manual for psychological poise.",
    tags: ["Stoicism", "Epictetus", "Psychology", "Culture"],
    content: `
      <p class="article-lead">Outrage is the primary currency of the digital bazaar. It is fast, contagious, and remarkably profitable for platforms calibrated to capture reactive adrenaline.</p>
      
      <p>When Emperor Marcus Aurelius wrote to himself at night by candlelight along the frozen Danube frontier, he was wrestling with pestilence, imperial treason, and geopolitical instability. Yet his entries do not record indignation; they record ruthless emotional diagnostics.</p>
      
      <blockquote class="editorial-pullquote">
        "You have power over your mind—not outside events. Realize this, and you will find supreme strength."
      </blockquote>
      
      <h3>The Anatomy of Non-Reaction</h3>
      <p>To cultivate the classical temperament today requires deliberate friction. A refusal to comment prematurely, a refusal to ingest hot-takes during morning hours, and the cultivation of what ancient Hellenistic thinkers termed <em>ataraxia</em>—an untroubled, lucid state of equanimity.</p>
      
      <p>True aristocrats of the mind do not fight every provocation; they render the provocation irrelevant through the sovereign discipline of silence and long-horizon focus.</p>
    `
  },
  {
    id: "lead-02",
    title: "The Renaissance of Mechanical Horology: Craftsmanship Against Obsolescence",
    slug: "renaissance-mechanical-horology",
    leadStory: false,
    featured: true,
    trending: true,
    category: "Culture",
    readTime: "8 min read",
    date: "September 25, 2026",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Henri de Montmirail",
      role: "Horological Historian & Curator",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    },
    excerpt: "Why the ticking balance wheel of an independent Geneva watchmaker outshines every smart display conceived in Cupertino.",
    tags: ["Horology", "Craftsmanship", "Luxury", "Time"],
    content: `
      <p class="article-lead">A silicon smartwatch is destined for e-waste within four years of manufacture. A hand-beveled tourbillon manufactured in the Vallée de Joux will outlive three generations of owners while losing none of its poetic mechanical accuracy.</p>
      
      <p>The global renaissance of artisanal mechanical watchmaking is not an exercise in reactionary nostalgia. It is an aesthetic referendum on planned obsolescence. When an artisan spends three hundred hours polishing steel angles with gentian wood paste, time ceases to be an anxiety metric and becomes an object of contemplation.</p>
      
      <blockquote class="editorial-pullquote">
        "Digital watches count down your mortality; mechanical horology celebrates the eternal cadence of physics."
      </blockquote>
      
      <h3>Independent Watchmaking in the Modern Age</h3>
      <p>From Roger Smith on the Isle of Man to Philippe Dufour in Le Sentier, the masters of the craft reject assembly lines. Their calibers are signed, their tolerances measured in microns, and their creations remind us that the human hand remains the ultimate instrument of perfection.</p>
    `
  },
  {
    id: "lead-03",
    title: "High Agency Leadership: Governing Through Principles Rather Than Bureaucracy",
    slug: "high-agency-leadership-principles",
    leadStory: false,
    featured: false,
    trending: false,
    category: "Leadership",
    readTime: "5 min read",
    date: "September 21, 2026",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Lord Julian Vance",
      role: "Architectural Theorist & Senior Editor",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    excerpt: "How elite commanders across history, capital, and technology circumvent procedural sclerosis through direct delegation and immutable first-principles.",
    tags: ["Leadership", "Strategy", "Management", "High Agency"],
    content: `
      <p class="article-lead">Bureaucracy is the defense mechanism of mediocrity against accountability. When organizations swell, they replace intuition, judgment, and taste with committee votes and policy binders.</p>
      
      <p>High agency leadership is the antithesis of this paralysis. It requires individuals who bend reality through relentless execution, who take total ownership over outcomes, and who understand that the simplest path to monumental achievement is radical clarity of mission.</p>
      
      <blockquote class="editorial-pullquote">
        "A leader who waits for permission has already abdicated the crown."
      </blockquote>
      
      <h3>The Three Pillars of Sovereign Direction</h3>
      <ul>
        <li><strong>Small Strike Teams:</strong> Never task twelve people with what three obsessed specialists can execute over a weekend.</li>
        <li><strong>Skin in the Game:</strong> Consequences must fall squarely upon the decision-maker; asymmetric upside without downside produces reckless cowardice.</li>
        <li><strong>Aesthetic Standards as Strategy:</strong> Quality in typography, code, architecture, or hospitality is not decorative; it is the leading indicator of operational rigor.</li>
      </ul>
    `
  },
  {
    id: "cult-02",
    title: "The Lost Ritual of the Long Dinner: Reclaiming the Table as Civilization’s Crucible",
    slug: "lost-ritual-long-dinner",
    leadStory: false,
    featured: false,
    trending: true,
    category: "Culture",
    readTime: "6 min read",
    date: "September 18, 2026",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Lady Elena Rostova",
      role: "Philosophical Columnist & Classical Scholar",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
    },
    excerpt: "Why four uninterrupted hours around linen, candlelight, vintage Bordeaux, and unhurried dialectic is the antidote to modern social atomization.",
    tags: ["Gastronomy", "Culture", "Dialectic", "Community"],
    content: `
      <p class="article-lead">Fast food is not merely an assault on metabolic health; it is a spiritual concession. It reduces the most sacred communion known to humanity—the shared feast—into an expedited fueling transaction.</p>
      
      <p>Throughout Mediterranean and European history, from the symposiums of Athens to the salon dinners of Enlightenment Paris, civilization’s greatest ideas were not debated in parliamentary chambers. They were forged over bread, unhurried wine, and the civilized clash of distinct intellects.</p>
      
      <blockquote class="editorial-pullquote">
        "To break bread slowly is to declare that fellowship is more urgent than the clock."
      </blockquote>
      
      <p>Turn off the smart home speakers. Light beeswax candles that do not flicker with LED mimicry. Pour a vintage that demands twenty minutes of aeration. When conversation flows without an agenda, the human soul remembers what friendship actually means.</p>
    `
  },
  {
    id: "arch-02",
    title: "Brutalism and Majesty: The Poetics of Uncompromising Stone and Raw Concrete",
    slug: "brutalism-and-majesty-raw-concrete",
    leadStory: false,
    featured: true,
    trending: false,
    category: "Architecture",
    readTime: "8 min read",
    date: "September 14, 2026",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Lord Julian Vance",
      role: "Architectural Theorist & Senior Editor",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    excerpt: "Examining how board-formed concrete and monolithic geometries create secular cathedrals of shadow, permanence, and sublime gravity.",
    tags: ["Brutalism", "Concrete", "Design", "Heritage"],
    content: `
      <p class="article-lead">Popular culture often mistakes Brutalism for totalitarian bleakness. Yet when understood in its purest expression—<em>béton brut</em>—raw concrete is the most honest material discovered by humankind.</p>
      
      <p>Unlike curtain-wall glass towers that mirror the sky to camouflage their spiritual emptiness, brutalist structures announce their weight. They embrace gravity. They cast monumental shadows that shift with astronomical precision across the equinoxes.</p>
      
      <blockquote class="editorial-pullquote">
        "A building that fears its own weight will never evoke reverence."
      </blockquote>
      
      <p>In Barbican, in Chandigarh, in Boston's City Hall, we see the audacity of architects who dared to build for centuries rather than commercial leasing cycles. To inhabit these spaces is to feel small in the most inspiring way: grounded by human audacity.</p>
    `
  },
  {
    id: "tech-02",
    title: "The Typography of Thought: How Code Editors and Interfaces Sculpt Cognitive Limits",
    slug: "typography-of-thought-interfaces",
    leadStory: false,
    featured: false,
    trending: false,
    category: "Technology",
    readTime: "5 min read",
    date: "September 10, 2026",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Dr. Alistair Thorne",
      role: "Fellow at the Oxford Cybernetics Institute",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    excerpt: "We shape our typefaces, kerning tables, and visual editors; and thereafter, our visual environments dictate the elegance of our logic.",
    tags: ["Typography", "Design Systems", "Code", "Cognition"],
    content: `
      <p class="article-lead">When Wittgenstein observed that the limits of language mean the limits of one's world, he could not have anticipated that millions of engineers would spend their lives staring at fixed-width monospaced glyphs on emissive glass.</p>
      
      <p>The visual rhythm of code and prose directly conditions neural fatigue. The subtle geometry of a semicolon, the ligature that unites comparison operators, and the contrast ratio between comments and keywords determine whether an engineer endures cognitive exhaustion after two hours or sustains effortless flow for six.</p>
      
      <blockquote class="editorial-pullquote">
        "Clarity of interface is the prerequisite for clarity of conception."
      </blockquote>
      
      <p>Invest in bespoke type. Calibrate your ambient luminescence. Treat the digital workspace with the same veneration that a Japanese lacquer master accords to his wooden chisels.</p>
    `
  }
];

// Publication Categories & Counts
const KINGS_CATEGORIES = [
  { name: "All", slug: "all", count: KINGS_ARTICLES.length },
  { name: "Architecture", slug: "architecture", count: KINGS_ARTICLES.filter(a => a.category === "Architecture").length },
  { name: "Technology", slug: "technology", count: KINGS_ARTICLES.filter(a => a.category === "Technology").length },
  { name: "Philosophy", slug: "philosophy", count: KINGS_ARTICLES.filter(a => a.category === "Philosophy").length },
  { name: "Culture", slug: "culture", count: KINGS_ARTICLES.filter(a => a.category === "Culture").length },
  { name: "Leadership", slug: "leadership", count: KINGS_ARTICLES.filter(a => a.category === "Leadership").length }
];

// Authors & Masthead
const KINGS_MASTHEAD = [
  {
    name: "Lord Julian Vance",
    role: "Editor-in-Chief & Founder",
    bio: "Architectural critic, fellow of the Royal Society of Arts, and author of 'The Geometry of Contemplation'.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    location: "London / Milan",
    articlesCount: 48
  },
  {
    name: "Lady Elena Rostova",
    role: "Senior Philosophical Editor",
    bio: "Classicist and translator specializing in late Hellenistic ethics, dialogic literature, and aesthetic philosophy.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    location: "Vienna / Paris",
    articlesCount: 36
  },
  {
    name: "Dr. Alistair Thorne",
    role: "Director of Cybernetics & Deep Tech",
    bio: "Pioneer in sovereign local intelligence, post-quantum cryptography, and neuro-symbolic systems.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    location: "Oxford / Zurich",
    articlesCount: 29
  },
  {
    name: "Henri de Montmirail",
    role: "Horology & Craft Curator",
    bio: "Historian of artisanal timekeeping and consultant to premier Swiss independent master watchmakers.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    location: "Geneva / Tokyo",
    articlesCount: 22
  }
];

// Publication Stats
const KINGS_METRICS = {
  activeReaders: "142,000+",
  curatedEssays: "380+",
  globalEmbassies: "46 Cities",
  printCirculation: "12,500 Ed."
};
