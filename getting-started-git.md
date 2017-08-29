let's say now you've made changes to the codebase that you think are valuable.

Now you're going to want to save them, and to save them to the cloud somewhere so that in case you decide to throw your computer out the window, your code is not at risk (which is to say, code is more valuable than the computer it is written on, similar to paper and math).

let's walk through using git to accomplish this (you may have already done some of the steps inside other walkthroughs. Just understand what each command does before running it, then you'll make the right decision of "if I actually want to run this command")


```
cd ~/code
mkdir awesome-project
cd awesome-project

git init
```


ok, we went to our code directory, made a project directory,
went into it, and initialized a git repo in it.

git repository is what a directory of tracked files is called

(you'll recognize git repos by seeing .git directory at the root)

also, to check if that worked

```git status```
 will tell you if you're in a git repo or not (you should be!)



so the project directory now has git tracking on it. great - let's write some code (here I'm writing a .gitignore file)

```emacs .gitignore```

now what's going on with our repo?

```git status```

git tells us we created to the .gitignore file

so now we want to ```add``` that file to tracking

```git add .```

now what's up with our repo?

```git status```

git tells us we have a tracked file staged for commit

```commit``` is saving a snapshot of all our tracked files

```git commit -am "made a gitignore"```

and gets a message to explain itself

now what's the git status?

```git status```

it tells us our working directory is clean

---

great, we saved our code

but it's still on our computer, which we still may throw out the window

so let's get it to github

```
go to github.com, open an account if you have to, and make a new repository

name the repo something responsible like "react-learning-project" or "hacking-donald-trump-to-cause-his-downfall"
```

now that you have a github repo available on the cloud

```git remote add origin https://github.com/${github_username}/${repo_name}.git```

the command is one of those presented to you by github on their new repo page

now we can see that worked

```git remote -v```

which should tell us we have a fetch/push remote called `origin` available at the url we put

let's push our code there

```git push origin master```

this pushed the master branch (which is the default branch), to origin (the remote)

great

now we're done.

more git commands available in the git cheat sheet (which I should turn into walkthroughs for each command eh?)
