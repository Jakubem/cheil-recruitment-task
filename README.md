## Cheil recruitment task

## About:
This app was written in [Vue.js](https://vuejs.org/) framework.
It's made out of reusable, self-contained [Vue components](https://vuejs.org/v2/guide/single-file-components.html).
Whole app is bundled by [webpack](https://webpack.js.org/) to static `dist` folder, that can be easily hostet on basicly any server. Production code is automatically minified and optimized. <br>For images, this site is using Google's [webp](https://developers.google.com/speed/webp/) format. Webp's are much more lightweight than standard formats, however they are not supported by most browsers, so in that case fallback png's are send to the client.
<br>This app is also fully functional [PWA](https://developers.google.com/web/progressive-web-apps/). It means that you can add this site to homescreen of your mobile device, and use it almost as native app. It also register [service worker](https://developers.google.com/web/fundamentals/primers/service-workers/) for cache management, so if you once open the app, you can use it offline.
<br>
For live demo you can go to [cheil-recruitment-task.ranyboskie.pl](https://cheil-recruitment-task.ranyboskie.pl)

### How to use:
> make sure you have `npm` 6.4.0 and `node` > 9.0.0 installed <br>
> clone this repository and install dependencies with `npm i` <br>
> run `npm run dev` to compile frontend and start local dev server <br>
> run `npm run prod` to compile production bundle to `dist` folder <br>

### Folder structure:
> `src` - all source files <br>
> `src/css` - scss styles <br>
> `src/css/style.scss` - global styles <br>
> `src/js` - vue app and main.js entry point <br>
> `src/js/components` - reusable vue components <br>
> `src/images` - static png and webp images <br>
> `views` - template for html-webpack-plugin <br>
> `dist` - compiled production bundle <br>
> `webpack` - whole webpack config <br>

### Additional notes:
- although original design suggest to use `#99999` color for fonts in 'Who we are' section, it does not comply with [WCAG 2.0](https://www.w3.org/TR/WCAG20/) AAA Color Contrast standard, so in my implementation i've used `#575757` instead.