const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
/** @type {import('next').NextConfig} */
const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER)
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: "omar",
        mongodb_password: "omar",
        mongodb_clustername: "cluster0",
        monogodb_database: "myFirstDatabase",
      },
    };
  return {
    reactStrictMode: true,
    env: {
      mongodb_username: "omar",
      mongodb_password: "omar",
      mongodb_clustername: "cluster0",
      monogodb_database: "myFirstDatabase",
    },
  };
};

module.exports = nextConfig;
