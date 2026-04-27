# Commandes utiles — Portfolio Next.js

## Lancer le projet

```bash
npm run dev
```
Accessible sur http://localhost:3002

---

## Le serveur bloque / EPERM sur `.next\trace`

Un ancien process Node tient le fichier. Dans PowerShell :

```powershell
# 1. Tuer tous les process Node
Get-Process -Name "node" -ErrorAction SilentlyContinue | Stop-Process -Force

# 2. Supprimer le cache
Remove-Item -Recurse -Force "d:\Arslan\PorteFolio\.next"

# 3. Relancer
npm run dev
```

---

## Le navigateur n'affiche pas les changements

Hard refresh pour vider le cache navigateur :

```
Ctrl + Shift + R   (ou Ctrl + F5)
```

---

## Git — workflow habituel

```bash
# Voir l'état des fichiers modifiés
git status

# Créer une nouvelle branche
git checkout -b nom-branche

# Stager des fichiers spécifiques
git add src/components/MonComposant.tsx src/lib/data.ts

# Committer
git commit -m "feat: description du changement"

# Pusher la branche sur GitHub
git push -u origin nom-branche
```

---

## Revenir en arrière sur un fichier

```bash
# Annuler les modifications non commitées sur un fichier
git restore src/components/MonComposant.tsx

# Annuler TOUS les changements non commités (dangereux)
git restore .
```

---

## Caractères accentués corrompus (é → Ã©, · → Â·)

Causé par PowerShell qui réécrit les fichiers en UTF-16 au lieu d'UTF-8.
Pour corriger, ouvrir le fichier dans VS Code et le ré-enregistrer en UTF-8 :
`Ctrl+Shift+P` → "Change File Encoding" → "Save with Encoding" → UTF-8.

Ou corriger manuellement les chaînes corrompues dans le fichier.

---

## Build de production (vérification avant déploiement)

```bash
npm run build
```

Les fichiers statiques sont générés dans `out/`.
