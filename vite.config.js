import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  server: {
    port: 5173,
    host: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  plugins: [
    {
      name: 'apk-mime-type-handler',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && req.url.includes('.apk')) {
            res.setHeader('Content-Type', 'application/vnd.android.package-archive');
            res.setHeader('Content-Disposition', 'attachment; filename="ArrowGOPlus.apk"');
          }
          next();
        });
      }
    }
  ]
});
