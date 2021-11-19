# Elm + Capacitor

This is a small bootstrap / starter pack for building mobile apps using Elm and Capacitor.

Step 0: Run `yarn`!

**writing Elm code**

Write all your Elm code and put them in files inside the /src folder. You can have sub-folders and whatnot, but the `Main.elm` file should be in `/src` top level.

**writing custom JS / Capacitor glue code**

You might have to write a bunch of custom JS and Capacitor-specific JS code. Do these in the `/src/js` folder. Whatever you do, these have to be ultimately either imported and used in the `/src/js/index.js` file or make sure you include those files in the `./src/index.html` file as `<script type="module" src="....">`. Don't forget the `type="module"` thing. Otherwise, you cant compile because of ES6 thingy.

**CSS and styling the app**

All styles are in the `/src/css` folder. I use postcss to compile and compress all CSS into a single file. To do this efficiently, there is an `/src/css/index.css` file. This is the entry-point for postcss - meaning, you can write css in as many files as you want but make sure all of that gets imported in `index.css`. The final output is the `src/css/app.css` file. This file gets called in the `/src/index.html` file.

**Do not touch/modify these files**

These are generated files. It's not that you are prohibited from touching them... it's just that minification makes it hard to know what you're doing if you edit them. So, better don't.

```
/src/js/main.js
/src/css/app.css
```

**running a dev build/deploy**

Because this is a mobile app starter pack, there is no hot-reload. There's just "build and deploy" everytime you make changes. (That is, if you want to view the changes on an emulator or a phone).

Dev build and deploy/run: `yarn dev-dep-android` or `yarn dev-dep-ios`

(consult Capacitor docs for making sure you have all the capacitor-specific things setup prior to deploying to a device/emulator)