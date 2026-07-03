import fitz
import re

pdfs = {
    "AR2025": r"research/wiki/saic-motor/input/pdf/Saic Motor Annual Report 2025.pdf",
    "AR2024": r"research/wiki/saic-motor/input/pdf/SAIC-Motor-Annual-Report-2024.pdf",
}

# Keywords for net gearing / cash flow. Chinese reports: asset-liability ratio (资产负债率),
# net cash flow from operating activities (经营活动产生的现金流量净额)
patterns = [
    r"gearing", r"asset-liability ratio", r"asset liability ratio",
    r"net cash flow", r"cash flow from operating", r"operating activities",
    r"interest-bearing", r"net debt", r"资产负债率", r"经营活动",
]

for label, path in pdfs.items():
    print(f"\n{'='*60}\n{label}: {path}\n{'='*60}")
    try:
        doc = fitz.open(path)
    except Exception as e:
        print("ERROR:", e)
        continue
    for pno in range(len(doc)):
        text = doc[pno].get_text()
        low = text.lower()
        for pat in patterns:
            for m in re.finditer(pat, low):
                s = max(0, m.start()-70)
                e = min(len(text), m.end()+90)
                snippet = text[s:e].replace("\n", " ")
                snippet = re.sub(r'\s+', ' ', snippet)
                print(f"[p{pno+1}] ...{snippet}...")
    doc.close()
