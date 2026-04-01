import { useState, useMemo, useEffect, useCallback } from "react";

const RAW = {"ANDREW ONSEN":{"missed":["383670","384482","384485","382922","384769","384545","386990","388067","387649","388734","382959","384185","383763","383543","384246","384139","385883","386539","387510","388764","388651","382600","383856","385977","386458","385205","386628","386408","382686","384086","385568","384921","386984","386985","388669","388559","384282","386294","385043","385602","386634","388039","387729","388647","388952","389052","389183","389282","389319","390487","390502","390600","390679","390933","391169","391331"]},"BRAYA STARKEY":{"missed":["389198","389271","389354","389378","389394","389774","390239","390344","390361","390479","390691","390730","391007"]},"BROCK LATHROP":{"missed":["382424","383232","384489","382704","385467","385858","387974","387818","388625","382784","383376","383264","383379","382843","382511","382626","382401","383100","384137","386088","386692","385837","385611","385728","387899","387959","381897","388828","382768","384448","385756","385759","387982","385819","387328","381872","381657","383337","384317","387181","385845","385403","387576","388491","385903","388449","388727","388618","383976","383422","385431","388471","387448","388860","387727","381774","388812","389506","389756","389861","389863","389883","389972","390242","390327","390331","390424","390568","390707","390815","390819","390825","391253","391259"]},"CHRISTIAN ANDERSON":{"missed":["384593","382207","384376","384377","383908","385964","386110","387538","385881","386198","387562","384162","383857","384727","385206","386734","387541","388355","386906","387603","385178","386092","384421","386489","385842","385511","387684","388388","387636","387523","388441","388555","381969","382503","385982","385765","385433","388474","386917","389077","389351","389357","389776","389844","390083","390371","390413","390575","390584","390702","390738","391065","391095","391101","391342"]},"CHRISTINE GOETZ":{"missed":["382976","381837","384484","385290","387031","386610","386505","387534","387314","382281","382170","381861","382899","381706","382621","383933","385339","384801","386865","386646","387344","388372","388829","384993","384999","383913","386622","386510","388078","387321","388858","382571","381935","382913","385397","382808","385018","388668","387916","382776","382556","382223","384784","384125","385157","387993","387551","386304","386307","387334","388862","387617","388759","381660","381944","388898","388903","389031","389148","389299","390355","390382","390480","390565","391178","391280"]},"D'VONTAE BROWN":{"missed":["382035","383066","383671","384374","385184","383019","385079","384219","387191","385528","386449","386832","386614","387318","388344","381978","382120","382128","382739","384850","385057","385113","387397","387063","386316","387342","381511","382656","383461","383359","382109","382714","383919","386172","386785","387592","387598","388682","388808","382962","382634","384535","387291","385516","387355","387740","386715","388554","388833","383089","383145","382006","385597","384849","388868","388644","382695","382582","383393","389177","389364","389446","389722","389885","390178","390374","390389","390722","390768","390779","390905","391252","391306"]},"JACE NIBARGER":{"missed":["382979","384823","385136","387193","386335","381692","381974","383043","384306","385110","387282","385726","386424","386925","388876","379762","382873","383073","382655","383742","383801","383806","388290","387151","387269","388185","388798","384251","383116","387306","382949","382615","384349","386078","386243","387387","385719","387222","388867","382192","383396","389062","389192","389331","389599","389641","389683","390071","390314","390328","390406","390637","390736","391297"]},"JAMES CAROLAN":{"missed":["389074","389079","389324","389788","389984","390390","390787","390902","391067","391257"]},"JONATHAN DODSON":{"missed":["376303"]},"JONATHAN LEWIS":{"missed":["383673","382319","383626","385851","387086","386668","385916","385919","387424","387926","388512","383986","386474","387170","386530","386312","388544","388326","382092","388216","381730","383352","382103","382106","383526","385758","386789","386348","386235","385929","385707","380561","388027","383387","383554","384038","384425","386263","386541","388274","388052","382942","381809","384065","383534","386683","386359","386137","388580","388423","382031","389026","389226","389274","389276","389352","389489","389805","389935","389949","390098","390133","390302","390592","390594","390754","390788","390910","390965","391069","391080","391130","391165","391172","391246","391263","391286"]},"KIM YOUNG":{"missed":["384600","384574","384243","384803","386759","387349","387955","383792","384276","384991","385086","384776","384331","385035","387769","382137","383664","383832","385015","387307","381963","383033","382727","383421","384231","384846","387992","387663","387667","381662","381776","389167","389248","389400","389411","389659","389797","389829","389847","390270","390289","390346","390521","390619","390814","390971"]},"MERCEDES PATTERSON":{"missed":["383953","383955","384987","383623","387197","383657","382903","384354","385667","386477","384917","385945","385004","386750","386754","388434","387907","381898","381786","381844","381905","384271","384992","383414","383808","385860","385039","386894","387376","385818","382183","383551","383779","383557","385068","385017","386655","386719","384783","384402","384403","388757","389043","389143","389510","389589","389590","389607","389646","389657","391105","391118","391155","391337"]},"ROBERT LOTT":{"missed":["383287","383788","383563","384481","384548","385021","385025","388732","388627","382396","381972","383485","381704","383046","383767","383438","384853","384025","386252","385229","385002","387172","388095","386208","388152","386816","381952","382878","383687","383969","386893","386569","387158","386515","382460","384084","383888","384585","384253","386874","387633","388058","386609","388003","382336","384450","385592","384950","385265","388532","388420","381777","389227","389423","389437","389575","389586","389624","389712","389978","390016","390066","390262","390791","390835","390865","390986","391025","391120","391222"]},"RYAN DAVOREN":{"missed":["384093","382532","383127","383627","387581","387582","388069","388015","382560","382454","383375","383435","386083","385441","385111","385005","388432","388322","383183","384998","384116","385317","386407","388525","384695","383339","384977","383501","383507","385564","386591","385566","386760","387077","388335","387803","382387","382330","384894","382506","386291","386963","386135","386969","387555","387006","387009","388428","389120","389233","389710","389806","390993","391060","391122","391153","391242"]},"STEVEN ARTERBERY":{"missed":["382423","384872","386276","386224","387705","388845","388403","382284","382067","382789","383982","381705","384182","383437","384464","386033","386421","387678","388217","382375","383354","384386","383851","384887","383749","383412","383912","384115","384832","384509","388180","388189","388850","387609","382185","383889","383225","382809","384702","385731","385626","387683","387797","382389","383190","382165","383144","382005","384455","384121","384407","386133","385711","388586","381993","389107","389519","389562","389565","389611","389792","389987","389999","390050","390153","390737","390794","390940","391371"]},"WILL COLLINS":{"missed":["382530","382420","384594","382814","383620","384326","384930","386167","386554","387035","387752","387814","388848","386867","387896","387560","387239","386819","388048","387902","381679","382488","383292","383188","383079","382437","383351","382216","383854","386394","384117","384004","385208","385709","387048","387654","381712","384191","383223","385289","385179","383502","383618","384310","385348","386153","385510","387137","380155","388447","387805","383580","381910","381916","382834","384288","382724","383979","382500","385989","385430","386572","386577","386351","384901","385601","388589","388640","388754","389152","389156","389216","389323","389616","389998","390029","390110","390160","390246","390276","390297","390431","390721","390729","390782","390838","391010","391041","391132","391150","391162","391175"]}};

