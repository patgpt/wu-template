// typings.d.ts

// Typings for SCSS modules
declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
}
