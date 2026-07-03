from docx import Document

doc = Document(r"C:\Users\User\CHINA-seminar-paper\research\wiki\saic-motor\China Strategies_term paper_draft_02 (2).docx")

in_section = False
for i, para in enumerate(doc.paragraphs):
    text = para.text.strip()
    style = para.style.name
    if "KI Annex" in text and style.startswith("Heading"):
        in_section = True
        print(f"[HEADING] {text}")
        continue
    if in_section and text:
        print(f"[{i}] {text}")
