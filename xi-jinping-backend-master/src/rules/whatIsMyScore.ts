import { RuleArgs } from 'src/interfaces/rule'
import { RuleReturn } from 'src/interfaces/ruleReturn'

export default async function exampleRule({
  citizen,
  message,
  mentionedCitizens,
}: RuleArgs): Promise<RuleReturn> {
  if (!message.toLowerCase().startsWith('what is my score?')) return
  const target =
    mentionedCitizens === undefined || !mentionedCitizens.length
      ? citizen
      : mentionedCitizens[0]
  return [target.socialCreditScore.toString(), 0]
}
