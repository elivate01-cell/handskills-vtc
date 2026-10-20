import { useState } from 'react';

const TRADES = [
  { n: 'Tailoring', tools: ['Tape rule', 'Scissors', 'Machine basics'], fee: '₦45,000', dur: '6 months' },
  { n: 'Carpentry', tools: ['Planes', 'Saw', 'Joints manual'], fee: '₦52,000', dur: '8 months' },
  { n: 'Phone repair', tools: ['Solder iron', 'Multimeter', 'Screen kits'], fee: '₦58,000', dur: '4 months' },
  { n: 'Catering', tools: ['Knives', 'Gas burner', 'Fondant kit'], fee: '₦40,000', dur: '5 months' },
  { n: 'Welding', tools: ['Arc set', 'Gloves', 'Metal racks'], fee: '₦65,000', dur: '7 months' },
  { n: 'Hairdressing', tools: ['Clippers', 'Dryers', 'Braid stand'], fee: '₦38,000', dur: '5 months' },
];

const INTAKES = [
  ['January intake', 'Applications close Dec 20 · day & evening tracks'],
  ['May intake', 'Applications close Apr 25 · day track only'],
  ['September intake', 'Applications close Aug 22 · day & evening tracks'],
];

export default function App() {
  const [pick, setPick] = useState<string | null>(null);
  return (
    <div className="hv">
      <div className="top">
        <a className="brand" href="#top">HAND<span>SKILLS</span> <small>Vocational Training Centre</small></a>
        <nav className="tnav">
          <a href="#trades">Trades</a><a href="#fees">Fees</a><a href="#intakes">Intakes</a><a href="#enrol">Enrol</a>
        </nav>
        <a className="tcta" href="#enrol">Enrol now</a>
      </div>
      <header className="hero" id="top">
        <p className="kick">HANDS FIRST · CERTIFICATES SECOND · ABA ROAD, ABA</p>
        <h1>Learn a trade<br />with your <em>own hands.</em></h1>
        <p className="lede">Six trades, master craftsmen who correct your grip, and fees paid in parts. Nobody here learns from slides.</p>
        <div className="hbtns">
          <a className="btn solid" href="#enrol">Enrol</a>
          <a className="btn ghost" href="#trades">Pick a trade</a>
        </div>
      </header>
      <section className="trades" id="trades">
        <h2>Pick your trade</h2>
        <p className="tsub">Tap a trade to see its tool list. Tools are bought on campus at market price — no middleman.</p>
        <div className="trgrid">
          {TRADES.map((t) => (
            <button key={t.n} className={pick === t.n ? 'tcard on' : 'tcard'} onClick={() => setPick(pick === t.n ? null : t.n)} aria-pressed={pick === t.n}>
              <b>{t.n}</b>
              <span className="tdur">{t.dur}</span>
              {pick === t.n && (
                <span className="tdetails">
                  <span className="thead">Your first tools:</span>
                  {t.tools.map((tool) => <span key={tool} className="ttool">▸ {tool}</span>)}
                  <span className="tfee">{t.fee}</span>
                </span>
              )}
              {pick !== t.n && <span className="thint">Tap to see tools →</span>}
            </button>
          ))}
        </div>
      </section>
      <section className="quote">
        <div className="q-in">
          <p>“In my day we chased the master around his shop. Here he chases <b>you</b> — until your hand knows the work.”</p>
          <span className="qwho">— Chief Nwangwu, master welder, 38 years at the torch</span>
        </div>
      </section>
      <section className="fees" id="fees">
        <h2>Fee schedule</h2>
        <div className="fsplit">
          <div className="fcol">
            <h3>Day track</h3>
            <ul><li>8:30 AM – 2 PM, Mon–Fri</li><li>Fee per trade, paid in 3 parts</li><li>1st part at enrolment · 2nd at midterm · 3rd before certification</li><li>Tools fee separate, at market price</li></ul>
          </div>
          <div className="fcol eve">
            <h3>Evening track</h3>
            <ul><li>4 PM – 8 PM, Mon–Fri</li><li>Fee per trade, paid in 3 parts</li><li>For workers — attendance flexible with proof of shift</li><li>Same certification exam as day track</li></ul>
          </div>
        </div>
      </section>
      <section className="intakes" id="intakes">
        <h2>Intake dates</h2>
        <ul className="ilist">
          {INTAKES.map((i) => (
            <li key={i[0]}><b>{i[0]}</b><span>{i[1]}</span></li>
          ))}
        </ul>
      </section>
      <section className="enrol" id="enrol">
        <div className="ein">
          <h2>Enrol the WhatsApp way</h2>
          <p className="elede">Send “TRADE + NAME” to 0803 000 0000. The registrar replies with the next intake date, fee parts, and what to bring. No forms, no queue, no email.</p>
          <div className="ebtns"><a className="btn solid" href="#enrol">Chat the registrar</a><a className="btn ghost" href="#trades">Re-check the trades</a></div>
        </div>
      </section>
      <footer className="foot">
        <span>© {new Date().getFullYear()} Handskills VTC · 9 Aba Road, Aba, Abia State.</span>
        <span>PED Forge template draft · batch-3</span>
      </footer>
    </div>
  );
}