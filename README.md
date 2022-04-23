# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's Future Tech Launchpad program.

Submitted by: Virgilio Viernes

Time spent: 6.5 hours spent in total

Link to project: https://sparkly-spurious-ground.glitch.me/

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

Full winning sequence, first half:

![](https://im2.ezgif.com/tmp/ezgif-2-502a8bf505.gif)

Full winning sequence (with Congratulations prompt), second half:

![](https://im2.ezgif.com/tmp/ezgif-2-df57269b72.gif)

Three wrong guesses, with prompts from browser:

![](https://im2.ezgif.com/tmp/ezgif-2-23f973be21.gif)

Randomly generated sequences:

![](https://im2.ezgif.com/tmp/ezgif-2-30abc472ce.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

    • Using opacity property for h1 and p element backgrounds - (https://www.w3schools.com/cssref/css3_pr_opacity.asp)
    • Creating an array of random integers for randomizing order of the game's pattern - (https://stackoverflow.com/questions/5836833/create-an-array-with-random-values)

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

What makes web development of this nature enjoyable and worthwhile is the instant feedback developers get when coding and making changes to the html/css/js files. Changes to the code are rendered visually and made immediately apparent. Couple this with the informative resource that was provided to us made the overall experience of coding up the base requirements straightforward and without much confusion.

When it came time to implement some of the optional features, I was unfamiliar with how to do so and found it initially challenging. I am inexperienced with the javascript language so I didn't quite know how to implement the randomized sequence feature of the program. After searching on Stack Overflow for a workable solution, I was able to make sense of generating an array of random integers and was able to create a function that randomized the sequence for the game. Another challenge was implementing the feature that sped up the sequence of notes after each pass. What helped was understanding the flow of the program and the sequence of function calls. With this knowledge, I was able to debug the program so that I knew at what line of the program to decrement the length of the tone (and by how much). This approach served me well when I implemented the feature that allowed users to have 2 mistakes before terminating the game on the third mistake. 


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[YOUR ANSWER HERE]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[YOUR ANSWER HERE]



## Interview Recording URL Link

[My 5-minute Interview Recording](https://youtu.be/7dKbu76X8-k)


## License

    Copyright Virgilio Viernes

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
