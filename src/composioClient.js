// src/composioClient.ts
import { Composio } from 'composio-core';

const composio = new Composio({
  apiKey: import.meta.env.VITE_COMPOSIO_API_KEY,
});

export default composio;
