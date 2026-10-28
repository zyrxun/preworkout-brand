# 13 — Shelf Life & Ingredient Stability: Do the Actives Survive 1/2/6 Months?

**Core question:** if a piece sits on a shelf (or in a fridge) for 2 weeks, 2 months, or 6 months, do the actives — caffeine, L-theanine, beta-alanine — chemically degrade or stop working?

**TL;DR:** The actives are more stable than the candy is. Caffeine is essentially indestructible on candy timescales. Beta-alanine's feared Maillard reaction with the corn syrup's reducing sugars is real chemistry but is suppressed in our system (acidic pH, high glycerin/low free water, fridge temps) — expect ≥95% survival at 6 months. **The fragile active is L-theanine**: it hydrolyzes under acid + heat, and our malic-acid core is acidic (est. pH ~2.8–3.4), so theanine is the one active that measurably declines (roughly 5–10% lost by 2 months at room temperature, more if the core is more acidic or gets hot). The bigger shelf-life threat is **physical** — water migrating from core into shell (softening, weeping, core thickening/crystallizing), sucrose inversion under the sour coat, and mold if water activity creeps above ~0.6–0.7. Home batches (14 days, refrigerated) are comfortably inside every margin: >99% of all three actives survive.

---

## 1. Why this is answerable: what actually drives degradation here

For a molecule dissolved in a wet, sugary, acidic matrix, potency loss comes from four knobs — and each has a known direction:

