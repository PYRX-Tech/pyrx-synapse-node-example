import 'dotenv/config';
import { Synapse } from '@pyrx/synapse';

const synapse = new Synapse({
  apiKey: process.env.SYNAPSE_API_KEY!,
  workspaceId: process.env.SYNAPSE_WORKSPACE_ID!,
});

await synapse.track({
  externalId: 'user_123',
  eventName: 'user_signed_up',
  attributes: { plan: 'starter', source: 'landing_page' },
});

console.log('Event tracked successfully');
