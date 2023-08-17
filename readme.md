# Elm + Capacitor

This is a small bootstrap / starter pack for building mobile apps using Elm and Capacitor.

1. Requirements
2. Setup
3. Development - Elm
4. Development - JS, CSS, etc.
6. Build

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
