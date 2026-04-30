import 'dotenv/config';
import { Synapse } from '@pyrx/synapse';
const synapse = new Synapse({ baseUrl: process.env.SYNAPSE_API_URL || "https://synapse-api.pyrx.tech", apiKey: process.env.SYNAPSE_API_KEY!, workspaceId: process.env.SYNAPSE_WORKSPACE_ID! });

const updated = await synapse.templates.update('order-confirmation', { subject: 'Order {the order ID} confirmed!' });
console.log('Updated:', JSON.stringify(updated, null, 2));
