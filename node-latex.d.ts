/**
 * Exported definition for node-latex 
 * ! This should be expanded and src needs to have type ReadStream but that means we should convert index.js
 */
declare module "node-latex" {
    function latex(
        src: any,
        options?: any
    ): any;
    export = latex;
}