| Knob | Our v1 core | Effect |
|---|---|---|
| pH | Acidic (~2.8–3.4 est., from 1.5 g malic acid per 36 g core, partially buffered upward by beta-alanine's carboxyl group) [unverified — measure with pH strips] | Accelerates theanine amide hydrolysis; **suppresses** Maillard (protonated amine = non-nucleophilic)[8] |
| Temperature | Fridge 4 °C vs ambient ~20–25 °C vs hot car ≥35–40 °C | Arrhenius: each ~10 °C roughly doubles reaction rates; heat is the multiplier on every pathway[4] |
| Water activity (aw) | Core ≈ 0.75 est. (44% glycerin by weight); shell ≈ 0.55–0.67 [unverified — estimate from mole-fraction math] | Low aw slows hydrolysis, Maillard, and all microbial growth[8][9] |
| Reducing sugars | Corn syrup (42 DE ≈ 42% reducing power) touching an amino-acid-rich core; sucrose inversion adds more over time[29][30] | The only meaningful *chemical* threat to beta-alanine (Maillard)[6][22] |

Two structural facts worth internalizing:

- **Maillard reaction rate is controlled by pH first.** Reactivity tracks the concentration of the free (unprotonated) amino group; at pH < 4 the amino group of an amino acid is overwhelmingly protonated and Maillard is slow. Reaction rate rises steeply toward neutral/alkaline pH, with temperature, and with water activity in the intermediate range[8].
- **Moisture migration is driven by water activity, not water content.** Water diffuses from the higher-aw phase to the lower-aw phase until the two phases have *equal aw* — equal water content is neither required nor expected[14]. This single fact explains most physical failure modes in section 4.

---

## 2. Active-by-active stability

### 2.1 Caffeine — reputedly very stable; confirmed, repeatedly

The reputation is earned. Direct evidence across matrices and timescales:

| Study | Matrix | Condition | Result |
|---|---|---|---|
| Caffeinated + theanine beverage stability study (HPLC) | Citric-acid beverage, pH 2.4–3.2 (the closest published analog to our core: same two actives) | 8 weeks at 4, 25, 40 °C | "**Caffeine remained stable in all conditions**"[4] |
| Caffeine citrate injectable solution | Aqueous, pH ~5 | 342 days at 22 °C and 4 °C, protected from light | "stable for up to 342 days" (concentration virtually unchanged)[2] |
| Caffeine oral solution (neonatal) | Aqueous + potassium sorbate | 12 months at 5–45 °C | Caffeine unchanged (only yellow discoloration of the formulation at 32–45 °C, attributed to the preservative/excipients, not caffeine)[1] |
| Caffeine citrate in IV admixtures | Complex aqueous admixtures | 24 h room temp | 0–6.4% change, not significant[3] |
| Green-coffee extract in food models | Baked/heat-processed food matrices (sugar, starch, protein, oil) | **180 °C for 0.5–1 h** | Caffeine losses only **1.5–10%** (vs 18–84% losses of the accompanying polyphenols in the same systems)[20] |
| Cold brew coffee | Acidic aqueous beverage | 4 months (pasteurized/HPP) | Caffeine content stable[21] |

**Verdict:** caffeine in our liquid core is chemically stable for the entire horizon of interest (6+ months, all realistic temperatures, pH 2.4–5). At candy-cooking temperatures (~115–120 °C shell syrup, core added cool) losses are negligible — even 1 h at 180 °C only costs single-digit percent[20]. The only "loss mechanism" that matters is **physical**: as the core loses water to the shell over months, caffeine (solubility ~2.2 g/100 mL at RT) can recrystallize out of the concentrating core — a dose-uniformity/grit issue, not a potency issue.

### 2.2 L-theanine — the fragile one: acid-catalyzed hydrolysis, temperature-sensitive

L-theanine is an amide (γ-glutamyl-ethylamide). Under acid + heat the amide hydrolyzes to L-glutamic acid + ethylamine — an irreversible potency loss[4]. It is stable at pH 5–7 but **degrades in the pH 2–3 range**, which is exactly where a malic-acid candy core lives[4][5]. Key data:

- FDA pre-market notification data: **~5% degradation within 24 h at pH 2, 25 °C** — the only published data point below pH 3[4].
- Best available kinetics (Mile High Labs, 2025; two citric-acid beverages, HPLC, 8 weeks, first-order model)[4]:

| Formulation | pH | 4 °C, 8 wk | 25 °C, 8 wk | 40 °C, 8 wk |
|---|---|---|---|---|
| F1 | 3.2 | **96.6%** | **96.6%** | **85.2%** |
| F2 | 2.4 | **93.5%** | **91.9%** | **45.5%** |

(Extrapolating first-order kinetics to 6 months/26 weeks: pH 3.2 ≈ 89% at 4 °C *and* 25 °C; pH 2.4 ≈ 80% at 4 °C, ≈ 76% at 25 °C, and single-digit % at 40 °C. Note the counterintuitive and useful result: **at pH 3.2, refrigeration barely helps** — the acid does the damage either way; at pH 2.4 the fridge helps modestly. Heat is catastrophic.)

- At neutral pH theanine is tough: ≤1.1% loss even at **100 °C** at pH 6–7 (<5% at pH 8); boiling 5 min does nothing[5]. This is why tea processing "works" — and why we can't have nice things at pH 3.
- BenchChem formulation guidance: aqueous theanine solutions at acidic pH are "generally not recommended to store for more than one day"; optimal storage pH 5–7; refrigerate if storing solutions[5]. (Real-world candy formulation is far more forgiving than a lab stock solution because our aw is much lower — but the pH sensitivity stands.)

**What this means for our core:** the v1 core (1.5 g malic acid / 36 g core ≈ 4.2% acid) lands somewhere in the pH 2.4–3.4 zone depending on how much the beta-alanine buffers it [unverified]. At the pH 3.2 end: ~96% survives 2 months at room temp, ~89% at 6 months — acceptable. At the pH 2.4 end: ~92% at 2 months, ~76% at 6 months ambient, and a hot-car summer (~40 °C) halves it in 8 weeks[4]. **Actionable: measure core pH, and keep it ≥3.0** (use the sour hit in the coat, not the core; malic acid is in the core mainly for flavor-balance, not for the "sour" which the sanding coat delivers).

### 2.3 Beta-alanine — the Maillard question, answered

**The fear is legitimate.** Beta-alanine is a primary amine, and β-alanine + reducing sugar is literally the textbook Maillard model system — chemists use it to *study* browning[6]. An Abbott patent for shelf-stable nutritional liquids states the problem plainly: formulating beta-alanine in water "often results in excessive reaction of the amino acid in the presence of... carbohydrates having a substantial reducing capacity, during high temperature processing and during prolonged storage under ambient conditions," with degradation "even more problematic... at the higher pH ranges"[22].

**But the same sources show the reaction is controllable, and our matrix pushes every lever the right way:**

1. **pH.** Maillard needs the free (unprotonated) amine; pH < 4 slows it dramatically[8]. Our core is pH ~3. Abbott's liquids were formulated near neutral — a much harsher case than ours.
2. **Water activity.** Our core is 44% glycerin, and glycerin is a dedicated aw-crusher[31][32][33]. Maillard has an intermediate-aw optimum (~0.6–0.7); both dilute syrup (low aw) and watery solution move it slower[8].
3. **Reducing-sugar dose.** The Abbott fix: keep the molar ratio of reducing carbohydrate (as dextrose-equivalent) to beta-alanine below ~3.0, and degradation stays **< 10% (often < 5%, < 3%) over 3–18 months shelf life**[22]. Our core has *no* added syrup — the only reducing sugar reaching it is what migrates in from the shell — so our effective DE:β-ala ratio is far below 3.
4. **Real-world kinetics even under bad conditions are slow.** At 37 °C, pH 7.4, full-water activity, free alanine exposed to glucose lost only **3.31% over 22 days**[7] — conditions strictly worse than our core on every axis. Meanwhile the visible-browning β-alanine model reactions are run at ~100 °C for hours[6] — a temperature regime our product never sees after the shell is cast (the core is never cooked; only the shell syrup is).

Beta-alanine's intrinsic stability is high: the solid has a **3-year shelf life** (CarnoSyn's stated spec) and decomposition only *onsets* at ~196 °C[23]. Its ergogenic function (raising muscle carnosine, pKa 6.83 proton buffering) is well established at our kinds of doses[24]. If a stored core turned amber/brown over months, that's visible Maillard progress — treat it as the canary, but the chemistry predicts single-digit % potency loss in 6 months, not failure.

