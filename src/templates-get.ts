import 'dotenv/config';
import { Synapse } from '@pyrx/synapse';
const synapse = new Synapse({ apiKey: process.env.SYNAPSE_API_KEY!, workspaceId: process.env.SYNAPSE_WORKSPACE_ID! });

const template = await synapse.templates.get('welcome-email');
console.log('Template:', JSON.stringify(template, null, 2));
