# Synapse Node.js Example

All 16 SDK endpoints demonstrated with [@pyrx/synapse](https://www.npmjs.com/package/@pyrx/synapse).

## Setup

1. `npm install`
2. Copy `.env.example` to `.env`

## Examples

### Core
```bash
npm run track             # Track a single event
npm run track:batch       # Track multiple events
npm run identify          # Identify a contact
npm run identify:batch    # Identify multiple contacts
npm run send              # Send a transactional email
```

### Contacts
```bash
npm run contacts:list     # List contacts
npm run contacts:get      # Get a contact
npm run contacts:update   # Update a contact
npm run contacts:delete   # Delete a contact
```

### Templates
```bash
npm run templates:list    # List templates
npm run templates:get     # Get a template
npm run templates:create  # Create a template
npm run templates:update  # Update a template
npm run templates:delete  # Delete a template
npm run templates:preview # Preview with sample data
```

## Learn more

- [Synapse Documentation](https://synapse.pyrx.tech/developers)
- [Node.js SDK Reference](https://synapse.pyrx.tech/developers/sdks/node)
