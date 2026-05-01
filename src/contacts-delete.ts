import 'dotenv/config';
import { Synapse } from '@pyrx/synapse';
const synapse = new Synapse({ baseUrl: process.env.SYNAPSE_API_URL || "https://synapse-api.pyrx.tech", apiKey: process.env.SYNAPSE_API_KEY!, workspaceId: process.env.SYNAPSE_WORKSPACE_ID! });

const extId = `del_test_${Date.now()}`;
// Create contact first
await synapse.identify({ externalId: extId, email: `${extId}@test.com` });
// Then delete
await synapse.contacts.delete(extId);
console.log('Contact deleted');
