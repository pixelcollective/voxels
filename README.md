# Voxels

"Make blocks," they said. "It'll be fun," they said.

[![buddy pipeline](https://app.buddy.works/kellymears/voxels/pipelines/pipeline/163791/badge.svg?token=cf2f71b8ebfcd126c19a30872316d61faefcc66df3489814198c6180b7cca03d "buddy pipeline")](https://app.buddy.works/kellymears/voxels/pipelines/pipeline/163791)

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/9673e9cf624049c4afb2a9c6d413f550)](https://www.codacy.com/app/pixelcollective/voxels?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=pixelcollective/voxels&amp;utm_campaign=Badge_Grade)

[![Waffle.io - Columns and their card count](https://badge.waffle.io/pixelcollective/voxels.svg?columns=all)](https://waffle.io/pixelcollective/voxels)

## Install

1. `git clone git@github.com/pixelcollective/voxels` in plugins dir.
2. Edit `wpackio.server.js` with your local host and proxy.
3. Not using wp-content ? set paths in `wpackio.project.js` & `wpackio.server.js`.
4. `composer install`
5. `yarn`
6. `yarn start` (Assets are hotloaded without saving to filesystem)
7. `yarn build` (Assets outputted to `./assets`; called from `./wpackio.php`)
8. `yarn package` (Assets built and saved to .zip in `./package`)

## Structure

```(txt)
/voxels   # → Root of your Sage based theme
├── assets/               # → Packed JS/CSS
├── includes/             # → PHP Classes, etc.
├── languages/            # → i18n
├── node_modules/         # → Node.js packages (never edit)
├── src                   # → Blocks
│   ├── blocks/           # → Block JS
│   │   ├── button/       # → Button block
│   │   ├── card /        # → Card block
│   │   ├── components/   # → Functionality for general block imports
│   │   ├── header/       # → Fancy header block
│   │   ├── _common.scss  # → Baseline stylesheet
│   │   ├── _vars.scss    # → Stylesheet settings and variables
│   │   ├── editor.js     # → JS Entrypoint
│   │   ├── editor.scss   # → SCSS Main for wp-admin
│   │   ├── icons.js      # → svg icons
│   │   ├── public.js     # → JS Entrypoint for public
│   │   ├── public.scss   # → SCSS Main for public
│   │   └─── wp_imports.js # → WordPress API wrapper
│   └── client/           # → Public scripts (load React on frontend, etc.)
├── vendor/               # → Composer packages (never edit)
├── composer.json         # → Composer dependencies (never edit)
├── composer.lock         # → Composer lockfile (never edit)
├── index.php             # → // silence is golden
├── LICENSE               # → MIT License
├── package.json          # → npm packages
├── postcss.config.js     # → postcss configuration
├── uninstall.php         # → Plugin uninstaller
├── README.md             # → ** YOU ARE HERE **
├── voxels.php            # → Plugin main
├── wpackio.php           # → PHP style and script loader (dev and prod)
├── wpackio.project.js    # → wpack.io configuration
├── wpackio.server.js     # → wpack.io dev server configuration
└── yarn.lock             # → yarn lockfile (never edit)
```

## Notes

If you want to use react on the public site you should utilize the `./src/public/` dir for your scripts. In that case don't bother adding the React package; you an just tap into `wp` which is identical and ships with WordPress. I overrode the babel configuration in `wpackio.project.js` to load the `wp` object into the hotloaded environment so you should be ready to just get crackin'. It is compatible with full-on JSX if you'd like to go whole hog.

## Credits

* [wpack.io](https://wpack.io/)
* [WordPress Plugin Boilerplate](https://github.com/DevinVinson/WordPress-Plugin-Boilerplate)
* [Rich Tabor's exceptional smithery. Serves as better documentation than WordPress' official docs.](https://richtabor.com)