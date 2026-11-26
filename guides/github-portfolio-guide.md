# GitHub Portfolio & Skill-Validation Guide

**A practical, step-by-step blueprint for building a verifiable technology and cybersecurity portfolio.**

*Licensed under [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org). Created as an independent, open-access educational resource.*

---

## Why Your GitHub Profile Matters
Resumes list what you *claim* you know. A well-structured GitHub repository proves what you can actually *build, troubleshoot, and explain*. Hiring managers, technical leads, and recruiting partners look at GitHub to see:
1. **Consistency:** Regular commits over time showing steady skill development.
2. **Documentation:** Clear `README.md` files proving you can explain technical work to non-technical stakeholders.
3. **Execution:** Working labs, scripts, and live GitHub Pages deployments.

---

## Step 1: Set Up a Career-Ready GitHub Account (15 Minutes)
1. **Choose a Professional Username:** Use a clean, recognizable format (e.g., `FirstLast-Cyber` or `FirstInitialLastName`).
2. **Enable Two-Factor Authentication (2FA):** Go to **Settings → Password and authentication** and enable an authenticator app immediately. Practicing basic account security is your first signal to employers.
3. **Complete Your Profile Bio:** Add a concise 1–2 line summary highlighting your technical focus area (e.g., *Cybersecurity & IT Infrastructure Student | Hands-on Labs in Networking, Linux, and Risk Management*).

---

## Step 2: Create Your First Lab Repository
1. Click the **+** icon in the top-right corner of GitHub and select **New repository**.
2. **Repository Name:** Use lowercase words separated by hyphens (e.g., `technology-foundations-labs`).
3. **Visibility:** Select **Public** so employers and instructors can view your work.
4. **Initialize Files:** Check **Add a README file** and select **MIT License** under *Choose a license*.
5. **Organize With Folders:** Keep your root directory clean. Group your work into clear folders such as:
   * `/labs` — Hands-on exercises and simulation write-ups
   * `/scripts` — PowerShell, Bash, or Python automation scripts
   * `/docs` — Architecture diagrams, checklists, and troubleshooting logs

---

## Step 3: How to Learn From Open Repositories
When exploring open educational repositories—such as the **[Open Technology Learning Lab](https://jdmc-services.github.io/open-technology-learning-lab/)** or the **BrewByte Learning Portal**—follow this four-step study method:
1. **Read the `README.md` First:** Understand the repository's architecture, purpose, and licensing rules before opening code files.
2. **Run Simulations Locally or in the Browser:** Walk through the interactive modules and test how inputs affect outputs.
3. **Write Your Own Lab Summary:** Never copy-paste someone else's code and claim it as original. Instead, create a markdown write-up in your own repository explaining *what you tested, what you observed, and what you learned* (crediting the original `CC BY 4.0` / `MIT` source).
4. **Experiment Safely:** Never upload real passwords, API keys, proprietary company data, or personally identifiable information (PII) to any public repository.

---

## Step 4: Document Every Lab Using This `README.md` Template
Copy this template into every lab folder you create so reviewers can evaluate your work in under 60 seconds:

```markdown
# [Lab or Project Title]

## 1. Objective
[One or two sentences explaining the technical problem solved or concept tested.]

## 2. Tools & Concepts Used
* **Environment:** [e.g., Windows 11, Ubuntu Linux, Browser Simulation]
* **Concepts:** [e.g., Binary/Hex Encoding, Subnetting, Access Controls, Incident Triage]

## 3. Execution & Troubleshooting Log
* **What I Did:** [Brief bullet points of your key steps]
* **Issue Encountered:** [Describe one error, misconfiguration, or challenge you hit]
* **How I Resolved It:** [Explain the exact fix—employers value troubleshooting over perfection]

## 4. Key Takeaway
[One sentence summarizing the security, operational, or business impact of this exercise.]
```

---

## Step 5: Publish Live Demos With GitHub Pages (Optional)
If your repository includes HTML/CSS/JavaScript labs or static documentation:
1. Open your repository **Settings → Pages**.
2. Under **Build and deployment**, set Source to **Deploy from a branch**, choose `main` and `/(root)`, and click **Save**.
3. Within 1–2 minutes, GitHub will generate a live public URL (`https://[your-username].github.io/[repo-name]/`) that you can link directly on your LinkedIn profile and resume.
