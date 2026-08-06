# Brand typography — Baboó

**Direcția A, „casă de modă italiană"** — aprobată de client 06.08.2026.
Aplicată pe tot site-ul. Logoul face excepție, vezi secțiunea 6.

---

## 1. Cele două fonturi

| Rol | Font | Unde | Licență |
|---|---|---|---|
| **Display** — titluri | **Bodoni Moda** | h1, h2, h3, nume de destinații, titluri de card, valori de statistici | OFL, gratuit comercial |
| **Text** — corp | **Jost** | paragrafe, etichete, butoane, meniu, filtre, footer | OFL, gratuit comercial |

**De ce merg împreună.** Bodoni Moda e un Didone: contrast extrem între linia
groasă și cea subțire, serife ascuțite, taie ca lama la dimensiuni mari. Jost e un
geometric în linia Futura, cu forme aproape circulare și zero decorație. Contrastul
dintre ele e intenționat: tot dramatismul stă în titlu, textul rămâne neutru și se
citește.

În cod:

```
font-serif  →  var(--font-display)  →  Bodoni Moda
font-sans   →  var(--font-body)     →  Jost
font-logo   →  var(--font-logo)     →  deocamdată Playfair Display (secțiunea 6)
```

---

## 2. Scara de titluri

Bodoni are nevoie de **greutate 600**, nu 400. La 400 liniile subțiri se rup optic
și fontul arată neterminat. Spațierea e negativă și se strânge cu cât textul e mai
mare, altfel serifele ascuțite se depărtează.

| Clasă | Dimensiune | Line-height | Tracking | Pentru |
|---|---|---|---|---|
| `.display-hero` | `clamp(3rem, 10vw, 8rem)` | 0.95 | −0.04em | Numele destinațiilor pe prima pagină. Nimic altceva. |
| `.display-1` | `clamp(3rem, 8vw, 6.5rem)` | 0.98 | −0.035em | h1 pe paginile de detaliu |
| `.display-2` | `clamp(2.25rem, 5vw, 4rem)` | 1.1 | −0.032em | h1 pe prima pagină, h2 de secțiune |
| `.display-3` | `clamp(1.75rem, 3.5vw, 2.75rem)` | 1.08 | −0.026em | subsecțiuni, sloganul din footer |

Toate patru includ deja `font-serif` și `font-semibold`. Nu le adaugi separat.

### Regula care contează

**Niciun titlu nu-și scrie propria dimensiune.** Dacă scrii
`font-serif text-[clamp(...)]` direct în componentă, ocolești greutatea 600 și
tracking-ul, iar titlul iese la 400 — subțire și spălăcit. Exact așa arătau trei
titluri înainte de curățare (prima pagină, numele destinațiilor, footer).

Ai nevoie de o dimensiune care nu există în scară? Adaugă un pas nou în
`globals.css`, nu o valoare inline în componentă.

---

## 3. Text și etichete

| Clasă | Specificație | Pentru |
|---|---|---|
| `.body-lg` | Jost 16.5px / 1.78, max 620px | paragrafe principale |
| `.eyebrow` | Jost 500, 11px, uppercase, tracking 0.32em, culoare `--gold-label` | eticheta de deasupra titlurilor |
| `.section-label` | ca `.eyebrow` + linie aurie de 2.5rem înainte | etichete editoriale de secțiune |
| `.prose-luxe` | max 680px | blocuri de text lung |

**Măsura de citire** e plafonată la ~65 de caractere (`body-lg` la 620px,
`prose-luxe` la 680px). E cerința WCAG 1.4.8 și e și motivul pentru care textul nu
se întinde niciodată pe toată lățimea ecranului.

**Tracking-ul la uppercase e 0.32em, nu 0.3em.** Jost are bowl-uri aproape
perfect circulare; la 0.3em literele O și C se apropiau prea mult între ele.

**Culoarea etichetelor** e `--gold-label` (`#6F561A`), nu aurul de brand
`#C9A84C`. Aurul de brand nu trece contrastul AA pe fond deschis la text mic.

---

## 4. Ce s-a schimbat față de înainte

| | Înainte | Acum |
|---|---|---|
| Titluri | Playfair Display 400 | Bodoni Moda 600 |
| Text | Inter, 17px / 1.85 | Jost, 16.5px / 1.78 |
| Tracking titluri | −0.02 … −0.03em | −0.026 … −0.04em |
| Tracking uppercase | 0.3em | 0.32em |
| Titluri în afara scării | 3 | 0 |

Jost calcă puțin mai mare decât Inter la aceeași dimensiune în px și are
descendente mai scurte, de aici 16.5px în loc de 17 și interlinia mai strânsă.

---

## 5. Note tehnice

**Fallback.** Next nu are metricile lui Bodoni Moda în baza sa de date, deci nu
poate genera automat `size-adjust` pentru fontul de rezervă și dădea warning la
fiecare build. E dezactivat explicit, cu fallback ales manual: **Times New Roman**,
mult mai apropiat de proporțiile unui Didone decât Georgia, care are x-height mai
mare și linii mai groase, deci schimbul s-ar vedea. CLS măsurat: **0** pe telefon
cu rețea încetinită, pe prima pagină, listare și detaliu.

**Încărcare.** Ambele fonturi vin prin `next/font/google`, deci sunt self-hosted la
build — fără request către Google la runtime, fără GDPR headache, `display: swap`.

**Greutăți încărcate.** Bodoni 400/500/600/700 plus italic; Jost 300/400/500/600.
Dacă o greutate nu e în listă, browserul o simulează și rezultatul e urât — adaugă-o
în `layout.tsx` înainte de a o folosi.

---

## 6. Logoul — încă deschis

Clientul a aprobat direcția A pentru site, dar **a respins logoul**. De aceea
wordmarkul are propriul rol, `--font-logo`, în loc să moștenească
`--font-display`: cele două trebuie să se poată mișca independent.

Momentan wordmarkul e **Playfair Display**, adică neschimbat față de versiunea
anterioară. Ce e deja aplicat, conform cererilor clientului:

- mai mare: 32px pe telefon, 40px pe desktop (era 26/30)
- finisaj metalic pe „oó" (`.metal-gold`)
- „Since 2019" la 7px, deci raport 5.7:1 față de wordmark (era 3.8:1)

Când se stabilește direcția logoului, se schimbă doar `logo` în
[src/app/layout.tsx](../src/app/layout.tsx) și, dacă e nevoie, mărimile din
`Wordmark` în [src/components/Nav.tsx](../src/components/Nav.tsx). Restul site-ului
nu se atinge.

### Metalicul, două variante

`.metal-gold` și `.metal-gold-on-noir` în
[globals.css](../src/app/globals.css). Nu e un gradient orizontal ca `.gold-text` —
are umbre închise și o bandă speculară ținută descentrat, înclinată câteva grade
față de verticală. Aia face diferența între „metal" și „gradient".

Există în două variante pentru că foița reală se comportă la fel: banda strălucitoare
care face aurul să cânte pe negru șterge liniile subțiri pe alb. Pe fond deschis
luminozitatea maximă e plafonată.
