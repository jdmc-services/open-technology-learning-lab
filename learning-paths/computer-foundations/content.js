const MODULES = [
  {
    "id": "data",
    "title": "Information & Number Systems",
    "tag": "Represent information",
    "summary": "Learn how binary patterns become numbers, text, colors and stored files.",
    "outcomes": [
      "Convert among decimal, binary and hexadecimal",
      "Explain bytes, Unicode and UTF-8",
      "Estimate storage using decimal and binary units"
    ],
    "sections": [
      [
        "Why binary?",
        "Electronic circuits can reliably represent two logical states. A bit is one binary digit, 0 or 1. Eight bits make one byte. The same bit pattern can mean a number, a letter, a pixel value or an instruction; software and encoding rules provide the interpretation.",
        "A transit kiosk records whether each of eight gates is open (1) or closed (0). One byte can represent the eight statuses."
      ],
      [
        "Place values",
        "Decimal uses powers of 10; binary uses powers of 2; hexadecimal uses powers of 16. The binary pattern 00101101 is 32 + 8 + 4 + 1 = 45 in decimal. Hexadecimal 2D represents the same value. Each hex digit corresponds to four bits.",
        "A web designer enters a hexadecimal color such as #2D7A80. The three pairs describe red, green and blue channel values."
      ],
      [
        "Hexadecimal explained: from 0–9 to A–F",
        "Hexadecimal is base 16. Its sixteen symbols are 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, where A=10, B=11, C=12, D=13, E=14 and F=15. After F comes 10 (sixteen in decimal), not decimal ten. Each hex position is a power of 16: 1E means 1×16 + 14 = 30 decimal. The same value is 00011110 in eight-bit binary. Split those bits into groups of four: 0001 = 1 and 1110 = E, giving hex 1E. Another example: decimal 255 = binary 11111111 = hex FF. Hex is a readable notation for binary values, not a different kind of computer storage.",
        "A web developer reads #FF8000 as red 255, green 128, blue 0. A network analyst may see hexadecimal digits in IPv6 addresses or MAC-address notation. The compact form makes values easier to inspect."
      ],
      [
        "Practice hexadecimal in the byte workbench",
        "Start with decimal 30 and verify that the workbench shows binary 00011110 and hexadecimal 1E. Next enter hex FF to get decimal 255 and eight 1 bits. Finally enter hex 10 and observe decimal 16. For a two-digit hex value XY, multiply the first digit's value by 16 and add the second digit's value. For example 2A = 2×16 + 10 = 42. Hexadecimal is used for CSS colors, debugging, IPv6 notation and MAC-address displays; a MAC address is not proof of device identity.",
        "A technician comparing a log value of 0x2A with a dashboard reading of 42 can recognize that they represent the same quantity."
      ],
      [
        "Text is encoded",
        "ASCII assigns numeric codes to 128 characters (0–127). Unicode assigns code points to characters across writing systems; UTF-8 encodes those code points as one to four bytes. For example, capital B is decimal 66 and binary 01000010 in ASCII and UTF-8; an emoji needs multiple UTF-8 bytes.",
        "A community bulletin must display names in several languages. Using UTF-8 avoids replacing unsupported characters with question marks."
      ],
      [
        "Size and persistence",
        "Eight bits are one byte. 1 kB is 1,000 bytes; 1 KiB is 1,024 bytes. Similarly, MB/GB use powers of 1,000, while MiB/GiB use powers of 1,024. RAM usually loses contents when power is removed; SSDs and hard drives retain stored data.",
        "An archive team estimates space for scanned receipts before choosing a drive and a backup strategy."
      ],
      [
        "Octal and permissions",
        "Octal is base 8 and uses digits 0–7. Each octal digit maps to three bits. On many Unix-like systems, permission digits combine read (4), write (2), and execute (1): 7 = 4+2+1, while 5 = 4+1.",
        "A technician reads permission mode 750 and explains that the owner has full access, the group can read and execute, and others have no permissions."
      ]
    ],
    "lab": "bits",
    "scenario": {
      "title": "Community archive storage decision",
      "prompt": "A community archive holds 12,000 text records, averaging 2,500 UTF-8 bytes each. How much raw storage do they need, before metadata, indexes and backups?",
      "choices": [
        "About 30 MB",
        "About 3 GB",
        "About 300 KB"
      ],
      "answer": 0,
      "why": "12,000 × 2,500 = 30,000,000 bytes = 30 MB (decimal), approximately 28.6 MiB. Real deployments require additional capacity for indexes, growth and backups."
    }
  },
  {
    "id": "network",
    "title": "Networks & Connectivity",
    "tag": "Connect systems",
    "summary": "Understand how devices share resources and how to isolate connectivity failures.",
    "outcomes": [
      "Distinguish LAN, WAN, switches and routers",
      "Identify common IP and MAC address roles",
      "Apply segmentation and safe diagnostic thinking"
    ],
    "sections": [
      [
        "Local and wide networks",
        "A local area network (LAN) connects nearby devices, often through switches and wireless access points. A wide area network (WAN) connects networks over larger distances. A router forwards traffic between IP networks; a switch forwards frames within a local network.",
        "A neighborhood delivery cooperative connects order tablets and a receipt printer in one shop, while an internet connection links it to remote customers."
      ],
      [
        "Addresses and names",
        "An IP address identifies a network interface at the network layer and helps route packets. A MAC address is used for local link-layer delivery. MAC addresses can be changed or spoofed, so they are not reliable identities for access authorization. DNS translates domain names into network addresses.",
        "A user can reach a service by its IP address but not by its hostname. That suggests checking DNS before replacing a network cable."
      ],
      [
        "Wireless and wired",
        "Ethernet commonly provides stable wired connectivity. Wi-Fi uses radio and can be affected by distance, interference, congestion and configuration. An access point bridges wireless clients into the local network.",
        "A ticket counter has reliable wired service, but a handheld device loses signal in a storeroom. The likely first investigation is wireless coverage."
      ],
      [
        "Security boundaries",
        "Firewalls filter traffic according to rules; segmentation limits which systems can communicate. A secure design verifies users and devices, grants only necessary access, and monitors activity. Being connected to the same LAN does not automatically mean access should be permitted.",
        "A guest wireless network allows internet access but cannot reach a private payment terminal."
      ],
      [
        "Diagnose methodically",
        "Start with the symptom and scope: one device or many? Check local connection, IP configuration, gateway reachability, name resolution and application availability in order. Use read-only diagnostics on systems you own or are authorized to support.",
        "A café can print locally but cannot reach cloud ordering. That distinction narrows the issue to the internet path or cloud service."
      ]
    ],
    "lab": "network",
    "scenario": {
      "title": "The delivery kiosk cannot print",
      "prompt": "A tablet can browse the internet but cannot send jobs to a printer on the local network. Which is the best initial check?",
      "choices": [
        "Verify the printer is powered on, connected and on an accessible network",
        "Replace the internet service provider",
        "Disable the firewall permanently"
      ],
      "answer": 0,
      "why": "Internet access does not prove local printer connectivity. Check printer status, network placement and permitted communication before making changes."
    }
  },
  {
    "id": "software",
    "title": "Applications & Digital Work",
    "tag": "Use tools safely",
    "summary": "Select appropriate applications, collaborate responsibly and evaluate software risk.",
    "outcomes": [
      "Match applications to workplace needs",
      "Recognize permissions and licensing tradeoffs",
      "Choose safe installation and remote support practices"
    ],
    "sections": [
      [
        "Applications and operating systems",
        "An application is software designed for user tasks, while an operating system manages hardware resources and provides services to applications. Some applications run locally; others operate through a browser or remote service.",
        "A volunteer uses a browser-based scheduling application on a borrowed laptop without installing a local program."
      ],
      [
        "Productivity and collaboration",
        "Documents organize written information; spreadsheets calculate and analyze structured data; presentations communicate key points. Shared workspaces enable collaboration but require deliberate permissions and version management.",
        "A repair cooperative tracks inventory in a spreadsheet, writes procedures in documents and presents monthly service trends."
      ],
      [
        "Remote assistance",
        "Remote support lets a technician view or control a device with appropriate authorization. Verify the technician through a trusted channel, obtain consent, limit access and end the session when finished. Never share passwords or one-time codes with an unexpected caller.",
        "An employee receives a surprise request to install a remote-control utility. They confirm the request through the organization’s official support channel first."
      ],
      [
        "Software sourcing and licensing",
        "Install software from verified sources and check publisher identity, required permissions, compatibility, update support and licensing. Open-source licenses grant rights under specific conditions; proprietary licenses impose different conditions. Neither category is automatically secure.",
        "A nonprofit compares two calendar tools by ongoing cost, data handling, accessibility and update support—not just the initial price."
      ],
      [
        "Maintain and remove software",
        "Back up important data before disruptive changes, follow documented procedures, keep software updated and uninstall unused programs. Removing an application may not delete its data or revoke cloud access; review both.",
        "A shared workstation is repurposed, so the team removes an unused app, revokes its account access and checks retained files."
      ]
    ],
    "lab": "software",
    "scenario": {
      "title": "Unexpected remote support request",
      "prompt": "A caller claims to be technical support and asks you to install a remote access app immediately. What should you do first?",
      "choices": [
        "Verify the request using an established support contact",
        "Install it because support staff need access",
        "Share your login code to speed up the repair"
      ],
      "answer": 0,
      "why": "Independent verification, informed consent and least privilege reduce the risk of remote-access scams."
    }
  },
  {
    "id": "troubleshoot",
    "title": "IT Problem Solving",
    "tag": "Diagnose and document",
    "summary": "Practice evidence-based troubleshooting and communicate a resolution clearly.",
    "outcomes": [
      "Define a problem using observable facts",
      "Test one hypothesis at a time",
      "Validate results and write a useful service record"
    ],
    "sections": [
      [
        "Describe the symptoms",
        "Capture what fails, who is affected, when it began, the exact error and recent changes. Separate observations from assumptions.",
        "A booking desk reports that reservations fail only on one browser after a recent update."
      ],
      [
        "Develop hypotheses",
        "List plausible causes and prioritize by likelihood, impact and safety. Do not treat the first guess as a confirmed root cause.",
        "A report opens on one computer but not another. Possibilities include permissions, file corruption or a missing application."
      ],
      [
        "Test safely",
        "Choose low-risk, reversible tests that distinguish among hypotheses. Record outcomes. Seek authorization before changing configurations or accessing sensitive systems.",
        "A technician checks whether a test account can access a shared folder before changing production permissions."
      ],
      [
        "Plan and implement",
        "Consider impact, backup, rollback, approvals and escalation. Make the smallest justified change. If the test resolves the issue, still document the action.",
        "A scheduled application update is rolled back in a controlled maintenance window after approval."
      ],
      [
        "Verify and document",
        "Confirm the original symptom is resolved, related functions still work, and preventive measures are considered. Document the cause, evidence, actions, validation and next steps.",
        "A support record allows the next technician to resolve a recurring configuration error without repeating the entire investigation."
      ]
    ],
    "lab": "ticket",
    "scenario": {
      "title": "Inventory app fails for one employee",
      "prompt": "The application works for the rest of the team. One employee sees “access denied.” Which hypothesis should be tested first?",
      "choices": [
        "The employee’s account lacks the necessary permission",
        "The entire internet is down",
        "All company computers need replacement"
      ],
      "answer": 0,
      "why": "The limited scope and explicit access-denied message make account permissions a strong, testable first hypothesis."
    }
  }
];
const QUESTIONS = {
  "data": [
    [
      "What is the decimal value of binary 00001010?",
      [
        "10",
        "8",
        "16"
      ],
      0,
      "8 + 2 = 10."
    ],
    [
      "How many bits are in one byte?",
      [
        "4",
        "8",
        "16"
      ],
      1,
      "A byte is eight bits."
    ],
    [
      "What is hexadecimal 10 in decimal?",
      [
        "10",
        "16",
        "2"
      ],
      1,
      "The left 1 represents one group of sixteen."
    ],
    [
      "What is decimal 31 in hexadecimal?",
      [
        "1F",
        "31",
        "2F"
      ],
      0,
      "16 + 15 = 31, so 1F."
    ],
    [
      "Which statement is accurate?",
      [
        "1 kB = 1,024 bytes",
        "1 KiB = 1,024 bytes",
        "1 MiB = 1,000 bytes"
      ],
      1,
      "Binary-prefixed KiB means 1,024 bytes."
    ],
    [
      "Which encoding commonly represents multilingual text on the web?",
      [
        "UTF-8",
        "Only 7-bit ASCII",
        "Raw decimal digits"
      ],
      0,
      "UTF-8 encodes Unicode code points."
    ],
    [
      "Which storage generally retains files without power?",
      [
        "RAM",
        "CPU registers",
        "SSD"
      ],
      2,
      "SSDs provide nonvolatile storage."
    ],
    [
      "What does octal permission digit 5 mean?",
      [
        "Read and execute",
        "Write only",
        "Read, write and execute"
      ],
      0,
      "5 = read (4) + execute (1)."
    ]
  ],
  "network": [
    [
      "Which device typically forwards traffic between IP networks?",
      [
        "Router",
        "Keyboard",
        "Display"
      ],
      0,
      "Routers connect networks."
    ],
    [
      "Which device primarily forwards frames inside a LAN?",
      [
        "Switch",
        "Printer",
        "Monitor"
      ],
      0,
      "Switches use link-layer forwarding."
    ],
    [
      "What does DNS usually provide?",
      [
        "Name-to-address resolution",
        "Power to devices",
        "Disk encryption"
      ],
      0,
      "DNS resolves names to network records."
    ],
    [
      "Which is a good first step for a single offline laptop?",
      [
        "Check its link and Wi-Fi state",
        "Replace every switch",
        "Disable all security"
      ],
      0,
      "Start with the local symptom."
    ],
    [
      "Can a MAC address alone prove a user’s identity?",
      [
        "Yes",
        "No",
        "Only over Wi-Fi"
      ],
      1,
      "MAC addresses can be spoofed."
    ],
    [
      "What is network segmentation for?",
      [
        "Limit unnecessary reachability",
        "Increase screen brightness",
        "Replace backups"
      ],
      0,
      "Segmentation limits lateral access."
    ],
    [
      "Which is a wireless-specific concern?",
      [
        "Radio interference",
        "Paper jams",
        "Battery chemistry"
      ],
      0,
      "Interference affects Wi-Fi performance."
    ],
    [
      "If a service works by IP but not name, investigate:",
      [
        "DNS",
        "Mouse drivers",
        "Display settings"
      ],
      0,
      "Name resolution is a likely cause."
    ]
  ],
  "software": [
    [
      "Best tool for calculations across rows of data?",
      [
        "Spreadsheet",
        "Audio editor",
        "Image viewer"
      ],
      0,
      "Spreadsheets support formulas and tabular analysis."
    ],
    [
      "Best action on an unexpected remote access request?",
      [
        "Verify independently",
        "Approve immediately",
        "Share a code"
      ],
      0,
      "Confirm the requester using a trusted contact."
    ],
    [
      "Does open-source automatically mean secure?",
      [
        "Yes",
        "No",
        "Only on phones"
      ],
      1,
      "Security depends on implementation and maintenance."
    ],
    [
      "What is a software license?",
      [
        "Terms granting usage rights",
        "A hard drive",
        "A router address"
      ],
      0,
      "Licenses define permitted uses."
    ],
    [
      "What should be checked before installing software?",
      [
        "Publisher and permissions",
        "Only the icon color",
        "Only the download size"
      ],
      0,
      "Source and privilege checks matter."
    ],
    [
      "Why use version history in collaboration?",
      [
        "Track and restore changes",
        "Increase CPU speed",
        "Replace authentication"
      ],
      0,
      "History supports accountability and recovery."
    ],
    [
      "After uninstalling an app, what might remain?",
      [
        "Cloud permissions or user data",
        "Nothing ever",
        "A new CPU"
      ],
      0,
      "Uninstallation does not necessarily revoke accounts or erase data."
    ],
    [
      "What principle limits remote support access?",
      [
        "Least privilege",
        "Unlimited access",
        "Shared passwords"
      ],
      0,
      "Grant only needed permissions."
    ]
  ],
  "troubleshoot": [
    [
      "Which is an observation rather than a guess?",
      [
        "The screen displays “access denied”",
        "The server must be broken",
        "The user caused it"
      ],
      0,
      "Record observable facts first."
    ],
    [
      "What is a hypothesis?",
      [
        "A testable possible explanation",
        "A guaranteed cause",
        "A completed ticket"
      ],
      0,
      "A hypothesis needs evidence."
    ],
    [
      "Why change one variable at a time?",
      [
        "Isolate cause and effect",
        "Make work slower",
        "Avoid documentation"
      ],
      0,
      "Controlled tests improve diagnosis."
    ],
    [
      "When should approvals be obtained?",
      [
        "Before potentially disruptive changes",
        "Only after an outage",
        "Never"
      ],
      0,
      "Authorization and change control reduce risk."
    ],
    [
      "What follows a successful fix?",
      [
        "Verify the original function and related behavior",
        "Delete the record",
        "Assume all is well"
      ],
      0,
      "Validation confirms resolution."
    ],
    [
      "What belongs in a support ticket?",
      [
        "Symptoms, tests, fix and verification",
        "Passwords",
        "Unrelated private details"
      ],
      0,
      "Keep evidence useful and minimize sensitive data."
    ],
    [
      "When should a technician escalate?",
      [
        "When outside authority or expertise",
        "Whenever a user calls",
        "Only after deleting data"
      ],
      0,
      "Escalate when risks or permissions exceed scope."
    ],
    [
      "Which is a safe first diagnostic step?",
      [
        "Read error details and scope",
        "Disable the firewall",
        "Reinstall the operating system"
      ],
      0,
      "Low-risk observation precedes major changes."
    ]
  ]
};
