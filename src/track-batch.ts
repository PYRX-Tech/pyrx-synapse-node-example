import 'dotenv/config';
import { Synapse } from '@pyrx/synapse';
const synapse = new Synapse({ apiKey: process.env.SYNAPSE_API_KEY!, workspaceId: process.env.SYNAPSE_WORKSPACE_ID! });

await synapse.trackBatch({
  events: [
    { externalId: 'user_1', eventName: 'page_viewed', attributes: { page: '/pricing' } },
    { externalId: 'user_2', eventName: 'feature_used', attributes: { feature: 'export' } },
    { externalId: 'user_3', eventName: 'user_signed_up', attributes: { plan: 'free' } },
  ],
});
console.log('Batch events tracked');
