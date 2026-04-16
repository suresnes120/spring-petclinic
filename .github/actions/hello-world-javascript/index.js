const core = require('@actions/core');

try {
  // 1. Récupération des inputs
  const nameToGreet = core.getInput('username');
  const greetingWord = core.getInput('greeting');

  // 2. Construction du message
  const finalMessage = `${greetingWord}, ${nameToGreet}!`;

  // 3. Affichage dans les logs
  console.log(finalMessage);

  // 4. Mise à disposition pour les étapes suivantes via l'output
  core.setOutput("message", finalMessage);

} catch (error) {
  // En cas d'erreur, on échoue l'étape proprement
  core.setFailed(error.message);
}