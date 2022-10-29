/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npx wrangler dev src/index.js` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npx wrangler publish src/index.js --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

// cloudflare worker get the url from the request
let JsonUser = [
	{
		"id": 1,
		"lenguage": "en",
		"bussy": false,
	},
	{
		"id": 2,
		"lenguage": "es",
		"bussy": true,
	},
]

addEventListener('fetch', event => {
	  event.respondWith(handleRequest(event.request))
})

handleRequest = async (request) => {
	  const url =  request.url; 
	  let getJson = url.split('/');
	  if (getJson.length == 4) {	
		JsonUser.push({
			"id": JsonUser.length + 1,
			"lenguage": getJson[3],
			"bussy": false,
		})

		for (let i = 0; i < JsonUser.length; i++) {
			if (JsonUser[i].bussy == false) {
				JsonUser[i].bussy = true;
				return new Response(JSON.stringify(JsonUser[i]), {
					status: 200,
					headers: {
						'content-type': 'application/json;charset=UTF-8',
					},
				})
			}
		}

	  }
	  if (getJson.length > 4) {
		
		
	  }
	  console.log("Json USER- > ", JsonUser[JsonUser.length-2]);
	  return new Response(url)
}


