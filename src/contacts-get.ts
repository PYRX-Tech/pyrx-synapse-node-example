import 'dotenv/config';
import { Synapse } from '@pyrx/synapse';
const synapse = new Synapse({ baseUrl: process.env.SYNAPSE_API_URL || "https://synapse-api.pyrx.tech", apiKey: process.env.SYNAPSE_API_KEY!, workspaceId: process.env.SYNAPSE_WORKSPACE_ID! });

// First list contacts to get a UUID
const list = await synapse.contacts.list({ page: 1, limit: 1 });
if (list.data && list.data.length > 0) {
  const contact = await synapse.contacts.get(list.data[0].id);
  console.log('Contact:', JSON.stringify(contact, null, 2));
} else {
  console.log('No contacts found. Create one first with: npm run identify');
}
