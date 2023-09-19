/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    compiler: {
        styledComponents: {
            ssr: true,
            displayName: true,
            topLevelImportPaths: [],
            meaninglessFileNames: ["index"],
            cssProp: true,
            namespace: "",
            fileName: true,
            minify: false,
            transpileTemplateLiterals: false,
            pure: false
        }
    }
}

module.exports = nextConfig
