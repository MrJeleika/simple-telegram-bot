import { Context } from 'telegraf'

export interface ISessionData {
  nauLike: boolean
  messageCount: number
}

export interface IBotContext extends Context {
  session: ISessionData
}
