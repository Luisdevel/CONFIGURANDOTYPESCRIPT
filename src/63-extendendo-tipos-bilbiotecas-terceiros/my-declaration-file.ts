/* eslint-disable @typescript-eslint/no-namespace */
declare namespace _ {
  interface LoDashStatic {
    mul(array: number[]): number;
    div(array: number[]): number;
  }
}

declare namespace NodeJS {
  interface Global {
    MYGLOBAL: string;
  }
}
