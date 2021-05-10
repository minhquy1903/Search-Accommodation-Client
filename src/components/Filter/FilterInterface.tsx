interface IOptionData {
  data: Array<IOption> | undefined;
}

interface IOption {
  id: number;
  value: string;
}

export type { IOptionData, IOption };
