import { useState } from "react";
import "./App.css";

// App = root component for the entire page
function App() {
  return (
    <div className="app">
      {/* Navigation bar at the top */}
      <Navbar />

      {/* All sections in a single-page layout */}
      <main>
        <Hero />
        <VisionMission />
        <MarketInsights />
        <VehicleSpecs />
        <SafetyUSP />
        <FactoryProduction />
        <QualityControl />
        <Portfolio />
        <Financials />
        <FuturePlans />
        <Contact />
      </main>

      {/* Floating chatbot widget (bottom-right) */}
      <ChatbotWidget />
    </div>
  );
}

/* ---------------- NAVBAR ---------------- */

function Navbar() {
  const sections = [
    { id: "hero", label: "Home" },
    { id: "vision", label: "Vision" },
    { id: "market", label: "Market" },
    { id: "vehicle", label: "Vehicle" },
    { id: "factory", label: "Factory" },
    { id: "quality", label: "Quality" },
    { id: "portfolio", label: "Services" },
    { id: "financials", label: "Financials" },
    { id: "future", label: "Future" },
    { id: "contact", label: "Contact" },
  ];

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="navbar">
      <div className="navbar-left">
        {/* Simple logo for now, can be replaced with an image later */}
        <div className="logo-circle">AM</div>
        <span className="brand-name">Agnipankh Motors</span>
      </div>

      <nav className="navbar-links">
        {sections.map((s) => (
          <button
            key={s.id}
            className="nav-link"
            onClick={() => handleScroll(s.id)}
          >
            {s.label}
          </button>
        ))}
      </nav>
    </header>
  );
}

/* ---------------- SECTIONS ---------------- */

function Hero() {
  return (
    <section id="hero" className="section hero">
      <div className="hero-content">
        <div className="hero-tagline-pill">
          <span className="hero-dot" />
          Electric • Off-Road • Made in India
        </div>

        <h1>
          Unleash <span className="accent">Off-Road Electric Power</span>
        </h1>

        <p>
          Agnipankh Motors Pvt. Ltd. is building a new breed of Indian off-road
          EVs — ultra-torquey, lightweight, and engineered from scratch by a
          passionate student team for brutal terrain and serious fun.
        </p>

        <div className="hero-stats">
          <StatBox label="0–80 km/h" value="Brutal Torque" />
          <StatBox label="Battery" value="9 kWh • 70–80 km" />
          <StatBox label="Capacity" value="4,000 units / year" />
        </div>

        <div className="hero-buttons">
          <a href="#vehicle" className="btn primary">
            See the Machine
          </a>
          <a href="#portfolio" className="btn ghost">
            Ownership Experience
          </a>
        </div>
      </div>

      <div className="hero-car-card">
        <div className="hero-car-float">
          <div className="hero-car-outline" />
          <div className="hero-speed-ring">
            <span>EV ATV</span>
            <span>80 km/h</span>
            <span>900 Nm</span>
          </div>
        </div>

        <div className="hero-car-specs">
          <h3>Track-Ready Prototype</h3>
          <p>High-strength steel roll cage, optimized for roll-over safety.</p>
          <p>Designed for adventure tourism, farmland, and utility work.</p>
        </div>
      </div>
    </section>
  );
}

function StatBox({ label, value }) {
  return (
    <div className="stat-box">
      <span className="stat-label">{label}</span>
      <span className="stat-value">{value}</span>
    </div>
  );
}

function VisionMission() {
  return (
    <section id="vision" className="section">
      <h2>Vision, Mission & Goal</h2>
      <div className="grid-3">
        <Card title="Vision">
          <p>
            To become India’s most trusted manufacturer of rugged, affordable,
            and high-reliability off-road vehicles built for the toughest terrain.
          </p>
        </Card>
        <Card title="Mission">
          <p>
            To design and deliver safe, reliable, and affordable off-road vehicles
            that empower users—farmers, riders, businesses, and families—to travel
            confidently across any terrain.
          </p>
        </Card>
        <Card title="Goal">
          <p>
            To build India’s leading off-road mobility brand with a strong lineup
            of user-friendly vehicles serving both adventure and utility needs.
          </p>
        </Card>
      </div>
    </section>
  );
}

