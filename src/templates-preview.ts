import 'dotenv/config';
import { Synapse } from '@pyrx/synapse';
const synapse = new Synapse({ baseUrl: process.env.SYNAPSE_API_URL || "https://synapse-api.pyrx.tech", apiKey: process.env.SYNAPSE_API_KEY!, workspaceId: process.env.SYNAPSE_WORKSPACE_ID! });

const preview = await synapse.templates.preview('welcome-email', {
  contact: { email: 'jane@example.com', first_name: 'Jane', properties: { plan: 'growth' } },
});
console.log('Preview subject:', preview.subject);
console.log('Preview HTML:', preview.html?.substring(0, 200));