const STATUSES = [
  { key: "new", label: "New", color: "#64748b", bg: "rgba(100,116,139,0.15)", icon: "●" },
  { key: "attempted", label: "Attempted", color: "#f59e0b", bg: "rgba(245,158,11,0.15)", icon: "◐" },
  { key: "contacted", label: "Contacted", color: "#3b82f6", bg: "rgba(59,130,246,0.15)", icon: "◉" },
  { key: "scheduled", label: "Scheduled", color: "#8b5cf6", bg: "rgba(139,92,246,0.15)", icon: "◈" },
  { key: "sold", label: "Sold", color: "#10b981", bg: "rgba(16,185,129,0.15)", icon: "✓" },
  { key: "declined", label: "Not Interested", color: "#ef4444", bg: "rgba(239,68,68,0.15)", icon: "✕" },
];

const STATUS_MAP = Object.fromEntries(STATUSES.map((s) => [s.key, s]));
const STORAGE_KEY = "tire-crm-statuses-v2";

const ALL_LEADS = [];
Object.entries(RAW).forEach(([advisor, data]) => {
  data.missed.forEach((ro) => {
    ALL_LEADS.push({ ro, advisor, firstName: advisor.split(" ")[0] });
  });
});

const safeStorage = {
  get(key) {
    try {
      const value = localStorage.getItem(key);
      return value ? { value } : null;
    } catch {
      return null;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch {
      // ignore
    }
  },
  delete(key) {
    try {
      localStorage.removeItem(key);
    } catch {
      // ignore
    }
  },
};

export default function TireCRM() {
  const [statuses, setStatuses] = useState({});
  const [notes, setNotes] = useState({});
  const [loading, setLoading] = useState(true);
  const [filterAdvisor, setFilterAdvisor] = useState("ALL");
  const [filterStatus, setFilterStatus] = useState("ALL");
  const [searchTerm, setSearchTerm] = useState("");
  const [editingNote, setEditingNote] = useState(null);
  const [noteText, setNoteText] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const storage = window?.storage ?? safeStorage;
        const result = await storage.get(STORAGE_KEY);
        if (result?.value) {
          const parsed = JSON.parse(result.value);
          setStatuses(parsed.statuses || {});
          setNotes(parsed.notes || {});
        }
      } catch {
        // no saved data yet
      }
      setLoading(false);
    })();
  }, []);

  const persist = useCallback(async (newStatuses, newNotes) => {
    setSaving(true);
    try {
      const storage = window?.storage ?? safeStorage;
      await storage.set(STORAGE_KEY, JSON.stringify({ statuses: newStatuses, notes: newNotes }));
    } catch (e) {
      console.error("Save failed:", e);
    }
    setSaving(false);
  }, []);

  const updateStatus = useCallback((ro, status) => {
    setStatuses((prev) => {
      const next = { ...prev, [ro]: status };
      persist(next, notes);
      return next;
    });
  }, [notes, persist]);

  const saveNote = useCallback((ro) => {
    setNotes((prev) => {
      const next = { ...prev, [ro]: noteText };
      persist(statuses, next);
      return next;
    });
    setEditingNote(null);
    setNoteText("");
  }, [noteText, statuses, persist]);

  const resetAll = useCallback(async () => {
    if (!window.confirm("Reset ALL statuses and notes? This cannot be undone.")) return;
    setStatuses({});
    setNotes({});
    try {
      const storage = window?.storage ?? safeStorage;
      await storage.delete(STORAGE_KEY);
    } catch {
      // ignore
    }
  }, []);

  const advisorNames = useMemo(() => {
    return [...new Set(ALL_LEADS.map((l) => l.advisor))].sort();
  }, []);

  const filtered = useMemo(() => {
    return ALL_LEADS.filter((lead) => {
      if (filterAdvisor !== "ALL" && lead.advisor !== filterAdvisor) return false;
      const st = statuses[lead.ro] || "new";
      if (filterStatus !== "ALL" && st !== filterStatus) return false;
      if (searchTerm && !lead.ro.includes(searchTerm)) return false;
      return true;
    });
  }, [filterAdvisor, filterStatus, searchTerm, statuses]);

  const stats = useMemo(() => {
    const pool = filterAdvisor === "ALL" ? ALL_LEADS : ALL_LEADS.filter((l) => l.advisor === filterAdvisor);
    const counts = { total: pool.length };
    STATUSES.forEach((s) => {
      counts[s.key] = 0;
    });
    pool.forEach((l) => {
      const st = statuses[l.ro] || "new";
      counts[st] = (counts[st] || 0) + 1;
    });
    return counts;
  }, [filterAdvisor, statuses]);

  const progressPct = stats.total > 0 ? (((stats.total - stats.new) / stats.total) * 100).toFixed(0) : 0;

  if (loading) {
    return (
      <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#0c0c14", color: "#e8e8e8", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ opacity: 0.5 }}>Loading saved progress…</div>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#0c0c14", color: "#e8e8e8", minHeight: "100vh" }}>
      <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=DM+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

      <div style={{ background: "linear-gradient(135deg, #1e3a5f 0%, #1a1a2e 100%)", padding: "22px 24px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12 }}>
            <div>
              <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", opacity: 0.5, fontWeight: 700, marginBottom: 4 }}>
                HENDRICK TOYOTA MERRIAM
              </div>
              <h1 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 24, margin: 0, letterSpacing: 0.5 }}>
                April Tire Special
                <span style={{ fontSize: 13, fontWeight: 500, fontFamily: "'DM Sans'", marginLeft: 10, opacity: 0.5 }}>
                  Callback Tracker
                </span>
              </h1>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              {saving && <span style={{ fontSize: 11, opacity: 0.4 }}>Saving...</span>}
              <button
                onClick={resetAll}
                style={{
                  background: "rgba(239,68,68,0.1)",
                  border: "1px solid rgba(239,68,68,0.25)",
                  borderRadius: 6,
                  padding: "6px 12px",
                  color: "#ef4444",
                  cursor: "pointer",
                  fontSize: 11,
                  fontWeight: 600,
                  fontFamily: "'DM Sans'",
                }}
              >
                Reset All
              </button>
            </div>
          </div>

          <div style={{ marginTop: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
              <span style={{ fontSize: 12, fontWeight: 700 }}>
                {stats.total - stats.new} of {stats.total} worked
              </span>
              <span style={{ fontSize: 12, fontWeight: 700, color: "#3b82f6" }}>{progressPct}%</span>
            </div>
            <div style={{ height: 6, background: "rgba(255,255,255,0.08)", borderRadius: 3, overflow: "hidden" }}>
              <div
                style={{
                  height: "100%",
                  borderRadius: 3,
                  transition: "width 0.3s ease",
                  width: `${progressPct}%`,
                  background: "linear-gradient(90deg, #3b82f6, #10b981)",
                }}
              />
            </div>
          </div>

          <div style={{ display: "flex", gap: 8, marginTop: 14, flexWrap: "wrap" }}>
            {STATUSES.map((s) => (
              <div key={s.key} style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 10px", borderRadius: 20, background: s.bg, fontSize: 12, fontWeight: 600 }}>
                <span style={{ color: s.color, fontSize: 10 }}>{s.icon}</span>
                <span style={{ color: s.color }}>{stats[s.key] || 0}</span>
                <span style={{ opacity: 0.5, fontSize: 11 }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "16px 24px" }}>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", background: "rgba(255,255,255,0.03)", padding: "12px 16px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ flex: "1 1 200px" }}>
            <label style={{ fontSize: 10, letterSpacing: 2, fontWeight: 700, opacity: 0.4, display: "block", marginBottom: 4 }}>ADVISOR</label>
            <select
              value={filterAdvisor}
              onChange={(e) => setFilterAdvisor(e.target.value)}
              style={{ width: "100%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6, padding: "8px 10px", color: "#e8e8e8", fontSize: 13, fontFamily: "'DM Sans'", cursor: "pointer" }}
            >
              <option value="ALL">All Advisors ({ALL_LEADS.length})</option>
              {advisorNames.map((name) => {
                const count = ALL_LEADS.filter((l) => l.advisor === name).length;
                return (
                  <option key={name} value={name}>
                    {name} ({count})
                  </option>
                );
              })}
            </select>
          </div>

          <div style={{ flex: "1 1 180px" }}>
            <label style={{ fontSize: 10, letterSpacing: 2, fontWeight: 700, opacity: 0.4, display: "block", marginBottom: 4 }}>STATUS</label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              style={{ width: "100%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6, padding: "8px 10px", color: "#e8e8e8", fontSize: 13, fontFamily: "'DM Sans'", cursor: "pointer" }}
            >
              <option value="ALL">All Statuses</option>
              {STATUSES.map((s) => (
                <option key={s.key} value={s.key}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>

          <div style={{ flex: "1 1 150px" }}>
            <label style={{ fontSize: 10, letterSpacing: 2, fontWeight: 700, opacity: 0.4, display: "block", marginBottom: 4 }}>SEARCH RO#</label>
            <input
              type="text"
              placeholder="Type RO#..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: "100%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6, padding: "8px 10px", color: "#e8e8e8", fontSize: 13, fontFamily: "'DM Sans'", outline: "none", boxSizing: "border-box" }}
            />
          </div>

          <div style={{ flex: "0 0 auto", alignSelf: "flex-end" }}>
            <div style={{ fontSize: 13, fontWeight: 700, padding: "8px 0", color: "#3b82f6" }}>
              {filtered.length} lead{filtered.length !== 1 ? "s" : ""}
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px 32px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: 48, opacity: 0.3, background: "rgba(255,255,255,0.02)", borderRadius: 10 }}>
              {ALL_LEADS.length === 0 ? "No data loaded" : "No leads match current filters"}
            </div>
          )}

          {filtered.map((lead) => {
            const st = statuses[lead.ro] || "new";
            const statusInfo = STATUS_MAP[st];
            const note = notes[lead.ro];
            const isEditing = editingNote === lead.ro;

            return (
              <div
                key={lead.ro}
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: `1px solid ${st === "new" ? "rgba(255,255,255,0.06)" : `${statusInfo.color}33`}`,
                  borderRadius: 10,
                  padding: "12px 16px",
                  borderLeft: `4px solid ${statusInfo.color}`,
                  transition: "all 0.15s ease",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                  <div style={{ flex: "0 0 auto", minWidth: 90 }}>
                    <div style={{ fontSize: 10, letterSpacing: 2, opacity: 0.35, fontWeight: 700 }}>RO#</div>
                    <div style={{ fontFamily: "'Archivo Black', monospace", fontSize: 17, letterSpacing: 1 }}>{lead.ro}</div>
                  </div>

                  <div style={{ flex: "0 0 auto", minWidth: 110 }}>
                    <div style={{ fontSize: 10, letterSpacing: 2, opacity: 0.35, fontWeight: 700 }}>ADVISOR</div>
                    <div style={{ fontSize: 13, fontWeight: 600 }}>{lead.firstName}</div>
                  </div>

                  <div style={{ flex: "1 1 120px", minWidth: 100 }}>
                    <div style={{ fontSize: 10, letterSpacing: 2, opacity: 0.35, fontWeight: 700 }}>SERVICE</div>
                    <div style={{ fontSize: 12, opacity: 0.7 }}>Tires - Install 4</div>
                  </div>

                  {note && !isEditing && (
                    <div style={{ flex: "1 1 160px", minWidth: 120 }}>
                      <div
                        style={{ fontSize: 11, opacity: 0.55, fontStyle: "italic", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: 220, cursor: "pointer" }}
                        onClick={() => {
                          setEditingNote(lead.ro);
                          setNoteText(note);
                        }}
                        title={note}
                      >
                        📝 {note}
                      </div>
                    </div>
                  )}

                  <div style={{ flex: "0 0 auto", display: "flex", gap: 4, flexWrap: "wrap", marginLeft: "auto" }}>
                    {STATUSES.map((s) => (
                      <button
                        key={s.key}
                        onClick={() => updateStatus(lead.ro, s.key)}
                        style={{
                          background: st === s.key ? s.bg : "rgba(255,255,255,0.04)",
                          border: st === s.key ? `1px solid ${s.color}55` : "1px solid rgba(255,255,255,0.06)",
                          borderRadius: 6,
                          padding: "5px 9px",
                          color: st === s.key ? s.color : "rgba(255,255,255,0.35)",
                          cursor: "pointer",
                          fontSize: 11,
                          fontWeight: st === s.key ? 700 : 500,
                          fontFamily: "'DM Sans'",
                          transition: "all 0.12s ease",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {s.icon} {s.label}
                      </button>
                    ))}
                    <button
                      onClick={() => {
                        if (isEditing) {
                          setEditingNote(null);
                          setNoteText("");
                        } else {
                          setEditingNote(lead.ro);
                          setNoteText(note || "");
                        }
                      }}
                      style={{
                        background: note ? "rgba(251,191,36,0.1)" : "rgba(255,255,255,0.04)",
                        border: note ? "1px solid rgba(251,191,36,0.3)" : "1px solid rgba(255,255,255,0.06)",
                        borderRadius: 6,
                        padding: "5px 9px",
                        cursor: "pointer",
                        color: note ? "#fbbf24" : "rgba(255,255,255,0.35)",
                        fontSize: 11,
                        fontFamily: "'DM Sans'",
                        fontWeight: 500,
                      }}
                    >
                      📝
                    </button>
                  </div>
                </div>

                {isEditing && (
                  <div style={{ marginTop: 10, display: "flex", gap: 8 }}>
                    <input
                      autoFocus
                      type="text"
                      placeholder="Left voicemail, callback tomorrow..."
                      value={noteText}
                      onChange={(e) => setNoteText(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") saveNote(lead.ro);
                        if (e.key === "Escape") {
                          setEditingNote(null);
                          setNoteText("");
                        }
                      }}
                      style={{
                        flex: 1,
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        borderRadius: 6,
                        padding: "7px 12px",
                        color: "#e8e8e8",
                        fontSize: 12,
                        fontFamily: "'DM Sans'",
                        outline: "none",
                      }}
                    />
                    <button
                      onClick={() => saveNote(lead.ro)}
                      style={{
                        background: "rgba(59,130,246,0.2)",
                        border: "1px solid rgba(59,130,246,0.4)",
                        borderRadius: 6,
                        padding: "7px 14px",
                        color: "#3b82f6",
                        cursor: "pointer",
                        fontSize: 12,
                        fontWeight: 700,
                        fontFamily: "'DM Sans'",
                      }}
                    >
                      Save
                    </button>
                    <button
                      onClick={() => {
                        setEditingNote(null);
                        setNoteText("");
                      }}
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: 6,
                        padding: "7px 12px",
                        color: "rgba(255,255,255,0.5)",
                        cursor: "pointer",
                        fontSize: 12,
                        fontFamily: "'DM Sans'",
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: 24, textAlign: "center", fontSize: 11, opacity: 0.25, padding: 16, borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          Tire recommendations from Jan – Mar 2025 &middot; Statuses auto-save between sessions
        </div>
      </div>
    </div>
  );
}
