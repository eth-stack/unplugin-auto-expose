import * as unplugin from 'unplugin';

interface PreloadOptions {
}
interface RendererOptions {
    preloadEntry: string;
}
interface ExportInfo {
    name: string;
    as: string;
    from: string;
}

declare const preload: unplugin.UnpluginInstance<PreloadOptions | undefined, boolean>;

declare const renderer: unplugin.UnpluginInstance<RendererOptions | undefined, boolean>;

export { ExportInfo, PreloadOptions, RendererOptions, preload, renderer };
