import React, { useState, useEffect } from "react";

const PotentialEarnings = () => {
  
  
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

    <>
    {console.log("Rendering Calculator ",rows)}
        <div className="max-w-6xl mx-auto p-4 space-y-6 text-sm">

        {/* === SECTION 1 === */}
        <div className=" p-2 rounded-2xl shadow">
            <h2 className="text-lg font-semibold mb-2">
                                Potential Earnings BreakDown 
            </h2>
            <div className="overflow-x-auto">
            <table className="min-w-full border text-right text-xs">
                <thead className="bg-black-50">
                <tr>
                    <th className="px-2 py-1">Level</th>
                    {/* <th className="px-2 py-1">Slot Value</th> */}
                    <th className="px-2 py-1">level Members</th>                    
                    <th className="px-2 py-1">Upgrade Bonus Available</th>                    
                    <th className="px-2 py-1">Level Bonus (%)</th>
                    <th className="px-2 py-1">Level Earnings</th>
                </tr>
                </thead>

                <tbody>
                {rows.map((r, i) => (
                    <tr key={i} className="border-t">
                    <td className="text-left px-2 py-1">{r.lv}</td>
                    {/* <td className="px-2 py-1">{fmt(r.sv)}</td> */}
                    <td className="px-2 py-1">{fmt(r.lm)}</td>
                    {/* <td className="px-2 py-1">{fmt(r.ta)}</td> */}
                    {/* <td className="px-2 py-1">{fmt(r.tb)}</td> */}
                    {/* <td className="px-2 py-1">{fmt(r.ubv)}</td>*/}
                    <td className="px-2 py-1">{fmt(r.tuv)}</td>
                    {/* <td className="px-2 py-1">{fmt(r.ube)}</td> */}
                    <td className="px-2 py-1">{(r.lbp * 100).toFixed(2)}%</td>
                    <td className="px-2 py-1">{fmt(r.lbv)}</td>
                    </tr>
                ))}
                </tbody>
                <tfoot className="font-semibold bg-gray-50">
                <tr>
                    <td className="text-left px-2 py-1">Total</td>
                    
                    <td>{fmt(totals.totalJ)}</td>
                    <td>{fmt(totals.Q19)}</td>                    
                    
                    
                    <td></td>                    
                    <td>{fmt(totals.T19)}</td>
                </tr>
                </tfoot>
            </table>
            </div>
        </div>

        {/* === SECTION 2 === */}
        <div className="p-6 rounded-2xl shadow">
            <h2 className="text-lg font-semibold mb-2">
                Potential Earnings Summary
            </h2>


            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">

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

        </div>
    </>
    
  );
};

export default PotentialEarnings;
