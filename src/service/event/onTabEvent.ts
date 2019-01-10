const random = () => String(Math.floor(Math.random() * 9999));

const makeUuid = (): string => `${random()}-${random()}-${random()}-${random()}`;

interface ICallbackParams {
  currentTab: number;
  clickedTab: number;
}

interface IListener {
  id: string;
  callback: (params: ICallbackParams) => void;
}

export class OnTabEvent {
  private static listeners: IListener[] = [];

  public static addEventListener(callback: (params: ICallbackParams) => void) {
    const id = makeUuid();
    this.listeners.push({id, callback});

    return id;
  }

  public static removeEventListener(targetId: string) {
    this.listeners = this.listeners.filter(listener => targetId !== listener.id);
  }

  public static emit({currentTab, clickedTab}: ICallbackParams) {
    this.listeners.forEach(listener => listener.callback({currentTab, clickedTab}));
  }
}
