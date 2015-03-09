## JS Bug: Synced Input Fields

## Demo bug:
1. Nothing changes when I click the 'Stop Sync' button.

## Bugs:
1. The input fields don't stop syncing when a user clicks the 'Stop Sync' button. It only partially works when a user clicks the button, then presses a key on the keyboard.

2. Both input fields should stop synchronizing input when a user clicks the 'Stop Sync' button, but it only seems to stop syncing the first input field. The second filed still overwrites the first.
3. When 'Save Sync' is pressed, it shows "[object Object] synced with [object Object]" instead of the values of each saved input.

### Tips
* Read the code and note any methods you don't know or understand. Look them up.
* Use `debugger` to step through different parts of the code.
* Note naming patterns and any consistencies or inconsistencies
* Read the code comments to understand the intention of functions.

## Style
* Add custom CSS to `src/sass/`

## Scripts
* Add custom JavaScript in `src/js/`

Everything is compiled into the `dist` directory.

## Server
1. In the terminal, `cd` into the puck directory
1. Run `npm run watch` to start a server and build assets.
1. Visit localhost:8000 to see it in action.

## Live Reloading

Install the [Chrome extension](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei/related). This will connect to the default port that the `node-livereload` module expects.

> If we shadows have offended,  
> Think but this, and all is mended,  
> That you have but slumber'd here  
> While these visions did appear.  
> And this weak and idle theme,  
> No more yielding but a dream,  
> Gentles, do not reprehend:  
> If you pardon, we will mend:  
> And, as I am an honest Puck,  
> If we have unearned luck  
> Now to 'scape the serpent's tongue,  
> We will make amends ere long;  
> Else the Puck a liar call;  
> So, good night unto you all.  
> Give me your hands, if we be friends,  
> And Robin shall restore amends.  
