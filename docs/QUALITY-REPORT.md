# QUALITY REPORT

## UX/UI checklist
- [x] Zaktualizowany system design tokens (kolory, promienie, cienie, spacing, max-width) w `assets/css/styles.css`.
- [x] Nowy hero gradient + layout 2-kolumnowy z chipami, CTA, ilustracją SVG (`assets/img/hero-illustration.svg`).
- [x] Spójne karty (radius 18px, cienie soft), sekcje naprzemienne, poprawiona hierarchia H1–H3.
- [x] Dodane sekcje „Jak to działa”, FAQ teaser, CTA końcowe na stronie głównej.
- [x] Ujednolicone headery/footery, logo z width/height dla redukcji CLS.
- [x] Typografia: Poppins (nagłówki), Inter (tekst), line-height 1.65, długość linii ograniczona kontenerem.

## SEO checklist
- [x] Unikalne title/description/canonical na każdej stronie (home, oferta, cennik, faq, o-nas, blog, wpis, kontakt, polityka, 404).
- [x] OG/Twitter tagi wskazują na istniejący og:image (`/assets/img/logo.jpg`).
- [x] Structured data: Organization + WebSite (home), Service/Offers (cennik), FAQPage (faq), Article (blog post).
- [x] sitemap.xml i robots.txt pozostawione bez zmian, wskazują na wszystkie URL-e.
- [x] Alt dla logo, jeden H1 na stronę, poprawna hierarchia H2/H3.

## Performance checklist
- [x] Usunięty @import z CSS; fonty ładowane z preconnect + display=swap; tylko potrzebne wagi (Inter 400/500/600, Poppins 600/700).
- [x] JS załadowany z `defer`, brak ciężkich bibliotek.
- [x] Jednolity plik CSS, brak frameworków; SVG ilustracja lekka.
- [x] Logo z width/height, hero SVG z width/height + lazy, redukcja CLS.
- [x] Netlify caching pozostawione (assets max-age=31536000, HTML krótkie TTL) w `netlify.toml` bez BOM.

## Instrukcja uruchomienia lokalnie
1. `cd` do katalogu projektu.
2. Uruchom prosty serwer: `python -m http.server 8080` (lub `npx serve`).
3. Otwórz `http://localhost:8080/` w przeglądarce.

## Jak zweryfikować
- Lighthouse (mobile): oczekiwany Performance ~95+, SEO 100, Accessibility >=95 na `/` i `/oferta/`. Uruchom w DevTools > Lighthouse (tryb Mobile, throttling default).
- Rich Results: sprawdź `faq/` (FAQPage), `blog/mikrotreningi-exercise-snacks/` (Article), `cennik/` (Service/Offer), home (Organization/WebSite).
- Sprawdź `sitemap.xml` i `robots.txt` w przeglądarce (powinny wskazywać wszystkie URL-e + sitemapę).
- Kliknij wszystkie linki w nawigacji/CTA, otwórz formularze na `/kontakt/` (Netlify: data-netlify="true", hidden `form-name` obecne).
