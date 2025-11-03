import React, { useState, useEffect } from "react";
import { DollarSign, TrendingUp, Gift, Sparkles } from 'lucide-react';
import './Calculator.css';

const Calculator = () => {
  // === INPUT STATES ===
  const [directRef, setDirectRef] = useState(4); // Direct Referral
  const [teamRef, setTeamRef] = useState(16); // Team Referral
  const [slot, setSlot] = useState(5); // Slots (1–10)
  const [selectedSlotValue, setSelectedSlotValue] = useState(250); // Slot price (editable)
  const [totalRef, setTotalRef] = useState(0); // Upgrade multiplier
  const totalSlotValue=19430

  // === OUTPUT STATES ===
  const [summary, setSummary] = useState({ E12: 0, E13: 0, E14: 0, E16: 0 });
  const [rows, setRows] = useState([]);
  const [totals, setTotals] = useState({ Q19: 0, T19: 0, totalJ: 0, totalL: 0 });

  // === LEVEL CONFIG (from Excel H..T simplified) ===
  const table = [
    { level: 1, slotvalue: 10, lbpercentage: 0.0  , levelmembers: 2},
    { level: 2, slotvalue: 20, lbpercentage: 0.02 , levelmembers: 4},
    { level: 3, slotvalue: 50, lbpercentage: 0.0  , levelmembers: 8},
    { level: 4, slotvalue: 100, lbpercentage: 0.02 , levelmembers: 16},
    { level: 5, slotvalue: 250, lbpercentage: 0.0 , levelmembers: 32},
    { level: 6, slotvalue: 500, lbpercentage: 0.03 , levelmembers: 64},
    { level: 7, slotvalue: 1000, lbpercentage: 0.0 , levelmembers: 128},
    { level: 8, slotvalue: 2500, lbpercentage: 0.03 , levelmembers: 256},
    { level: 9, slotvalue: 5000, lbpercentage: 0.0 , levelmembers: 512},
    { level: 10, slotvalue: 10000, lbpercentage: 0.03 , levelmembers: 1024},
    { level: 11, slotvalue: 0, lbpercentage: 0.0 , levelmembers: 2048},
    { level: 12, slotvalue: 0, lbpercentage: 0.05 , levelmembers: 4096},
  ];

  // === FORMATTER ===
  const fmt = (n) => (Math.round((n + Number.EPSILON) * 100) / 100).toLocaleString();

  // === RECALCULATE ALL ===
  useEffect(() => {
    let computed = [];
    let allocbalance = directRef + teamRef;

    let newSlotValue=table[slot-1].slotvalue ;
    setSelectedSlotValue(newSlotValue);

    for (let idx = 0; idx < table.length; idx++) {
      const lvlRecord = table[idx];
      const level = Number(lvlRecord.level) || idx + 1;
      const slotvalue = Number(lvlRecord.slotvalue) || 0;
      const levelmembers = lvlRecord.levelmembers;

      const teamallocation = allocbalance > levelmembers ? levelmembers : allocbalance;      
      const teambalance = allocbalance - teamallocation ;
      const ubvalue = slotvalue * 0.5;
      const totalubvalue = ubvalue * levelmembers;
      const ubearned = slot >= level ? teamallocation * ubvalue : 0;
      const lbPercentage = Number(lvlRecord.lbpercentage) || 0;
      const lbvalue = slot >= level ? teamallocation * totalSlotValue * lbPercentage : 0;

      computed.push({ lv: level, sv: slotvalue, lm: levelmembers, ta: teamallocation, tb: teambalance,
                         ubv: ubvalue, tuv: totalubvalue, ube: ubearned, lbp: lbPercentage, lbv: lbvalue });
      allocbalance = teambalance;

    }

    const totalUBEarned = computed.reduce((s, r) => s + r.ube, 0);
    const totalLBearned = computed.reduce((s, r) => s + r.lbv, 0);
    const totalLevelMembers = computed.reduce((s, r) => s + r.lm, 0);
    const totalAllocation = computed.reduce((s, r) => s + r.ta, 0);

    const directRefEarning = directRef * selectedSlotValue * 0.3;
    const upgradeBonusEarning = totalUBEarned;
    const levelBonusEarning = totalLBearned;
    const TotalEarnings = directRefEarning + upgradeBonusEarning + levelBonusEarning;

    setTotalRef(directRef + teamRef);
    setSummary({ drearning: directRefEarning, ubearning: upgradeBonusEarning, lbearning: levelBonusEarning, totearning: TotalEarnings });
    setRows(computed);
    setTotals({ Q19: totalUBEarned, T19: totalLBearned, totalJ: totalLevelMembers, totalL: totalAllocation });
  }, [directRef, teamRef, slot, selectedSlotValue]);

  return (
    <div className="calculator-container">
      {/* === SECTION 1: Input & Summary === */}
      <div className="calc-input-section">
        <h2 className="calc-section-title">Calculate Your Earnings</h2>

        {/* Input Fields */}
        <div className="calc-inputs-grid">
          <div className="calc-input-group">
            <label className="calc-input-label">Direct Referral</label>
            <input
              type="number"
              value={directRef}
              onChange={(e) => setDirectRef(+e.target.value)}
              className="calc-input-field"
            />
          </div>
          <div className="calc-input-group">
            <label className="calc-input-label">Team Referral</label>
            <input
              type="number"
              value={teamRef}
              onChange={(e) => setTeamRef(+e.target.value)}
              className="calc-input-field"
            />
          </div>
          <div className="calc-input-group">
            <label className="calc-input-label">Slots</label>
            <select
              value={slot}
              onChange={(e) => setSlot(+e.target.value)}
              className="calc-select-field"
            >
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Basic Info Cards */}
        <div className="calc-basic-info">
          <div className="calc-info-card">
            <div className="calc-info-label">Total Team</div>
            <div className="calc-info-value">{totalRef}</div>
          </div>
          <div className="calc-info-card">
            <div className="calc-info-label">Slot Value</div>
            <div className="calc-info-value">{selectedSlotValue}</div>
          </div>
        </div>

        {/* Summary Cards with Animated Icons */}
        <div className="calc-summary-grid">
          <div className="calc-summary-card">
            <div className="calc-icon-wrapper">
              <DollarSign className="calc-icon" />
            </div>
            <div className="calc-summary-label">Direct Referral</div>
            <div className="calc-summary-value">{fmt(summary.drearning)}</div>
          </div>
          
          <div className="calc-summary-card">
            <div className="calc-icon-wrapper">
              <TrendingUp className="calc-icon" />
            </div>
            <div className="calc-summary-label">Upgrade Bonus</div>
            <div className="calc-summary-value">{fmt(summary.ubearning)}</div>
          </div>
          
          <div className="calc-summary-card">
            <div className="calc-icon-wrapper">
              <Gift className="calc-icon" />
            </div>
            <div className="calc-summary-label">Level Bonus</div>
            <div className="calc-summary-value">{fmt(summary.lbearning)}</div>
          </div>
          
          <div className="calc-summary-card total-earnings">
            <div className="calc-icon-wrapper">
              <Sparkles className="calc-icon" />
            </div>
            <div className="calc-summary-label">Total Earnings</div>
            <div className="calc-summary-value">{fmt(summary.totearning)}</div>
          </div>
        </div>
      </div>

      {/* === SECTION 2: Breakdown Table === */}
      <div className="calc-breakdown-section">
        <h2 className="calc-breakdown-title">Detailed Breakdown</h2>
        
        <div className="calc-table-container">
          <table className="calc-table">
            <thead>
              <tr>
                <th>Level</th>
                <th>Level Members</th>
                <th>Team Allocation</th>
                <th>Upgrade Bonus Available</th>
                <th>Upgrade Value Earned</th>
                <th>Level Earnings</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i}>
                  <td>{r.lv}</td>
                  <td>{fmt(r.lm)}</td>
                  <td>{fmt(r.ta)}</td>
                  <td>{fmt(r.tuv)}</td>
                  <td>{fmt(r.ube)}</td>
                  <td>{fmt(r.lbv)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td>Total</td>
                <td>{fmt(totals.totalJ)}</td>
                <td>{fmt(totals.totalL)}</td>
                <td></td>
                <td>{fmt(totals.Q19)}</td>
                <td>{fmt(totals.T19)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
