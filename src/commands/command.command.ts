import { IBotContext } from '../context/contex.interface';
import { Telegraf } from 'telegraf';

export abstract class Command{
  constructor(public bot:Telegraf<IBotContext>){

  }
  abstract handle():void;
}