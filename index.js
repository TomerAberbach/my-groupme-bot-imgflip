const imgflip = require('imgflip')
const request = require('request')

/**
 * Returns a plugin for the my-groupme-bot module.
 * @param {{
 *   imgflip: {
 *     username: string,
 *     password: string
 *   },
 *   groupme: {
 *     accessToken: string
 *   }
 * }} opts - The options for the plugin.
 * @return {{name: string, fn: function(id: number, name: string, desc?: string, example: Array<string>, transform?: function(args: Array<string>): Array<string>)}}
 */
module.exports = opts => {
  imgflip.credentials(opts.imgflip)
  const accessToken = opts.groupme.accessToken

  return {
    name: 'imgflip',
    fn: function (id, name, desc, example, transform) {
      this.command(name, desc, ',', (message, args) => {
        if (args.length === example.length) {
          imgflip.meme(id, ...(typeof transform === 'function' ? transform(args) : args)).then(url =>
            request.get(url).pipe(request.post('https://image.groupme.com/pictures',
              {
                headers: {
                  'X-Access-Token': accessToken,
                  'Content-Type': 'image/jpeg'
                },
                json: true
              },
              (err, data) => this.send(err ? `Something went wrong... (${err.message})` : '', err ? undefined : data['body']['payload']['url'])
            ))
          )
        } else {
          this.send(`Usage: /${name} ${example.join(', ')}`)
        }
      })
    }
  }
}
