import 'dotenv/config';
import { Synapse } from '@pyrx/synapse';

const synapse = new Synapse({ baseUrl: process.env.SYNAPSE_API_URL || "https://synapse-api.pyrx.tech",
  apiKey: process.env.SYNAPSE_API_KEY!,
  workspaceId: process.env.SYNAPSE_WORKSPACE_ID!,
});

await synapse.track({
  externalId: 'user_123',
  eventName: 'user_signed_up',
  attributes: { plan: 'starter', source: 'landing_page' },
});

console.log('Event tracked successfully');
