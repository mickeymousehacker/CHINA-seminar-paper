from docx import Document
import re

doc = Document(r"C:\Users\User\CHINA-seminar-paper\research\wiki\saic-motor\China Strategies_term paper_draft_02 (2).docx")

full_text = "\n".join(p.text for p in doc.paragraphs)

# Find all uppercase abbreviations (2-6 chars), including ones with numbers
abbrevs = re.findall(r'\b([A-Z]{2,6}(?:\d)?)\b', full_text)
from collections import Counter
counts = Counter(abbrevs)

# Filter out likely non-abbreviations (very common words, roman numerals etc.)
exclude = {'II', 'III', 'IV', 'VI', 'VII', 'VIII', 'CEO', 'CFO', 'COO', 'AER', 'SMJ', 'JFE', 'QJE', 'AMR', 'AMJ', 'RES', 'JEL', 'CER', 'RFS'}

for abbrev, count in sorted(counts.items()):
    if count >= 2:
        print(f"{abbrev}: {count}x")
