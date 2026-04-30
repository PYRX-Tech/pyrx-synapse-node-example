import 'dotenv/config';
import { Synapse } from '@pyrx/synapse';
const synapse = new Synapse({ apiKey: process.env.SYNAPSE_API_KEY!, workspaceId: process.env.SYNAPSE_WORKSPACE_ID! });

await synapse.identifyBatch({
  contacts: [
    { externalId: 'user_1', email: 'alice@example.com', properties: { plan: 'starter' } },
    { externalId: 'user_2', email: 'bob@example.com', properties: { plan: 'growth' } },
  ],
});
console.log('Batch contacts identified');
