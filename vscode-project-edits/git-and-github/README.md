# GitHub CLI
- The github Command Line Interface (CLI) is a tool that allows you to directly access and modify issues and pull requests right from your terminal.
```
> gh issue create --title "Create tutorial for CLI" --body "We need a tutorial for GitHub CLI in our catalog."
```

## GitHub Actions
- Want to add automated tests after a pull request is created?
- Want to trigger something after a branch is merged into `main`? 

We can use github actions.

## Project Management: issues
* The issues tab: This is a built-in GitHub tracking tool for all the bugs, errors, and potential small feature changes for the project living inside the repository.
* Labels: To help organize issues when more and more pop up in a project, we can use labels. bug and feature are common labels used to differentiate between errors and new features.

Example: Take a look at the [Codecademy docs](https://github.com/Codecademy/docs/issues "Codecademy docs") 
issue board.

# CLI in Action
- Go to [GitHub's CLI website](https://cli.github.com/manual/installation) for installation guide.
- Use `gh --help` for help menu.
1. To submit an issue type;
- First login to github from the terminal by typing;
```bash 
gh auth login
```
- Then after you're logged in type; 
```bash 
>  gh issue create -R https://github.com/Codecademy/try-github-CLI-off-platform-project.git --title "Fix magic8.py error" --body "The code for magic8.py uses the python random library without importing it. This causes issues during runtime."
```
- Use `gh issue status` to list all opened issues.
- Now use `git checkout -b <branch name>` to create and switch to a new branch, to work on your own machine.
- Open the file that has error and fix it with your favourite text editor.
- Commit and push your changes to the remote repository
```
> git commit -a -m “Fixed magic8.py file by importing the proper required library”
> git push --set-upstream origin fix-magic8
```
- Now that the problem is fixed in your branch, its time to create a pull request.
- You can do that using the `gh pr create` command in the terminal.
Follow the prompts and add the proper title and description for the pull request. Mention the id of the issue in the description following #[id] format so that GitHub automatically links the pull request to the issue. The following is an example description:

This pull request imports the random library in magic8.py. Once merged, this resolves #1.
-
2. Assuming that your pull request is good to go, you can merge your pull request using the following GitHub CLI command:
```
gh pr merge
```

# GitHub Actions & Automated Testing
**Introduction**
* You might have developed a code which works perfectly on your local computer but did not well in production? Or have you ever worked in a team where everyone promised the final version would work fine but ended up erroring? This is called the **_“works on my machine”_** syndrome in software development.

Now imagine we could configure your GitHub repository to automatically run tests to verify the functionality of the codebase after each code change. Well… we can, using GitHub Actions!



