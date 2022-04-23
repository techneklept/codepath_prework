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

![](https://s10.gifyu.com/images/full-sequence-first-half.gif)

Full winning sequence (with Congratulations prompt), second half:

![](https://s10.gifyu.com/images/full-sequence-second-half.gif)

Three wrong guesses, with prompts from browser:

![](https://s10.gifyu.com/images/3-mistakes.gif)

Randomly generated sequences:

![](https://s10.gifyu.com/images/randomly-generated-sequence.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

    • Using opacity property for h1 and p element backgrounds - (https://www.w3schools.com/cssref/css3_pr_opacity.asp)

    • Creating an array of random integers for randomizing order of the game's pattern - (https://stackoverflow.com/questions/5836833/create-an-array-with-random-values)

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

What makes web development of this nature enjoyable and worthwhile is the instant feedback developers get when coding and making changes to the html/css/js files. Changes to the code are rendered visually and made immediately apparent. Couple this with the informative resource that was provided to us made the overall experience of coding up the base requirements straightforward and without much confusion.

When it came time to implement some of the optional features, I was unfamiliar with how to do so and found it initially challenging. I am inexperienced with the javascript language so I didn't quite know how to implement the randomized sequence feature of the program. After searching on Stack Overflow for a workable solution, I was able to make sense of generating an array of random integers and was able to create a function that randomized the sequence for the game. Another challenge was implementing the feature that sped up the sequence of notes after each pass. What helped was understanding the flow of the program and the sequence of function calls. With this knowledge, I was able to debug the program so that I knew at what line of the program to decrement the length of the tone (and by how much). This approach served me well when I implemented the feature that allowed users to have 2 mistakes before terminating the game on the third mistake. 


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

One question that I had regarding web development is how sound and tones are generated. The function that played the sequence of tones and what frequencies seemed to be a black box and I didn't at all understand how it worked. I also wondered about the quality of the tone, which seemed buzzy and metallic for lack of better terms. How does one change the timbre through code?  This seems to be a rather interesting question and something that piqued my curiousity to dive deeper into sound generation. 

Another question that I had regarded deployment. Since glitch does most of the work of hosting the page, I wonder about how I would go about deploying this webapp from scratch. How do I host and serve this for others to try? If, for some odd reason, this webapp became viral and I had exponentially many users trying it, how do I scale it so that millions of users are able to enjoy this game without disruption or error?


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

Had I had more hours to work on this project, I would have definitely taken some time to make it visually appealing. I would have wanted to create a way to provide positive feedback to users if they had gotten the correct order. For example, I think it would be worthwhile to include a thumbs-up image or an image of a checkmark within the button if it was selected correctly. Likewise, if the wrong button was selected, I would have implemented a thumbs-down or an image of a red X to show visually that an error was made. 

In addition, I would have loved to tinker with the sound component of the game on a deeper level. While I was able to change the frequency of the pitch, I wanted to learn more about how the tone and timbre of the sound was generated and wondered how I would go about changing it. Rather than that buzzy, synthy sound, what if I wanted something more airy like a flute, or more reedy like a clarinet? I think it would've been interesting to see how such sounds are formulated but is definitely beyond the scope of this. 



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
    limitations under the License.sdf
