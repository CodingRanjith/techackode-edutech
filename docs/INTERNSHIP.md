# Internship Program — Plan & Page Documentation

This document describes the internship program (product/process) and the internship page implementation.

---

## 1. Program overview

- **Duration:** 1-month internship for different tech domains.
- **Experience:** Real-time employee experience: daily check-in/check-out, tasks assigned by team lead, Google Chat support, final project, and experience letter at the end.
- **Fee on site:** Only **"From ₹1,000"** is displayed (no other fee breakdown on the page).
- **Optional:** Original hard copy of experience letter (e.g. ₹1,500, courier at student’s expense) is not prominently shown on the page but can be selected in the application form (Experience letter type: Digital / Hard copy).

---

## 2. How it works (4 steps)

1. **Apply** – Student fills the form; team gets notified and adds them to the batch.
2. **Google Chat** – Team adds the student to the team Google Chat; team lead guides and answers doubts.
3. **Worklogz** – Student receives login credentials and offer letter through the system. Workspace is managed with [Worklogz](http://worklogz.com/) (Complete Business Management Platform; Zoho-based).
4. **Check-in / Check-out** – Student logs in every day to check-in and check-out; team lead assigns tasks on Worklogz.

---

## 3. Worklogz

- **Reference:** [Worklogz](http://worklogz.com/) — *"Complete Business Management Platform | From Attendance to Everything Your Company Needs"*.
- **Used for:** Offer letter & credentials, daily attendance (check-in/check-out), task assignment by team lead.
- **On the page:** A dedicated section (“Powered by Worklogz”) with link to worklogz.com and a short description.

---

## 4. 4-week structure

- **Weekdays:** Learning + tasks assigned by team lead on Worklogz; weekend task-based assignments.
- **Doubts:** Via Google Chat with team lead.
- **Final week:** One project → complete and share in group → team reviews → experience letter issued.

---

## 5. Internship page structure (5 sections)

| Section | Purpose |
|---------|---------|
| 1. Hero | Headline, value prop, single “From ₹1,000” tag, hero image |
| 2. How It Works | 4 step cards (Apply, Google Chat, Worklogz, Check-in/out) |
| 3. Worklogz | “Powered by Worklogz” + worklogz.com link + bullet list (credentials, check-in/out, tasks) |
| 4. 4-Week Roadmap | Timeline: Weekdays, Doubts (Google Chat), Final week (project + experience letter) + image |
| 5. Apply | Form (name, email, phone, domain, experience letter type, message) + roadmap summary |

---

## 6. Form and integration

- Form submits to **Google Sheets** when `VITE_GOOGLE_SCRIPT_URL` is set (Google Apps Script Web App URL).
- **Fields sent:** name, email, phone, domain, experienceLetterType, message.
- If the env variable is not set, the form still works (fallback: log to console, show success message).
- **Payment:** Payment link is shared after team confirms slot (mentioned in the UI).

---

## 7. Assets

- Section images (AI-generated) live under `client/public/images/internship/`:
  - `internship-hero-workspace.png` – Hero section.
  - `internship-worklogz-section.png` – Worklogz section.
  - `internship-roadmap-section.png` – Roadmap section.
- If an image fails to load, a CSS gradient fallback is shown (no broken image).

---

## 8. Tech domains (dropdown)

The application form includes a domain dropdown with the following options:

- Full Stack Development
- React.js Specialization
- Python for AI/ML
- Data Science & Analytics
- UI/UX Design
- Cybersecurity Essentials
- Mobile App Development (Flutter)
- Digital Marketing Mastery
