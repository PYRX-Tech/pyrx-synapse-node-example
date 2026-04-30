import 'dotenv/config';
import { Synapse } from '@pyrx/synapse';
const synapse = new Synapse({ baseUrl: process.env.SYNAPSE_API_URL || "https://synapse-api.pyrx.tech", apiKey: process.env.SYNAPSE_API_KEY!, workspaceId: process.env.SYNAPSE_WORKSPACE_ID! });

const preview = await synapse.templates.preview('welcome-email', { attributes: { first_name: 'Jane', plan: 'growth' } });
console.log('Preview HTML:', preview.html);
console.log('Preview subject:', preview.subject);
