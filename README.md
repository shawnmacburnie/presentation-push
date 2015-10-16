presentation-push is a node CLI tool that will push code behind the scene to a Github repo so you don't have to worry about it while you present.

## Getting started
To run this all you need to do is run
```
npm i -g presentation-push
```


## Usage
NOTE: You must call this CLI from a working github repo, and you must have also set your upstream to where you want it to go so that the `git push` commands works.
```
presentation-push type duration commit
```

### default usage:
Default values: 
type = time
duration = 5
commit = "presentation-pusher updated repo."
```
presentation-push
```

### Setting time (in minutes).
```
presentation-push time 5
```

### Setting Commit Message (must also set time)
```
presentation-push time 5 "Updated working presentation."
```



## Coming soon

instead of just having a timed commit for the presentation, The feature would allow for watching file changes, so Whenever you save a file it will commit all changes so everyone has working copy as you save.

