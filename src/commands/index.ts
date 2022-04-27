import { Command } from '../interfaces/command';
import Mod from './mod';
import Ping from './ping';
import Repo from './repo';
import Docs from './docs';
import Guild from './framework';

export const CommandList: Command[] = [Ping, Repo, Mod, Docs, Guild];
