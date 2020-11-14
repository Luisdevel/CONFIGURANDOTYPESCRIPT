export class Company {
  readonly name: string; // Não pode ser alterado
  private readonly collaborators: Collaborator[] = []; // Ao contrátio de name que inicia no constructor, nesse caso se inicia aqui.
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  addCollaborator(collaborator: Collaborator): void {
    this.collaborators.push(collaborator);
  }

  showCollaborators(): void {
    for (const collaborator of this.collaborators) {
      console.log(collaborator);
    }
  }
}

export class Collaborator {
  constructor(public readonly name: string, public readonly surname: string) {}
}

const company1 = new Company('Udemy', '11.111.111/0001-11');
const collaborator = new Collaborator('Luis', 'Henrique');
const collaborator2 = new Collaborator('Maria', 'Joaquina');
const collaborator3 = new Collaborator('Jessica', 'Loira');
company1.addCollaborator(collaborator);
company1.addCollaborator(collaborator2);
company1.addCollaborator(collaborator3);
