# Vayvi Testing

Landing page publique du programme de test privé Android de Vayvi.

## Site public

https://shamsgolap.github.io/vayvi-testing/

## Versions et branches de référence

- **Google Play, test fermé Alpha :** Vayvi **0.3.0+7**, version historiquement publiée.
- **Candidate de développement :** Vayvi **0.4.0+8** sur `ShamsGolap/vayvi` → `develop`, non diffusée sur Google Play tant que les validations et l'AAB signé ne sont pas terminés.
- **Expérimentation multilingue :** `experiment/global`, à ne pas présenter comme une disponibilité de production.

La version insérée dynamiquement dans le bandeau est celle indiquée comme **distribuée sur Google Play** dans `vayvi-privacy`. Les paragraphes décrivant la 0.3.0 et la candidate 0.4.0 sont délibérément distincts et doivent être mis à jour manuellement après publication.

- Android
- Programme de test réservé aux personnes de 18 ans et plus

## Accès

- Activation du programme : https://play.google.com/apps/testing/com.golappstudio.vayvi
- Installation Google Play : https://play.google.com/store/apps/details?id=com.golappstudio.vayvi
- **Demander à participer** est l’action principale du haut de page : elle amène à l’encart `#demander`, avant les étapes d’installation. L’encart fournit un e-mail prérempli vers `golappstudio.support@gmail.com`, puis explique l’attente de confirmation.
- Le parcours **Je suis déjà inscrit** mène directement aux instructions d’activation Google Play.
- L’inscription n’est jamais instantanée et aucun formulaire ni e-mail n’est envoyé automatiquement.
- L'ajout au programme de test reste manuel côté Google Play Console.

## Maintenance

La version affichée sur la page est synchronisée automatiquement depuis la politique publique Vayvi grâce à `version-sync.js`.

Le script lit la mention `Version concernée : Vayvi X.Y.Z+N` depuis :
https://shamsgolap.github.io/vayvi-privacy/

Lors d'une nouvelle version **effectivement diffusée** sur Google Play :

1. mettre à jour la version dans `vayvi-privacy` ;
2. vérifier le lien Google Play ;
3. vérifier les instructions destinées aux testeurs ;
4. vérifier le lien vers la politique de confidentialité.

## Liens

- Politique de confidentialité : https://shamsgolap.github.io/vayvi-privacy/
- Contact : golappstudio.support@gmail.com

## Contrat de test de la candidate 0.4.0+8 (17 novembre 2026)

- Free : 5 évaluations enregistrées, 2 suivis actifs, 4 nouveaux points par relation / 30 jours glissants.
- À 5 évaluations : supprimer une évaluation ou activer Vayvi+ ; pas d'archivage.
- Modifier, lire, partager et supprimer des contenus existants reste possible ; les anciennes données Premium ne sont pas effacées ni décomptées rétroactivement.
- Preview : package `com.golappstudio.vayvi.preview`, publicités Google de test et paiements fictifs RevenueCat Test Store ; jamais de facturation réelle.
- Production : l'accès Vayvi+ doit être confirmé par le magasin ; les prix et paiements réels restent à configurer et valider avant diffusion.
- FR/EN partiel dans `develop` ; autres locales expérimentales hors `develop` et hors Play.

Les anciennes archives GitHub Actions ne sont pas une « dernière Preview ». Ne donner un lien de téléchargement précis qu'après validation de sa version et de ses artifacts.
