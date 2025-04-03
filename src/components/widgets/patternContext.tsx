import { createContextId, type Signal } from "@builder.io/qwik";

export const PatternContext = createContextId<Signal<string>>('cogs');
