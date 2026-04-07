import React, { useState } from 'react'

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@600;700&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    font-family: 'Inter', -apple-system, sans-serif;
    background: #0a0e1a;
    color: #e2e8f0;
    min-height: 100vh;
    position: relative;
  }

  /* Explorer bg icons */
  .bg-icons {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    pointer-events: none;
    z-index: 0;
    overflow: hidden;
  }

  .bg-icon {
    position: absolute;
    font-size: 80px;
    opacity: 0.03;
    user-select: none;
  }

  .bg-icon:nth-child(1) { top: 5%; left: 8%; font-size: 120px; transform: rotate(-15deg); }
  .bg-icon:nth-child(2) { top: 12%; right: 10%; font-size: 90px; transform: rotate(20deg); }
  .bg-icon:nth-child(3) { top: 28%; left: 3%; font-size: 70px; transform: rotate(10deg); }
  .bg-icon:nth-child(4) { top: 35%; right: 5%; font-size: 110px; transform: rotate(-8deg); }
  .bg-icon:nth-child(5) { top: 50%; left: 12%; font-size: 85px; transform: rotate(25deg); }
  .bg-icon:nth-child(6) { top: 55%; right: 15%; font-size: 65px; transform: rotate(-20deg); }
  .bg-icon:nth-child(7) { top: 68%; left: 5%; font-size: 100px; transform: rotate(5deg); }
  .bg-icon:nth-child(8) { top: 75%; right: 8%; font-size: 75px; transform: rotate(30deg); }
  .bg-icon:nth-child(9) { top: 85%; left: 18%; font-size: 95px; transform: rotate(-12deg); }
  .bg-icon:nth-child(10) { top: 92%; right: 12%; font-size: 80px; transform: rotate(15deg); }
  .bg-icon:nth-child(11) { top: 15%; left: 45%; font-size: 60px; transform: rotate(-25deg); }
  .bg-icon:nth-child(12) { top: 42%; left: 55%; font-size: 70px; transform: rotate(18deg); }
  .bg-icon:nth-child(13) { top: 62%; left: 40%; font-size: 90px; transform: rotate(-5deg); }
  .bg-icon:nth-child(14) { top: 78%; left: 50%; font-size: 55px; transform: rotate(22deg); }

  .content-wrap {
    position: relative;
    z-index: 1;
  }

  .hero {
    text-align: center;
    padding: 80px 24px 40px;
    background: linear-gradient(180deg, #0f1629 0%, #0a0e1a 100%);
    position: relative;
    overflow: hidden;
  }

  .hero::before {
    content: '';
    position: absolute;
    top: -200px;
    left: 50%;
    transform: translateX(-50%);
    width: 800px;
    height: 800px;
    background: radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%);
    pointer-events: none;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 16px;
    background: rgba(59,130,246,0.12);
    border: 1px solid rgba(59,130,246,0.25);
    border-radius: 100px;
    font-size: 13px;
    font-weight: 600;
    color: #60a5fa;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin-bottom: 24px;
  }

  .hero h1 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(36px, 6vw, 64px);
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 16px;
    background: linear-gradient(135deg, #fff 0%, #94a3b8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .hero h1 span {
    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .hero p {
    font-size: 18px;
    color: #94a3b8;
    max-width: 600px;
    margin: 0 auto 40px;
    line-height: 1.6;
  }

  .container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 24px 80px;
  }

  /* Section divider */
  .section-divider {
    display: flex;
    align-items: center;
    gap: 16px;
    margin: 64px 0 48px;
  }

  .section-divider::before,
  .section-divider::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(59,130,246,0.2), transparent);
  }

  .section-divider span {
    font-size: 32px;
  }

  /* Section title */
  .section-head {
    text-align: center;
    margin-bottom: 32px;
  }

  .section-head h2 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 28px;
    font-weight: 700;
    color: #f1f5f9;
    margin-bottom: 8px;
  }

  .section-head p {
    font-size: 15px;
    color: #64748b;
    max-width: 600px;
    margin: 0 auto;
  }

  /* Cards grid */
  .comparison {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-bottom: 48px;
  }

  @media (max-width: 768px) {
    .comparison { grid-template-columns: 1fr; }
    .buro-grid { grid-template-columns: 1fr !important; }
    .dividend-grid { grid-template-columns: 1fr !important; }
  }

  .card {
    background: #111827;
    border: 1px solid #1e293b;
    border-radius: 16px;
    padding: 32px;
    position: relative;
    overflow: hidden;
  }

  .card.dubai {
    border-color: rgba(59,130,246,0.2);
  }

  .card.malta {
    border-color: rgba(239,68,68,0.15);
  }

  .card.swiss {
    border-color: rgba(251,191,36,0.2);
  }

  .card.dubai::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  }

  .card.malta::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, #ef4444, #f97316);
  }

  .card.swiss::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, #f59e0b, #eab308);
  }

  .card-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 24px;
  }

  .card-icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
  }

  .card.dubai .card-icon { background: rgba(59,130,246,0.12); }
  .card.malta .card-icon { background: rgba(239,68,68,0.12); }
  .card.swiss .card-icon { background: rgba(251,191,36,0.12); }

  .card-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 22px;
    font-weight: 700;
    color: #f1f5f9;
  }

  .card-subtitle {
    font-size: 13px;
    color: #64748b;
    font-weight: 500;
  }

  /* Cost rows */
  .cost-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 0;
    border-bottom: 1px solid rgba(255,255,255,0.04);
  }

  .cost-row:last-child { border-bottom: none; }

  .cost-label {
    font-size: 14px;
    color: #94a3b8;
    font-weight: 500;
  }

  .cost-value {
    font-size: 15px;
    font-weight: 700;
    color: #f1f5f9;
    text-align: right;
  }

  .cost-value.green { color: #4ade80; }
  .cost-value.red { color: #f87171; }
  .cost-value.amber { color: #fbbf24; }

  .cost-note {
    font-size: 12px;
    color: #64748b;
    margin-top: 2px;
  }

  /* Total */
  .total-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0 0;
    margin-top: 8px;
    border-top: 2px solid rgba(255,255,255,0.08);
  }

  .total-label {
    font-size: 16px;
    font-weight: 700;
    color: #e2e8f0;
  }

  .total-value {
    font-size: 28px;
    font-weight: 900;
  }

  .total-value.dubai-total { color: #3b82f6; }
  .total-value.malta-total { color: #ef4444; }

  /* Savings banner */
  .savings {
    background: linear-gradient(135deg, rgba(74,222,128,0.08) 0%, rgba(59,130,246,0.08) 100%);
    border: 1px solid rgba(74,222,128,0.2);
    border-radius: 16px;
    padding: 32px;
    text-align: center;
    margin-bottom: 48px;
  }

  .savings-label {
    font-size: 14px;
    color: #4ade80;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 8px;
  }

  .savings-amount {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(36px, 5vw, 56px);
    font-weight: 700;
    color: #4ade80;
    margin-bottom: 4px;
  }

  .savings-sub {
    font-size: 15px;
    color: #94a3b8;
  }

  /* Feature grid */
  .features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 16px;
    margin-bottom: 48px;
  }

  .feature {
    background: #111827;
    border: 1px solid #1e293b;
    border-radius: 12px;
    padding: 24px;
  }

  .feature-icon {
    font-size: 28px;
    margin-bottom: 12px;
  }

  .feature h3 {
    font-size: 16px;
    font-weight: 700;
    color: #f1f5f9;
    margin-bottom: 6px;
  }

  .feature p {
    font-size: 13px;
    color: #94a3b8;
    line-height: 1.5;
  }

  /* Table comparison */
  .table-section {
    margin-bottom: 48px;
  }

  .table-section h2 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 28px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 24px;
    color: #f1f5f9;
  }

  .comp-table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    background: #111827;
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid #1e293b;
  }

  .comp-table th {
    padding: 16px 20px;
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #64748b;
    text-align: left;
    background: #0f172a;
  }

  .comp-table th:nth-child(2) { color: #60a5fa; }
  .comp-table th:nth-child(3) { color: #f87171; }

  .comp-table td {
    padding: 14px 20px;
    font-size: 14px;
    border-top: 1px solid rgba(255,255,255,0.04);
  }

  .comp-table td:first-child {
    color: #94a3b8;
    font-weight: 500;
  }

  .comp-table td:nth-child(2) {
    color: #e2e8f0;
    font-weight: 600;
  }

  .comp-table td:nth-child(3) {
    color: #94a3b8;
  }

  .comp-table tr:last-child td {
    font-weight: 700;
    font-size: 15px;
    border-top: 2px solid rgba(255,255,255,0.08);
  }

  .comp-table tr:last-child td:nth-child(2) { color: #4ade80; }
  .comp-table tr:last-child td:nth-child(3) { color: #f87171; }

  /* Yearly projection */
  .projection {
    margin-bottom: 48px;
  }

  .projection h2 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 28px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 32px;
    color: #f1f5f9;
  }

  .bars {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .bar-row {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .bar-year {
    width: 60px;
    font-size: 14px;
    font-weight: 600;
    color: #94a3b8;
    text-align: right;
    flex-shrink: 0;
  }

  .bar-track {
    flex: 1;
    height: 40px;
    background: #1e293b;
    border-radius: 8px;
    position: relative;
    overflow: hidden;
  }

  .bar-fill {
    height: 100%;
    border-radius: 8px;
    display: flex;
    align-items: center;
    padding: 0 12px;
    font-size: 13px;
    font-weight: 700;
    color: #fff;
    white-space: nowrap;
    transition: width 0.6s ease;
  }

  .bar-fill.dubai-bar {
    background: linear-gradient(90deg, #2563eb, #3b82f6);
  }

  .bar-fill.malta-bar {
    background: linear-gradient(90deg, #dc2626, #ef4444);
  }

  .bar-pair {
    display: flex;
    flex-direction: column;
    gap: 4px;
    flex: 1;
  }

  .bar-track.sm { height: 28px; }
  .bar-track.sm .bar-fill { font-size: 12px; }

  .bar-legend {
    display: flex;
    justify-content: center;
    gap: 32px;
    margin-top: 16px;
  }

  .bar-legend span {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    color: #94a3b8;
    font-weight: 500;
  }

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }

  .dot.blue { background: #3b82f6; }
  .dot.red { background: #ef4444; }

  /* Bureaucracy section */
  .buro-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-bottom: 48px;
  }

  .buro-step {
    display: flex;
    gap: 14px;
    padding: 16px 0;
    border-bottom: 1px solid rgba(255,255,255,0.04);
  }

  .buro-step:last-child { border-bottom: none; }

  .buro-num {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 800;
    flex-shrink: 0;
  }

  .card.dubai .buro-num {
    background: rgba(59,130,246,0.15);
    color: #60a5fa;
  }

  .card.malta .buro-num {
    background: rgba(239,68,68,0.15);
    color: #f87171;
  }

  .buro-text h4 {
    font-size: 14px;
    font-weight: 700;
    color: #f1f5f9;
    margin-bottom: 2px;
  }

  .buro-text p {
    font-size: 12px;
    color: #64748b;
    line-height: 1.4;
  }

  .buro-total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0 0;
    margin-top: 8px;
    border-top: 2px solid rgba(255,255,255,0.08);
  }

  .buro-total-label {
    font-size: 14px;
    font-weight: 600;
    color: #94a3b8;
  }

  .buro-total-value {
    font-size: 20px;
    font-weight: 800;
  }

  .buro-total-value.fast { color: #4ade80; }
  .buro-total-value.slow { color: #f87171; }

  /* Dividend section */
  .dividend-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    margin-bottom: 32px;
  }

  .div-card {
    background: #111827;
    border: 1px solid #1e293b;
    border-radius: 16px;
    padding: 28px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .div-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
  }

  .div-card.zug::before { background: linear-gradient(90deg, #4ade80, #22c55e); }
  .div-card.lucerna::before { background: linear-gradient(90deg, #60a5fa, #3b82f6); }
  .div-card.svitto::before { background: linear-gradient(90deg, #a78bfa, #8b5cf6); }

  .div-canton {
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #64748b;
    margin-bottom: 4px;
  }

  .div-canton-name {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 22px;
    font-weight: 700;
    color: #f1f5f9;
    margin-bottom: 16px;
  }

  .div-row {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid rgba(255,255,255,0.04);
    font-size: 13px;
  }

  .div-row:last-child { border-bottom: none; }

  .div-row-label { color: #94a3b8; }
  .div-row-value { font-weight: 700; color: #e2e8f0; }
  .div-row-value.highlight { color: #4ade80; }

  .div-example {
    margin-top: 16px;
    padding: 14px;
    background: rgba(255,255,255,0.03);
    border-radius: 10px;
  }

  .div-example-label {
    font-size: 11px;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 4px;
  }

  .div-example-value {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 24px;
    font-weight: 700;
  }

  .div-example-value.green { color: #4ade80; }

  .div-comparison-table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    background: #111827;
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid #1e293b;
    margin-bottom: 48px;
  }

  .div-comparison-table th {
    padding: 14px 16px;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #64748b;
    text-align: left;
    background: #0f172a;
  }

  .div-comparison-table td {
    padding: 12px 16px;
    font-size: 13px;
    border-top: 1px solid rgba(255,255,255,0.04);
    color: #94a3b8;
  }

  .div-comparison-table td:first-child { font-weight: 500; }
  .div-comparison-table td.good { color: #4ade80; font-weight: 600; }
  .div-comparison-table td.bad { color: #f87171; font-weight: 600; }
  .div-comparison-table td.neutral { color: #e2e8f0; font-weight: 600; }

  .div-comparison-table tr:last-child td {
    font-weight: 700;
    font-size: 14px;
    border-top: 2px solid rgba(255,255,255,0.08);
  }

  /* CTA */
  .cta {
    text-align: center;
    padding: 60px 24px;
    background: linear-gradient(180deg, #0a0e1a, #0f1629);
    border-radius: 24px;
    border: 1px solid #1e293b;
    position: relative;
    overflow: hidden;
  }

  .cta::before {
    content: '';
    position: absolute;
    top: -100px;
    left: 50%;
    transform: translateX(-50%);
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%);
    pointer-events: none;
  }

  .cta h2 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(24px, 4vw, 36px);
    font-weight: 700;
    color: #f1f5f9;
    margin-bottom: 12px;
  }

  .cta p {
    color: #94a3b8;
    font-size: 16px;
    margin-bottom: 32px;
  }

  .cta-btn {
    display: inline-block;
    padding: 16px 40px;
    background: linear-gradient(135deg, #3b82f6, #2563eb);
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    border-radius: 12px;
    text-decoration: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 4px 20px rgba(59,130,246,0.3);
  }

  .cta-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(59,130,246,0.4);
  }

  /* Note */
  .note {
    text-align: center;
    padding: 32px;
    font-size: 13px;
    color: #475569;
    line-height: 1.6;
  }

  /* Scenario note */
  .scenario-note {
    text-align: center;
    padding: 16px 24px;
    background: rgba(59,130,246,0.06);
    border: 1px solid rgba(59,130,246,0.12);
    border-radius: 12px;
    margin-bottom: 48px;
    font-size: 14px;
    color: #94a3b8;
    line-height: 1.6;
  }

  .scenario-note strong { color: #60a5fa; }
`

const dubaiCosts = [
  { label: 'Setup iniziale', value: '0', note: 'Societa gia operativa', color: 'green' },
  { label: 'Rinnovo licenza (50%)', value: '2.000', note: '4.000 divisi a meta', color: '' },
  { label: 'Aggiunta categoria turistica', value: '350-600', note: 'Amendment free zone', color: 'green' },
  { label: 'Contabilita (50% di 300/mese)', value: '1.800', note: 'Divisa a meta', color: '' },
  { label: 'Admin locale (50%)', value: '1.500-2.500', note: 'Manager operativo', color: '' },
  { label: 'Ufficio / Registered address', value: '0', note: 'Gia incluso', color: 'green' },
]

const maltaCosts = [
  { label: 'Setup iniziale', value: '8.000-12.000', note: 'Registrazione + legale + nominee', color: 'red' },
  { label: 'Licenza agenzia viaggi', value: '2.000-5.000', note: '+ garanzia bancaria', color: 'red' },
  { label: 'Contabilita + audit obbligatorio', value: '5.000-8.000', note: 'Refund system = complessita alta', color: 'red' },
  { label: 'Registered office + secretary', value: '2.000-3.000', note: 'Obbligatorio', color: '' },
  { label: 'Compliance officer', value: '1.500-2.500', note: 'Obbligatorio per travel', color: '' },
  { label: 'Corporate tax effettiva', value: '5% utili', note: 'Dopo refund system', color: 'red' },
]

const dubaiSteps = [
  { title: 'Richiesta amendment', desc: 'Aggiunta categoria turistica alla licenza esistente' },
  { title: 'Approvazione free zone', desc: 'Review e approvazione in 3-5 giorni lavorativi' },
  { title: 'Pagamento fee', desc: '350-600 EUR per la nuova categoria' },
  { title: 'Licenza aggiornata', desc: 'Operativi. Fine.' },
]

const maltaSteps = [
  { title: 'Scelta struttura societaria', desc: 'Ltd, holding, trading company. Serve consulente.' },
  { title: 'Memorandum & Articles', desc: 'Redazione statuto con avvocato maltese' },
  { title: 'Registrazione MBR', desc: 'Malta Business Registry, verifica documentale' },
  { title: 'Apertura conto bancario', desc: '4-8 settimane, compliance bancaria pesante' },
  { title: 'Licenza turistica MTA', desc: 'Malta Tourism Authority, ispezione, garanzia bancaria' },
  { title: 'Registrazione VAT', desc: 'Partita IVA maltese, ulteriori documenti' },
  { title: 'Nominee director + secretary', desc: 'Obbligatori, costo annuale ricorrente' },
  { title: 'Setup contabilita + audit', desc: 'Commercialista locale, revisore per audit annuale' },
  { title: 'Refund system setup', desc: 'Struttura holding per ottenere il 6/7 refund (da 35% a 5%)' },
  { title: 'Primo anno operativo', desc: 'Compliance continua, reporting trimestrale' },
]

const tableRows = [
  ['Costo anno 1', '~6.000-7.000', '~20.000-30.000'],
  ['Costi ricorrenti/anno', '~5.500-7.000', '~12.000-18.000'],
  ['Corporate tax', '0%', '5%'],
  ['Tempo di setup', 'Settimane', '3-6 mesi'],
  ['Burocrazia', 'Minima', 'Alta'],
  ['Audit obbligatorio', 'No', 'Si, annuale'],
  ['Refund system', 'Non necessario', 'Complesso'],
  ['Verdetto', 'Operativi subito', 'Mesi di attesa + costi alti'],
]

const buroCompareRows = [
  ['Documenti per apertura', '1 form amendment', '15+ documenti'],
  ['Figure obbligatorie', 'Admin locale', 'Director + Secretary + Auditor + Compliance'],
  ['Tempo approvazione', '3-5 giorni', '3-6 mesi'],
  ['Conto bancario', 'Gia esistente', '4-8 settimane (compliance pesante)'],
  ['Audit annuale', 'Non richiesto', 'Obbligatorio (2.000-4.000/anno)'],
  ['Reporting fiscale', 'Dichiarazione annuale semplice', 'Trimestrale + refund claim + VAT'],
  ['Rinnovo licenza', 'Online, 1 giorno', 'Multi-step con MTA + MBR'],
  ['Complessita ongoing', 'Bassa', 'Alta (refund, audit, compliance)'],
]

const projectionData = [
  { year: 'Anno 1', dubai: 6500, malta: 25000 },
  { year: 'Anno 2', dubai: 5700, malta: 15000 },
  { year: 'Anno 3', dubai: 5700, malta: 15000 },
  { year: 'Anno 4', dubai: 5700, malta: 15000 },
  { year: 'Anno 5', dubai: 5700, malta: 15000 },
]

const maxCost = 25000

function App() {
  const dubaiTotal = '~5.700-6.900'
  const maltaTotal = '~20.000-30.000'

  const totalDubai5y = projectionData.reduce((s, d) => s + d.dubai, 0)
  const totalMalta5y = projectionData.reduce((s, d) => s + d.malta, 0)
  const saved5y = totalMalta5y - totalDubai5y

  return (
    <>
      <style>{styles}</style>

      {/* Background explorer icons */}
      <div className="bg-icons">
        <span className="bg-icon">&#x1F5FA;&#xFE0F;</span>
        <span className="bg-icon">&#x2708;&#xFE0F;</span>
        <span className="bg-icon">&#x1F9ED;</span>
        <span className="bg-icon">&#x1F30D;</span>
        <span className="bg-icon">&#x1F4CD;</span>
        <span className="bg-icon">&#x26F5;</span>
        <span className="bg-icon">&#x1F3D4;&#xFE0F;</span>
        <span className="bg-icon">&#x1F30A;</span>
        <span className="bg-icon">&#x1F6EB;</span>
        <span className="bg-icon">&#x1F3DD;&#xFE0F;</span>
        <span className="bg-icon">&#x1F689;</span>
        <span className="bg-icon">&#x1F9F3;</span>
        <span className="bg-icon">&#x1F30F;</span>
        <span className="bg-icon">&#x26FA;</span>
      </div>

      <div className="content-wrap">
        <div className="hero">
          <div className="badge">&#x1F9ED; Analisi comparativa 2026</div>
          <h1>Beyond Maps<br /><span>Starter Pack</span></h1>
          <p>
            Confronto operativo tra aprire un'agenzia travel online a Dubai
            (struttura esistente) oppure da zero a Malta.
          </p>
        </div>

        <div className="container">

          <div className="scenario-note">
            Scenario: <strong>agenzia travel 100% online</strong> (vendita pacchetti, booking, affiliazioni).
            Soci residenti in Svizzera, presenza periodica a Dubai per decisioni strategiche.
          </div>

          {/* ====== SEZIONE 1: COSTI ====== */}
          <div className="section-head">
            <h2>&#x1F4B0; Confronto Costi</h2>
            <p>Quanto costa partire e mantenere la struttura ogni anno</p>
          </div>

          <div className="comparison">
            <div className="card dubai">
              <div className="card-header">
                <div className="card-icon">&#x1F1E6;&#x1F1EA;</div>
                <div>
                  <div className="card-title">Dubai</div>
                  <div className="card-subtitle">Free zone esistente (MerryProject)</div>
                </div>
              </div>
              {dubaiCosts.map((c, i) => (
                <div className="cost-row" key={i}>
                  <div>
                    <div className="cost-label">{c.label}</div>
                    <div className="cost-note">{c.note}</div>
                  </div>
                  <div className={`cost-value ${c.color}`}>{c.value} &euro;</div>
                </div>
              ))}
              <div className="total-row">
                <div className="total-label">Totale annuo</div>
                <div className="total-value dubai-total">{dubaiTotal} &euro;</div>
              </div>
            </div>

            <div className="card malta">
              <div className="card-header">
                <div className="card-icon">&#x1F1F2;&#x1F1F9;</div>
                <div>
                  <div className="card-title">Malta</div>
                  <div className="card-subtitle">Societa nuova da zero</div>
                </div>
              </div>
              {maltaCosts.map((c, i) => (
                <div className="cost-row" key={i}>
                  <div>
                    <div className="cost-label">{c.label}</div>
                    <div className="cost-note">{c.note}</div>
                  </div>
                  <div className={`cost-value ${c.color}`}>{c.value} &euro;</div>
                </div>
              ))}
              <div className="total-row">
                <div className="total-label">Totale anno 1</div>
                <div className="total-value malta-total">{maltaTotal} &euro;</div>
              </div>
            </div>
          </div>

          <div className="savings">
            <div className="savings-label">Risparmio stimato anno 1</div>
            <div className="savings-amount">~18.000 &euro;</div>
            <div className="savings-sub">+ 0% corporate tax vs 5% a Malta su tutti gli utili</div>
          </div>

          <div className="features">
            <div className="feature">
              <div className="feature-icon">0</div>
              <h3>Zero Setup</h3>
              <p>Nessun costo di apertura. La struttura societaria esiste ed e operativa dal 2023.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">0%</div>
              <h3>Corporate Tax</h3>
              <p>Zero tasse sugli utili aziendali. A Malta il 5% effettivo dopo il complesso refund system.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">14gg</div>
              <h3>Operativi in 2 settimane</h3>
              <p>Aggiunta categoria + onboarding. A Malta servono 3-6 mesi solo per il setup.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">50%</div>
              <h3>Costi fissi dimezzati</h3>
              <p>Contabilita, admin, ufficio: tutto diviso. Per entrambe le parti conviene.</p>
            </div>
          </div>

          {/* ====== SEZIONE 2: BUROCRAZIA ====== */}
          <div className="section-divider"><span>&#x1F4CB;</span></div>

          <div className="section-head">
            <h2>&#x1F4CB; Confronto Burocrazia</h2>
            <p>Step necessari per essere operativi e compliance ongoing</p>
          </div>

          <div className="buro-grid">
            <div className="card dubai">
              <div className="card-header">
                <div className="card-icon">&#x1F1E6;&#x1F1EA;</div>
                <div>
                  <div className="card-title">Dubai</div>
                  <div className="card-subtitle">4 step e sei operativo</div>
                </div>
              </div>
              {dubaiSteps.map((s, i) => (
                <div className="buro-step" key={i}>
                  <div className="buro-num">{i + 1}</div>
                  <div className="buro-text">
                    <h4>{s.title}</h4>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
              <div className="buro-total">
                <div className="buro-total-label">Tempo totale</div>
                <div className="buro-total-value fast">1-2 settimane</div>
              </div>
            </div>

            <div className="card malta">
              <div className="card-header">
                <div className="card-icon">&#x1F1F2;&#x1F1F9;</div>
                <div>
                  <div className="card-title">Malta</div>
                  <div className="card-subtitle">10 step con multipli enti</div>
                </div>
              </div>
              {maltaSteps.map((s, i) => (
                <div className="buro-step" key={i}>
                  <div className="buro-num">{i + 1}</div>
                  <div className="buro-text">
                    <h4>{s.title}</h4>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
              <div className="buro-total">
                <div className="buro-total-label">Tempo totale</div>
                <div className="buro-total-value slow">3-6 mesi</div>
              </div>
            </div>
          </div>

          {/* Burocrazia table */}
          <div className="table-section">
            <h2>Burocrazia a confronto</h2>
            <table className="comp-table">
              <thead>
                <tr>
                  <th>Voce</th>
                  <th>Dubai</th>
                  <th>Malta</th>
                </tr>
              </thead>
              <tbody>
                {buroCompareRows.map((row, i) => (
                  <tr key={i}>
                    <td>{row[0]}</td>
                    <td>{row[1]}</td>
                    <td>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ====== SEZIONE 3: CONFRONTO DIRETTO + PROIEZIONE ====== */}
          <div className="section-divider"><span>&#x1F4CA;</span></div>

          <div className="table-section">
            <h2>Confronto diretto</h2>
            <table className="comp-table">
              <thead>
                <tr>
                  <th>Voce</th>
                  <th>Dubai (MerryProject)</th>
                  <th>Malta (da zero)</th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, i) => (
                  <tr key={i}>
                    <td>{row[0]}</td>
                    <td>{row[1]}</td>
                    <td>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="projection">
            <h2>Proiezione costi 5 anni</h2>
            <div className="bars">
              {projectionData.map((d, i) => (
                <div className="bar-row" key={i}>
                  <div className="bar-year">{d.year}</div>
                  <div className="bar-pair">
                    <div className="bar-track sm">
                      <div
                        className="bar-fill dubai-bar"
                        style={{ width: `${(d.dubai / maxCost) * 100}%` }}
                      >
                        {d.dubai.toLocaleString('it-IT')} &euro;
                      </div>
                    </div>
                    <div className="bar-track sm">
                      <div
                        className="bar-fill malta-bar"
                        style={{ width: `${(d.malta / maxCost) * 100}%` }}
                      >
                        {d.malta.toLocaleString('it-IT')} &euro;
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bar-legend">
              <span><span className="dot blue"></span> Dubai</span>
              <span><span className="dot red"></span> Malta</span>
            </div>

            <div className="savings" style={{ marginTop: 32 }}>
              <div className="savings-label">Risparmio totale in 5 anni</div>
              <div className="savings-amount">{saved5y.toLocaleString('it-IT')} &euro;</div>
              <div className="savings-sub">Senza contare il 5% di corporate tax maltese sugli utili</div>
            </div>
          </div>

          {/* ====== SEZIONE 4: DIVIDENDI IN SVIZZERA ====== */}
          <div className="section-divider"><span>&#x1F1E8;&#x1F1ED;</span></div>

          <div className="section-head">
            <h2>&#x1F1E8;&#x1F1ED; Dividendi in Svizzera</h2>
            <p>Se tutti i soci risiedono in Svizzera, ecco come vengono tassati i dividendi nei cantoni piu vantaggiosi.
              Con Dubai paghi 0% corporate tax, poi solo le tasse personali svizzere sui dividendi.
              Con Malta paghi prima il 5% corporate, poi le stesse tasse svizzere.</p>
          </div>

          <div className="dividend-grid">
            <div className="div-card zug">
              <div className="div-canton">Cantone</div>
              <div className="div-canton-name">Zugo</div>
              <div className="div-row">
                <span className="div-row-label">Quota tassabile dividendo</span>
                <span className="div-row-value">50%</span>
              </div>
              <div className="div-row">
                <span className="div-row-label">Aliquota marginale max</span>
                <span className="div-row-value">~22%</span>
              </div>
              <div className="div-row">
                <span className="div-row-label">Tassa effettiva sul dividendo</span>
                <span className="div-row-value highlight">~11%</span>
              </div>
              <div className="div-example">
                <div className="div-example-label">Su 100.000 CHF di dividendo</div>
                <div className="div-example-value green">~11.000 CHF di tasse</div>
              </div>
            </div>

            <div className="div-card lucerna">
              <div className="div-canton">Cantone</div>
              <div className="div-canton-name">Lucerna</div>
              <div className="div-row">
                <span className="div-row-label">Quota tassabile dividendo</span>
                <span className="div-row-value">60%</span>
              </div>
              <div className="div-row">
                <span className="div-row-label">Aliquota marginale max</span>
                <span className="div-row-value">~24%</span>
              </div>
              <div className="div-row">
                <span className="div-row-label">Tassa effettiva sul dividendo</span>
                <span className="div-row-value highlight">~14,5%</span>
              </div>
              <div className="div-example">
                <div className="div-example-label">Su 100.000 CHF di dividendo</div>
                <div className="div-example-value green">~14.500 CHF di tasse</div>
              </div>
            </div>

            <div className="div-card svitto">
              <div className="div-canton">Cantone</div>
              <div className="div-canton-name">Svitto</div>
              <div className="div-row">
                <span className="div-row-label">Quota tassabile dividendo</span>
                <span className="div-row-value">50%</span>
              </div>
              <div className="div-row">
                <span className="div-row-label">Aliquota marginale max</span>
                <span className="div-row-value">~23%</span>
              </div>
              <div className="div-row">
                <span className="div-row-label">Tassa effettiva sul dividendo</span>
                <span className="div-row-value highlight">~11,5%</span>
              </div>
              <div className="div-example">
                <div className="div-example-label">Su 100.000 CHF di dividendo</div>
                <div className="div-example-value green">~11.500 CHF di tasse</div>
              </div>
            </div>
          </div>

          {/* Dividend comparison: Dubai company vs Malta company, same Swiss resident */}
          <div className="table-section">
            <h2>Dubai vs Malta: tasse totali per 100k di utili</h2>
            <table className="div-comparison-table">
              <thead>
                <tr>
                  <th>Voce</th>
                  <th>Dubai + Zugo</th>
                  <th>Malta + Zugo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Utile aziendale</td>
                  <td className="neutral">100.000</td>
                  <td className="neutral">100.000</td>
                </tr>
                <tr>
                  <td>Corporate tax</td>
                  <td className="good">0 (0%)</td>
                  <td className="bad">5.000 (5%)</td>
                </tr>
                <tr>
                  <td>Disponibile per dividendo</td>
                  <td className="neutral">100.000</td>
                  <td className="neutral">95.000</td>
                </tr>
                <tr>
                  <td>Tassa CH sul dividendo (~11%)</td>
                  <td className="neutral">11.000</td>
                  <td className="neutral">10.450</td>
                </tr>
                <tr>
                  <td>Tasse totali pagate</td>
                  <td className="good">11.000</td>
                  <td className="bad">15.450</td>
                </tr>
                <tr>
                  <td>In tasca netto</td>
                  <td className="good">89.000</td>
                  <td className="bad">84.550</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="savings">
            <div className="savings-label">Risparmio su ogni 100k di utili (Zugo)</div>
            <div className="savings-amount">+4.450 &euro;</div>
            <div className="savings-sub">Dubai 0% corporate + ~11% dividendi vs Malta 5% corporate + ~11% dividendi</div>
          </div>

          <div className="scenario-note">
            <strong>Nota:</strong> Le aliquote sono indicative e dipendono dal reddito complessivo, stato civile e comune di residenza.
            La partecipazione qualificata (&#8805;10%) e necessaria per l'imposizione ridotta.
            Withholding tax UAE: 0%. Withholding tax Malta su non residenti: 0%.
            In entrambi i casi, la Svizzera tassa il dividendo ricevuto come reddito personale.
          </div>

          {/* CTA */}
          <div className="cta">
            <h2>&#x2708;&#xFE0F; Pronti a partire?</h2>
            <p>La struttura c'e. I numeri parlano chiaro. Manca solo il caffe.</p>
            <button className="cta-btn" onClick={() => alert('Marco vi contatta!')}>
              Parliamone
            </button>
          </div>

          <div className="note">
            Stime basate su costi medi 2025-2026 per free zone Dubai e setup societario Malta.
            I costi effettivi possono variare. La licenza turistica specifica per suolo emiratino
            va verificata caso per caso. Non costituisce consulenza fiscale o legale.
          </div>

        </div>
      </div>
    </>
  )
}

export default App
