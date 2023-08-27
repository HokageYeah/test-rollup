declare module "rollup-plugin-serve" {
  interface ServeOptions {
    contentBase?: string | string[];
    port?: number;
    host?: string;
    headers?: { [key: string]: string };
    open?: Boolean;
    openPage: String
  }

  interface MiddlewareHandler {
    (req: any, res: any, next: () => void): void;
  }

  function serve(options?: ServeOptions): MiddlewareHandler;

  export = serve;
}
