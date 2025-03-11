import { Hono } from "hono"

import { forwardError } from "~/lib/forward-error"
import {
  createEmbeddings,
  type EmbeddingRequest,
} from "~/services/copilot/create-embeddings"

export const embeddingRoutes = new Hono()

embeddingRoutes.post("/", async (c) => {
  try {
    const paylod = await c.req.json<EmbeddingRequest>()
    const response = await createEmbeddings(paylod)

    return c.json(response)
  } catch (error) {
    return forwardError(c, error)
  }
})
