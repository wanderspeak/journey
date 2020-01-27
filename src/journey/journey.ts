import { IAdventureLog } from './adventurelog';
import { IHero } from './hero';
import { ISecrets } from './secrets';
import * as moment from 'moment';
import * as _ from 'lodash';
import { v4 } from 'uuid';

export interface IJourney {
  hero: IHero;
  log: IAdventureLog;
  set(values: Partial<IHero>): void;
  setSecrets(values: Partial<ISecrets>): void;
  getSecrets(): ISecrets;
  getSecret(fields: string | string[]): any;
  post(content: string): void;
}

export class Journey implements IJourney {
  public static begin() {
    const hero: IHero = {
      id: v4(),
      name: null,
      description: null,
      email: null,
      timestamp: moment().unix(),
      taverns: [],
    };
    const log: IAdventureLog = {
      stories: [],
    };
    const secrets: ISecrets = {
      keys: {},
    };
    return new Journey(hero, log, secrets);
  }
  public hero: IHero;
  public log: IAdventureLog;
  private secrets: ISecrets;

  public constructor(hero: IHero, log: IAdventureLog, secrets: ISecrets) {
    this.hero = hero;
    this.log = log;
    this.secrets = secrets;
  }

  public set(values: Partial<IHero>): void {
    this.hero = _.defaultsDeep(values, this.hero);
  }

  public setSecrets(values: Partial<ISecrets>): void {
    this.secrets = _.defaultsDeep(values, this.secrets);
  }

  public getSecrets(): ISecrets {
    return this.secrets;
  }

  public getSecret(fields: string | string[]): any {
    return _.get(this.secrets, _.isArray(fields) ? fields : [fields], null);
  }

  public post(content: string): void {
    this.log.stories.unshift({
      id: v4(),
      content,
      timestamp: moment().unix(),
    });
  }
}
