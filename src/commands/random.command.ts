import { IBotContext } from './../context/contex.interface'
import { Telegraf } from 'telegraf'
import { Command } from './command.command'

export class RandomCommand extends Command {
  constructor(public bot: Telegraf<IBotContext>) {
    super(bot)
  }
  handle(): void {
    this.bot.on('message', async (ctx) => {
      if (!ctx.session.messageCount) {
        ctx.session.messageCount = 0
      }
      ctx.session.messageCount++
      await ctx.sendMessage(`Messages ${ctx.session.messageCount}`)
    })
  }
}
