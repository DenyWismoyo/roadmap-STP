const fs = require('fs');
const path = require('path');

const roadmapDir = path.resolve(__dirname, '../../../../content/roadmaps');

if (!fs.existsSync(roadmapDir)) {
  console.error(`[ERROR] Directory content/roadmaps tidak ditemukan di ${roadmapDir}`);
  process.exit(1);
}

const files = fs.readdirSync(roadmapDir).filter(f => f.endsWith('.md'));
console.log(`\n======================================================`);
console.log(`🔍 AUDIT ROADMAP UPTD KST SOLO TECHNOPARK (2026–2030)`);
console.log(`======================================================`);
console.log(`Ditemukan ${files.length} dokumen roadmap .md\n`);

let baselineTotal = 0;
let aggressiveTotal = 0;
let errors = 0;

const requiredFields = [
  'id', 'number', 'title', 'category', 'cluster',
  'potential_annual_revenue', 'timeline_stage', 'risk_level',
  'regulatory_instrument', 'pic', 'summary'
];

files.forEach(file => {
  const content = fs.readFileSync(path.join(roadmapDir, file), 'utf8');
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) {
    console.error(`❌ [FORMAT ERROR] ${file}: Frontmatter YAML tidak valid!`);
    errors++;
    return;
  }

  const frontmatterStr = match[1];
  const data = {};
  frontmatterStr.split('\n').forEach(line => {
    const parts = line.split(':');
    if (parts.length >= 2) {
      const key = parts[0].trim();
      let val = parts.slice(1).join(':').trim();
      if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
      if (val.startsWith("'") && val.endsWith("'")) val = val.slice(1, -1);
      data[key] = val;
    }
  });

  // Check required fields
  requiredFields.forEach(f => {
    if (!data[f]) {
      console.warn(`⚠️ [WARNING] ${file}: Field '${f}' tidak ditemukan.`);
    }
  });

  const rev = parseInt(data.potential_annual_revenue, 10) || 0;
  const isAggressive = data.category && data.category.toLowerCase().includes('aggressive');

  if (isAggressive) {
    aggressiveTotal += rev;
  } else {
    baselineTotal += rev;
  }

  console.log(`✓ [#${data.number || '?'}] [${data.cluster || 'N/A'}] ${data.title} -> Rp ${rev.toLocaleString('id-ID')}`);
});

const grandTotal = baselineTotal + aggressiveTotal;
console.log(`\n------------------------------------------------------`);
console.log(`📊 REKAPITULASI TARGET PENDAPATAN STRATEGIS:`);
console.log(`- Total 8 Baseline Inisiatif   : Rp ${baselineTotal.toLocaleString('id-ID')} (Target: Rp 28.000.000.000)`);
console.log(`- Total 12 Terobosan Agresif   : Rp ${aggressiveTotal.toLocaleString('id-ID')} (Target: Rp 29.500.000.000)`);
console.log(`- TARGET KOMITMEN MINIMUM      : Rp 50.500.000.000`);
console.log(`- TOTAL AGREGAT HORIZON 2030   : Rp ${grandTotal.toLocaleString('id-ID')} (Target: Rp 57.500.000.000)`);
console.log(`------------------------------------------------------`);

if (baselineTotal === 28000000000 && aggressiveTotal === 29500000000 && grandTotal === 57500000000) {
  console.log(`🎉 [AUDIT SUKSES] Seluruh 20 inisiatif presisi dan sesuai dokumen resmi BLUD STP!`);
} else {
  console.log(`⚠️ [PERHATIAN] Terjadi selisih kalkulasi terhadap pagu acuan resmi.`);
}
