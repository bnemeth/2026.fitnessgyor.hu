# fitnessgyor.hu — Honlap megújítás

## Állapot
🟡 Tervezési fázis

## Alapinfók
- **Domain:** fitnessgyor.hu
- **Tulajdonos:** Néma Veronika (+36 70 510 44 40, nemavera77@gmail.com)
- **Helyszín:** József Attila utca 129, Győr 9028
- **Indulás:** nulláról, új fejlesztés
- **Kezdés dátuma:** 2026-04-15

## Koncepció
Személyi edző / kis csoportos edzőterem Győrben. Szlogen: _"A céljaidat gyorsabban elérheted mint gondolnád!"_

A meglévő honlap egy **one-pager** — az összes tartalom a főoldalon van, szekciókba rendezve.

## Meglévő tartalom & struktúra (fitnessgyor.hu)

### Navigáció
- Helló
- Edzések
- Bérletek & árak
- Rólam
- Kapcsolat
- GYIK

### Szekciók
1. **Hero** — szlogen, telefonszám
2. **Helló (Bemutatkozás)** — látható eredmények heti 2-3 edzéssel, kis csoportos (6-10 fős) foglalkozások, ingyenes konzultáció
3. **Edzéstípusok** (7 db):
   - Kettlebell – erő és állóképesség, SFG módszer
   - TRX edzés – állítható nehézség
   - Jóga – „A változás belülről kezdődik!"
   - Cross Training – több módszer kombinációja
   - Köredzés – változatosság
   - Mobilizáció – fájdalommentes, könnyű mozgás
   - Kardió – állóképesség, futás alternatíva
4. **Órarend** — H-P, 25+ edzés/hét, reggel/dél/délután, bejelentkezés szükséges
5. **Felszerelés** — minden biztosított, csak kényelmes ruha + lapostalpú cipő kell
6. **Vélemények** — pl. István: „Még sosem fáradtam el ennyire!"
7. **Hogyan kezdj el?** — lépésről lépésre útmutató
8. **Bérletek & árak** — _(tartalom még feltérképezendő)_
9. **Rólam** — _(tartalom még feltérképezendő)_
10. **Kapcsolat** — cím, tel, email, parkoló info
11. **GYIK** — _(tartalom még feltérképezendő)_

## Technológia
- **Stack:** Vite + React + TypeScript
- **UI:** shadcn/ui + Tailwind CSS
- **Routing:** React Router
- **Build:** statikus (`npm run build` → `/dist` mappa)
- **Dev szerver:** `npm run dev` → http://localhost:8080/

## Design irány
- **Stílus:** Minimalista
- **Fő szín:** Piros (a meglévő honlap pirosjával megegyező)
- **Logó:** A meglévő logó marad (Facebook: fbid=446838547450371) — fájlt még be kell szerezni
- **Egyéb:** _még kitöltendő_

## Tennivalók
- [x] Technológia kiválasztása (Vite + React + TypeScript + shadcn/ui)
- [x] Tartalom összegyűjtése és beépítése
- [x] Alap projekt struktúra (Lovable generálta)
- [x] npm install + build ellenőrzés ✅
- [ ] Google Maps koordináta javítása (jelenleg placeholder)
- [x] logo.jpg bekötése — megvan, be van kötve
- [x] Dark mode döntés — marad
- [x] Felesleges import eltávolítása (Schedule.tsx) — nincs felesleges, minden import használt
- [ ] Böngészős vizuális átvizsgálás és finomhangolás
- [ ] Produkciós build + deployment

## Deploy

**Firebase Hosting** — projekt: `www-fitnessgyor-hu`

```bash
# 1. Build (lefordítja a forráskódot a dist/ mappába)
npm run build

# 2. Deploy
firebase deploy --only hosting
```

Első alkalommal szükséges: `firebase login`

**Saját domain** (`fitnessgyor.hu`) bekötése: Firebase Console → Hosting → Custom domain.

## Beszélgetés összefoglalója
- **2026-04-15:** Projekt indítás. One-pager honlap, meglévő tartalom és struktúra alapján, megújult dizájnnal. Nulláról fejlesztjük.
- **2026-04-17:** Firebase Hosting bekötve (`www-fitnessgyor-hu` projekt), deploy folyamat dokumentálva.
