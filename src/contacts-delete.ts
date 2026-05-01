import 'dotenv/config';
import { Synapse } from '@pyrx/synapse';
const synapse = new Synapse({ baseUrl: process.env.SYNAPSE_API_URL || "https://synapse-api.pyrx.tech", apiKey: process.env.SYNAPSE_API_KEY!, workspaceId: process.env.SYNAPSE_WORKSPACE_ID! });

// Ensure contact exists
await synapse.identify({ externalId: 'sdk_delete_test', email: 'delete@example.com' });
await synapse.contacts.delete('sdk_delete_test');
console.log('Contact deleted');
