import 'dotenv/config';
import { Synapse } from '@pyrx/synapse';

const synapse = new Synapse({
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
