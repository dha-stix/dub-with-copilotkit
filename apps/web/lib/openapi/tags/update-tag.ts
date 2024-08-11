import { openApiErrorResponses } from "@/lib/openapi/responses";
import z from "@/lib/zod";
import { TagSchema, updateTagBodySchema } from "@/lib/zod/schemas/tags";
import { ZodOpenApiOperationObject } from "zod-openapi";

export const updateTag: ZodOpenApiOperationObject = {
  operationId: "updateTag",
  "x-speakeasy-name-override": "update",
  "x-speakeasy-max-method-params": 2,
  summary: "Update a tag",
  description: "Update a tag in the workspace.",
  requestParams: {
    path: z.object({
      id: z.string().describe("The ID of the tag to update."),
    }),
  },
  requestBody: {
    content: {
      "application/json": {
        schema: updateTagBodySchema,
      },
    },
  },
  responses: {
    "200": {
      description: "The updated tag.",
      content: {
        "application/json": {
          schema: TagSchema,
        },
      },
    },
    ...openApiErrorResponses,
  },
  tags: ["Tags"],
  security: [{ token: [] }],
};
