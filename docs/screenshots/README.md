# Screenshot Evidence Guide

## Overview
This guide lists all screenshots you should capture for your coursework documentation. These screenshots demonstrate the implementation and verify that all SEO, performance, and UI improvements are working correctly.

**Base URL:** `https://fitpogodzinach.netlify.app`

---

## Required Screenshots

### 1. Performance Testing

#### 1.1 Lighthouse Mobile - Homepage BEFORE (if available)
**Tool:** Chrome DevTools > Lighthouse
**Page:** `https://fitpogodzinach.netlify.app/`
**Settings:**
- Device: Mobile
- Categories: Performance, Accessibility, Best Practices, SEO
- Mode: Navigation

**What to Capture:**
- Overall scores (showing ~86 performance if available from before)
- Core Web Vitals metrics (LCP, FID, CLS)
- Opportunities section

**File Name:** `01-lighthouse-mobile-home-before.png` (if available)

---

#### 1.2 Lighthouse Mobile - Homepage AFTER ✅
**Tool:** Chrome DevTools > Lighthouse
**Page:** `https://fitpogodzinach.netlify.app/`
**Settings:** Same as above

**What to Capture:**
- Overall scores (should show ≥95 performance)
- Core Web Vitals metrics (all green)
- Performance score breakdown
- Key metrics: FCP, LCP, TBT, CLS, Speed Index

**File Name:** `02-lighthouse-mobile-home-after.png`

**Expected Results:**
- Performance: 95-100 ✅
- Accessibility: 95-100
- Best Practices: 95-100
- SEO: 95-100

---

#### 1.3 Lighthouse Mobile - Oferta Page ✅
**Page:** `https://fitpogodzinach.netlify.app/oferta/`
**Settings:** Mobile, all categories

**What to Capture:** All four scores

**File Name:** `03-lighthouse-mobile-oferta.png`

---

#### 1.4 Lighthouse Mobile - Cennik Page ✅
**Page:** `https://fitpogodzinach.netlify.app/cennik/`
**Settings:** Mobile, all categories

**What to Capture:** All four scores

**File Name:** `04-lighthouse-mobile-cennik.png`

---

#### 1.5 Lighthouse Desktop - Homepage ✅
**Page:** `https://fitpogodzinach.netlify.app/`
**Settings:** Desktop, all categories

**What to Capture:**
- All four scores (should be even higher on desktop, ~98-100)

**File Name:** `05-lighthouse-desktop-home.png`

---

#### 1.6 PageSpeed Insights - Mobile ✅
**Tool:** https://pagespeed.web.dev/
**URL:** `https://fitpogodzinach.netlify.app/`

**What to Capture:**
- Mobile tab selected
- Overall performance score
- Core Web Vitals assessment (Good/Needs Improvement/Poor)
- Field Data section (if available after site has traffic)
- Lab Data section with metrics

**File Name:** `06-pagespeed-mobile.png`

---

#### 1.7 PageSpeed Insights - Desktop ✅
**Tool:** Same as above
**URL:** Same as above

**What to Capture:**
- Desktop tab selected
- Overall performance score
- Core Web Vitals assessment

**File Name:** `07-pagespeed-desktop.png`

---

#### 1.8 Network Panel - Hero Image Priority ✅
**Tool:** Chrome DevTools > Network tab
**Page:** `https://fitpogodzinach.netlify.app/`

**Steps:**
1. Open DevTools > Network tab
2. Reload page (Ctrl+Shift+R)
3. Filter by "Img"
4. Find `hero-illustration.svg`
5. Click on it to show headers

**What to Capture:**
- Waterfall view showing hero image loaded early
- Request headers showing Priority: High
- Response headers showing Cache-Control

**File Name:** `08-network-hero-priority.png`

**Look For:**
- Priority: High or Highest
- Loaded early in waterfall (near top)

---

#### 1.9 Cache Headers Verification ✅
**Tool:** Chrome DevTools > Network tab
**Page:** Any page
**Asset:** Any file in `/assets/` folder

