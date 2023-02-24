FROM denoland/deno:latest

WORKDIR /app

# --watch を使いたいけど M1 Mac で動かない
CMD sh -c "deno cache server.ts && deno run --allow-net server.ts"