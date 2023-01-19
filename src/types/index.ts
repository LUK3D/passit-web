import { z } from "zod";

/**Defines de structure of menu Object */
export const Menu = z.object({
    name: z.string(),
    url: z.string().default('/').optional(),
    index: z.number().int(),
    active: z.boolean().optional()
});

export type Menu = z.infer<typeof Menu>;


export type Menus = {
    menus: Array<Menu>,
    activeMenu: (url?: string) => void
}