**Steps:**
1. Open Network tab
2. Reload page
3. Click on any CSS or JS file
4. Go to Headers tab
5. Find Response Headers section

**What to Capture:**
- Response Headers showing:
  ```
  cache-control: public, max-age=31536000, immutable
  ```

**File Name:** `09-cache-headers-assets.png`

---

### 2. SEO Verification

#### 2.1 Rich Results Test - Homepage Organization Schema ✅
**Tool:** https://search.google.com/test/rich-results
**URL:** `https://fitpogodzinach.netlify.app/`

**What to Capture:**
- "Rich results can be displayed" message
- Organization schema detected
- WebSite schema detected
- Preview of how it appears

**File Name:** `10-rich-results-home-organization.png`

---

#### 2.2 Rich Results Test - FAQ Page ✅
**Tool:** Same as above
**URL:** `https://fitpogodzinach.netlify.app/faq/`

**What to Capture:**
- FAQPage schema detected
- Number of questions found (should be 10)
- Preview of FAQ rich result

**File Name:** `11-rich-results-faq.png`

**Expected:** FAQ rich snippet preview

---

#### 2.3 Rich Results Test - Cennik Offers ✅
**Tool:** Same as above
**URL:** `https://fitpogodzinach.netlify.app/cennik/`

**What to Capture:**
- Service/Offer schema detected
- Pricing information validated
- Three offers listed

**File Name:** `12-rich-results-cennik-offers.png`

---

#### 2.4 Rich Results Test - Blog Article ✅
**Tool:** Same as above
**URL:** `https://fitpogodzinach.netlify.app/blog/mikrotreningi-exercise-snacks/`

**What to Capture:**
- Article schema detected
- Author, date, headline visible
- Preview of article appearance

**File Name:** `13-rich-results-blog-article.png`

---

#### 2.5 Sitemap in Browser ✅
**Tool:** Web browser
**URL:** `https://fitpogodzinach.netlify.app/sitemap.xml`

**What to Capture:**
- XML structure visible
- All page URLs listed
- Lastmod dates
- Changefreq values

**File Name:** `14-sitemap-browser.png`

**Verify:**
- All 10 pages listed
- URLs use `https://fitpogodzinach.netlify.app` (not .pl)

---

#### 2.6 Robots.txt in Browser ✅
**Tool:** Web browser
**URL:** `https://fitpogodzinach.netlify.app/robots.txt`

**What to Capture:**
- File contents showing:
  ```
  User-agent: *
  Allow: /
  Sitemap: https://fitpogodzinach.netlify.app/sitemap.xml
  ```

**File Name:** `15-robots-txt-browser.png`

---

#### 2.7 Meta Tags - Homepage ✅
**Tool:** View Page Source (Ctrl+U) or DevTools > Elements
**Page:** `https://fitpogodzinach.netlify.app/`

**What to Capture:**
- `<head>` section showing:
  - `<title>`
  - `<meta name="description">`
  - `<link rel="canonical">`
  - `<meta property="og:*">` tags
  - `<meta name="twitter:*">` tags

**File Name:** `16-meta-tags-homepage.png`

**Verify:** Canonical uses netlify.app domain

---

#### 2.8 Structured Data - Homepage JSON-LD ✅
**Tool:** View Page Source (Ctrl+U)
**Page:** `https://fitpogodzinach.netlify.app/`

**What to Capture:**
- `<script type="application/ld+json">` sections
- Organization schema
- WebSite schema
- Properly formatted JSON

**File Name:** `17-structured-data-homepage-source.png`

**Verify:** URLs in JSON use netlify.app domain

---

### 3. UI/Design Verification

#### 3.1 Homepage Hero - Desktop ✅
**Tool:** Web browser (full screen)
**Page:** `https://fitpogodzinach.netlify.app/`
**Viewport:** 1920x1080 or 1440x900

**What to Capture:**
- Full hero section
- New optimized illustration
- Badge, H1, subtitle
- Chip badges row
- CTA buttons
- Hero metrics cards