**Honest caveat:** there is no published β-alanine-in-gummy-candy stability study; the ≥95%-at-6-months figure is a synthesis of model-system kinetics, the Abbott shelf-life patent, and the aw/pH suppression arguments — not a direct measurement. The home test plan (§7) includes a browning checkpoint precisely to catch this.

**What does NOT threaten beta-alanine here:** acid hydrolysis. Simple amino acids stand up to acid far better than theanine's amide does (peptide-bond hydrolysis is a peptide problem, not a free-amino-acid problem; β-alanine solutions are chemically stable — lab guidance says prepare fresh only because of microbial/precision concerns, not chemical decay[23]).

### 2.4 The environment: glycerin is doing three jobs at once

The v1 core's 16 g glycerin / 36 g total (44%) is not just texture — it's the stability engine:

- **Lowers aw.** Measured dosing data: syrup at aw 0.823 dropped to 0.706 with ~6 g glycerin added; candy-industry formulations at 10–40% glycerin with <9% moisture reach **aw < 0.5**[31][32]. Our core estimates to ~0.75 [unverified — the ~7.7 g of dissolved actives themselves depress aw further; measure it].
- **Slows all three chemical pathways** (hydrolysis needs water; Maillard needs intermediate aw)[8].
- **Prevents sugar crystallization** in shell and core (crystallization modifier — classic confectionery use)[33], and (with the corn syrup) doctors the shell against graining[30].

Commercial liquid-fill patents use the same trick from the other side: center-fills formulated with **polyol : glycerin ratios of 1:1 to 4:1 and water content of only 0.01–4 wt%** specifically so the fill can't dissolve or migrate into the shell[17].

---

## 3. The pH note (one paragraph, because it drives tweak #1)

Sucrose is not a reducing sugar and does not Maillard-brown **until it is inverted** (hydrolyzed to glucose + fructose) by acid + water[29][30]. Corn syrup, by contrast, is reducing from day one — DE *is* the reducing-power metric, and a typical 42-DE confectioner's syrup carries ~19–20% dextrose plus maltose (dextrose being the more reactive)[29][30]. Every acid-catalyzed inversion event at the core–shell interface and under the sour coat **creates new Maillard substrate** (fructose is the most reactive of the common sugars) *and* new hygroscopic material that pulls more water in — a documented positive-feedback loop in sour candies[29][34][36]. This is the slow engine behind browning, stickiness, and texture collapse in months 2–6.

