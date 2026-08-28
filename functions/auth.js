// Step 1 of the Decap CMS GitHub OAuth flow: send the editor to GitHub to authorize.
// Paired with functions/callback.js. Requires GITHUB_CLIENT_ID / GITHUB_CLIENT_SECRET
// set as environment variables on the Cloudflare Pages project.
export async function onRequestGet({ request, env }) {
  const url = new URL(request.url)
  const redirectUri = `${url.origin}/callback`
  const state = crypto.randomUUID()

  const authorizeUrl = new URL('https://github.com/login/oauth/authorize')
  authorizeUrl.searchParams.set('client_id', env.GITHUB_CLIENT_ID)
  authorizeUrl.searchParams.set('redirect_uri', redirectUri)
  authorizeUrl.searchParams.set('scope', 'repo,user')
  authorizeUrl.searchParams.set('state', state)

  return new Response(null, {
    status: 302,
    headers: {
      Location: authorizeUrl.toString(),
      'Set-Cookie': `oauth_state=${state}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=300`,
    },
  })
}
