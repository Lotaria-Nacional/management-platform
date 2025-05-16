import { lazy } from "react";
import type { ComponentType } from "react";

const pageModules = import.meta.glob('@/pages/**/*.tsx');

export function importPage(pagePath: string): ComponentType<any> {
  const fullPath = `@/pages/${pagePath}.tsx`;

  const importer = pageModules[fullPath];
  if (!importer) {
    throw new Error(`Página não encontrada em: ${fullPath}`);
  }

  return lazy(importer as () => Promise<{ default: ComponentType<any> }>);
}