---

## 4. Physical failure modes (the real shelf-life limiters)

### 4.1 Water migration: core → shell (leak, weeping, shell dissolution)

Water moves from high-aw core into lower-aw shell and equilibrates aw, not water content[14]. Documented consequences in exactly our architecture:

- Liquid center-filled gum: "undesirable migration of the liquid into the gum base region... results in a product which is not commercially acceptable" — the entire patent literature around center-fills exists because aqueous fills wander[15].
- In hard-candy aging studies, a **conventional aqueous center-fill dissolved its rotary-molded shell at the thin seal within 2–3 weeks and then leaked**; the waterproofed emulsion-fill version showed no shell-thinning and no leakage through 8 weeks of accelerated aging, with a spec of **< 20% center migration over a 24-month shelf life**[17].

Our home construction (two-pour gummy, hand-capped seam, aqueous core, no barrier layer) sits squarely in the *bad* column of that comparison. Expected home behavior: core slowly firming + shell locally softening at the interface over weeks; seam weeping if the cap pour is thin or bonded poorly. This is a **weeks-scale risk, not months** — and it's why home batches get eaten in 14 days, not stored.

### 4.2 Core concentration & recrystallization

As ~1–2 g of water leaves each core over weeks-months, the core concentrates: caffeine can recrystallize (grit; uneven per-piece dose when pieces are split), beta-alanine (54.5 g/100 mL) approaches saturation and can crystal-crash, and the core simply gets stiffer — the "burst" decays. Glycerin in the core fights this (humectant + anti-crystallizer)[33]; the fraction of water we can remove from the recipe is the fraction of this problem we delete.

### 4.3 Sour-coat failure: sweating, inversion, acid loss

Free malic/citric acid crystals in the sanding coat are strongly hygroscopic: they pull moisture (including out of the gummy itself), swell, and go wet/sticky ("sweating")[34][37], and the moisture + acid then **invert the sucrose** in the coat — fructose generated is itself hygroscopic, accelerating the cycle ("the outside of the sweet appear[s] melted, sticky and wet")[36]. The acids also migrate inward and the perceived sour fades — free-acid-coated gummies lose acidity dramatically faster than coated ones (see §5)[35]. Corn syrup in the coat makes it worse (extra hygroscopicity + reducing sugars)[29].

### 4.4 Mold vs water activity — where the line actually is

Authoritative thresholds for pharmaceutical-style chewable gels[9]:

| aw | Who can grow |
|---|---|
| > 0.95 | Bacteria out-compete fungi |
| 0.85–0.95 | Most bacteria can grow |
| 0.75–0.85 | Fewer bacteria; most **yeasts and molds** stop below 0.75 |
| 0.60–0.75 | Only specialized xerophiles (osmophilic yeasts, *Eurotium*-type molds) |
| < 0.60 | **No microorganism grows** |

Industry practice agrees: gummy target aw is 0.55–0.65[12], and gelatin gummies specifically 0.65–0.67[10]. Mold risk climbs above ~0.60[11][13]. Finished gummies (aw 0.51–0.76, pH < 4.5) are "not associated with foodborne illness" and hold 1–2 years of shelf life at 20–25 °C / 50–60% RH[9]. Note the low pH of our system **synergizes with aw** — aw + pH together control microbes "at levels that would typically be considered unsafe for either one alone"[9].

**Our exposure:** the shell is a normal gummy (aw ~0.6–0.67 → fine, visible-mold territory only if it picks up humidity). The **core is the question mark**: est. aw ~0.75, but pH ~3 and sealed inside the shell, refrigerated for home batches. That combination is why home batches survive 14 days trivially — but an ambient, commercially-stored version without sorbate is living in the xerophile gap (aw 0.6–0.75), which is exactly the gap potassium sorbate exists to close (§7, tweak 3)[19]. Also note the trade-off: sorbate suppresses the visible-mold warning light, so it must come *with* an aw spec, not instead of one[13].

