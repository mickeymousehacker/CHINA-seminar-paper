from docx import Document
import re
from collections import Counter, OrderedDict

doc = Document(r"C:\Users\User\CHINA-seminar-paper\research\wiki\saic-motor\China Strategies_term paper_draft_02 (2).docx")

paras = [p.text for p in doc.paragraphs]
full_text = "\n".join(paras)

# Find all candidate abbreviations: 2-6 uppercase letters, optionally with & or digit
candidates = re.findall(r'\b([A-Z][A-Z&]{1,5}\d?)\b', full_text)
counts = Counter(candidates)

# Roman numerals and citation/journal codes to ignore for the LIST (but still report)
print("=== ALL UPPERCASE CANDIDATES (count) ===")
for ab, c in sorted(counts.items()):
    print(f"{ab}: {c}")

print("\n=== FIRST OCCURRENCE CONTEXT (for each candidate) ===")
# We'll show the first sentence/paragraph where each appears, to check spell-out
for ab in sorted(counts.keys()):
    # find first paragraph containing it as a whole word
    pat = re.compile(r'\b' + re.escape(ab) + r'\b')
    for i, p in enumerate(paras):
        if pat.search(p):
            # get a window around the match
            m = pat.search(p)
            start = max(0, m.start()-90)
            end = min(len(p), m.end()+40)
            snippet = p[start:end].replace("\n", " ")
            print(f"\n[{ab}] (para {i}): ...{snippet}...")
            break
