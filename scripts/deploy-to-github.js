/* eslint-disable no-console */
const execa = require("execa");
const fs = require("fs");
(async () => {
  try {
    // Create a new github branch to deploy from
    await execa("git", ["checkout", "--orphan", "gh-pages"]);

    console.log("Building started...");
    // Build our application
    await execa("npm", ["run", "build"]);
    // Add, Commit and Push the chagnes to the new branch
    console.log("Adding all work to github branch");
    await execa("mv", ["public", "dist"]);
    await execa("git", ["--work-tree", "dist", "add", "--all"]);
    console.log("Commiting to github branch");
    await execa("git", ["--work-tree", "dist", "commit", "-m", "gh-pages"]);
    console.log("Pushing to gh-pages...");
    await execa("git", ["push", "origin", "HEAD:gh-pages", "--force"]);
    
    // Remove our build folder and clean up git branch
    await execa("rm", ["-r", "dist"]);
    await execa("git", ["checkout", "-f", "main"]);
    await execa("git", ["branch", "-D", "gh-pages"]);
    console.log("Successfully deployed, check your settings");
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e.message);
    process.exit(1);
  }
})();