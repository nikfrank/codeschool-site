to get a javascript project started

0) install node (google it), and a text editor (emacs / atom)

0) b) if you are on windows, partition your harddrive and install ubuntu. If you don't have the time for that, install git and git-bash (google it) and pin git-bash to the taskbar

0) c) install git

---

open up a shell (ubuntu: C-M-t, mac: ./terminal, windows: git-bash)

you will be in your home directory (called ~ and noted at the beginning of the line)

```cd ~```

should do nothing, because you were already in ~ when you just tried to cd into it


```mkdir code```

now we have a directory for our code


```cd code```
```mkdir mastermind```
```cd mastermind```
```git init```
```emacs .gitignore```
write in files patterns to ignore per text editor (emacs: *~, ...)

```git add .gitignore```
```git commit -am "starting project mastermind```

is how we start an empty javascript project

however, we're going to start a react app (front end javascript) in this course, so we do

```cd code```
```npm i -g create-react-app```
i: install
-g: global

if permissions failed
```sudo npm i -g create-react-app```


```create-react-app mastermind```
```cd mastermind```
```yarn```

if you don't have yarn (command not found error on last input)

```npm i -g yarn```
(same command, same permissions fix)


then to start the app

```npm start```

then browse to localhost:3000 in a browser

---

if you want to destroy the entire project
```cd ~/code```
```rm -rf mastermind```


this will simply delete the entire directory, so you can start over if you want


---
---


now you can open you favourite text editor
```emacs .```

or from your GUI svp

and edit some code
