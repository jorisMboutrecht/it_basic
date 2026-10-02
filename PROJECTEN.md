# Specificatie — Projectenpagina

## Doel
De bezoeker kan in één oogopslag zien waar joris van der mispel aan werkt en zelf een project bekijken of de code inzien — zonder de site te verlaten. De projectenpagina is het bewijsstuk van je portfolio, geen extra navigatieslaapje.

## Wat een bezoeker kan zien en doen
**Zien**
- De bestaande kaart: screenshot, titel, korte beschrijving
- Technieken als badges (bv. HTML, CSS, PHP)
- In de popup: grotere screenshot, uitgebreide beschrijving, volledige techniekenlijst
- Twee werkende links per project: live demo en GitHub-repository

**Doen**
- Op "Lees meer" klikken → popup opent met de details
- De popup sluiten via knop, `Esc`, of klikken op de donkere achtergrond
- Vanuit de popup direct naar de demo of de code navigeren
- Op mobiel alles verticaal doorlezen zonder horizontaal scrollen

## Te bouwen onderdelen
1. **Knop "Lees meer"** per projectkaart, met verwijzing naar het bijbehorende dialog-id
2. **Zes dialog/popup-elementen** — drie bestaande projecten, elk met detailinformatie, tags en twee links
3. **Uitbreiding van `.project-card`** — tags zichtbaar maken op de kaart zelf
4. **CSS voor de popup** — overlay, gecentreerd venster, sluiten-knop, tags, knoppen
5. **JavaScript** — openen en sluiten van de juiste popup, focus terug naar de kaart na sluiten
6. **Mobielregels** — popup vult vrijwel het hele scherm onder 768px

## Bestaande bestanden die veranderen
| Bestand | Wat er verandert |
|---|---|
| `index.html` | Alleen de `<section id="projecten">`: knoppen per kaart + nieuwe dialogs. De drie huidige kaarten blijven, er komt geen nieuwe pagina. |
| `css/styles.css` | Nieuwe regels voor tags, dialog en overlay. Bestaande `.project-grid` en `.project-card` blijven ongemoeid. |
| `js/script.js` | Uitbreiding met popup-logica. De drie bestaande functies (menu, formulier, scroll-animaties) blijven exact zoals ze zijn. |
| `images/` | Map is leeg: `project1.png`, `project2.png` en `project3.png` moeten toegevoegd worden, anders blijven de grijze vlakken staan. |

## Nieuwe bestanden
Voorlopig **geen**. Alles past in de drie bestaande bestanden. Pas als de projecten later uit een JSON- of PHP-bestand moeten komen, is er een databestand nodig.

## Klaar wanneer
- [ ] Elke projectkaart heeft een werkende "Lees meer"-knop
- [ ] De popup opent de juiste projectgegevens en sluit op alle drie manieren
- [ ] Beide links per project werken (geen `#` meer)
- [ ] De projectensectie bevat geen enkele `href="#"` of ontbrekende afbeelding meer
- [ ] Onder 768px staan de kaarten in één kolom en past de popup op het scherm
- [ ] Menu, contactformulier en scroll-animaties werken nog steeds
- [ ] Projectgegevens ingevuld: titel, beschrijving, technieken, demo-URL, GitHub-URL
