## Cheil recruitment task

### How to use:
> clone this repository and install dependencies with `npm i` <br>
> run `npm run dev` to compile frontend and start local dev server <br>
> run `npm run prod` to compile production bundle to `dist` folder <br>

### Folder structure:
> `src` - all source files <br>
> `src/css` - scss styles <br>
> `src/js` - vue app and main.js entry point <br>
> `src/js/components` - reusable vue components <br>
> `src/images` - static png and webp images <br>
> `dist` - compiled production bundle <br>
> `webpack` - whole webpack config <br>

### Additional notes:
- although original design suggest to use `#99999` color for fonts in 'Who we are' section, it does not comply with [WCAG 2.0](https://www.w3.org/TR/WCAG20/) AAA Color Contrast standard, so in my implementation i've used `#575757` instead.