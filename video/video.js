'use strict'
/**
 * file: video.js
 * purpose: display and control video via Js

 Note the shorthand selector via the tag's id
 **/
vid.src = 'https://ia800300.us.archive.org/3/items/bb_snow_white/bb_snow_white_512kb.mp4';
vid.style.width = '100%'; // ye olde mobile first trick
vid.style.maxWidth = '800px'; // limit the trick above
vid.style.height = 'auto';
// vid.play(); // ... or better: don't do this!
vid.controls = true;
