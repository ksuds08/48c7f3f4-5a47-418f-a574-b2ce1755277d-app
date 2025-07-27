interface TemplateRequest {
  industry: string;
  role: string;
  experienceLevel: string;
}

interface TemplateResponse {
  template: string;
}

export async function TemplateGeneratorBackendHandler(req: Request): Promise<Response> {
  try {
    if (req.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Only POST requests are allowed.' }), { status: 405, headers: { 'Content-Type': 'application/json' } });
    }

    const contentType = req.headers.get('Content-Type') || '';
    if (!contentType.includes('application/json')) {
      return new Response(JSON.stringify({ error: 'Invalid content type, expected application/json.' }), { status: 415, headers: { 'Content-Type': 'application/json' } });
    }

    const requestData: TemplateRequest = await req.json();

    if (!requestData.industry || !requestData.role || !requestData.experienceLevel) {
      return new Response(JSON.stringify({ error: 'Missing required fields: industry, role, experienceLevel.' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }

    // Placeholder for AI template generation logic
    const template = `Generated template for ${requestData.role} in ${requestData.industry} with ${requestData.experienceLevel} experience.`;

    const response: TemplateResponse = { template };

    return new Response(JSON.stringify(response), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal server error.' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}

export const onRequest = TemplateGeneratorBackendHandler;
