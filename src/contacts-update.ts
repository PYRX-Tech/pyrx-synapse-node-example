import 'dotenv/config';
import { Synapse } from '@pyrx/synapse';
const synapse = new Synapse({ baseUrl: process.env.SYNAPSE_API_URL || "https://synapse-api.pyrx.tech", apiKey: process.env.SYNAPSE_API_KEY!, workspaceId: process.env.SYNAPSE_WORKSPACE_ID! });

// Ensure contact exists
await synapse.identify({ externalId: 'sdk_update_test', email: 'update@example.com' });
const updated = await synapse.contacts.update('sdk_update_test', { properties: { plan: 'growth' }, tags: ['upgraded'] });
console.log('Updated:', JSON.stringify(updated, null, 2));