function MarketInsights() {
  return (
    <section id="market" className="section">
      <h2>Indian Market Insights & Opportunities</h2>
      <div className="grid-2">
        <Card title="Indian Insights">
          <ul className="bullet-list">
            <li>Underpenetrated but high-potential off-road EV segment</li>
            <li>Massive opportunity in rural & utility use cases</li>
            <li>Growing adventure tourism ecosystem</li>
            <li>Domestic manufacturing gap = opportunity</li>
            <li>Rising acceptance of electric vehicles</li>
            <li>Lack of safety standards in low-cost imports</li>
          </ul>
        </Card>
        <Card title="Customer Needs">
          <ul className="bullet-list">
            <li>Smart features & diagnostics</li>
            <li>Longer battery life & lower running cost</li>
            <li>Affordable purchase price</li>
            <li>High performance & torque for tough terrain</li>
            <li>Reliable after-sales service & support</li>
          </ul>
        </Card>
      </div>
      <p className="highlight-text">
        <strong>Problem Statement:</strong> India needs a powerful off-road
        vehicle that’s versatile, economical, and engineered specifically for
        Indian terrain.
      </p>
    </section>
  );
}

function VehicleSpecs() {
  return (
    <section id="vehicle" className="section">
      <h2>Flagship Off-Road EV – Key Specifications</h2>
      <div className="grid-2">
        <Card title="Performance">
          <ul className="spec-list">
            <li>
              <span>Top Speed</span>
              <span>80 km/h</span>
            </li>
            <li>
              <span>Peak Torque</span>
              <span>900 Nm</span>
            </li>
            <li>
              <span>Kerb Weight</span>
              <span>190 kg</span>
            </li>
            <li>
              <span>Hitch Towing Capacity</span>
              <span>1500 kg</span>
            </li>
          </ul>
        </Card>
        <Card title="Electric Powertrain">
          <ul className="spec-list">
            <li>
              <span>Battery Capacity</span>
              <span>9 kWh</span>
            </li>
            <li>
              <span>Range</span>
              <span>70–80 km*</span>
            </li>
            <li>
              <span>Vehicle Diagnostics</span>
              <span>Mobile App Integration</span>
            </li>
            <li>
              <span>Use Cases</span>
              <span>Adventure, Agriculture, Utility</span>
            </li>
          </ul>
          <p className="footnote">
            *Range depends on terrain, load, and driving style.
          </p>
        </Card>
      </div>
      <div className="comparison-banner">
        <p>
          Optimized to deliver strong range and torque at a competitive price
          point compared to existing ATVs in the 5–11 kWh segment.
        </p>
      </div>
    </section>
  );
}

function SafetyUSP() {
  return (
    <section id="safety" className="section">
      <h2>Uncompromised Safety – Our USP</h2>
      <div className="grid-2">
        <Card title="Roll Cage & Structure">
          <ul className="bullet-list">
            <li>High-strength steel roll cage with reinforced joints</li>
            <li>Protects driver during extreme off-road conditions</li>
            <li>Rollover-resistant structure under impact</li>
            <li>Optimized load distribution and weld quality</li>
          </ul>
        </Card>
        <Card title="Smart Safety">
          <ul className="bullet-list">
            <li>Battery monitoring via diagnostics app</li>
            <li>Pre-ride health checks for key components</li>
            <li>Support for training workshops & safety briefings</li>
          </ul>
        </Card>
      </div>
    </section>
  );
}

