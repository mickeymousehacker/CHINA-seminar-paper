from docx import Document
doc = Document(r"C:\Users\User\CHINA-seminar-paper\research\wiki\saic-motor\China Strategies_term paper_draft_02 (2).docx")
paras = doc.paragraphs

def show(a, b, label):
    print(f"\n===== {label} (paras {a}-{b}) =====")
    for i in range(a, b):
        t = paras[i].text.strip()
        if t:
            print(f"[{i}] {t[:200]}")

show(147, 152, "around CHECK marker (149)")
show(180, 224, "between Conclusion end and KI Annex")
