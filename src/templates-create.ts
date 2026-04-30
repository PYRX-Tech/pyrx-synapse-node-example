import 'dotenv/config';
import { Synapse } from '@pyrx/synapse';
const synapse = new Synapse({ apiKey: process.env.SYNAPSE_API_KEY!, workspaceId: process.env.SYNAPSE_WORKSPACE_ID! });

const template = await synapse.templates.create({
  slug: 'order-confirmation',
  name: 'Order Confirmation',
  subject: 'Your order {the order ID} is confirmed',
  body: 'Hi {the user\'s First Name}, your order has been confirmed.',
});
console.log('Created:', JSON.stringify(template, null, 2));
