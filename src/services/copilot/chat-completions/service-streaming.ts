import { stream } from "fetch-event-stream"

import type { ChatCompletionsPayload } from "./types"

import { COPILOT_CONFIG } from "../../../config/api"
import { TOKENS } from "../../../config/tokens"

export const chatCompletionsStream = async (payload: ChatCompletionsPayload) =>
  stream(`${COPILOT_CONFIG.baseURL}/chat/completions`, {
    method: "POST",
    headers: {
      ...COPILOT_CONFIG.headers,
      authorization: `Bearer ${TOKENS.COPILOT_TOKEN}`,
    },
    body: JSON.stringify(payload),
  })
