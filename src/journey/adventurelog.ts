export interface IStory {
  id: string;
  content: string;
  timestamp: number;
}

export interface IAdventureLog {
  stories: IStory[];
}
