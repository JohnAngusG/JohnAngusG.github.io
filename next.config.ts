// next.config.js
const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  // trim off `<repo-name>/` from repo url
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

const nextConfig = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
