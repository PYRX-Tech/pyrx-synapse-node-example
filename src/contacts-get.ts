import 'dotenv/config';
import { Synapse } from '@pyrx/synapse';
const synapse = new Synapse({ apiKey: process.env.SYNAPSE_API_KEY!, workspaceId: process.env.SYNAPSE_WORKSPACE_ID! });

const contact = await synapse.contacts.get('user_123');
console.log('Contact:', JSON.stringify(contact, null, 2));
