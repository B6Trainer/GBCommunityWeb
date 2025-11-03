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

    <>
    {console.log("Rendering Calculator ",rows)}
        <div className="max-w-6xl mx-auto p-4 space-y-6 text-sm">
        {/* === SECTION 1 === */}
        <div className="p-6 rounded-2xl shadow">
            <h2 className="text-lg font-semibold mb-2">
            Calculate
            </h2>

            <div className="flex flex-wrap gap-4">
            <div>
                <label className="block text-xs font-medium">Direct Referral</label>
                <input
                type="number"
                value={directRef}
                onChange={(e) => setDirectRef(+e.target.value)}
                className="border p-2 rounded w-28"
                />
            </div>
            <div>
                <label className="block text-xs font-medium">Team Referral</label>
                <input
                type="number"
                value={teamRef}
                onChange={(e) => setTeamRef(+e.target.value)}
                className="border p-2 rounded w-28"
                />
            </div>
            <div>
                <label className="block text-xs font-medium">Slots</label>
                <select
                value={slot}
                onChange={(e) => setSlot(+e.target.value)}
                className="border p-2 rounded w-24"
                >
                {[...Array(10)].map((_, i) => (
                    <option key={i + 1}>{i + 1}</option>
                ))}
                </select>
            </div>

            </div>

            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className=" p-3 rounded">
                <div className="text-xs ">Total Team</div>
                <div className="font-semibold">{totalRef}</div>
            </div>
            <div className=" p-3 rounded">
                <div className="text-xs ">Slot Value</div>
                <div className="font-semibold">{selectedSlotValue}</div>
            </div>

            </div>


            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className=" p-3 rounded">
                <div className="text-xs ">Direct Referral</div>
                <div className="font-semibold">{fmt(summary.drearning)}</div>
            </div>
            <div className=" p-3 rounded">
                <div className="text-xs ">Upgrade Bonus</div>
                <div className="font-semibold">{fmt(summary.ubearning)}</div>
            </div>
            <div className=" p-3 rounded">
                <div className="text-xs ">Level Bonus</div>
                <div className="font-semibold">{fmt(summary.lbearning)}</div>
            </div>
            <div className="p-3 rounded font-semibold">
                <div className="text-xs">Total Earnings</div>
                <div>{fmt(summary.totearning)}</div>
            </div>
            </div>
        </div>

        {/* === SECTION 2 === */}
        <div className=" p-2 rounded-2xl shadow">
            <h2 className="text-lg font-semibold mb-2">
            Break Down 
            </h2>
            <div className="overflow-x-auto">
            <table className="min-w-full border text-right text-xs">
                <thead className="bg-black-50">
                <tr>
                    <th className="px-2 py-1">Level</th>
                    {/* <th className="px-2 py-1">Slot Value</th> */}
                    <th className="px-2 py-1">level Members</th>
                    <th className="px-2 py-1">Team Allocation</th>
                    {/* <th className="px-2 py-1">Team Balance</th> */}
                    {/* <th className="px-2 py-1">Upgrade Bonus Value</th> */}
                    <th className="px-2 py-1">Upgrade Bonus Available</th>
                    <th className="px-2 py-1">Upgrade value earned</th>
                    {/* <th className="px-2 py-1">Level Bonus (%)</th> */}
                    <th className="px-2 py-1">Level Earnings</th>
                </tr>
                </thead>
                      {/* computed.push({ lv: level, sv: slotvalue, lb: levelmembers, ta: teamallocation, tb: teambalance,
                         ubv: ubvalue, tuv: tubvalue, ube: ubearned, lbp: lbPercentage, lbv: lbvalue }); */}
                <tbody>
                {rows.map((r, i) => (
                    <tr key={i} className="border-t">
                    <td className="text-left px-2 py-1">{r.lv}</td>
                    {/* <td className="px-2 py-1">{fmt(r.sv)}</td> */}
                    <td className="px-2 py-1">{fmt(r.lm)}</td>
                    <td className="px-2 py-1">{fmt(r.ta)}</td>
                    {/* <td className="px-2 py-1">{fmt(r.tb)}</td> */}
                    {/* <td className="px-2 py-1">{fmt(r.ubv)}</td>                     */}
                    <td className="px-2 py-1">{fmt(r.tuv)}</td>
                    <td className="px-2 py-1">{fmt(r.ube)}</td>
                    {/* <td className="px-2 py-1">{(r.lbp * 100).toFixed(2)}%</td> */}
                    <td className="px-2 py-1">{fmt(r.lbv)}</td>
                    </tr>
                ))}
                </tbody>
                <tfoot className="font-semibold bg-gray-50">
                <tr>
                    <td className="text-left px-2 py-1">Total</td>
                    
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
    </>
    
  );
};

export default Calculator;
