export async function onRequest(context) {
  const url = new URL(context.request.url);
  const target = new URL(url.pathname + url.search, "https://umami.2ii.net");
  return fetch(target.toString(), {
    method: context.request.method,
    headers: context.request.headers,
    body: context.request.body,
  });
}