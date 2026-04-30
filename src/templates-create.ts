import 'dotenv/config';
import { Synapse } from '@pyrx/synapse';
const synapse = new Synapse({ baseUrl: process.env.SYNAPSE_API_URL || "https://synapse-api.pyrx.tech", apiKey: process.env.SYNAPSE_API_KEY!, workspaceId: process.env.SYNAPSE_WORKSPACE_ID! });

const template = await synapse.templates.create({
  slug: 'order-confirmation',
  name: 'Order Confirmation',
  subject: 'Your order {the order ID} is confirmed',
  body_html: '<h1>Hi {the user\'s First Name}</h1><p>Your order has been confirmed.</p>',
  sender_name: 'Synapse',
  from_email: 'noreply@example.com',
});
console.log('Created:', JSON.stringify(template, null, 2));
