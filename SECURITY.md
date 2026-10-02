# Sécurité

Ce dépôt est public et contient uniquement le site statique du programme de test Vayvi.

## Ne jamais publier ici

- mots de passe ;
- tokens GitHub ou clés API ;
- fichiers `.env` réels ;
- clés de signature Android (`.jks`, `.keystore`) ;
- clés privées ou certificats contenant une clé privée ;
- identifiants de comptes de service ;
- fichiers de configuration contenant des secrets.

Le fichier `.gitignore` bloque plusieurs formats courants, mais il ne remplace pas une vérification avant chaque commit.

## En cas de secret publié par erreur

1. révoquer ou faire tourner immédiatement le secret concerné ;
2. ne pas considérer sa simple suppression dans un nouveau commit comme suffisante ;
3. nettoyer l'historique Git si nécessaire ;
4. vérifier les journaux et accès associés au secret.

## Signaler un problème de sécurité

Pour un problème de sécurité concernant ce site ou Vayvi, écrire à :

golappstudio.support@gmail.com

Éviter de publier publiquement des informations sensibles dans une issue GitHub.
