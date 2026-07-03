# -*- coding: utf-8 -*-
import fitz, re, sys
sys.stdout.reconfigure(encoding="utf-8")

pdfs = {
    "AR2025(FY2025)": r"research/wiki/saic-motor/input/pdf/Saic Motor Annual Report 2025.pdf",
    "AR2024(FY2024)": r"research/wiki/saic-motor/input/pdf/SAIC-Motor-Annual-Report-2024.pdf",
}

patterns = [r"gearing", r"asset-liability", r"asset liability", r"net debt",
            r"interest-bearing", r"debt to equity", r"debt-to-equity",
            r"资产负债率", r"total liabilities", r"total equity"]

for label, path in pdfs.items():
    print(f"\n{'='*60}\n{label}\n{'='*60}")
    doc = fitz.open(path)
    for pno in range(len(doc)):
        text = doc[pno].get_text()
        low = text.lower()
        for pat in patterns:
            for m in re.finditer(pat, low):
                s = max(0, m.start()-60); e = min(len(text), m.end()+110)
                snip = re.sub(r'\s+', ' ', text[s:e]).replace('‑','-')
                print(f"[p{pno+1}|{pat}] ...{snip}...")
    doc.close()
