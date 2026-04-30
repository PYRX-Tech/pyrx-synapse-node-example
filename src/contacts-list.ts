import 'dotenv/config';
import { Synapse } from '@pyrx/synapse';
const synapse = new Synapse({ apiKey: process.env.SYNAPSE_API_KEY!, workspaceId: process.env.SYNAPSE_WORKSPACE_ID! });

const contacts = await synapse.contacts.list({ page: 1, limit: 10 });
console.log('Contacts:', JSON.stringify(contacts, null, 2));
