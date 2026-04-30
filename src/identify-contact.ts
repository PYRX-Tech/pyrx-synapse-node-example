import 'dotenv/config';
import { Synapse } from '@pyrx/synapse';

const synapse = new Synapse({ baseUrl: process.env.SYNAPSE_API_URL || "https://synapse-api.pyrx.tech",
  apiKey: process.env.SYNAPSE_API_KEY!,
  workspaceId: process.env.SYNAPSE_WORKSPACE_ID!,
});

await synapse.identify({
  externalId: 'user_123',
  email: 'jane@example.com',
  firstName: 'Jane',
  lastName: 'Doe',
  properties: { plan: 'pro', signupSource: 'website' },
  tags: ['paying', 'beta-tester'],
});

console.log('Contact identified successfully');
