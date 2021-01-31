# My Groupme Bot Imgflip

[![NPM version](https://img.shields.io/npm/v/my-groupme-bot-imgflip.svg)](https://www.npmjs.com/package/my-groupme-bot-imgflip) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> A my-groupme-bot plugin which integrates with Imgflip for meme generation from user input.

## Install

Install with [npm](https://www.npmjs.com):

```sh
$ npm i my-groupme-bot-imgflip --save
```

## Usage

Example:
```
User: /pigeon
Bot: Usage: /pigeon guy, butterfly, is this a pigeon?
User: /pigeon groupme bot programmers, a module for a memebot, is this the greatest module ever?
Bot:
```
![Example](example.jpeg)

Code:
```js
const bot = require('my-groupme-bot')
const imgflip = require('my-groupme-bot-imgflip')

bot
  .use(imgflip({
    imgflip: {
      username: 'YOUR_IMGFLIP_USERNAME',
      password: 'YOUR_IMGFLIP_PASSWORD'
    },
    groupme: {
      accessToken: 'YOUR_GROUPME_ACCESS_TOKEN'
    }
  }))
  .config('YOUR_BOT_ID')
  .imgflip(100777631, 'pigeon', 'Is this a pigeon?', ['guy', 'butterfly', 'is this a pigeon?'], a => a.map(i => i.toUpperCase()))
  .listen(process.env.PORT)
```

## Methods

`require('my-groupme-bot-imgflip')(opts) -> MyGroupMeBotPlugin`

Returns a [my-groupme-bot](https://www.npmjs.com/package/my-groupme-bot) plugin configured with the given options.

Parameters:
 * `opts` :
   ```
   {
     imgflip: {
       username: string,
       password: string
     },
     groupme: {
       accessToken: string
     }
   }
   ```
   An options object containing your [Imgflip](https://imgflip.com) username and password, and your [GroupMe](https://dev.groupme.com) access token.
 
`bot.imgflip(id, name, desc, example, transform) -> bot`

Adds a command to the bot which allows users to fill out the meme with the specified id.

Parameters:
 * `id` : `number` - The id of the meme to fill out. The top 100 memes can be found at this [link](https://api.imgflip.com/popular_meme_ids).
 * `name` : `string` - The name to use for the command.
 * `description` : `string | undefined | null` - A description for the command. Will be displayed by the help command if the `help` function is called on the bot. Pass `null` or `undefined` for no description.
 * `example` : `Array<string>` - An array of strings which indicates the number of arguments expected for the meme as well as indicating which argument is for which label of the image. The array is joined by commas for displaying the usage as shown in the example.
 * `transform` : `(args : Array<string>) -> Array<string>` (Optional) - A function which maps the arguments given by the user to be used for the labeling the meme. The example above capitalizes the provided strings. The returned array can be of a different length than the original array.

## Related

* [my-groupme-bot](https://www.npmjs.com/package/my-groupme-bot)
* [imgflip](https://www.npmjs.com/package/imgflip)

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/TomerAberbach/my-groupme-bot-imgflip/issues/new).

## Running Tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Author

**Tomer Aberbach**

* [Github](https://github.com/TomerAberbach)
* [NPM](https://www.npmjs.com/~tomeraberbach)
* [LinkedIn](https://www.linkedin.com/in/tomer-a)
* [Website](https://tomeraberba.ch)

## License

[MIT](https://github.com/TomerAberbach/my-groupme-bot-imgflip/blob/main/license) © [Tomer Aberbach](https://github.com/TomerAberbach)
