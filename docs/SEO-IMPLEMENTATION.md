# SEO Implementation

## Checklist
- [x] Unikalne meta title (50–60 znaków) i opisy (~155) na każdej stronie.
- [x] Kanoniczne linki z pełnym adresem i czystymi slugami.
- [x] Jedno H1 na stronę, poprawna hierarchia H2/H3.
- [x] OpenGraph + Twitter meta z og:image ustawionym na /assets/img/logo.jpg.
- [x] Strukturalne dane JSON-LD (Organization/WebSite, Service offers, FAQPage, Article).
- [x] Alt text dla logo i elementów graficznych; dekoracyjne SVG ukryte przez aria-hidden gdyby były dodane.
- [x] sitemap.xml i robots.txt z odniesieniem do sitemap.
- [x] Formularze Netlify z `data-netlify="true"` i ukrytym `form-name`.
- [x] Nawigacja wewnętrzna między wszystkimi stronami + linki kontekstowe w artykule.

## Ustawienia per strona
- `/` (Home)
  - Title: "Plan treningowy online dla zapracowanych | FitPoGodzinach"
  - Description: "Personalizowane plany treningowe online..."
  - Canonical: `https://fitpogodzinach.netlify.app/`
  - H1: "Plan treningowy, który wreszcie pasuje Tobie."
  - Structured data: Organization + WebSite (SearchAction).
- `/oferta/`
  - Title: "Oferta FitPoGodzinach – jak działa plan online"
  - Description: "Zobacz jak FitPoGodzinach personalizuje plan..."
  - Canonical: `https://fitpogodzinach.netlify.app/oferta/`
  - H1: "Plan treningowy online dopasowany do Twojego dnia"
- `/cennik/`
  - Title: "Cennik planów treningowych | FitPoGodzinach"
  - Description: "Sprawdź ceny planów..."
  - Canonical: `https://fitpogodzinach.netlify.app/cennik/`
  - H1: "Cennik planów treningowych online"
  - Structured data: Service + Offers (3 pakiety, PLN).
- `/faq/`
  - Title: "FAQ FitPoGodzinach – odpowiedzi na pytania"
  - Description: "Najczęstsze pytania o plan treningowy online..."
  - Canonical: `https://fitpogodzinach.netlify.app/faq/`
  - H1: "Twoje pytania o plan treningowy online"
  - Structured data: FAQPage (10 Q/A).
- `/o-nas/`
  - Title: "O nas | FitPoGodzinach"
  - Description: "Poznaj filozofię FitPoGodzinach..."
  - Canonical: `https://fitpogodzinach.netlify.app/o-nas/`
  - H1: "Dla kobiet, które nie mają czasu… ale mają cele."
- `/blog/`
  - Title: "Blog FitPoGodzinach – ruch po pracy"
  - Description: "Artykuły o planie treningowym online..."
  - Canonical: `https://fitpogodzinach.netlify.app/blog/`
  - H1: "Ruch po pracy, który ma sens"
- `/blog/mikrotreningi-exercise-snacks/`
  - Title: "Exercise snacks: co mówi nauka | FitPoGodzinach"
  - Description: "Dowiedz się, jak krótkie exercise snacks wspierają plan treningowy online..."
  - Canonical: `https://fitpogodzinach.netlify.app/blog/mikrotreningi-exercise-snacks/`
  - H1: "Exercise snacks: co mówi nauka o krótkich dawkach ruchu"
  - Structured data: Article (headline, author, date, keywords, image, mainEntityOfPage).
- `/kontakt/`
  - Title: "Kontakt i newsletter | FitPoGodzinach"
  - Description: "Skontaktuj się z FitPoGodzinach..."
  - Canonical: `https://fitpogodzinach.netlify.app/kontakt/`
  - H1: "Porozmawiajmy o Twoim planie"
  - Forms: Netlify contact + newsletter.
- `/polityka-prywatnosci/`
  - Title: "Polityka prywatności | FitPoGodzinach"
  - Description: "Polityka prywatności formularzy kontaktowych i newslettera."
  - Canonical: `https://fitpogodzinach.netlify.app/polityka-prywatnosci/`
  - H1: "Polityka prywatności"
- `/404.html`
  - Title: "Strona nie znaleziona | FitPoGodzinach"
  - H1: "Ups! Strona nie istnieje."

## Internal linking map
- Header i stopka: linki do /, /oferta/, /cennik/, /faq/, /blog/, /kontakt/ obecne na każdej stronie.
- Home: CTA do /cennik/ i /oferta/, sekcja pakiety -> /cennik/, blog karta -> /blog/mikrotreningi-exercise-snacks/.
- Oferta: CTA do /cennik/ i /kontakt/.
- Cennik: CTA w kartach i sekcji kontaktu -> /kontakt/#kontakt-form; FAQ teaser -> /faq/.
- Blog listing: wpis -> /blog/mikrotreningi-exercise-snacks/.
- Wpis blogowy: linki wewnątrz treści do /cennik/ i /oferta/.
- Kontakt: link do polityki prywatności.

## Image alt texts
- `/assets/img/logo.jpg`: "Logo FitPoGodzinach" (użyte w nagłówkach i stopkach).
- Brak innych obrazów wymagających alt; dekoracyjne elementy są CSS/HTML bez obrazów.

## Structured data notatki
- Home: Organization + WebSite z SearchAction.
- Cennik: Service z trzema Offer (PLN, url, opis).
- FAQ: FAQPage z 10 pytaniami.
- Blog post: Article (headline, description, author org, datePublished, keywords, image, mainEntityOfPage, publisher).

## Jak zweryfikować
1. Otwórz stronę w przeglądarce, `Ctrl+U`/"View Source" i sprawdź meta title/description/canonical/OG.
2. Użyj narzędzia Rich Results Test dla FAQ, Article, Service/Offer, Organization.
3. Sprawdź `sitemap.xml` i `robots.txt` w przeglądarce (powinny wskazywać wszystkie ścieżki oraz sitemapę).
4. W Lighthouse/Pagespeed upewnij się, że tagi `lang`, `alt`, skip-link, focus states są obecne i brak błędów dostępności.
5. Kliknij wszystkie linki w nawigacji i CTA – powinny prowadzić do istniejących stron.
