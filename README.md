# news-image-20261118

[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/fierdauzbussiness-cyber/news-image-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/fierdauzbussiness-cyber/news-image-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

## What this is

One image summing up the world's news of **Wednesday, 18 November 2026** — built for make.fun's "Sum up 18 November's world news in one image" bounty ($250 in USDC).

The image is a newspaper-style infographic with six stories, all verified from reporting dated 18 November 2026:

1. **Iran widens Gulf attacks** — Iran targeted the U.S. Ali Al Salem air base in Kuwait and sites in Bahrain, its first attack on Kuwait since September (AP / Reuters).
2. **Xi greets Trump in Shenzhen** — as APEC opens; Xi and Putin denounce protectionism and sanctions ahead of the first-ever Trump–Xi–Putin meeting on Thursday (Reuters / BusinessWorld / USA Today).
3. **Peltola wins Alaska** — Democrat Mary Peltola beats Dan Sullivan; Democrats take a 56–44 Senate majority; first Alaska Native ever elected to the U.S. Senate (AP / Reuters / The Guardian).
4. **Ebola in DR Congo more than doubled** — WHO: 11,000+ cases and 5,400 deaths in three months; 7 in 10 children under five who catch it die (WHO / UN News).
5. **Cyclone Akvan** — severe cyclonic storm in the Bay of Bengal, due to hit India's Andhra Pradesh coast on Friday with winds of 90–100 km/h (India Meteorological Department).
6. **Board of Peace faults Israel and Hamas** — a 12-page report seen by Reuters says both sides failed their commitments to end hostilities; the ceasefire is in danger (Reuters).

Footer: Category 5 Cyclone Xavier still battering the Northern Cook Islands; the Kerch Bridge road section out of service after Tuesday's strikes.

## How it runs

`main.ts` (Node 22, standard library only) copies the `entry.png` beside it to `$MAKEFUN_OUTPUT_DIR` (else `/output`). It runs with no network and writes the same bytes on every run.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Files

- `entry.png` — the image (1024×1024, drawn as HTML/CSS and rendered with headless Chromium)
- `main.ts` — the entrypoint
- `README.md`, `LICENSE` (MIT)
