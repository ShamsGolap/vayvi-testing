# Vayvi Testing

Landing page publique du programme de test privé Android de Vayvi.

## Site public

https://shamsgolap.github.io/vayvi-testing/

## Version affichée

La version n'est pas écrite en dur dans ce dépôt. La page récupère automatiquement la version publiée dans `vayvi-privacy`.

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

Lors d'une nouvelle version de test :

1. mettre à jour la version dans `vayvi-privacy` ;
2. vérifier le lien Google Play ;
3. vérifier les instructions destinées aux testeurs ;
4. vérifier le lien vers la politique de confidentialité.

## Liens

- Politique de confidentialité : https://shamsgolap.github.io/vayvi-privacy/
- Contact : golappstudio.support@gmail.com
