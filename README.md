# auto-submit-teams
Tento script automatický odovzdá na Teams pri pridaní súboru, odstránení súboru a ak máte málo času na odovzdanie. Script neodovzdá pri zmene súboru (napríklad ak zapíšete niečo do wordu, alebo dokončite písomku, nič sa nestane)
## Použitie
Na to aby to odovzdalo musí byť nejaká zmena priamo na teams (prídanie, odstránenie súboru). To znamená, že ak je nejaká písomka a tá vás presmeruje na Google Forms a vy ju vypracujete, script **NEODOVZDÁ** zadanie. Zmena musí byť viditeľná priamo na stranke TEAMS. Taktiež by sa malo odovzdať (stále neodskúšané, **nespoliehajte** sa na to), ak máte málo času na odovzdanie (premenná off v sekundách - default 5 s) (tzv. časové odovzdanie). Časové odovzdanie sa **nevykoná** ak nemáte teams otvorený na zadaní. Script dokáže odovzdať len zadanie, ktoré **je zapnuté**
## Inštalácia
1. Na chrome si nájdite [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=sk) a nainštalujte si túto extension.
2. Zapnite si túto extension
3. V pravom hornom rohu kliknite na Tampermonkey (štvorec s očami), a kliknite Create new script / Vytvorte nový script.
4. Teraz prekopírujte celý text z index.js (musí byť vrátane komentov) a vložte to do New Script. Uložte to.
5. Reštartujte chrome, a vyskúšajte či script funguje. Vyskúšate to tak, že k nejakému zadaniu pridáte nejaký súbor, ak extension funguje malo by vám automatický odovzdať zadanie po dokončení nahrávania súboru.
