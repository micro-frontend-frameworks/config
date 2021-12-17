/**
 * Used by nextjs-build-time-integration POC
 */
export interface AppConfig {
  basePath: string;
  items: SidebarConfigTemplate[];
}

/**
 * Used by nextjs-build-time-integration POC
 */
export interface SidebarConfigTemplate {
  route: string;
  title: string;
  pageName: string;
}
