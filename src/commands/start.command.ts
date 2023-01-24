import { Telegraf, Markup, Context } from 'telegraf';
import { Command } from "./command.command";
import { IBotContext } from '../context/contex.interface';

export class StartCommand extends Command{

  constructor(public bot: Telegraf<IBotContext>){
    super(bot);
  }

  handle(): void {
    this.bot.start((ctx) => {
      ctx.reply('Do you like NAU?', Markup.inlineKeyboard([
        Markup.button.callback('YESS!!!!', 'nau_like'),
        Markup.button.callback('NONONONON!!!!', 'nau_dislike'),
      ]))
    })
  this.bot.action('nau_like', (ctx) =>{
    ctx.session.nauLike = true
    ctx.editMessageText('Yeahhhh')
  })
  this.bot.action('nau_dislike', (ctx) =>{
    ctx.session.nauLike = false
    ctx.editMessageText('Mehhhh')
  })
  }

}