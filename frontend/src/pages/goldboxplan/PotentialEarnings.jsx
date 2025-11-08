import React, { useState, useEffect } from "react";
import { TrendingUp, Gift, Coins, ChevronDown, ChevronUp } from 'lucide-react';
import './PotentialEarnings.css';

const PotentialEarnings = () => {
  
  const [showBreakdown, setShowBreakdown] = useState(true); // Toggle breakdown table
  const totalSlotValue=19430;
  const upgradeBonusPercentage=0.5;
  
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
    


    for (let idx = 0; idx < table.length; idx++) {
      const lvlRecord = table[idx];
      const level = Number(lvlRecord.level) || idx + 1;
      const slotvalue = Number(lvlRecord.slotvalue) || 0;
      const levelmembers = lvlRecord.levelmembers;
                
      const ubvalue = slotvalue * upgradeBonusPercentage;
      const totalubvalue = ubvalue * levelmembers;
      
      const lbPercentage = Number(lvlRecord.lbpercentage) || 0;
      const lbvalue = levelmembers * totalSlotValue * lbPercentage ;

      computed.push({ lv: level, sv: slotvalue, lm: levelmembers, 
                         ubv: ubvalue, tuv: totalubvalue,
                         lbp: lbPercentage, lbv: lbvalue });
      

    }

    const totalUBEarned = computed.reduce((s, r) => s + r.tuv, 0);
    const totalLBearned = computed.reduce((s, r) => s + r.lbv, 0);
    const totalLevelMembers = computed.reduce((s, r) => s + r.lm, 0);
        
    const upgradeBonusEarning = totalUBEarned;
    const levelBonusEarning = totalLBearned;
    const TotalEarnings =  upgradeBonusEarning + levelBonusEarning;
    
    setSummary({ ubearning: upgradeBonusEarning,
                 lbearning: levelBonusEarning, totearning: TotalEarnings });
    setRows(computed);
    setTotals({ Q19: totalUBEarned, T19: totalLBearned, totalJ: totalLevelMembers });
  }, []);

  return (
    <div className="potential-earnings-container">
      {/* === SECTION 1: Summary (Moved to top) === */}
      <div className="pe-summary-section">
        <h2 className="pe-summary-title">Potential Earnings Summary</h2>

        {/* Row 1: Upgrade Bonus and Level Bonus */}
        <div className="pe-summary-row-1">
          <div className="pe-earning-card-sleek">
            <div className="pe-icon-wrapper-small">
              <TrendingUp className="pe-icon-small" />
            </div>
            <div className="pe-earning-label">Upgrade Bonus</div>
            <div className="pe-earning-value metallic-shine">{fmt(summary.ubearning)}</div>
          </div>

          <div className="pe-earning-card-sleek">
            <div className="pe-icon-wrapper-small">
              <Gift className="pe-icon-small" />
            </div>
            <div className="pe-earning-label">Level Bonus</div>
            <div className="pe-earning-value metallic-shine">{fmt(summary.lbearning)}</div>
          </div>
        </div>

        {/* Row 2: Total Earnings (Full Width) */}
        <div className="pe-summary-row-2">
          <div className="pe-earning-card-sleek total">
            <div className="pe-icon-wrapper-small">
              <Coins className="pe-icon-small" />
            </div>
            <div className="pe-earning-label">Total Earnings</div>
            <div className="pe-earning-value-large metallic-shine">{fmt(summary.totearning)}</div>
          </div>
        </div>
      </div>

      {/* === SECTION 2: Breakdown Table (Moved to bottom) === */}
      <div className="pe-breakdown-section">
        <div className="pe-breakdown-header">
          <h2 className="pe-section-title">Potential Earnings Breakdown</h2>
          <button 
            className="pe-toggle-btn"
            onClick={() => setShowBreakdown(!showBreakdown)}
            aria-label="Toggle breakdown"
          >
            {showBreakdown ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
        
        <div className={`pe-table-wrapper ${showBreakdown ? 'expanded' : 'collapsed'}`}>
          <div className="pe-table-container">
            <table className="pe-table">
              <thead>
                <tr>
                  <th>Level</th>
                  <th>Level Members</th>
                  <th>Upgrade Bonus Available</th>
                  <th>Level Bonus (%)</th>
                  <th>Level Earnings</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={i}>
                    <td>{r.lv}</td>
                    <td>{fmt(r.lm)}</td>
                    <td>{fmt(r.tuv)}</td>
                    <td>{(r.lbp * 100).toFixed(2)}%</td>
                    <td>{fmt(r.lbv)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td>Total</td>
                  <td>{fmt(totals.totalJ)}</td>
                  <td>{fmt(totals.Q19)}</td>
                  <td></td>
                  <td>{fmt(totals.T19)}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PotentialEarnings;
