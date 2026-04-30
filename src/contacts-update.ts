import 'dotenv/config';
import { Synapse } from '@pyrx/synapse';
const synapse = new Synapse({ apiKey: process.env.SYNAPSE_API_KEY!, workspaceId: process.env.SYNAPSE_WORKSPACE_ID! });

const updated = await synapse.contacts.update('user_123', { email: 'newemail@example.com', properties: { plan: 'growth' }, tags: ['upgraded'] });
console.log('Updated:', JSON.stringify(updated, null, 2));
