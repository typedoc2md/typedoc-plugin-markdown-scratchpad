import { z } from "zod";

export const infoSchema = z.object({
  /**
   * The name
   */
  name: z.string().optional(),
  /**
   * The description
   */
  description: z.string().optional(),
});

export const fooSchema = z.object({
  /**
   * A value
   */
  a: z.string().optional(),
  /**
   * B value
   */
  b: z.string().optional(),
  /**
   * C value
   */
  c: z.record(infoSchema).default({}),
  /**
   * D value
   */
  d: infoSchema,
});

export interface Info extends z.input<typeof infoSchema> {}
export interface Foo extends z.input<typeof fooSchema> {}
