module.exports = {
  apps: [
    {
      name: "tecnera-web",
      cwd: __dirname,
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
      },
      autorestart: true,
    },
  ],
};
