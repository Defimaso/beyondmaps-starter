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

  /* Living section */
  .living-hero {
    text-align: center;
    padding: 48px 24px;
    background: linear-gradient(135deg, rgba(251,191,36,0.04) 0%, rgba(59,130,246,0.04) 100%);
    border: 1px solid rgba(251,191,36,0.15);
    border-radius: 20px;
    margin-bottom: 48px;
  }

  .living-hero h2 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(24px, 4vw, 36px);
    font-weight: 700;
    color: #f1f5f9;
    margin-bottom: 8px;
  }

  .living-hero p {
    font-size: 15px;
    color: #94a3b8;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.6;
  }

  .living-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-bottom: 48px;
  }

  @media (max-width: 768px) {
    .living-grid { grid-template-columns: 1fr; }
  }

  .living-card {
    background: #111827;
    border: 1px solid #1e293b;
    border-radius: 16px;
    padding: 28px;
    position: relative;
    overflow: hidden;
  }

  .living-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, #f59e0b, #eab308);
  }

  .living-card h3 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: #f1f5f9;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .living-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid rgba(255,255,255,0.04);
  }

  .living-row:last-child { border-bottom: none; }

  .living-label {
    font-size: 13px;
    color: #94a3b8;
    font-weight: 500;
  }

  .living-val {
    font-size: 14px;
    font-weight: 700;
    color: #e2e8f0;
    text-align: right;
  }

  .living-val.gold { color: #fbbf24; }

  .living-note {
    font-size: 11px;
    color: #64748b;
    margin-top: 2px;
  }

  .living-total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0 0;
    margin-top: 8px;
    border-top: 2px solid rgba(255,255,255,0.08);
  }

  .living-total-label {
    font-size: 15px;
    font-weight: 700;
    color: #e2e8f0;
  }

  .living-total-value {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: #fbbf24;
  }

  /* Flow diagram */
  .flow-diagram {
    background: #111827;
    border: 1px solid #1e293b;
    border-radius: 16px;
    padding: 32px;
    margin-bottom: 48px;
  }

  .flow-diagram h3 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: #f1f5f9;
    text-align: center;
    margin-bottom: 24px;
  }

  .flow-steps {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0;
    flex-wrap: wrap;
  }

  .flow-step {
    text-align: center;
    padding: 16px 20px;
    background: rgba(255,255,255,0.03);
    border-radius: 12px;
    min-width: 140px;
  }

  .flow-step-label {
    font-size: 11px;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 4px;
  }

  .flow-step-value {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: #f1f5f9;
  }

  .flow-step-value.green { color: #4ade80; }
  .flow-step-value.gold { color: #fbbf24; }
  .flow-step-value.red { color: #f87171; }

  .flow-step-sub {
    font-size: 11px;
    color: #64748b;
    margin-top: 2px;
  }

  .flow-arrow {
    font-size: 24px;
    color: #334155;
    padding: 0 4px;
  }

  @media (max-width: 768px) {
    .flow-steps { flex-direction: column; }
    .flow-arrow { transform: rotate(90deg); }
  }
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

          {/* ====== SEZIONE 5: VIVERE IN SVIZZERA — GANDRIA/LUGANO ====== */}
          <div className="section-divider"><span>&#x1F3E0;</span></div>

          <div className="living-hero">
            <h2>&#x1F1E8;&#x1F1ED; Vivere a Gandria (Lugano)</h2>
            <p>
              Quadro completo per chi vive a Gandria, al confine con Porlezza.
              Stipendio minimo da pagarsi, contributi AVS, cassa malati, costo vita e dividendi.
              Tutto nel Canton Ticino, con il lago di Lugano fuori dalla finestra.
            </p>
          </div>

          {/* Flow: come funziona il flusso soldi */}
          <div className="flow-diagram">
            <h3>Come funziona il flusso dei soldi</h3>
            <div className="flow-steps">
              <div className="flow-step">
                <div className="flow-step-label">Utili societa</div>
                <div className="flow-step-value green">0% tax</div>
                <div className="flow-step-sub">Corporate tax UAE</div>
              </div>
              <div className="flow-arrow">&#x27A1;&#xFE0F;</div>
              <div className="flow-step">
                <div className="flow-step-label">Stipendio minimo</div>
                <div className="flow-step-value gold">~24.000 CHF/anno</div>
                <div className="flow-step-sub">Copre AVS + base vita</div>
              </div>
              <div className="flow-arrow">&#x27A1;&#xFE0F;</div>
              <div className="flow-step">
                <div className="flow-step-label">Dividendi</div>
                <div className="flow-step-value gold">Resto utili</div>
                <div className="flow-step-sub">Tassati 70% federale</div>
              </div>
              <div className="flow-arrow">&#x27A1;&#xFE0F;</div>
              <div className="flow-step">
                <div className="flow-step-label">Tassa Ticino</div>
                <div className="flow-step-value red">~15-17%</div>
                <div className="flow-step-sub">Effettiva sul dividendo</div>
              </div>
              <div className="flow-arrow">&#x27A1;&#xFE0F;</div>
              <div className="flow-step">
                <div className="flow-step-label">In tasca</div>
                <div className="flow-step-value green">83-85%</div>
                <div className="flow-step-sub">Netto reale</div>
              </div>
            </div>
          </div>

          <div className="living-grid">
            {/* Stipendio + AVS */}
            <div className="living-card">
              <h3>&#x1F4B3; Stipendio minimo + contributi</h3>
              <div className="living-row">
                <div>
                  <div className="living-label">Stipendio lordo consigliato</div>
                  <div className="living-note">Minimo per coprire AVS e costi base</div>
                </div>
                <div className="living-val gold">~24.000-30.000 CHF/anno</div>
              </div>
              <div className="living-row">
                <div>
                  <div className="living-label">AVS/AI/IPG (quota dipendente 5.3%)</div>
                  <div className="living-note">Uguale quota a carico societa</div>
                </div>
                <div className="living-val">~1.270-1.590 CHF</div>
              </div>
              <div className="living-row">
                <div>
                  <div className="living-label">Assicurazione disoccupazione (AD)</div>
                  <div className="living-note">1.1% fino a 148.200 CHF</div>
                </div>
                <div className="living-val">~264-330 CHF</div>
              </div>
              <div className="living-row">
                <div>
                  <div className="living-label">Imposta alla fonte su stipendio</div>
                  <div className="living-note">Ticino, aliquota bassa su redditi bassi</div>
                </div>
                <div className="living-val">~3-5%</div>
              </div>
              <div className="living-row">
                <div>
                  <div className="living-label">Alternativa: senza stipendio</div>
                  <div className="living-note">Contributi AVS come "persona senza attivita lucrativa" basati su patrimonio</div>
                </div>
                <div className="living-val">min 530 CHF/anno</div>
              </div>
              <div className="living-total">
                <div className="living-total-label">Netto mensile da stipendio</div>
                <div className="living-total-value">~1.800-2.200 CHF</div>
              </div>
            </div>

            {/* Costo vita Gandria */}
            <div className="living-card">
              <h3>&#x1F3E1; Costo vita a Gandria / Lugano</h3>
              <div className="living-row">
                <div>
                  <div className="living-label">Affitto trilocale</div>
                  <div className="living-note">Gandria/zone limitrofe, piu economico del centro</div>
                </div>
                <div className="living-val">1.200-1.600 CHF/mese</div>
              </div>
              <div className="living-row">
                <div>
                  <div className="living-label">Cassa malati (obbligatoria)</div>
                  <div className="living-note">Ticino 2026: media adulto ~583 CHF/mese</div>
                </div>
                <div className="living-val" style={{color:'#f87171'}}>~550-600 CHF/mese</div>
              </div>
              <div className="living-row">
                <div>
                  <div className="living-label">Utenze (luce, riscaldamento, acqua)</div>
                  <div className="living-note">Inclusa tassa rifiuti</div>
                </div>
                <div className="living-val">150-200 CHF/mese</div>
              </div>
              <div className="living-row">
                <div>
                  <div className="living-label">Internet + telefono</div>
                  <div className="living-note">Swisscom / Sunrise</div>
                </div>
                <div className="living-val">60-80 CHF/mese</div>
              </div>
              <div className="living-row">
                <div>
                  <div className="living-label">Spesa alimentare</div>
                  <div className="living-note">Tip: Porlezza (IT) a 5 min per risparmiare</div>
                </div>
                <div className="living-val">400-600 CHF/mese</div>
              </div>
              <div className="living-row">
                <div>
                  <div className="living-label">Auto / trasporto</div>
                  <div className="living-note">Assicurazione + benzina + parcheggio</div>
                </div>
                <div className="living-val">300-400 CHF/mese</div>
              </div>
              <div className="living-total">
                <div className="living-total-label">Totale mensile stimato</div>
                <div className="living-total-value">~2.700-3.500 CHF</div>
              </div>
            </div>
          </div>

          {/* Tassazione dividendi Ticino */}
          <div className="living-grid">
            <div className="living-card">
              <h3>&#x1F4C8; Dividendi nel Canton Ticino</h3>
              <div className="living-row">
                <div>
                  <div className="living-label">Quota tassabile (federale)</div>
                  <div className="living-note">Partecipazione qualificata &#8805;10%</div>
                </div>
                <div className="living-val">70% del dividendo</div>
              </div>
              <div className="living-row">
                <div>
                  <div className="living-label">Quota tassabile (cantonale TI)</div>
                  <div className="living-note">Ticino 2025</div>
                </div>
                <div className="living-val">70% del dividendo</div>
              </div>
              <div className="living-row">
                <div>
                  <div className="living-label">Aliquota max cantonale</div>
                  <div className="living-note">Redditi oltre 360.000 CHF: 12%</div>
                </div>
                <div className="living-val">fino a 12%</div>
              </div>
              <div className="living-row">
                <div>
                  <div className="living-label">Moltiplicatore Lugano (Gandria)</div>
                  <div className="living-note">Applicato all'imposta cantonale</div>
                </div>
                <div className="living-val">90%</div>
              </div>
              <div className="living-row">
                <div>
                  <div className="living-label">Imposta federale diretta</div>
                  <div className="living-note">Progressiva, max 11.5%</div>
                </div>
                <div className="living-val">fino a 11.5%</div>
              </div>
              <div className="living-row">
                <div>
                  <div className="living-label">Tassa effettiva sul dividendo</div>
                  <div className="living-note">Combinata: federale + cantonale + comunale</div>
                </div>
                <div className="living-val gold">~15-17%</div>
              </div>
            </div>

            <div className="living-card">
              <h3>&#x1F9EE; Esempio: 100k CHF di utili</h3>
              <div className="living-row">
                <div><div className="living-label">Utile societa Dubai</div></div>
                <div className="living-val">100.000 CHF</div>
              </div>
              <div className="living-row">
                <div><div className="living-label">Corporate tax UAE</div></div>
                <div className="living-val" style={{color:'#4ade80'}}>0 CHF (0%)</div>
              </div>
              <div className="living-row">
                <div><div className="living-label">Stipendio (24k, tassato ~4%)</div></div>
                <div className="living-val">-24.000 CHF (netto ~23.000)</div>
              </div>
              <div className="living-row">
                <div><div className="living-label">Dividendo restante</div></div>
                <div className="living-val">76.000 CHF</div>
              </div>
              <div className="living-row">
                <div>
                  <div className="living-label">Tassa CH sul dividendo (~16%)</div>
                  <div className="living-note">Ticino effettiva su partecipazione qualificata</div>
                </div>
                <div className="living-val" style={{color:'#f87171'}}>-12.160 CHF</div>
              </div>
              <div className="living-row">
                <div><div className="living-label">AVS su stipendio (quota socio)</div></div>
                <div className="living-val">-1.270 CHF</div>
              </div>
              <div className="living-row">
                <div><div className="living-label">Cassa malati (anno)</div></div>
                <div className="living-val" style={{color:'#f87171'}}>-7.000 CHF</div>
              </div>
              <div className="living-total">
                <div className="living-total-label">Netto annuo in tasca</div>
                <div className="living-total-value">~79.570 CHF</div>
              </div>
            </div>
          </div>

          {/* Confronto completo Ticino vs altri cantoni */}
          <div className="table-section">
            <h2>Ticino (Gandria) vs altri cantoni: su 100k di dividendo</h2>
            <table className="div-comparison-table">
              <thead>
                <tr>
                  <th>Voce</th>
                  <th style={{color:'#fbbf24'}}>Ticino (Lugano)</th>
                  <th style={{color:'#4ade80'}}>Zugo</th>
                  <th style={{color:'#a78bfa'}}>Svitto</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Quota tassabile</td>
                  <td className="neutral">70%</td>
                  <td className="good">50%</td>
                  <td className="good">50%</td>
                </tr>
                <tr>
                  <td>Aliquota effettiva dividendo</td>
                  <td className="neutral">~15-17%</td>
                  <td className="good">~11%</td>
                  <td className="good">~11,5%</td>
                </tr>
                <tr>
                  <td>Cassa malati/mese</td>
                  <td className="bad">~580 CHF</td>
                  <td className="good">~380 CHF</td>
                  <td className="good">~350 CHF</td>
                </tr>
                <tr>
                  <td>Affitto trilocale</td>
                  <td className="good">1.200-1.600 CHF</td>
                  <td className="bad">2.000-2.800 CHF</td>
                  <td className="neutral">1.600-2.200 CHF</td>
                </tr>
                <tr>
                  <td>Lingua</td>
                  <td className="good">Italiano</td>
                  <td className="neutral">Tedesco</td>
                  <td className="neutral">Tedesco</td>
                </tr>
                <tr>
                  <td>Confine Italia</td>
                  <td className="good">5 minuti (Porlezza)</td>
                  <td className="bad">2+ ore</td>
                  <td className="bad">2+ ore</td>
                </tr>
                <tr>
                  <td>Tasse su 100k dividendo</td>
                  <td className="neutral">~16.000 CHF</td>
                  <td className="good">~11.000 CHF</td>
                  <td className="good">~11.500 CHF</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="scenario-note">
            <strong>Perche Gandria ha senso:</strong> Tasse leggermente piu alte di Zugo (~5k in piu su 100k di dividendo),
            ma affitto molto piu basso, lingua italiana, confine Porlezza a 5 minuti per la spesa,
            qualita della vita sul lago di Lugano. Il delta fiscale si compensa in buona parte con il costo vita inferiore.
            E soprattutto: rispetto a Malta, risparmi comunque 5% di corporate tax su TUTTI gli utili.
          </div>

          {/* ====== SEZIONE 6: VILLETTA LUGANO vs VALLETTA MALTA ====== */}
          <div className="section-divider"><span>&#x1F3D8;&#xFE0F;</span></div>

          <div className="section-head">
            <h2>&#x1F3D8;&#xFE0F; Villetta Lugano vs Appartamento Valletta</h2>
            <p>Confronto vita reale: villetta appena fuori Lugano (divisa 2 coppie) vs appartamento a Valletta, Malta.
               Spesa alimentare fatta in Italia (Porlezza, 5 minuti da Gandria).</p>
          </div>

          <div className="living-grid">
            {/* Lugano - Villetta */}
            <div className="living-card" style={{borderColor:'rgba(59,130,246,0.2)'}}>
              <h3 style={{color:'#60a5fa'}}>&#x1F1E8;&#x1F1ED; Villetta fuori Lugano (a coppia)</h3>
              <div className="living-row">
                <div>
                  <div className="living-label">Affitto villetta (50%)</div>
                  <div className="living-note">3.000 CHF totali / 2 coppie</div>
                </div>
                <div className="living-val" style={{color:'#4ade80'}}>1.500 CHF</div>
              </div>
              <div className="living-row">
                <div>
                  <div className="living-label">Cassa malati (x2 persone)</div>
                  <div className="living-note">Obbligatoria Ticino, ~580 CHF/persona</div>
                </div>
                <div className="living-val" style={{color:'#f87171'}}>1.160 CHF</div>
              </div>
              <div className="living-row">
                <div>
                  <div className="living-label">Utenze (50% villetta)</div>
                  <div className="living-note">Luce, gas, acqua, rifiuti divisi</div>
                </div>
                <div className="living-val">150-200 CHF</div>
              </div>
              <div className="living-row">
                <div>
                  <div className="living-label">Internet + telefono (50%)</div>
                  <div className="living-note">Connessione condivisa</div>
                </div>
                <div className="living-val">40-50 CHF</div>
              </div>
              <div className="living-row">
                <div>
                  <div className="living-label">Spesa alimentare</div>
                  <div className="living-note">Fatta a Porlezza (IT), 5 min da Gandria: prezzi italiani!</div>
                </div>
                <div className="living-val" style={{color:'#4ade80'}}>250-350 CHF</div>
              </div>
              <div className="living-row">
                <div>
                  <div className="living-label">Auto (assicurazione + benzina)</div>
                  <div className="living-note">Targhe CH, assicurazione svizzera</div>
                </div>
                <div className="living-val">300-400 CHF</div>
              </div>
              <div className="living-row">
                <div>
                  <div className="living-label">Ristoranti / svago</div>
                  <div className="living-note">Anche qui: si cena spesso in Italia</div>
                </div>
                <div className="living-val">200-300 CHF</div>
              </div>
              <div className="living-total">
                <div className="living-total-label">Totale mensile a coppia</div>
                <div className="living-total-value" style={{color:'#60a5fa'}}>~3.600-3.960 CHF</div>
              </div>
              <div style={{marginTop:12,fontSize:12,color:'#64748b',textAlign:'center'}}>
                ~ 3.400-3.750 EUR al cambio attuale
              </div>
            </div>

            {/* Valletta Malta */}
            <div className="living-card" style={{borderColor:'rgba(239,68,68,0.2)'}}>
              <h3 style={{color:'#f87171'}}>&#x1F1F2;&#x1F1F9; Appartamento a Valletta (a coppia)</h3>
              <div className="living-row">
                <div>
                  <div className="living-label">Affitto bilocale Valletta</div>
                  <div className="living-note">Centro storico, 1-bedroom furnished</div>
                </div>
                <div className="living-val">900-1.200 EUR</div>
              </div>
              <div className="living-row">
                <div>
                  <div className="living-label">Assicurazione sanitaria (x2)</div>
                  <div className="living-note">Privata obbligatoria per expat, min copertura ~108k USD</div>
                </div>
                <div className="living-val">150-300 EUR</div>
              </div>
              <div className="living-row">
                <div>
                  <div className="living-label">Utenze</div>
                  <div className="living-note">Luce, acqua, gas. L'elettricita a Malta e cara</div>
                </div>
                <div className="living-val">80-120 EUR</div>
              </div>
              <div className="living-row">
                <div>
                  <div className="living-label">Internet + telefono</div>
                  <div className="living-note">GO, Melita, Epic</div>
                </div>
                <div className="living-val">35-50 EUR</div>
              </div>
              <div className="living-row">
                <div>
                  <div className="living-label">Spesa alimentare</div>
                  <div className="living-note">Supermercati locali. Costi in crescita.</div>
                </div>
                <div className="living-val">400-600 EUR</div>
              </div>
              <div className="living-row">
                <div>
                  <div className="living-label">Auto / trasporto</div>
                  <div className="living-note">Auto quasi necessaria, traffico pessimo</div>
                </div>
                <div className="living-val">200-350 EUR</div>
              </div>
              <div className="living-row">
                <div>
                  <div className="living-label">Ristoranti / svago</div>
                  <div className="living-note">Prezzi in salita, Valletta ormai turistica</div>
                </div>
                <div className="living-val">250-400 EUR</div>
              </div>
              <div className="living-total">
                <div className="living-total-label">Totale mensile a coppia</div>
                <div className="living-total-value" style={{color:'#f87171'}}>~2.015-3.020 EUR</div>
              </div>
              <div style={{marginTop:12,fontSize:12,color:'#64748b',textAlign:'center'}}>
                + 5% corporate tax sugli utili che non paghi a Dubai
              </div>
            </div>
          </div>

          {/* Tabella confronto completo */}
          <div className="table-section">
            <h2>Il quadro completo: vivere + tasse (a coppia, per anno)</h2>
            <table className="div-comparison-table">
              <thead>
                <tr>
                  <th>Voce</th>
                  <th style={{color:'#60a5fa'}}>Lugano + Dubai</th>
                  <th style={{color:'#f87171'}}>Valletta + Malta Ltd</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Affitto annuo</td>
                  <td className="neutral">18.000 CHF (~17.100 EUR)</td>
                  <td className="neutral">12.000-14.400 EUR</td>
                </tr>
                <tr>
                  <td>Sanita annua (x2)</td>
                  <td className="bad">13.920 CHF (~13.200 EUR)</td>
                  <td className="good">1.800-3.600 EUR</td>
                </tr>
                <tr>
                  <td>Spesa (con trick Italia)</td>
                  <td className="good">3.600 CHF (~3.400 EUR)</td>
                  <td className="neutral">5.400-7.200 EUR</td>
                </tr>
                <tr>
                  <td>Resto spese vita</td>
                  <td className="neutral">~8.300 EUR</td>
                  <td className="neutral">~7.500 EUR</td>
                </tr>
                <tr>
                  <td>Corporate tax su 100k utili</td>
                  <td className="good">0 EUR</td>
                  <td className="bad">5.000 EUR</td>
                </tr>
                <tr>
                  <td>Tassa dividendi (su 76k)</td>
                  <td className="neutral">~12.160 CHF (~11.550 EUR)</td>
                  <td className="neutral">~7.125 EUR (su 71k netto corp tax)</td>
                </tr>
                <tr>
                  <td>Costi societa (quota coppia)</td>
                  <td className="good">~3.000 EUR</td>
                  <td className="bad">~7.500-9.000 EUR</td>
                </tr>
                <tr>
                  <td style={{fontWeight:700}}>Totale annuo (vita + tasse + societa)</td>
                  <td className="good" style={{fontSize:15}}>~48.500 EUR</td>
                  <td className="bad" style={{fontSize:15}}>~46.300-53.900 EUR</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="savings">
            <div className="savings-label">Il verdetto</div>
            <div className="savings-amount" style={{fontSize:'clamp(20px,3.5vw,32px)'}}>Costi simili, vita migliore</div>
            <div className="savings-sub" style={{maxWidth:700,margin:'8px auto 0'}}>
              A Lugano spendi leggermente di piu in sanita, ma vivi in una villetta con lago,
              fai la spesa a prezzi italiani a Porlezza, parli italiano, e soprattutto
              non paghi il 5% di corporate tax. Piu gli utili crescono, piu Dubai conviene.
              Su 200k di utili il gap diventa 10.000+ EUR/anno a favore Dubai.
            </div>
          </div>

          <div className="scenario-note">
            <strong>Nota sulla spesa a Porlezza:</strong> Gandria e a 5 minuti dal confine italiano.
            La spesa alimentare fatta in Italia costa il 40-50% in meno rispetto ai supermercati svizzeri.
            Stesso discorso per ristoranti, benzina, e servizi vari. Un vantaggio concreto che nessun
            altro cantone svizzero offre (tranne Ginevra con la Francia, ma li le tasse sono piu alte).
          </div>

          {/* ====== SEZIONE 7: IL KILLER — SOLO STIPENDIO, ZERO DIVIDENDI ====== */}
          <div className="section-divider"><span>&#x1F4A1;</span></div>

          <div style={{
            background: 'linear-gradient(135deg, rgba(74,222,128,0.06) 0%, rgba(59,130,246,0.06) 100%)',
            border: '2px solid rgba(74,222,128,0.25)',
            borderRadius: 20,
            padding: '48px 32px',
            textAlign: 'center',
            marginBottom: 48
          }}>
            <div style={{fontSize:13,fontWeight:600,color:'#4ade80',textTransform:'uppercase',letterSpacing:1,marginBottom:12}}>
              Lo scenario reale
            </div>
            <h2 style={{fontFamily:'Space Grotesk, sans-serif',fontSize:'clamp(24px,4vw,36px)',fontWeight:700,color:'#f1f5f9',marginBottom:12}}>
              Solo stipendio. Zero dividendi.
            </h2>
            <p style={{fontSize:16,color:'#94a3b8',maxWidth:700,margin:'0 auto',lineHeight:1.7}}>
              Se non ti servono i dividendi, <strong style={{color:'#4ade80'}}>non li prendi e non ci paghi tasse</strong>.
              L'utile resta nella societa a Dubai al 0%. Ti paghi solo lo stipendio che ti serve per vivere in Svizzera.
              Questo cambia tutto.
            </p>
          </div>

          {/* Come funziona */}
          <div className="flow-diagram">
            <h3>Come funziona davvero</h3>
            <div className="flow-steps">
              <div className="flow-step">
                <div className="flow-step-label">Utili in societa</div>
                <div className="flow-step-value green">0% tax</div>
                <div className="flow-step-sub">Restano a Dubai</div>
              </div>
              <div className="flow-arrow">&#x27A1;&#xFE0F;</div>
              <div className="flow-step">
                <div className="flow-step-label">Stipendio</div>
                <div className="flow-step-value gold">50.000 CHF</div>
                <div className="flow-step-sub">Solo per costo vita</div>
              </div>
              <div className="flow-arrow">&#x27A1;&#xFE0F;</div>
              <div className="flow-step">
                <div className="flow-step-label">Tasse + AVS</div>
                <div className="flow-step-value red">~9.350 CHF</div>
                <div className="flow-step-sub">Unico costo fiscale</div>
              </div>
              <div className="flow-arrow">&#x27A1;&#xFE0F;</div>
              <div className="flow-step">
                <div className="flow-step-label">Dividendi</div>
                <div className="flow-step-value green">0</div>
                <div className="flow-step-sub">Non li prendi = 0 tasse</div>
              </div>
              <div className="flow-arrow">&#x27A1;&#xFE0F;</div>
              <div className="flow-step">
                <div className="flow-step-label">Netto in tasca</div>
                <div className="flow-step-value green">~43.300 CHF</div>
                <div className="flow-step-sub">Copre vita + extra</div>
              </div>
            </div>
          </div>

          {/* Dettaglio stipendio */}
          <div className="living-grid">
            <div className="living-card" style={{borderColor:'rgba(74,222,128,0.25)'}}>
              <h3 style={{color:'#4ade80'}}>&#x1F4B0; Stipendio 50k CHF: dettaglio tasse</h3>
              <div className="living-row">
                <div><div className="living-label">Stipendio lordo annuo</div></div>
                <div className="living-val">50.000 CHF</div>
              </div>
              <div className="living-row">
                <div>
                  <div className="living-label">AVS/AI/IPG (tua quota 5.3%)</div>
                  <div className="living-note">Uguale quota pagata dalla societa</div>
                </div>
                <div className="living-val" style={{color:'#f87171'}}>-2.650 CHF</div>
              </div>
              <div className="living-row">
                <div>
                  <div className="living-label">Assicurazione disoccupazione (1.1%)</div>
                </div>
                <div className="living-val" style={{color:'#f87171'}}>-550 CHF</div>
              </div>
              <div className="living-row">
                <div>
                  <div className="living-label">Imposta reddito Ticino (~6-8%)</div>
                  <div className="living-note">Federale + cantonale + comunale su 50k</div>
                </div>
                <div className="living-val" style={{color:'#f87171'}}>-3.500 CHF</div>
              </div>
              <div className="living-row">
                <div>
                  <div className="living-label">AVS quota azienda (5.3%)</div>
                  <div className="living-note">Costo aggiuntivo sulla societa</div>
                </div>
                <div className="living-val" style={{color:'#f87171'}}>-2.650 CHF</div>
              </div>
              <div className="living-total">
                <div className="living-total-label">Netto in tasca</div>
                <div className="living-total-value" style={{color:'#4ade80'}}>~43.300 CHF</div>
              </div>
              <div style={{marginTop:8,fontSize:13,color:'#64748b',textAlign:'center'}}>
                Aliquota effettiva reale: ~18.7% (incluso AVS)
              </div>
            </div>

            <div className="living-card" style={{borderColor:'rgba(74,222,128,0.25)'}}>
              <h3 style={{color:'#4ade80'}}>&#x1F9EE; Gli utili che NON prendi</h3>
              <div className="living-row">
                <div>
                  <div className="living-label">Utile societario (esempio)</div>
                </div>
                <div className="living-val">200.000 CHF</div>
              </div>
              <div className="living-row">
                <div>
                  <div className="living-label">Di cui pagato come stipendio</div>
                </div>
                <div className="living-val">-50.000 CHF</div>
              </div>
              <div className="living-row">
                <div>
                  <div className="living-label">Utile non distribuito</div>
                </div>
                <div className="living-val" style={{color:'#4ade80'}}>150.000 CHF</div>
              </div>
              <div className="living-row">
                <div>
                  <div className="living-label">Corporate tax UAE su quei 150k</div>
                  <div className="living-note">Restano in societa a Dubai</div>
                </div>
                <div className="living-val" style={{color:'#4ade80',fontSize:20,fontWeight:900}}>0 CHF</div>
              </div>
              <div className="living-row">
                <div>
                  <div className="living-label">Dividendi dichiarati</div>
                  <div className="living-note">Non li prendi = non esistono</div>
                </div>
                <div className="living-val" style={{color:'#4ade80',fontSize:20,fontWeight:900}}>0 CHF</div>
              </div>
              <div className="living-row">
                <div>
                  <div className="living-label">Tasse svizzere su dividendi</div>
                </div>
                <div className="living-val" style={{color:'#4ade80',fontSize:20,fontWeight:900}}>0 CHF</div>
              </div>
              <div className="living-total">
                <div className="living-total-label">Tasse totali su 200k di utili</div>
                <div className="living-total-value" style={{color:'#4ade80'}}>Solo 9.350 CHF</div>
              </div>
              <div style={{marginTop:8,fontSize:13,color:'#64748b',textAlign:'center'}}>
                = 4.7% di aliquota totale su 200k
              </div>
            </div>
          </div>

          {/* IL confronto killer */}
          <div className="table-section">
            <h2>Il confronto che chiude il discorso</h2>
            <table className="div-comparison-table">
              <thead>
                <tr>
                  <th>Su 200k di utili</th>
                  <th style={{color:'#4ade80'}}>Dubai (solo stipendio)</th>
                  <th style={{color:'#f87171'}}>Malta (da zero)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Corporate tax</td>
                  <td className="good">0</td>
                  <td className="bad">10.000 EUR (5%)</td>
                </tr>
                <tr>
                  <td>Stipendio 50k: tasse + AVS</td>
                  <td className="neutral">9.350 CHF (~8.880 EUR)</td>
                  <td className="neutral">~9.000 EUR (stima simile)</td>
                </tr>
                <tr>
                  <td>Utile non distribuito (150k)</td>
                  <td className="good">0 tasse</td>
                  <td className="bad">Gia tassato 5% = 7.500 EUR pagati</td>
                </tr>
                <tr>
                  <td>Costi societa annui (quota coppia)</td>
                  <td className="good">~3.000 EUR</td>
                  <td className="bad">~7.500-9.000 EUR</td>
                </tr>
                <tr>
                  <td style={{fontWeight:700}}>Tasse + costi totali</td>
                  <td className="good" style={{fontSize:16}}>~11.880 EUR</td>
                  <td className="bad" style={{fontSize:16}}>~26.500-28.000 EUR</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="savings" style={{borderColor:'rgba(74,222,128,0.3)',background:'linear-gradient(135deg, rgba(74,222,128,0.12) 0%, rgba(59,130,246,0.08) 100%)'}}>
            <div className="savings-label">Risparmio annuo con Dubai (su 200k utili)</div>
            <div className="savings-amount">~16.000 EUR</div>
            <div className="savings-sub" style={{maxWidth:600,margin:'8px auto 0'}}>
              E piu crescono gli utili, piu il gap aumenta.
              Su 500k: ~30.000 EUR/anno di risparmio.
              Su 1M: ~55.000+ EUR/anno.
            </div>
          </div>

          {/* Perche funziona */}
          <div className="features" style={{marginBottom:48}}>
            <div className="feature">
              <div className="feature-icon" style={{color:'#4ade80'}}>0%</div>
              <h3>Utile non distribuito = 0 tasse</h3>
              <p>A Dubai l'utile in societa non e tassato. A Malta paghi il 5% a prescindere, che tu lo prenda o no.</p>
            </div>
            <div className="feature">
              <div className="feature-icon" style={{color:'#fbbf24'}}>50k</div>
              <h3>Stipendio = solo il necessario</h3>
              <p>Ti paghi 50k CHF per le spese svizzere. Tasse al 18.7% incluso AVS. Il resto sta a Dubai.</p>
            </div>
            <div className="feature">
              <div className="feature-icon" style={{color:'#60a5fa'}}>&#x267E;&#xFE0F;</div>
              <h3>Scala all'infinito</h3>
              <p>Che la societa faccia 100k o 1M, tu paghi sempre le stesse tasse sullo stipendio. Il resto cresce tax-free a Dubai.</p>
            </div>
            <div className="feature">
              <div className="feature-icon" style={{color:'#a78bfa'}}>&#x1F3E6;</div>
              <h3>Usi i soldi dalla societa</h3>
              <p>Investimenti, spese aziendali, viaggi di lavoro, reinvestimento: tutto dalla societa senza generare dividendi.</p>
            </div>
          </div>

          <div className="scenario-note">
            <strong>Il punto chiave:</strong> La differenza tra Dubai e Malta non e solo nei costi di gestione o nella burocrazia.
            E nel fatto che a Malta il 5% lo paghi comunque sugli utili, che te li prendi o no.
            A Dubai no. Se ti basta uno stipendio per vivere, il resto cresce senza essere tassato.
            Questo e il vero game changer.
          </div>

          {/* ====== SEZIONE 8: PERCHE LA SVIZZERA E NON MALTA — VITA VERA ====== */}
          <div className="section-divider"><span>&#x1F3D4;&#xFE0F;</span></div>

          <div style={{
            background: 'linear-gradient(135deg, rgba(59,130,246,0.06) 0%, rgba(139,92,246,0.06) 100%)',
            border: '2px solid rgba(59,130,246,0.2)',
            borderRadius: 20,
            padding: '48px 32px',
            textAlign: 'center',
            marginBottom: 48
          }}>
            <div style={{fontSize:13,fontWeight:600,color:'#60a5fa',textTransform:'uppercase',letterSpacing:1,marginBottom:12}}>
              Non solo numeri
            </div>
            <h2 style={{fontFamily:'Space Grotesk, sans-serif',fontSize:'clamp(24px,4vw,36px)',fontWeight:700,color:'#f1f5f9',marginBottom:12}}>
              Perche la Svizzera e non Malta
            </h2>
            <p style={{fontSize:16,color:'#94a3b8',maxWidth:700,margin:'0 auto',lineHeight:1.7}}>
              I numeri contano, ma la vita di tutti i giorni conta di piu.
              Abbiamo le famiglie a Roma, lavoriamo online, e vogliamo vivere bene senza sentirci su un'isola.
            </p>
          </div>

          <div className="features" style={{gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))',marginBottom:32}}>
            <div className="feature" style={{borderColor:'rgba(59,130,246,0.15)'}}>
              <div className="feature-icon">&#x1F686;</div>
              <h3>Roma in 3 ore di treno</h3>
              <p>Da Lugano prendi il treno e in 3 ore sei a Roma Termini. Niente aerei, niente check-in, niente stress. Parti la mattina, pranzi con la famiglia.</p>
            </div>
            <div className="feature" style={{borderColor:'rgba(59,130,246,0.15)'}}>
              <div className="feature-icon">&#x1F30D;</div>
              <h3>Centro Europa</h3>
              <p>Milano 1 ora. Zurigo 2 ore. Monaco 4 ore. Parigi 4 ore. Sei al centro di tutto, non su un'isola in mezzo al Mediterraneo.</p>
            </div>
            <div className="feature" style={{borderColor:'rgba(59,130,246,0.15)'}}>
              <div className="feature-icon">&#x2708;&#xFE0F;</div>
              <h3>3 aeroporti vicini</h3>
              <p>Malpensa (1h), Zurigo (2h30), Bergamo (2h). Voli low cost per tutta Europa e diretti per Dubai. Da Malta? Solo Malta Airport.</p>
            </div>
            <div className="feature" style={{borderColor:'rgba(59,130,246,0.15)'}}>
              <div className="feature-icon">&#x1F5E3;&#xFE0F;</div>
              <h3>Si parla italiano</h3>
              <p>Ticino = italiano. Uffici, medici, supermercati, scuole: tutto in italiano. A Malta? Inglese e maltese, e la burocrazia e in inglese.</p>
            </div>
            <div className="feature" style={{borderColor:'rgba(59,130,246,0.15)'}}>
              <div className="feature-icon">&#x1F6D2;</div>
              <h3>Spesa in Italia a 5 minuti</h3>
              <p>Gandria confina con Porlezza. Supermercato, ristoranti, benzina, parrucchiere: prezzi italiani, non svizzeri. Risparmi il 40-50%.</p>
            </div>
            <div className="feature" style={{borderColor:'rgba(59,130,246,0.15)'}}>
              <div className="feature-icon">&#x1F3E0;</div>
              <h3>Villetta con lago, non bilocale</h3>
              <p>A 1.500 CHF a coppia vivi in una villetta sul lago di Lugano. A Valletta con gli stessi soldi prendi un bilocale senza vista.</p>
            </div>
          </div>

          {/* Confronto diretto lifestyle */}
          <div className="table-section">
            <h2>Vita quotidiana: Lugano vs Valletta</h2>
            <table className="div-comparison-table">
              <thead>
                <tr>
                  <th></th>
                  <th style={{color:'#60a5fa'}}>Lugano (Gandria)</th>
                  <th style={{color:'#f87171'}}>Valletta (Malta)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Famiglie a Roma</td>
                  <td className="good">3h treno diretto</td>
                  <td className="bad">Aereo obbligatorio (2h + aeroporto)</td>
                </tr>
                <tr>
                  <td>Milano</td>
                  <td className="good">1 ora</td>
                  <td className="bad">Aereo, 2h+ porta a porta</td>
                </tr>
                <tr>
                  <td>Weekend in Europa</td>
                  <td className="good">Treno/auto ovunque</td>
                  <td className="bad">Solo aereo, sempre</td>
                </tr>
                <tr>
                  <td>Aeroporti</td>
                  <td className="good">3 hub internazionali vicini</td>
                  <td className="neutral">1 solo aeroporto</td>
                </tr>
                <tr>
                  <td>Lingua</td>
                  <td className="good">Italiano</td>
                  <td className="neutral">Inglese/Maltese</td>
                </tr>
                <tr>
                  <td>Clima</td>
                  <td className="neutral">4 stagioni, inverno mite al lago</td>
                  <td className="good">Caldo tutto l'anno</td>
                </tr>
                <tr>
                  <td>Qualita sanita</td>
                  <td className="good">Eccellente (sistema svizzero)</td>
                  <td className="neutral">Buona, ma privata obbligatoria</td>
                </tr>
                <tr>
                  <td>Spesa alimentare</td>
                  <td className="good">A prezzi italiani (Porlezza)</td>
                  <td className="neutral">Prezzi in aumento, isola</td>
                </tr>
                <tr>
                  <td>Traffico</td>
                  <td className="good">Minimo</td>
                  <td className="bad">Pessimo, isola piccola</td>
                </tr>
                <tr>
                  <td>Casa</td>
                  <td className="good">Villetta con lago</td>
                  <td className="neutral">Appartamento</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="savings">
            <div className="savings-label">In sintesi</div>
            <div className="savings-amount" style={{fontSize:'clamp(18px,3vw,28px)',lineHeight:1.3}}>
              Stesse tasse (o meno). Vita migliore.<br/>Famiglie a 3 ore. Centro Europa.
            </div>
            <div className="savings-sub" style={{maxWidth:650,margin:'12px auto 0'}}>
              Malta ha senso se vuoi stare su un'isola al caldo tutto l'anno.
              Ma se hai la famiglia a Roma, lavori online, e vuoi vivere bene senza sentirti isolato,
              la Svizzera italiana e la scelta ovvia. E con Dubai come societa, paghi meno tasse di Malta.
            </div>
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
