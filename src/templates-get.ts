import 'dotenv/config';
import { Synapse } from '@pyrx/synapse';
const synapse = new Synapse({ baseUrl: process.env.SYNAPSE_API_URL || "https://synapse-api.pyrx.tech", apiKey: process.env.SYNAPSE_API_KEY!, workspaceId: process.env.SYNAPSE_WORKSPACE_ID! });

try { await synapse.templates.create({ slug: 'sdk-get-test', name: 'Get Test', subject: 'Test', bodyHtml: '<p>Hi</p>', senderName: 'Test', fromEmail: 'test@example.com' }); } catch {}
const template = await synapse.templates.get('sdk-get-test');
console.log('Template:', JSON.stringify(template, null, 2));
try { await synapse.templates.delete('sdk-get-test'); } catch {}
