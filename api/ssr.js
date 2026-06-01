import { Readable } from "node:stream";

let handler;
async function getHandler() {
  if (!handler) {
    const mod = await import("../dist/server/server.js");
    handler = mod.default;
  }
  return handler;
}

export default async function (req, res) {
  const h = await getHandler();
  const baseUrl = `https://${req.headers.host}`;
  const url = new URL(req.url, baseUrl);

  const bodyChunks = [];
  for await (const chunk of req) bodyChunks.push(chunk);
  const body = bodyChunks.length ? Buffer.concat(bodyChunks) : null;

  const request = new Request(url.toString(), {
    method: req.method,
    headers: req.headers,
    body: body && body.length ? body : undefined,
  });

  const response = await h.fetch(request);

  res.statusCode = response.status;
  response.headers.forEach((value, key) => res.setHeader(key, value));

  if (response.body) {
    Readable.fromWeb(response.body).pipe(res);
  } else {
    res.end();
  }
}
