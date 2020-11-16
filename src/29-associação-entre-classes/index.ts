export class Writer {
  private _tool: Tool | null = null;

  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }

  set tool(tool: Tool | null) {
    this._tool = tool;
  }

  get tool(): Tool | null {
    return this._tool;
  }

  writer(): void {
    if (this.tool === null) {
      console.log('Não posso escrever sem ferramenta.');
      return;
    }

    this.tool.writer();
  }
}

export abstract class Tool {
  constructor(private _name: string) {}
  abstract writer(): void;

  get name(): string {
    return this._name;
  }
}

export class Pen extends Tool {
  writer(): void {
    console.log(`${this.name} está escrevendo...`);
  }
}

export class Typewriter extends Tool {
  writer(): void {
    console.log(`${this.name} está digitando...`);
  }
}

const writer = new Writer('Luis');
const pen = new Pen('Bic');
const typewriter = new Typewriter('Maqina100Nome');

// console.log(writer.name);
// console.log(pen.name);
// console.log(typewriter.name);

writer.tool = pen;
writer.tool = typewriter;
writer.tool = null;
writer.writer();