function FactoryProduction() {
  return (
    <section id="factory" className="section">
      <h2>Factory & Production Readiness</h2>
      <div className="grid-2">
        <Card title="Facility & Layout">
          <p>
            Located at Badhalwadi, Talegaon Dabhade (Pune), the facility is
            designed with dedicated storage zones for roll cages, electricals,
            mechanical powertrain, machined components, and body parts, along
            with QC/QA, washing center, maintenance, and OEM storage.
          </p>
        </Card>
        <Card title="Production Scheduling">
          <ul className="bullet-list">
            <li>Installed capacity: 4,000 units annually</li>
            <li>Quarter-wise planning with calibrated single-shift operations</li>
            <li>Electricity consumption planning (~2630 kW/day)</li>
            <li>Month-wise production & sales tracking</li>
          </ul>
        </Card>
      </div>
    </section>
  );
}

function QualityControl() {
  return (
    <section id="quality" className="section">
      <h2>Quality Control & Assurance</h2>
      <div className="grid-3">
        <Card title="Incoming Quality Control">
          <p>Ensuring quality from the very first component received.</p>
        </Card>
        <Card title="In-Process & End-Of-Line">
          <p>
            Continuous monitoring during assembly and final validation of
            performance and safety before dispatch.
          </p>
        </Card>
        <Card title="Supplier QA & Improvement">
          <p>
            Supplier quality assurance, training, and process enhancement for
            consistent high reliability.
          </p>
        </Card>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="section">
      <h2>Ownership Portfolio & Support</h2>
      <div className="grid-3">
        <Card title="Service & Warranty">
          <ul className="bullet-list">
            <li>Regular maintenance schedules</li>
            <li>5 complimentary services</li>
            <li>2-year warranty on key components</li>
            <li>24×7 helpdesk support</li>
          </ul>
        </Card>
        <Card title="Customer Experience">
          <ul className="bullet-list">
            <li>Test drives at experience centers</li>
            <li>Training workshops for safe operation</li>
            <li>Accessories and customization options</li>
          </ul>
        </Card>
        <Card title="Experience Centers">
          <p>
            B2C experience centers planned across India including Maharashtra,
            Goa, Rajasthan, Uttarakhand, Tamil Nadu, Kerala, Assam, Madhya
            Pradesh, Manipur, and more.
          </p>
        </Card>
      </div>
    </section>
  );
}

function Financials() {
  return (
    <section id="financials" className="section">
      <h2>Financial Snapshot</h2>
      <div className="grid-2">
        <Card title="Key Metrics">
          <ul className="spec-list">
            <li>
              <span>Total Income</span>
              <span>₹268 Cr</span>
            </li>
            <li>
              <span>Total Expenses</span>
              <span>₹229.83 Cr</span>
            </li>
            <li>
              <span>Net Profit</span>
              <span>14.24%</span>
            </li>
            <li>
              <span>EBITDA</span>
              <span>25.97%</span>
            </li>
            <li>
              <span>Breakeven Units</span>
              <span>3431</span>
            </li>
          </ul>
        </Card>
        <Card title="Investment Highlights">
          <ul className="bullet-list">
            <li>Initial investment required ~₹32 Cr</li>
            <li>Amount to be raised: ₹20 Cr</li>
            <li>Equity offered: 4%</li>
            <li>Projected ROI in first 5 years: 15%</li>
            <li>Post-money valuation ~₹536 Cr</li>
          </ul>
        </Card>
      </div>
    </section>
  );
}