**File Name:** `18-hero-desktop.png`

**Show:** Clean, professional layout with brand colors

---

#### 3.2 Homepage Hero - Mobile ✅
**Tool:** Chrome DevTools > Device Toolbar
**Page:** `https://fitpogodzinach.netlify.app/`
**Viewport:** iPhone 12 Pro (390x844) or similar

**What to Capture:**
- Hero section stacked layout
- Illustration rendered correctly
- All content readable
- Proper spacing

**File Name:** `19-hero-mobile.png`

**Show:** Responsive layout, no horizontal scroll

---

#### 3.3 Card Hover States ✅
**Tool:** Web browser
**Page:** Any page with cards

**What to Capture:**
- Card in normal state (one card)
- Card in hover state (another card) showing:
  - Subtle lift effect
  - Shadow increase
  - Smooth transition

**File Name:** `20-card-hover-interaction.png`

**Note:** May need to use screen recording or two screenshots

---

#### 3.4 Button Hover States ✅
**Tool:** Web browser
**Page:** Homepage

**What to Capture:**
- Primary button (normal + hover)
- Secondary button (normal + hover)
- Showing color changes and lift effect

**File Name:** `21-button-hover-states.png`

---

#### 3.5 Navigation - Mobile Menu ✅
**Tool:** Mobile device or Chrome DevTools mobile view
**Page:** Any page
**Viewport:** Mobile (390px width)

**What to Capture:**
- Mobile nav toggle button
- Opened mobile menu showing all links
- Proper styling and spacing

**File Name:** `22-mobile-navigation.png`

---

#### 3.6 Hero Note Card (Below Fold) ✅
**Tool:** Web browser
**Page:** `https://fitpogodzinach.netlify.app/`

**What to Capture:**
- Scroll down to show hero-note card
- Card with quote and checklist
- Now positioned below initial hero content

**File Name:** `23-hero-note-below-fold.png`

**Show:** Improved layout hierarchy

---

### 4. Forms & Functionality

#### 4.1 Contact Form - Netlify Configuration ✅
**Tool:** View Page Source
**Page:** `https://fitpogodzinach.netlify.app/kontakt/`

**What to Capture:**
- `<form>` tag showing:
  - `name="kontakt"`
  - `method="POST"`
  - `action="/kontakt/dziekuje/"`
  - `data-netlify="true"`
  - Hidden `form-name` field

**File Name:** `24-netlify-form-source.png`

---

#### 4.2 Form Submission Success ✅
**Tool:** Web browser
**Page:** After submitting form on /kontakt/

**What to Capture:**
- Thank you page at `/kontakt/dziekuje/`
- Success message
- Next steps card
- Return CTA buttons

**File Name:** `25-form-success-page.png`

**Note:** You can submit a test form to capture this

---

#### 4.3 Netlify Forms Dashboard (Optional) ✅
**Tool:** Netlify Dashboard
**Location:** Site > Forms tab

**What to Capture:**
- Forms detected (kontakt + newsletter)
- Submission count (if any test submissions)

**File Name:** `26-netlify-forms-dashboard.png`

**Note:** Only if you have access to Netlify dashboard

---

### 5. Accessibility

#### 5.1 Skip Link Focus ✅
**Tool:** Web browser
**Page:** Any page
**Action:** Press Tab key immediately on page load

**What to Capture:**
- "Przejdź do treści" skip link visible
- Focused state with outline
- Positioned top-left

**File Name:** `27-skip-link-focus.png`

---

#### 5.2 Lighthouse Accessibility Score ✅
**Tool:** Chrome DevTools > Lighthouse
**Page:** `https://fitpogodzinach.netlify.app/`

**What to Capture:**
- Accessibility score (should be 95-100)
- Passed audits list
- No serious issues

**File Name:** `28-lighthouse-accessibility.png`

---

### 6. Cross-Browser Testing (Optional)

#### 6.1 Firefox Rendering ✅
**Tool:** Firefox browser
**Page:** `https://fitpogodzinach.netlify.app/`

