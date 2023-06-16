/**
 * Generates a Route
 *
 * @param server
 * @param url
 * @param method
 * @param handler
 */

export function generateRoute(server, url, method, handler) {
  console.log(`API REQUEST: ${url}`);

  if (method === "POST") {
    server.post(url, (req, res) => {
      res.json(handler(req.body));
    });
  }
}
