// Auto-generated index.ts for Pages Functions routing
import type { Request } from 'itty-router';

import { TemplateGeneratorBackendHandler } from './TemplateGeneratorBackend';
import { AIEngineHandler } from './AIEngine';
import { TemplateLibraryHandler } from './TemplateLibrary';
import { SubscriptionManagementHandler } from './SubscriptionManagement';

export async function onRequest({ request }: { request: Request }): Promise<Response> {
  const url = new URL(request.url);
  const path = url.pathname;

  if (path === "/api/TemplateGeneratorBackend") return TemplateGeneratorBackendHandler(request);
  if (path === "/api/AIEngine") return AIEngineHandler(request);
  if (path === "/api/TemplateLibrary") return TemplateLibraryHandler(request);
  if (path === "/api/SubscriptionManagement") return SubscriptionManagementHandler(request);

  return new Response("Not found", { status: 404 });
}