**What to Capture:**
- Homepage hero
- Verify visual consistency with Chrome

**File Name:** `29-firefox-homepage.png`

---

#### 6.2 Safari/Edge Rendering (Optional) ✅
**Tool:** Safari (Mac) or Edge (Windows)
**Page:** `https://fitpogodzinach.netlify.app/`

**What to Capture:**
- Homepage hero
- Verify cross-browser compatibility

**File Name:** `30-safari-edge-homepage.png`

---

## Screenshot Naming Convention

Format: `##-category-description.png`

Examples:
- `02-lighthouse-mobile-home-after.png`
- `11-rich-results-faq.png`
- `18-hero-desktop.png`

---

## Tools Summary

### Free Tools You'll Use:
1. **Chrome DevTools** (F12)
   - Lighthouse tab
   - Network tab
   - Device Toolbar (mobile testing)

2. **Google Rich Results Test**
   - https://search.google.com/test/rich-results

3. **PageSpeed Insights**
   - https://pagespeed.web.dev/

4. **Web Browser**
   - View Source (Ctrl+U)
   - Regular browsing for UI shots

---

## Best Practices for Screenshots

### ✅ Do:
- Use full-screen browser window
- Clear any personal browser extensions from view
- Ensure high resolution (at least 1920px wide for desktop)
- Capture full sections (don't cut off important info)
- Use annotation tools to highlight key findings (optional)
- Crop unnecessary browser chrome (optional)

### ❌ Don't:
- Take blurry or low-resolution images
- Include personal/sensitive information
- Cut off important scores or metrics
- Use dark mode if it makes text hard to read
- Forget to show the URL in the screenshot

---

## Organization for Coursework

### Suggested Folder Structure:
```
docs/screenshots/
├── 1-performance/
│   ├── 01-lighthouse-mobile-home-before.png
│   ├── 02-lighthouse-mobile-home-after.png
│   ├── 03-lighthouse-mobile-oferta.png
│   └── ...
├── 2-seo/
│   ├── 10-rich-results-home-organization.png
│   ├── 11-rich-results-faq.png
│   └── ...
├── 3-ui-design/
│   ├── 18-hero-desktop.png
│   ├── 19-hero-mobile.png
│   └── ...
└── 4-forms-accessibility/
    ├── 24-netlify-form-source.png
    ├── 25-form-success-page.png
    └── ...
```

---

## Coursework Presentation Tips

### In Your Report/Presentation:

1. **Performance Section**
   - Show before/after comparison (if available)
   - Highlight the improvement in LCP
   - Explain what each metric means

2. **SEO Section**
   - Show all 4 rich results (Organization, FAQ, Offers, Article)
   - Explain the business benefit of each
   - Show sitemap/robots.txt to prove technical SEO

3. **UI/UX Section**
   - Show desktop and mobile views
   - Highlight the design system improvements
   - Demonstrate interactive elements

4. **Technical Implementation**
   - Show source code snippets alongside screenshots
   - Prove Netlify Forms are configured correctly
   - Demonstrate accessibility features

---

## Timeline

### Immediate (Right After Deployment):
- Lighthouse reports (1-5, 28)
- PageSpeed Insights (6-7)
- UI screenshots (18-23)
- Source code views (16-17, 24)

### Within 24 Hours:
- Rich Results Tests (10-13) - Sometimes takes time to crawl
- Test form submissions (25)

### Within 1 Week:
- Check for field data in PageSpeed Insights (real user metrics)
- Monitor Google Search Console for indexing

---

## Notes for Student

These screenshots serve as **proof of implementation** for your coursework. They demonstrate:
- Technical skills (performance optimization)
- SEO knowledge (structured data, meta tags)
- UI/UX abilities (responsive design, micro-interactions)
- Web standards compliance (accessibility, semantic HTML)

**Pro Tip:** Take screenshots immediately after deployment, as some metrics (especially PageSpeed Insights field data) change over time as the site gets real traffic.

Good luck with your coursework! 🚀
