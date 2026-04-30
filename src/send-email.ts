import 'dotenv/config';
import { Synapse } from '@pyrx/synapse';

const synapse = new Synapse({
  apiKey: process.env.SYNAPSE_API_KEY!,
  workspaceId: process.env.SYNAPSE_WORKSPACE_ID!,
});

await synapse.send({
  templateSlug: 'welcome-email',
  to: { userId: 'user_123', email: 'jane@example.com', firstName: 'Jane' },
  attributes: { plan: 'starter', trialDays: 14 },
});

console.log('Email sent successfully');