---

## 5. How commercial liquid-filled candies actually hit 12–18 months

Synthesis of the patent + industry literature — five moves, in order of importance:

1. **De-water the fill.** Water content of the liquid center held to **0.01–4 wt%**, with polyol:glycerin ratios of 1:1–4:1 — the fill is "liquid" from glycerin/polyols, not water[17]. Lower fill aw = less migration, less microbial risk, no hydrolysis.
2. **Match aw across phases.** Since migration runs on aw gradients[14], commercial products formulate core and shell to near-equal aw so nothing moves in either direction. Our core (est. 0.75) vs shell (0.60–0.67) has a gradient — a home-testable prediction: cores should firm up and shells near the interface should soften first.
3. **Engineer the barrier.** Options in the literature: a water-impermeable **intermediate layer** between core and shell (e.g., maltitol/gum-arabic coating applied in alcohol)[16]; higher-crystal-density polyol shells that leave fewer pores for capillary migration[15]; co-deposited (seam-free) shells — the leak point in rotary-molded candy is the seal, and co-deposition eliminates it (no leak after 8 weeks accelerated aging vs 3-week leak for sealed equivalents)[17].
4. **Preserve + acidulate.** Potassium sorbate at ~0.05–0.3% with acidulants (citric/malic 0.2–0.8%) pulling pH to 3.0–4.5, where **>90% of sorbate is in the active undissociated form** (pKa 4.75; useful activity up to pH 6–6.5, yeast-inhibitory at 0.1% at pH 4.5)[18][19]. Combined with aw < 0.7, this closes the xerophile gap.
5. **Package as the last barrier.** Individually wrapped pieces + moisture-barrier overwrap are written into the commercial specs (pieces remain non-stick in direct contact ≥30 days at 30–60% RH; barrier overwrap called out explicitly)[17]. Sour products additionally use **encapsulated (lipid-coated) acids** in the coat: +95% perceived acidity retained after 150 days vs free acid, and significantly reduced sugar inversion[34][35][36].

None of this is exotic chemistry — it is exactly the gap between "prototype-grade yes, product-grade no" in doc 09.

---

## 6. Verdict table: what % of label potency survives

Best estimates. Caffeine and β-alanine anchored on direct/bracketing studies; theanine anchored on the pH 3.2/2.4 kinetic study extrapolated first-order to 6 months[4]; β-alanine anchored on Abbott shelf-life liquids + 37 °C model systems, discounted for our aw/ph suppression[7][22]. **"Fridge" = 4 °C, "ambient" = 20–25 °C, "hot" = ≥35–40 °C (car, summer mailbox).** These are chemical-potency estimates; physical failure (leak/texture) is separately likely to end a batch's life earlier (§4).

| Active | 2 wk fridge | 2 wk ambient | 2 mo fridge | 2 mo ambient | 6 mo fridge | 6 mo ambient | 2 mo hot |
|---|---|---|---|---|---|---|---|
| Caffeine | ~100% | ~100% | ~100% | ~98–100% | ~99% | ~95–99% | ~98–100%[4] |
| L-theanine | ~99% | ~99% | **~95–96%** | **~92–96%** | ~89–93% | ~85–90% (pH≥3) / ~75–80% (pH≈2.4) | **~85% (pH 3.2) to ~45% (pH 2.4)**[4] |
| Beta-alanine | ~100% | ~100% | ~98–100% | ~97–99% | ~97–99% | ~93–97% | ~95–99% |

Reading notes:

- **The 2-month answer:** all three actives still work at 2 months under both fridge and ambient. Realistic worst case is theanine at ~92% — imperceptible. Nothing here "stops working" at 2 months.
- **The 6-month answer:** caffeine and beta-alanine clear it; theanine is the only marginal active, and only if the core is more acidic than pH ~3 *and* stored ambient. Fridge 6-month theanine (~89–93%) is fine.
- **The one killer scenario is heat:** theanine in a hot car at pH ≤ 2.4 is down ~55% in 8 weeks[4]. If any scenario involves summer shipping or a car, theanine is the active that dies, not caffeine.
- The most likely real-world "it got weaker" report at 6 months ambient is **texture collapse + core crystallization + sour-coat loss** being perceived as potency loss. The dose is probably still there; the delivery experience isn't.

