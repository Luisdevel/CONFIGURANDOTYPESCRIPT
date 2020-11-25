/* eslint-disable @typescript-eslint/no-namespace */
namespace MyNameSpace {
  export const nameMynameSpace = 'Luis';

  export class PersonMyNameSpace {
    constructor(public name: string) {}
  }

  const personMyNameSpace = new PersonMyNameSpace('Luis');

  export namespace OtherNameSpace {
    export const nameMynameSpace = 'Nome do outro namespace';
  }
}

const constNameSpace = 'Valor da const do namespace';
