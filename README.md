# Exemple Angular avec NGRX

Le code de base est le projet initial pour LOG2990. La seul différence est que le bouton "Envoyer un message au serveur" a été refait pour utiliser NGRX au lieu de directement appeler notre service.

# Installation de NGRX

`npm install @ngrx/{store,effects,entity,store-devtools,schematics}@12 --save`

# Creation des composentes

`ng generate @ngrx/schematics:action componentName`
`ng generate @ngrx/schematics:reducer componentName`
`ng generate @ngrx/schematics:effect componentName`
