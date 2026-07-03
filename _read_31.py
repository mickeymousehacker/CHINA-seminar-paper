from docx import Document

doc = Document(r"C:\Users\User\CHINA-seminar-paper\research\wiki\saic-motor\China Strategies_term paper_draft_02 (2).docx")

# 3.1 is at index 97, next heading at 102 — print paragraphs 98-101
for i in range(97, 102):
    para = doc.paragraphs[i]
    print(f"[{i}] [{para.style.name}]")
    print(para.text)
    print()