## 7. Top 3 formulation tweaks to extend life

1. **Take reducing sugars away from the amino acids.** In the **shell/coat**: replace regular corn syrup with a non-reducing or low-reactivity system — **isomalt** (non-reducing polyol, no Maillard, low hygroscopicity — the professional choice)[27][28][30]. A high-maltose, low-DE syrup is the syrup-side alternative (dextrose is the reactive part of corn syrup)[29]. In the **coat**: use encapsulated (lipid-coated) malic acid instead of free acid — retains ~95% more acidity at 150 days and cuts the inversion feedback loop[34][35]. **Important correction to a tempting idea: allulose is *not* a reducing-sugar fix — allulose is itself a reducing sugar and browns *faster* than glucose or fructose**[25][26]. This single change set attacks the only real chemical threat (β-alanine Maillard + coat failure) and the stickiness problem simultaneously.
2. **Cut free water; raise the glycerin ratio; hold core pH ≥ 3.0.** Push the core toward the commercial spec — glycerin:water well above 1:1 (v1 is 16:20; target ≥ 16:10, i.e., ~60% glycerin in the humectant phase), keeping the core liquid by glycerin rather than water[17][31]. Target **core aw < 0.65** (measure once with an aw meter; even one reading calibrates every future batch)[12]. Drop core malic acid to the minimum that flavors (theanine hydrolysis is acid-driven: pH 3.2 vs 2.4 is roughly the difference between ~4% and ~8% loss per 2 months at room temp, and ~15% vs ~55% at 8 weeks hot[4]). Keep the sour identity in the coat.
3. **Add potassium sorbate (0.05–0.1% of the core) + barrier packaging.** At our core pH (~3–4), >90% of sorbate is the active undissociated form — 0.1% is outright yeast-lethal and mold-inhibitory, closing the aw 0.6–0.75 xerophile gap that our core nominally occupies[18][19]. This is the standard commercial move for gummies/liquid fills and is the difference between "14 days in the fridge" and an ambient 6–12 month claim. Pair with individual wrapping or a moisture-barrier overwrap (the commercial specs don't ship liquid-fill candy any other way)[17]. Home-batch note: sorbate is optional while batches live in the fridge for 14 days — adopt it when you want to run an ambient 2–3 month storage test.

## 8. What this means for the home test plan (doc 09 amendments)

1. **Potency is a non-issue for the 14-day home protocol.** At 2 weeks, all three actives are >99% under any storage condition you will use. The home protocol's real test variables remain texture, burst, flavor, and tingle — exactly as doc 09 says. Don't spend effort on potency assays.
2. **Add a storage split to every batch:** 3–4 pieces each → fridge (4 °C), ambient shelf (~21 °C), and a "hot" sentinel (car/glovebox, spring–fall). Checkpoints at 2 wk / 1 mo / 2 mo / (3 mo if anything survives). Log per checkpoint: piece weight (moisture leaving = migration proxy), shell firmness, seam weeping, core viscosity + visible crystals, core color (browning = Maillard canary), sour-coat wetness, visible mold, and a same-person "kick" rating vs a fresh reference piece.
3. **Kill criteria:** any leak/weep at the seam, a coat that won't dry, visible mold, or strong core browning → batch verdict "physically failed at N weeks," regardless of potency. Expect the ambient + hot arms to fail on texture (§4), not chemistry.
4. **Interpret fading "kick" correctly:** if the kick fades with age, suspect theanine degradation or texture/sour-coat loss — caffeine is too stable to be the culprit (it was the internal control that never moved in the 8-week beverage study[4]). Swallow test on an empty stomach vs fresh piece distinguishes "actives gone" from "delivery broken."
5. **Measure two numbers once, ever:** core pH (target ≥ 3.0; if < 2.6, cut core malic acid — this is the single highest-leverage theanine fix) and core aw once a meter is justifiable (target < 0.65). Everything else in this doc can be tracked with a scale, a phone camera, and the log above.
6. **Stress test only what the product will face:** fridge 14 days is the committed home protocol; add one deliberate 40 °C / 2-week theanine stress batch in summer to *see* the failure mode firsthand (expect: browner, flatter-tasting core, theanine down ~half per the kinetics[4]) — good content, better intuition.
7. **Home ≠ commercial, quantified:** home batches die of leak/texture in weeks-to-months; commercial versions buy 12–18 months with de-watered fills, aw-matched phases, barrier layers/co-deposition, sorbate, and overwrap (§5). That gap is a manufacturing gap, not a chemistry gap — the actives themselves were never the problem.

## Sources

[1] https://onlinelibrary.wiley.com/doi/10.1111/j.1365-2710.1994.tb00699.x
[2] https://doi.org/10.1093/ajhp/51.4.512
[3] https://pubmed.ncbi.nlm.nih.gov/2493462
[4] https://preprints.org/manuscript/202506.1098/v1
[5] https://pdf.benchchem.com/554/Improving_the_stability_of_L_Theanine_in_solution_for_experimental_use.pdf
[6] https://pubs.acs.org/doi/10.1021/jf030691t
[7] https://frontiersin.org/journals/nutrition/articles/10.3389/fnut.2022.1062777/full
[8] https://pmc.ncbi.nlm.nih.gov/articles/PMC12154226
[9] https://americanpharmaceuticalreview.com/Featured-Articles/614408-Microbiological-Attributes-of-Chewable-Gels-Gummies
[10] https://melt-to-make.com/a/blog/gummy-water-activity-the-overlooked-key-to-better-gummies
[11] https://kornutra.co/blog/at-what-level-of-residual-moisture-does-a-gummy-become-susceptible-to-mold-growth-is-that-boundary-the-same-for-all-hydrocolloid-types
[12] https://gummygmp.com/blog/2026-07-08-gummy-manufacturer-moisture-bloom-process-validation
[13] https://reddit.com/r/foodscience/comments/gunqy6/iso_resources_for_preserving_gummy_candy
[14] https://sciencedirect.com/science/article/pii/B9781845693909500114
[15] https://patents.google.com/patent/US07727565B2
[16] https://patents.searchlight.law/doc/US20070128312
[17] https://patents.google.com/patent/US10278408B2
[18] https://doi.org/10.4315/0362-028x-48.4.364
[19] https://eureka.patsnap.com/materials/potassium-sorbate-confectionery
[20] https://link.springer.com/doi/10.1007/s00217-013-1956-3
[21] https://research.unipd.it/retrieve/e14fb26f-9676-3de1-e053-1705fe0ac030/Bellumori_2021_Cold%20Brew.pdf
[22] https://patents.google.com/patent/WO2011127039A1/en
[23] https://pdf.benchchem.com/81/Technical_Support_Center_Stearoyl_Methyl_Beta_Alanine_Efficacy_and_Temperature_Considerations.pdf
[24] https://pmc.ncbi.nlm.nih.gov/articles/PMC4501114
[25] https://iconfoods.com/taming-the-burn-controlling-alluloses-quick-browning
[26] https://onlinelibrary.wiley.com/doi/10.1111/ijfs.15128
[27] https://iconfoods.com/imt1020-nf-grade-isomalt
[28] https://myfoodresearch.com/uploads/8/4/8/5/84855864/_30__fr-2022-172_hadjikinova.pdf
[29] https://onlinelibrary.wiley.com/doi/10.1002/9781444314748.ch5
[30] https://link.springer.com/article/10.1007/978-3-319-61742-8
[31] https://eureka.patsnap.com/materials/glycerin-water-content-control
[32] https://aqualab.com/learn/food-manufacturers-step-step-guide-lowering-water-activity
[33] https://asbe.org/article/glycerin
[34] https://tastetech.com/updates/effects-of-coreshell-encapsulation
[35] https://tastetech.com/updates/why-use-encapsulated-acids-for-gummies
[36] https://tastetech.com/wp-content/uploads/2025/04/TasteTech-EncapsulatedAcidsWhitepaper-2.pdf
[37] https://niranbio.com/encapsulated-malic-acid-sour-candy
