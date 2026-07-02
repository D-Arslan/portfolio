# NOOR — Prompts de génération photo

Direction : photographie de mode éditoriale, haute définition, lumière naturelle
soignée, composition épurée, couleurs fidèles. Noir & blanc franc + un seul accent
**cobalt #1B34E8**.

## Comment intégrer les images
Les emplacements sont déjà en place sur le site (glisser-déposer, persistants).
**Glissez** simplement le fichier généré sur le bloc correspondant — l'image se cale
au bon format et reste après rechargement. Astuce : la page **Collection** est
l'endroit le plus simple pour remplir les 8 pièces d'un coup. Un vêtement partage la
même image entre l'accueil et la collection (même identifiant).

Correspondance emplacement → image :

| Emplacement (id) | Où | Format |
|---|---|---|
| `ph-sirocco` | Accueil (En vedette) + Collection | portrait 3:4 |
| `ph-meridiem` · `ph-nefoud` · `ph-zephyr` · `ph-khamsin` · `ph-ghibli` · `ph-alize` · `ph-chergui` | Collection (+ accueil pour néfoud, ghibli, chergui) | portrait 3:4 |
| `ph-atelier-studio` | Accueil (bandeau « La Maison ») | paysage 4:3 |
| `ph-atelier-coupe` | La Maison (bannière) | panoramique ~16:6 |

---

## 0. Prompt-cadre (à préfixer à CHAQUE image)

> Photographie de mode éditoriale haute définition, lumière naturelle douce et
> directionnelle venant d'une grande fenêtre latérale, ombres longues subtiles.
> Fond studio uni écru très clair (#EFEDE7), aucune texture parasite. Palette
> globale noir & blanc, un seul accent bleu cobalt vif (#1B34E8). Composition
> épurée, généreux espace négatif, couleurs parfaitement fidèles, léger grain
> argentique fin. Rendu premium, calme, intemporel. Aucune typographie, aucun
> logo, aucun watermark, aucun texte.
>
> **Negative :** saturation excessive, HDR, couleurs criardes, arrière-plan
> chargé, accessoires superflus, texte, logo, watermark, déformations.

Ratio : ajouter `--ar 3:4` (pièces) / `--ar 4:3` (atelier studio) / `--ar 16:6`
(bannière table de coupe), ou l'équivalent de ton générateur.

---

## 1. Les 8 pièces (portrait 3:4)

Photographie chaque vêtement dans **sa couleur par défaut** (indiquée en gras) —
c'est la teinte affichée avant que l'utilisateur ne change de nuancier. Silhouette
non genrée en pied, cadrage centré, ou présentation « ghost mannequin » sur fond uni.

- **`ph-sirocco` — Manteau Sirocco.** Manteau long en laine vierge épaisse, coupe
  oversize à épaules tombantes, porté ouvert. Couleur **Encre (noir profond mat)**.
  Mannequin en pied, mains dans les poches, léger mouvement du tissu.

- **`ph-meridiem` — Blazer Meridiem.** Blazer structuré en laine froide, coupe
  ajustée, épaules nettes. Couleur **Encre (noir)**. Buste + hanches, posture droite.

- **`ph-nefoud` — Robe Néfoud.** Robe droite mi-longue en coton lavé, tombé souple,
  boutons corozo, poches. Couleur **Craie (écru cassé)**. En pied, léger contre-jour.

- **`ph-zephyr` — Chemise Zéphyr.** Chemise en popeline de coton, col italien, patte
  cachée, col ouvert. Couleur **Craie (blanc écru)**. Plan buste, manches retroussées.

- **`ph-khamsin` — Pantalon Khamsin.** Pantalon large à pinces, taille haute, tombé
  droit. Couleur **Encre (noir)**. Cadrage taille-chevilles, chaussures simples.

- **`ph-ghibli` — Pull Ghibli.** Col roulé en laine mérinos, maille fine. Couleur
  **Craie (écru chaud)**. Plan buste, texture de maille bien lisible.

- **`ph-alize` — Jupe Alizé.** Jupe midi en twill de laine, pli creux dos, taille
  haute. Couleur **Encre (noir)**. Cadrage taille-mollets, léger mouvement à la marche.

- **`ph-chergui` — Trench Chergui.** Trench long en coton ciré déperlant, ceinturé,
  martingale, pattes d'épaule, boucle métal. Couleur **Craie (beige écru)**. En pied,
  ceinture nouée, allure architecturale.

### (Optionnel) variantes couleur
Pour un rendu encore plus riche, tu peux générer chaque pièce dans ses autres teintes :
Encre `#1A1A1A` · Craie `#E7E3D8` · Cobalt `#1B34E8` · Grès `#B7A48C` ·
Rouille `#A6512E` · Olive `#5E6247` · Terre `#6E5A46`. (Le site n'affiche qu'une
photo par pièce ; utile si tu veux échanger la couleur montrée.)

---

## 2. Ambiances atelier

- **`ph-atelier-studio` — 4:3.** Intérieur d'atelier de couture lumineux à Alger :
  portants de vêtements en tons neutres, mètre ruban, mannequin de couture, grande
  fenêtre. Lumière naturelle, ambiance calme et haut de gamme. **Un seul détail
  cobalt** (bobine de fil ou tabouret) comme accent. Pas de visage au premier plan.

- **`ph-atelier-coupe` — panoramique 16:6.** Vue large et rasante d'une **table de
  coupe** en bois clair : ciseaux de tailleur, patrons en papier kraft, craie, chutes
  de laine et coton pliées. Lumière naturelle latérale, ombres douces, composition
  très épurée. Un accent cobalt discret (épingles ou étiquette).

---

## 3. (Optionnel) Le viewer 360°
La fiche produit garde un **viewer 360° interactif** (glisser pour tourner, zoom,
changement de couleur en direct) — actuellement une démo. Pour le rendre réel il faut
une **séquence turntable** : le même vêtement photographié tous les 15° (24 vues),
fond uni identique, cadrage et lumière constants, ghost mannequin. Dis-le-moi et je
brancherai la séquence sur le viewer à la place de l'aperçu.
