import { serve } from "https://deno.land/std@0.178.0/http/server.ts";

const port = 8080;

const handler = (request: Request): Response => {
  const body = `Hello Deno World! Your user-agent is ${
    request.headers.get("user-agent")
  }`;

  return new Response(body, { status: 200 });
};

console.log(`HTTP webserver running. Access it at: http://localhost:8080/`);
await serve(handler, { port });
