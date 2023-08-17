# Elm + Capacitor

This is a small bootstrap / starter pack for building mobile apps using Elm and Capacitor.

1. Requirements
2. Setup
3. Development - Elm
4. Development - JS, CSS, etc.
6. Build
7. Some Internal Details

## 1. Requirements

You'll need these:

- Node (any latest) and `yarn`.
- Android Studio and Android SDK.
- After installing Android Studio and Android SDK, add a system image that has a `Target` of `Android 11.0` (as Capacitor seems to work with that version well).

## 2. Setup

- Clone this repo locally.
- Then run `yarn install` in the folder.
- Run a `yarn build` to compile the project once.

If you have Android Studio and Android SDK and a device setup, you can now view / run the project in an emulator by:

- running `yarn cap open android`,
- and then running the project in Android Studio.

## 3. Development - Elm

- All Elm source files are in `src/*.elm`. 
- When you make changes and want to test them, just run `yarn build` or `yarn dev-build` (debug mode).

## 4. Development - JS, CSS etc.

### JS

- All custom JS is in `public/js/index.js`.
- You can add more JS files there.
- All Capacitor-related code would ideally go here.
- Remember to include those files in your `public/index.html` via `<script>` tags.
- If you use `import` statements, make sure you add `type="module"`. Eg. `<script src="./js/custom.js" type="module"></script>`.

### CSS

- Add all custom CSS files in `public/css`.
- The project uses Tailwind so you can also use Tailwind classes anywhere in your `Elm` files and in `public/index.html` along with using them via `@apply` in `index.css` and elsewhere.

*Anytime you make changes to JS, CSS, HTML or Elm files, make sure to run `yarn build` or `yarn dev-build`. There is no HMR. You can setup a custom `nodemon` / watcher to have a pseudo-HMR experience.*

## 5. Build

- If you want to build the project for production:

```bash
> yarn build
```

- If you'd like Elm's `Debug` to be allowed:

```bash
> yarn dev-build
```

## 7. Some Internal Details

How stuff works:

- The project files are spread across these folders/files:

```
public
├── css
│   ├── index.css <-- custom CSS goes here. You can also add more CSS files.
├── index.html <-- the main entry-point for the project.
└── js
    └── index.js <-- all custom JS goes here. You can also add more JS files but just make sure to include them in `index.html`
src
└── Main.elm <-- all Elm code goes here. You can add more Elm files inside `src` folder.
```

- The build (dev or prod) basically has to take care of building Elm files into a `js` file, then compiling all CSS data into a single file, and finally adding them to the project.

- The moment you run `yarn dev-build` or `yarn build`, you'll notice that two new files get added into the `public` directory:

```
public
├── css
│   ├── index.css
│   └── style.css <-- auto-generated
├── index.html
└── js
    ├── elm.js <-- auto-generated
    └── index.js
```

- A modern browser can run/serve `index.html` as-is but since we're building this for a mobile WebView (Capacitor runs through that), we need to "transpile" the JS.

- Which is why this project uses `parcel`. One of the commands in `yarn build` bundles the project via `parcel build` and outputs the compiled project in a `web` folder.

- Then, `yarn cap sync` (part of `yarn build`) simply updates the project (Android/iOS) by copying over the contents of the `web` into the Android/iOS project.
