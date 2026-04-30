import 'dotenv/config';
import { Synapse } from '@pyrx/synapse';
const synapse = new Synapse({ apiKey: process.env.SYNAPSE_API_KEY!, workspaceId: process.env.SYNAPSE_WORKSPACE_ID! });

await synapse.contacts.delete('user_123');
console.log('Contact deleted');
