import 'dotenv/config';
import { Synapse } from '@pyrx/synapse';
const synapse = new Synapse({ apiKey: process.env.SYNAPSE_API_KEY!, workspaceId: process.env.SYNAPSE_WORKSPACE_ID! });

await synapse.templates.delete('order-confirmation');
console.log('Template deleted');
