import 'dotenv/config';
import { Synapse } from '@pyrx/synapse';
const synapse = new Synapse({ baseUrl: process.env.SYNAPSE_API_URL || "https://synapse-api.pyrx.tech", apiKey: process.env.SYNAPSE_API_KEY!, workspaceId: process.env.SYNAPSE_WORKSPACE_ID! });

try { await synapse.templates.create({ slug: 'sdk-preview-test', name: 'Preview Test', subject: 'Hi {the user\'s First Name}', bodyHtml: '<p>Hello {the user\'s First Name}</p>', senderName: 'Test', fromEmail: 'test@example.com' }); } catch {}
const preview = await synapse.templates.preview('sdk-preview-test', { contact: { email: 'jane@example.com', first_name: 'Jane' } });
console.log('Preview subject:', preview.subject);
console.log('Preview HTML:', preview.html?.substring(0, 200));
try { await synapse.templates.delete('sdk-preview-test'); } catch {}