function FuturePlans() {
  return (
    <section id="future" className="section">
      <h2>Future Plans & Roadmap</h2>
      <div className="grid-2">
        <Card title="Product & Technology">
          <ul className="bullet-list">
            <li>Introducing 4×4 versions for extreme terrain</li>
            <li>Improving battery technology and range</li>
            <li>Automated factory and smarter production lines</li>
          </ul>
        </Card>
        <Card title="Risk Management">
          <p>
            Robust preparedness plans for force majeure events such as heavy
            rainfall and flooding in Talegaon MIDC: elevated storage,
            pre-monsoon drainage cleaning, safety stocks of 15–20 days, and
            strengthened insurance coverage.
          </p>
        </Card>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact & Connect</h2>
      <p className="contact-intro">
        Interested in our off-road EV platform, partnerships, or investments?
        Reach out and we’ll get back to you.
      </p>
      {/* For now a static contact block. You can wire this to a backend later. */}
      <div className="contact-grid">
        <div className="contact-card">
          <h3>Email</h3>
          <p>info@agnipankhmotors.com</p>
        </div>
        <div className="contact-card">
          <h3>Location</h3>
          <p>Badhalwadi, Talegaon Dabhade, Pune, Maharashtra, India</p>
        </div>
        <div className="contact-card">
          <h3>Social</h3>
          <p>Instagram · LinkedIn · YouTube (coming soon)</p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- REUSABLE CARD COMPONENT ---------------- */

function Card({ title, children }) {
  return (
    <div className="card">
      {title && <h3 className="card-title">{title}</h3>}
      <div className="card-body">{children}</div>
    </div>
  );
}

/* ---------------- CHATBOT WIDGET ----------------
   New UI: looks more like a chat assistant
-------------------------------------------------- */

const initialMessages = [
  {
    from: "bot",
    text: "Hi, I’m the Agnipankh Bot. Ask me about specs, range, pricing or factory details!",
  },
];

function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");

  const handleToggle = () => setIsOpen((prev) => !prev);

  const handleSend = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMessage = { from: "user", text: trimmed };
    const botMessage = { from: "bot", text: getBotReply(trimmed) };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  };

  return (
    <>
      {/* Floating circular chat button */}
      <button className="chat-fab" onClick={handleToggle} aria-label="Chatbot">
        <span className="chat-fab-icon">💬</span>
        <span className="chat-fab-pulse-dot" />
      </button>

      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-header-left">
              <div className="chat-avatar">
                <span className="chat-avatar-icon">🤖</span>
              </div>
              <div>
                <div className="chat-title">Agnipankh Bot</div>
                <div className="chat-subtitle">
                  Online • Ask me about the vehicle
                </div>
              </div>
            </div>
            <button className="chat-close" onClick={handleToggle}>
              ✕
            </button>
          </div>

          <div className="chat-body">
            {messages.map((m, index) => (
              <div
                key={index}
                className={`chat-message-row ${
                  m.from === "user"
                    ? "chat-message-row-user"
                    : "chat-message-row-bot"
                }`}
              >
                {m.from === "bot" && (
                  <div className="chat-bubble-avatar">🤖</div>
                )}
                <div
                  className={`chat-message ${
                    m.from === "user"
                      ? "chat-message-user"
                      : "chat-message-bot"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <form className="chat-input-row" onSubmit={handleSend}>
            <input
              type="text"
              placeholder="Type your question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="btn primary small">
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}

// Simple rule-based bot – THIS is what you will replace with an LLM call later.
function getBotReply(message) {
  const msg = message.toLowerCase();

  // Very simple keyword-based logic
  if (msg.includes("top speed") || msg.includes("speed")) {
    return "The current prototype has a top speed of about 80 km/h on suitable terrain.";
  }
  if (msg.includes("range")) {
    return "The EV ATV offers a range of roughly 70–80 km on a full charge, depending on load and terrain.";
  }
  if (msg.includes("battery")) {
    return "We use a 9 kWh battery pack optimized for off-road torque and range.";
  }
  if (msg.includes("torque")) {
    return "Peak torque is approximately 900 Nm, giving strong pulling and climbing power.";
  }
  if (msg.includes("towing") || msg.includes("hitch")) {
    return "The hitch setup can tow up to around 1500 kg under recommended conditions.";
  }
  if (msg.includes("price")) {
    return "Model pricing is projected in the ~₹6.7 Lakh range for the flagship configuration (subject to change).";
  }
  if (msg.includes("factory") || msg.includes("plant") || msg.includes("location")) {
    return "Our planned facility is at Badhalwadi, Talegaon Dabhade, Pune, with a capacity of around 4,000 units per year.";
  }
  if (msg.includes("warranty") || msg.includes("service")) {
    return "We are targeting 5 free services and a 2-year warranty for early customers, along with training workshops.";
  }

  // Default reply
  return "Great question! Right now I’m a simple demo bot. Try asking about top speed, range, battery, torque, towing, price, factory, or warranty.";
}

export default App;
