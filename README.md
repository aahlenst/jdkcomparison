# JDK Comparison

This is the source code and data source for [JDK Comparison](https://jdkcomparison.com/). JDK Comparison aims to give you an overview of what JDKs are available and help you narrow your choices.

It is a non-goal to provide recommendations.

JDK Comparison uses [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/) and is hosted on [Cloudflare Pages](https://pages.cloudflare.com/).

## Contributing

Contributions are welcome. Please read the [contribution guide](CONTRIBUTING.md) for further information.

## License

The source code is licensed under the [GNU General Public License, version 2 only](https://spdx.org/licenses/GPL-2.0-only.html).

The data (in the folder [data/](data)) is licensed under the [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/).

## Development

### Prerequisites

-   Linux or macOS
-   [Node.js](https://nodejs.org/) LTS with npm
-   [Firefox](https://www.mozilla.org/firefox/)

### Development Mode

```shell
npm run dev
```

starts the Next.js development server on port 3000 and provides a live preview of your changes. By default, test data is displayed that can be found in [testdata/](testdata). To change the data source being used, edit the variable `DATA_SOURCE` in the respective `.env` file.

### Run the Tests

```shell
./pretest.sh
```

runs all checks and tests. If you want to run individual checks and tests, run `npm run` to get a list of available commands.

### Logo, Favicon

The logo and the favicon can be found in `logo.sketch` (requires [Sketch](https://www.sketch.com/) to edit it).

To generate the favicon in ICO format, export the favicon as PNG with a size of 256 x 256 px.
Then, use ImageMagick to convert it to ICO:

```shell
magick convert favicon.png -define icon:auto-resize=256,128,48,32,16 favicon.ico
```
